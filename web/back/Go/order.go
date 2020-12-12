package main

import ( "fmt"
		"strconv"
)

type Order struct {
	Kaina float32 `json:"kaina"`
	PrekesId    string `json:"prekes_id"`
	VartotojoId string `json:"vartotojo_id"`
	Atsiskaitymas string `json:"atsiskaitymo_budas"`
	Adresas string `json:"adresas"`
	SandelioId    int `json:"fk_sandelio_id"`
}

func addOrderToDb(order Order) error {
	db := getDb()
	defer db.Close()

	q, err := db.Prepare("INSERT INTO saskaita (kaina_be_pvm,kaina_su_pvm) VALUES (?,?)")
	if err != nil {
		fmt.Println(err)
		return err
	}
	res, err := q.Exec(order.Kaina*0.79, order.Kaina)
	lid, err := res.LastInsertId()
	q2 := "UPDATE `sandelys` SET `laisva_vieta` =  `laisva_vieta` + 1 WHERE `id` = " + strconv.Itoa(order.SandelioId)
	res2, err := db.Query(q2)
	if err != nil {
		fmt.Print(err)
		return err
	}
	q3 := "UPDATE `preke` SET `kiekis_sandelyje` =  `kiekis_sandelyje` - 1 WHERE `id` = " + order.PrekesId
	res3, err := db.Query(q3)
	if err != nil {
		fmt.Print(err)
		return err
	}

	fmt.Println(order.VartotojoId)

	qa, err := db.Prepare("INSERT INTO `uzsakymas` (fk_saskaitos_id,fk_vartotojo_id,kaina,fk_prekes_id,adresas,atsiskaitymo_budas) VALUES (?,?,?,?,?,?)")
	if err != nil {
		fmt.Println(err)
		return err
	}
	res1, err := qa.Exec(lid,order.VartotojoId,order.Kaina,order.PrekesId,order.Adresas,order.Atsiskaitymas)

	fmt.Println(res1)
	fmt.Println(res2)
	fmt.Println(res3)
	db.Close()
	return nil
}
