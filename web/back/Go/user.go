package main

import (
	"fmt"
	"time"
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
	Role         string    `json:"role"`
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
			&user.Slaptazodis, &user.ProfilioFoto, &user.RegData, &user.ModData, &user.Role)
		if err != nil {
			panic(err)
		}
		users = append(users, user)
	}

	return users
}

func insertUserToDb(user User) bool {
	// fmt.Println(user)
	if user.Vardas == "" || user.Pavarde == "" || user.Email == "" || user.Slaptazodis == "" {
		return false
	}

	db := getDb()
	q, err := db.Prepare("INSERT INTO vartotojas (vardas, pavarde, email, slaptazodis) VALUES (?,?,?,?)")
	if err != nil {
		fmt.Println(err)
		return false
	} else {
		q.Exec(user.Vardas, user.Pavarde, user.Email, user.Slaptazodis)
	}
	return true
}

func updateUserToDb(user User) bool {
	fmt.Println(user)
	if user.Vardas == "" || user.Pavarde == "" || user.Email == "" || user.Slaptazodis == "" || user.ProfilioFoto == "" || user.Role == "" {
		return false
	}

	db := getDb()
	q, err := db.Prepare("UPDATE vartotojas SET vardas=?, pavarde=?, email=?, slaptazodis=?, profilio_foto=?, role=? where id=?")
	if err != nil {
		fmt.Println(err)
		return false
	} else {
		q.Exec(user.Vardas, user.Pavarde, user.Email, user.Slaptazodis, user.ProfilioFoto, user.Role, user.Id)
	}
	return true
}
