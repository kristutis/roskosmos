package main

import (
	"fmt"
)

type Receipt struct {
	Id int `json:"id"`
	Pavadinimas string `json:"pavadinimas"`
	KainaBe   float32 `json:"kaina_be_pvm"`
	KainaSu      	float32 `json:"kaina_su_pvm"`
	Adresas        string `json:"adresas"`
}

func getReceiptsByIdFromDb(id string) ([]Receipt, error) {
	db := getDb()
	q := "SELECT saskaita.id, saskaita.kaina_be_pvm, saskaita.kaina_su_pvm, uzsakymas.adresas, preke.pavadinimas FROM `saskaita` INNER JOIN `uzsakymas` ON saskaita.id = uzsakymas.fk_saskaitos_id INNER JOIN `preke` ON uzsakymas.fk_prekes_id = preke.id WHERE uzsakymas.fk_vartotojo_id ='"+id+"'"
	rows, err := db.Query(q)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	var receipts []Receipt
	for rows.Next() {
		var receipt Receipt
		err = rows.Scan(&receipt.Id, &receipt.KainaBe, &receipt.KainaSu, &receipt.Adresas, &receipt.Pavadinimas)
		if err != nil {
			fmt.Println(err)
			return nil, err
		}
		receipts = append(receipts, receipt)
	}
	rows.Close()
	db.Close()
	return receipts, nil
}
