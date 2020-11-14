package main

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

func getDb() *sql.DB {
	db, err := sql.Open("mysql", "root:@tcp(localhost)/roskosmos?parseTime=true")
	if err != nil {
		panic(err)
	}
	// fmt.Println("connected to db")
	// defer db.Close()
	return db
}
