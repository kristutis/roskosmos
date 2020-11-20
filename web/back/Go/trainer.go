package main

import (
	"errors"
	"fmt"
)

type Trainer struct {
	User        User    `json:"user"`
	TrainerId   string  `json:"fk_trenerio_id "`
	Price       float64 `json:"kaina"`
	Discription string  `json:"aprasymas"`
	Moto        string  `json:"moto"`
	Rate        float64 `json:"vertinimas"`
}

func getTrainersFromDb() ([]Trainer, error) {
	db := getDb()
	defer db.Close()

	var trainers []Trainer

	q := "select * from treneris"
	fmt.Println(q)
	rows, err := db.Query(q)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	for rows.Next() {
		var trainer Trainer
		err = rows.Scan(&trainer.TrainerId, &trainer.Price, &trainer.Discription, &trainer.Moto, &trainer.Rate)
		if err != nil {
			fmt.Println(err)
			return nil, err
		}
		trainer.User = getTrainerUser(trainer.TrainerId)
		var empyUser User
		if trainer.User == empyUser {
			fmt.Println("trainer user not found")
			return nil, errors.New("trainer user not found")
		}
		trainers = append(trainers, trainer)
	}
	rows.Close()

	// fmt.Println(trainers)
	return trainers, nil
}

func getTrainerUser(id string) User {
	users := getUsersFromDb()
	for _, user := range users {
		if user.Id == id {
			return user
		}
	}
	var u User
	return u
}
