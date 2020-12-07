package main

import (
	"fmt"
)

type Client struct {
	Id         int    `json:"id"`
	Trainer    string `json:"trainer_id"`
	Client     string `json:"vartotojas_id"`
	ClientName string `json:"vartotojas_name"`
	ClientSur  string `json:"vartotojas_sur"`
	ClientMail string `json:"vartotojas_mail"`
}

func getClientsByIdFromDb(userId string) ([]Client, error) {
	db = getDb()
	defer db.Close()

	var rows, err = db.Query("SELECT klientai_id, treneris_id, vartotojas_id, vardas, pavarde, email FROM klientai, vartotojas WHERE vartotojas_id=vartotojas.id AND treneris_id='" + userId + "'")
	defer rows.Close()
	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	var c []Client
	for rows.Next() {
		var cl Client
		err = rows.Scan(&cl.Id, &cl.Trainer, &cl.Client, &cl.ClientName, &cl.ClientSur, &cl.ClientMail)
		if err != nil {
			fmt.Println(err)
			return nil, err
		}
		c = append(c, cl)
	}

	return c, nil
}
