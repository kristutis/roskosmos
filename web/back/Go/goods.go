package main

import (
	"fmt"
)

type Good struct {
	Id          int `json:"id"`
	Pavadinimas string `json:"pavadinimas"`
	Aprasymas   string `json:"aprasymas"`
	Kaina      	float32 `json:"kaina"`
	SandelioId  int `json:"fk_sandelio_id"`
	Foto        string `json:"foto"`
	Kiekis  	int `json:"kiekis_sandelyje"`
}

func getGoodsByIdFromDb(id string) ([]Good, error) {
	db := getDb()
	q := "select * from preke where id="+id
	rows, err := db.Query(q)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	var goods []Good
	for rows.Next() {
		var good Good
		err = rows.Scan(&good.Pavadinimas, &good.Aprasymas, &good.Kaina, &good.SandelioId, &good.Id, &good.Foto, &good.Kiekis)
		if err != nil {
			fmt.Println(err)
			return nil, err
		}
		goods = append(goods, good)
	}
	rows.Close()
	db.Close()
	return goods, nil
}

func getGoodsByFromDb() ([]Good) {
	db := getDb()
	var goods []Good
	rows, err := db.Query("select * from preke where kiekis_sandelyje > 0")
	fmt.Println(rows)
	if err != nil {
		fmt.Println(err)
		fmt.Println("wtf")
	}
	for rows.Next() {
		var good Good
		err = rows.Scan(&good.Pavadinimas, &good.Aprasymas, &good.Kaina, &good.SandelioId, &good.Id, &good.Foto, &good.Kiekis)
		if err != nil {
			fmt.Println(err)
		}
		goods = append(goods, good)
	}
	rows.Close()
	db.Close()
	return goods
}
