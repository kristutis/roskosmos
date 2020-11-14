package main

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

func getClientsFromDb() []Client {
	db := getDb()

	var clients []Client

	rows, err := db.Query("select * from vartotojas, klientas where vartotojas.id=klientas.fk_vartotojo_id")
	if err != nil {
		panic(err)
	}

	for rows.Next() {
		var client Client
		var user User
		err = rows.Scan(&user.Id, &user.Vardas, &user.Pavarde, &user.Email,
			&user.Slaptazodis, &user.ProfilioFoto, &user.RegData, &user.ModData, &client.UserId)
		if err != nil {
			panic(err)
		}
		client.User = user
		clients = append(clients, client)
	}

	return clients
}

func getUsersFromDb() []User {
	db := getDb()

	var users []User

	rows, err := db.Query("select * from vartotojas")
	if err != nil {
		panic(err)
	}

	for rows.Next() {
		var user User
		err = rows.Scan(&user.Id, &user.Vardas, &user.Pavarde, &user.Email,
			&user.Slaptazodis, &user.ProfilioFoto, &user.RegData, &user.ModData)
		if err != nil {
			panic(err)
		}
		users = append(users, user)
	}

	return users
}

func getDb() *sql.DB {
	db, err := sql.Open("mysql", "root:@tcp(localhost)/roskosmos?parseTime=true")
	if err != nil {
		panic(err)
	}
	// fmt.Println("connected to db")
	// defer db.Close()
	return db
}
