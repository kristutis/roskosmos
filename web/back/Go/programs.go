package main

import (
	"fmt"
)

type Program struct {
	Id          int     `json:"id"`
	Pavadinimas string  `json:"pavadinimas"`
	Trukme      string  `json:"trukme"`
	Aprasymas   string  `json:"aprasymas"`
	Kaina       float64 `json:"kaina"`
	Treneris    string  `json:"fk_trenerio_id"`
}

func putProgramToDb(p Program, tid string) error {
	db = getDb()
	q := "INSERT INTO treniruociu_programa (pavadinimas, trukme, aprasymas, kaina, fk_trenerio_id) VALUES ('" + p.Pavadinimas + "','" + p.Trukme + "','" + p.Aprasymas + "','" + fmt.Sprintf("%.2f", p.Kaina) + "','" + tid + "')"
	_, err := db.Query(q)
	if err != nil {
		fmt.Println(err)
		return err
	}
	db.Close()

	return nil
}

func getProgramsByIdFromDb(userId string) ([]Program, error) {
	db = getDb()
	defer db.Close()

	var rows, err = db.Query("select * from treniruociu_programa where fk_trenerio_id='" + userId + "'")
	defer rows.Close()
	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	var pr []Program
	for rows.Next() {
		var pro Program
		err = rows.Scan(&pro.Id, &pro.Pavadinimas, &pro.Trukme, &pro.Aprasymas, &pro.Kaina, &pro.Treneris)
		if err != nil {
			fmt.Println(err)
			return nil, err
		}
		pr = append(pr, pro)
	}

	return pr, nil
}
