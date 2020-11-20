//open ports, fetch linkai 78:8080
//xampp, go
//go run .\database.go .\main.go .\user.go
package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

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

	log.Fatal(http.ListenAndServe(":8000", handlers.CORS(headers, methods, origins)(r)))
}

//GET http://localhost:8000/api/users/1
func getUserById(w http.ResponseWriter, r *http.Request) {
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
	w.Header().Set("Access-Control-Allow-Origin", "*")
	users := getUsersFromDb()
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(users)
}

//POST http://localhost:8000/api/users
func postUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var user User
	_ = json.NewDecoder(r.Body).Decode(&user)
	success := insertUserToDb(user)
	json.NewEncoder(w).Encode(success)
}

//PUT http://localhost:8000/api/users/1
func updateUserById(w http.ResponseWriter, r *http.Request) {
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
