package main

import "fmt"

type Client struct {
	User User `json:"client"`
}

func getClientsFromDb() []Client {
	db := getDb()

	var clients []Client

	rows, err := db.Query("select * from vartotojas, klientas where vartotojas.id=klientas.fk_vartotojo_id")
	if err != nil {
		panic(err)
	}

	for rows.Next() {
		var user User
		err = rows.Scan(&user.Id, &user.Vardas, &user.Pavarde, &user.Email,
			&user.Slaptazodis, &user.ProfilioFoto, &user.RegData, &user.ModData, &user.Id)
		if err != nil {
			fmt.Println("cia error")
			panic(err)
		}

		var client Client
		client.User = user
		clients = append(clients, client)
	}

	return clients
}
