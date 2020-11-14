package main

import "time"

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

type Client struct {
	UserId int  `json:"id"`
	User   User `json:"User"`
}
