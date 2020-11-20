package main

import "fmt"

type Rating struct {
	RaterId   string  `json:"fk_vertintojo_id"`
	TrainerId string  `json:"fk_trenerio_id"`
	Rating    float64 `json:"ivertinimas"`
}

func getRatingsFromDbByTrainerId(tId string) ([]Rating, error) {
	db := getDb()
	defer db.Close()

	var ratings []Rating

	q := "select * from trenerio_vertinimai where fk_trenerio_id='" + tId + "'"
	rows, err := db.Query(q)
	defer rows.Close()
	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	for rows.Next() {
		var rating Rating
		err = rows.Scan(&rating.RaterId, &rating.TrainerId, &rating.Rating)
		if err != nil {
			fmt.Println(err)
			return nil, err
		}
		ratings = append(ratings, rating)
	}

	return ratings, nil
}

func getRatingsFromDb() []Rating {
	db := getDb()
	defer db.Close()

	var ratings []Rating

	rows, err := db.Query("select * from ratings")
	defer rows.Close()
	if err != nil {
		fmt.Println(err)
	}

	for rows.Next() {
		var rating Rating
		err = rows.Scan(&rating.RaterId, &rating.TrainerId, &rating.Rating)
		if err != nil {
			fmt.Println(err)
		}
		ratings = append(ratings, rating)
	}

	return ratings
}
