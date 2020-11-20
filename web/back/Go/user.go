package main

import (
	"crypto/sha1"
	"encoding/hex"
	"fmt"
	"time"
)

type User struct {
	Id           string    `json:"id"`
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
	defer db.Close()

	var users []User

	rows, err := db.Query("select * from vartotojas")
	defer rows.Close()
	if err != nil {
		fmt.Println(err)
	}

	for rows.Next() {
		var user User
		err = rows.Scan(&user.Id, &user.Vardas, &user.Pavarde, &user.Email,
			&user.Slaptazodis, &user.ProfilioFoto, &user.RegData, &user.ModData, &user.Role)
		if err != nil {
			fmt.Println(err)
		}
		users = append(users, user)
	}

	return users
}

func insertUserToDb(user User) bool {
	if user.Vardas == "" || user.Pavarde == "" || user.Email == "" || user.Slaptazodis == "" {
		return false
	}
	hasher := sha1.New()
	hasher.Write([]byte(user.Email + user.Slaptazodis))
	id := hex.EncodeToString(hasher.Sum(nil))

	db := getDb()
	defer db.Close()
	q, err := db.Prepare("INSERT INTO vartotojas (id, vardas, pavarde, email, slaptazodis) VALUES (?,?,?,?,?)")
	if err != nil {
		fmt.Println(err)
		return false
	} else {
		q.Exec(id, user.Vardas, user.Pavarde, user.Email, user.Slaptazodis)
	}
	return true
}

func updateUserToDb(user User) bool {
	fmt.Println(user)
	if user.Vardas == "" || user.Pavarde == "" || user.Email == "" || user.Slaptazodis == "" || user.ProfilioFoto == "" || user.Role == "" {
		return false
	}

	db := getDb()
	defer db.Close()
	q, err := db.Prepare("UPDATE vartotojas SET vardas=?, pavarde=?, email=?, slaptazodis=?, profilio_foto=?, role=? where id=?")
	if err != nil {
		fmt.Println(err)
		return false
	} else {
		q.Exec(user.Vardas, user.Pavarde, user.Email, user.Slaptazodis, user.ProfilioFoto, user.Role, user.Id)
	}
	return true
}
