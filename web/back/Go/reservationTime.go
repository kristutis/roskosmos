package main

import (
	"fmt"
)

type ReservationTime struct {
	Id        string `json:"id"`
	LaikasNuo string `json:"laikas_nuo"`
	LaikasIki string `json:"laikas_iki"`
	KuriDiena string `json:"kuri_diena"`
	ZmoniuSk  int    `json:"zmoniu_skaicius"`
}

func getReservationTimesFromDb() []ReservationTime {
	db := getDb()
	defer db.Close()

	var reservations []ReservationTime

	rows, err := db.Query("select * from rezervaciju_laikai")
	defer rows.Close()
	if err != nil {
		fmt.Println(err)
	}

	for rows.Next() {
		var reservation ReservationTime
		err = rows.Scan(&reservation.Id, &reservation.LaikasNuo, &reservation.LaikasIki, &reservation.KuriDiena, &reservation.ZmoniuSk)
		if err != nil {
			fmt.Println(err)
		}
		reservations = append(reservations, reservation)
	}

	return reservations
}
