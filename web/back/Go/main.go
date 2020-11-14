//xampp, go
//http://localhost:8000/api/users
package main

import (
	"database/sql"
	"encoding/json"
	"log"
	"net/http"
	"strconv"
	"time"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
)

type User struct {
	Id           int       `json:"id"`
	Vardas       string    `json:"vardas"`
	Pavarde      string    `json:"pavarde"`
	Email        string    `json:"email"`
	Slaptazodis  string    `json:"slaptazodis"`
	ProfilioFoto string    `json:"profilio_foto"`
	RegData      time.Time `json:"reg_date"`
	ModData      time.Time `json:"modify_date"`
}

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/api/users", getUsers).Methods("GET")
	r.HandleFunc("/api/user/{id}", getUserById).Methods("GET")

	log.Fatal(http.ListenAndServe(":8000", r))
}

func getUserById(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	param := mux.Vars(r)
	users := getUsersFromDb()
	for _, user := range users {
		if strconv.Itoa(user.Id) == param["id"] {
			json.NewEncoder(w).Encode(user)
			return
		}
	}
	json.NewEncoder(w).Encode(&User{})
}

func getUsers(w http.ResponseWriter, r *http.Request) {
	users := getUsersFromDb()
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(users)
}

func getUsersFromDb() []User {
	db, err := sql.Open("mysql", "root:@tcp(localhost)/roskosmos?parseTime=true")
	if err != nil {
		panic(err)
	}
	// fmt.Println("connected to db")
	defer db.Close()

	var users []User

	rows, err := db.Query("select * from vartotojas")
	if err != nil {
		panic(err)
	}

	for rows.Next() {
		var user User
		err = rows.Scan(&user.Id, &user.Vardas, &user.Pavarde, &user.Email,
			&user.Slaptazodis, &user.ProfilioFoto, &user.RegData, &user.ModData)
		// fmt.Println(user)
		if err != nil {
			panic(err)
		}
		users = append(users, user)
	}

	return users
}
