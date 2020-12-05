package main

import (
	"fmt"
	"strconv"
)

type ReservationTime struct {
	Id                int    `json:"id"`
	LaikasNuo         string `json:"laikas_nuo"`
	LaikasIki         string `json:"laikas_iki"`
	KuriDiena         string `json:"kuri_diena"`
	ZmoniuSk          int    `json:"zmoniu_skaicius"`
	RezervuotaKliento bool   `json:"rezervuota_kliento"`
}

func putReservationToDb(resId int, uId string) error {
	db = getDb()
	q := "INSERT INTO kliento_rezervacijos (fk_rezervacijos_id, fk_vartotojo_id) VALUES ('" + strconv.Itoa(resId) + "','" + uId + "')"
	_, err := db.Query(q)
	if err != nil {
		fmt.Println(err)
		return err
	}
	db.Close()

	resTimes := getReservationTimesFromDb()
	var reservation ReservationTime
	for i, resTime := range resTimes {
		if resId == resTime.Id {
			resTimes[i].ZmoniuSk = resTimes[i].ZmoniuSk - 1
			reservation = resTimes[i]
			break
		}
	}

	db = getDb()
	q = "UPDATE rezervaciju_laikai SET zmoniu_skaicius='" + strconv.Itoa(reservation.ZmoniuSk) + "' where id='" + strconv.Itoa(reservation.Id) + "'"
	_, err = db.Query(q)
	if err != nil {
		fmt.Println(err)
		return err
	}
	db.Close()

	return nil
}

func getReservationsByIdFromDb(userId string) ([]ReservationTime, error) {
	db := getDb()

	q := "select * from kliento_rezervacijos where fk_vartotojo_id='" + userId + "'"
	rows, err := db.Query(q)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	type Ids struct {
		clientId      string
		reservationId int
	}
	var ids []Ids
	for rows.Next() {
		var id Ids
		err = rows.Scan(&id.reservationId, &id.clientId)
		if err != nil {
			fmt.Println(err)
			return nil, err
		}
		ids = append(ids, id)
	}
	rows.Close()

	db.Close()
	db = getDb()
	defer db.Close()

	rows, err = db.Query("select * from rezervaciju_laikai")
	defer rows.Close()
	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	var reservations []ReservationTime
	for rows.Next() {
		var reservation ReservationTime
		err = rows.Scan(&reservation.Id, &reservation.LaikasNuo, &reservation.LaikasIki, &reservation.KuriDiena, &reservation.ZmoniuSk)
		if err != nil {
			fmt.Println(err)
			return nil, err
		}
		reservations = append(reservations, reservation)
	}

	for i, res := range reservations {
		for _, id := range ids {
			if id.reservationId == res.Id {
				reservations[i].RezervuotaKliento = true
			}
		}
	}

	return reservations, nil
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
