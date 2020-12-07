package main

import (
	"errors"
	"fmt"
)

//Trainer
type Trainer struct {
	User        User    `json:"user"`
	TrainerId   string  `json:"fk_trenerio_id"`
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

func updateTrainer(trainer Trainer) bool {
	fmt.Println(trainer)
	if trainer.Discription == "" || trainer.Moto == "" || trainer.Price == 0 {
		fmt.Println("empty trainer modify fields or price not read")
		return false
	}

	db := getDb()
	defer db.Close()
	q, err := db.Prepare("UPDATE treneris SET kaina=?, aprasymas=?, moto=? where fk_trenerio_id=?")
	if err != nil {
		fmt.Println("updating trainer err")
		fmt.Println(err)
		return false
	} else {
		q.Exec(trainer.Price, trainer.Discription, trainer.Moto, trainer.TrainerId)
	}
	return true
}
