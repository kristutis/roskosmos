//xampp, go
//go run .\database.go .\main.go .\user.go .\client.go
package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()

	//users
	r.HandleFunc("/api/users", getUsers).Methods("GET")
	r.HandleFunc("/api/users/{id}", getUserById).Methods("GET")
	r.HandleFunc("/api/users", postUser).Methods("POST")
	r.HandleFunc("/api/users/{id}", updateUserById).Methods("PUT")
	// r.HandleFunc("/api/users/{id}", deleteUserById).Methods("GET")

	//clients
	r.HandleFunc("/api/clients", getClients).Methods("GET")
	r.HandleFunc("/api/clients/{id}", getClientById).Methods("GET")

	log.Fatal(http.ListenAndServe(":8000", r))
}

//GET http://localhost:8000/api/clients/
func getClients(w http.ResponseWriter, r *http.Request) {
	clients := getClientsFromDb()
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(clients)
}

//GET http://localhost:8000/api/clients/1
func getClientById(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	param := mux.Vars(r)
	clients := getClientsFromDb()
	for _, client := range clients {
		if strconv.Itoa(client.User.Id) == param["id"] {
			json.NewEncoder(w).Encode(client)
			return
		}
	}
	json.NewEncoder(w).Encode(&Client{})
}

//GET http://localhost:8000/api/users
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

//GET http://localhost:8000/api/users/1
func getUsers(w http.ResponseWriter, r *http.Request) {
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
	if strconv.Itoa(user.Id) != param["id"] {
		json.NewEncoder(w).Encode(false)
		fmt.Println("ids do not match")
		return
	}

	success := updateUserToDb(user)
	json.NewEncoder(w).Encode(success)
}
