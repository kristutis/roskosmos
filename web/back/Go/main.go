//open 2 ports, fetch linkai
//xampp, go
//go run .\database.go .\main.go .\user.go
package main

import (
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net/http"
	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

var db *sql.DB

func main() {
	r := mux.NewRouter()
	headers := handlers.AllowedHeaders([]string{"Content-Type"})
	methods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE"})
	origins := handlers.AllowedOrigins([]string{"*"})

	//users
	r.HandleFunc("/api/users", getUsers).Methods("GET", "OPTIONS")
	r.HandleFunc("/api/users/{id}", getUserById).Methods("GET")
	r.HandleFunc("/api/users", postUser).Methods("POST")
	r.HandleFunc("/api/users/{id}", updateUserById).Methods("PUT")
	// r.HandleFunc("/api/users/{id}", deleteUserById).Methods("GET")

	//trainers
	r.HandleFunc("/api/trainers", getTrainers).Methods("GET")
	r.HandleFunc("/api/trainers/{id}", getTrainersById).Methods("GET")   ///////////////
	r.HandleFunc("/api/trainers/{id}", updateTrainerById).Methods("PUT") //////////

	//trenerio vertinimai
	r.HandleFunc("/api/ratings/{id}", getTrainerRatingsById).Methods("GET")
	r.HandleFunc("/api/ratings", putRating).Methods("PUT")

	//trenerio komentarai
	r.HandleFunc("/api/comments/{id}", getTrainerCommentsById).Methods("GET")
	r.HandleFunc("/api/comments", putTrainerComment).Methods("PUT")

	//rezervaciju laikai
	r.HandleFunc("/api/reservations", getReservations).Methods("GET")
	r.HandleFunc("/api/reservations/{id}", getReservationsByUserId).Methods("GET")
	r.HandleFunc("/api/reservations", postReservation).Methods("POST")

	//prekes
	r.HandleFunc("/api/goods", getGoods).Methods("GET")
	r.HandleFunc("/api/goods/{id}", getGoodsById).Methods("GET")

	//uzsakymai
	r.HandleFunc("/api/order", addOrder).Methods("PUT")

	//Saskaitos 
	r.HandleFunc("/api/receipts/{id}", getReceiptsByUserId).Methods("GET")

	//treniruociu programos
	r.HandleFunc("/api/programs/{id}", getProgramsByUserId).Methods("GET")
	r.HandleFunc("/api/programs/{id}", addProgramByUserId).Methods("POST") ////////////

	//klientu sarasas
	r.HandleFunc("/api/clients/{id}", getClientsByUserId).Methods("GET")

	log.Fatal(http.ListenAndServe(":8000", handlers.CORS(headers, methods, origins)(r)))
}

func getReceiptsByUserId(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	param := mux.Vars(r)
	fmt.Println("returning reservations of id: " + param["id"])

	receipts, err := getReceiptsByIdFromDb(param["id"])
	if err != nil {
		json.NewEncoder(w).Encode(err)
		return
	}
	json.NewEncoder(w).Encode(receipts)
}

func addOrder(w http.ResponseWriter, r *http.Request) {
	fmt.Println("adding an order")
	w.Header().Set("Content-Type", "application/json")
	var order Order
	_ = json.NewDecoder(r.Body).Decode(&order)
	err := addOrderToDb(order)
	if err != nil {
		json.NewEncoder(w).Encode(err)
		return
	}
	json.NewEncoder(w).Encode(nil)
}

func getGoodsById(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	param := mux.Vars(r)
	fmt.Println("returning goods of id: " + param["id"])
	goods, err := getGoodsByIdFromDb(param["id"])
	if err != nil {
		json.NewEncoder(w).Encode(err)
		return
	}
	json.NewEncoder(w).Encode(goods)
}

func getGoods(w http.ResponseWriter, r *http.Request) {
	fmt.Println("returning goods")
	w.Header().Set("Content-Type", "application/json")
	goods:= getGoodsByFromDb()
	json.NewEncoder(w).Encode(goods)
}

func postReservation(w http.ResponseWriter, r *http.Request) {
	fmt.Println("posting reservation")
	w.Header().Set("Content-Type", "application/json")

	type Req struct {
		ResId int    `json:"fk_rezervacijos_id"`
		Uid   string `json:"fk_vartotojo_id"`
	}
	var req Req

	_ = json.NewDecoder(r.Body).Decode(&req)

	err := putReservationToDb(req.ResId, req.Uid)
	if err != nil {
		json.NewEncoder(w).Encode(err)
		return
	}
	json.NewEncoder(w).Encode(nil)
}

func getReservationsByUserId(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	param := mux.Vars(r)
	fmt.Println("returning reservations of id: " + param["id"])

	reservations, err := getReservationsByIdFromDb(param["id"])
	if err != nil {
		json.NewEncoder(w).Encode(err)
		return
	}
	json.NewEncoder(w).Encode(reservations)
}

func getReservations(w http.ResponseWriter, r *http.Request) {
	fmt.Println("returning reservations")
	w.Header().Set("Content-Type", "application/json")
	reservations := getReservationTimesFromDb()
	json.NewEncoder(w).Encode(reservations)
}

func getTrainerCommentsById(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	param := mux.Vars(r)
	fmt.Println("returning comments of id: " + param["id"])

	comments, err := getCommentsFromDbByTrainerId(param["id"])
	if err != nil {
		json.NewEncoder(w).Encode(err)
		return
	}
	json.NewEncoder(w).Encode(comments)
}

func getTrainerRatingsById(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	param := mux.Vars(r)
	fmt.Println("returning raitings of id: " + param["id"])

	ratings, err := getRatingsFromDbByTrainerId(param["id"])
	if err != nil {
		json.NewEncoder(w).Encode(err)
		return
	}
	json.NewEncoder(w).Encode(ratings)
}

func putTrainerComment(w http.ResponseWriter, r *http.Request) {
	fmt.Println("putting comment")
	w.Header().Set("Content-Type", "application/json")

	var comment Comment
	_ = json.NewDecoder(r.Body).Decode(&comment)
	if comment.CommenterId == comment.TrainerId {
		err := errors.New("sau komentuoti negalima")
		fmt.Println(err)
		json.NewEncoder(w).Encode(err)
		return
	}

	err := putCommentToDb(comment)
	json.NewEncoder(w).Encode(err)
}

func putRating(w http.ResponseWriter, r *http.Request) {
	fmt.Println("putting rating")
	w.Header().Set("Content-Type", "application/json")

	var rating Rating
	_ = json.NewDecoder(r.Body).Decode(&rating)
	if rating.RaterId == rating.TrainerId {
		err := errors.New("savęs vertinti negalima")
		json.NewEncoder(w).Encode(err)
		return
	}

	err := setRatingToDb(rating)
	json.NewEncoder(w).Encode(err)
}

//GET http://localhost:8000/api/trainers/{id}
func getTrainersById(w http.ResponseWriter, r *http.Request) {
	fmt.Println("returning trainer")
	w.Header().Set("Content-Type", "application/json")
	param := mux.Vars(r)

	trainers, err := getTrainersFromDb()
	if err != nil {
		json.NewEncoder(w).Encode(err)
		return
	}

	for _, trainer := range trainers {
		if trainer.TrainerId == param["id"] {
			json.NewEncoder(w).Encode(trainer)
			return
		}
	}
	json.NewEncoder(w).Encode(errors.New("cannot find trainer"))
}

//GET http://localhost:8000/api/trainers
func getTrainers(w http.ResponseWriter, r *http.Request) {
	fmt.Println("returning trainers")
	w.Header().Set("Content-Type", "application/json")
	trainers, err := getTrainersFromDb()
	if err != nil {
		json.NewEncoder(w).Encode(err)
		return
	}
	json.NewEncoder(w).Encode(trainers)
}

//GET http://localhost:8000/api/users/1
func getUserById(w http.ResponseWriter, r *http.Request) {
	fmt.Println("returning user")
	w.Header().Set("Content-Type", "application/json")
	param := mux.Vars(r)
	users := getUsersFromDb()
	for _, user := range users {
		if user.Id == param["id"] {
			json.NewEncoder(w).Encode(user)
			return
		}
	}
	json.NewEncoder(w).Encode(&User{})
}

//GET http://localhost:8000/api/users
func getUsers(w http.ResponseWriter, r *http.Request) {
	fmt.Println("returning users")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	users := getUsersFromDb()
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(users)
}

//POST http://localhost:8000/api/users
func postUser(w http.ResponseWriter, r *http.Request) {
	fmt.Println("posting user")
	w.Header().Set("Content-Type", "application/json")
	var user User
	_ = json.NewDecoder(r.Body).Decode(&user)
	success := insertUserToDb(user)
	json.NewEncoder(w).Encode(success)
}

//PUT http://localhost:8000/api/users/1
func updateUserById(w http.ResponseWriter, r *http.Request) {
	fmt.Println("updating user")
	w.Header().Set("Content-Type", "application/json")
	param := mux.Vars(r)
	var user User
	_ = json.NewDecoder(r.Body).Decode(&user)
	if user.Id != param["id"] {
		json.NewEncoder(w).Encode(false)
		fmt.Println("ids do not match")
		return
	}

	success := updateUserToDb(user)
	json.NewEncoder(w).Encode(success)
}

//PUT		http://localhost:8000/api/trainers/{id}
func updateTrainerById(w http.ResponseWriter, r *http.Request) {
	fmt.Println("updating trainer")
	w.Header().Set("Content-Type", "application/json")
	param := mux.Vars(r)
	var trainer Trainer
	_ = json.NewDecoder(r.Body).Decode(&trainer)
	if trainer.TrainerId != param["id"] {
		json.NewEncoder(w).Encode(false)
		fmt.Println("updating trainer ids do not match")
		return
	}

	success := updateTrainer(trainer)
	json.NewEncoder(w).Encode(success)
}

func getProgramsByUserId(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	param := mux.Vars(r)
	fmt.Println("returning programss of id: " + param["id"])

	prog, err := getProgramsByIdFromDb(param["id"])
	if err != nil {
		json.NewEncoder(w).Encode(err)
		return
	}
	json.NewEncoder(w).Encode(prog)
}

func addProgramByUserId(w http.ResponseWriter, r *http.Request) {
	fmt.Println("adding program")
	w.Header().Set("Content-Type", "application/json")
	param := mux.Vars(r)
	var pro Program
	_ = json.NewDecoder(r.Body).Decode(&pro)
	success := putProgramToDb(pro, param["id"])
	json.NewEncoder(w).Encode(success)
}

func getClientsByUserId(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	param := mux.Vars(r)
	fmt.Println("returning clients of id: " + param["id"])

	cl, err := getClientsByIdFromDb(param["id"])
	if err != nil {
		json.NewEncoder(w).Encode(err)
		return
	}
	json.NewEncoder(w).Encode(cl)
}
