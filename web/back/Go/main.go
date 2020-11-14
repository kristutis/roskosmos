//xampp, go
//go run .\database.go .\main.go
package main

import (
	"encoding/json"
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

	//clients
	r.HandleFunc("/api/clients", getClients).Methods("GET")
	r.HandleFunc("/api/clients/{id}", getClientById).Methods("GET")

	log.Fatal(http.ListenAndServe(":8000", r))
}

//http://localhost:8000/api/clients/1
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

//http://localhost:8000/api/clients/
func getClients(w http.ResponseWriter, r *http.Request) {
	clients := getClientsFromDb()
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(clients)
}

//http://localhost:8000/api/users
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

//http://localhost:8000/api/users/1
func getUsers(w http.ResponseWriter, r *http.Request) {
	users := getUsersFromDb()
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(users)
}
