package main

import "fmt"

type Rating struct {
	RaterId   string  `json:"fk_vertintojo_id"`
	TrainerId string  `json:"fk_trenerio_id"`
	Rating    float64 `json:"ivertinimas"`
}

func setRatingToDb(rating Rating) error {
	db := getDb()
	defer db.Close()

	//1. ar jau yra tam treneriui vertinimas
	//2. jei taip updatint
	//3. jei ne nauja sukurt

	q := "select * from trenerio_vertinimai where fk_trenerio_id='" + rating.TrainerId + "' AND fk_vertintojo_id='" + rating.RaterId + "'"
	rows, err := db.Query(q)
	defer rows.Close()
	if err != nil {
		fmt.Println(err)
		return err
	}

	exists := false
	for rows.Next() {
		var ratingFromDb Rating
		err = rows.Scan(&ratingFromDb.RaterId, &ratingFromDb.TrainerId, &ratingFromDb.Rating)
		if err != nil {
			fmt.Println(err)
			return err
		}
		fmt.Println("toks jau yra", ratingFromDb)
		if ratingFromDb.RaterId == rating.RaterId && ratingFromDb.TrainerId == rating.TrainerId {
			exists = true
		}
	}

	if exists {
		q := "UPDATE `trenerio_vertinimai` SET `ivertinimas` = '" + fmt.Sprintf("%d", int(rating.Rating)) + "' WHERE `trenerio_vertinimai`.`fk_vertintojo_id` = '" + rating.RaterId + "' AND `trenerio_vertinimai`.`fk_trenerio_id` = '" + rating.TrainerId + "';"
		fmt.Println(q)
		_, err := db.Query(q)
		if err != nil {
			fmt.Print(err)
			return err
		}
	} else {
		q, err := db.Prepare("INSERT INTO trenerio_vertinimai (fk_vertintojo_id,fk_trenerio_id,ivertinimas) VALUES (?,?,?)")
		if err != nil {
			fmt.Println(err)
			return err
		}
		q.Exec(rating.RaterId, rating.TrainerId, rating.Rating)
	}

	return nil
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

// func getRatingsFromDb() []Rating {
// 	db := getDb()
// 	defer db.Close()

// 	var ratings []Rating

// 	rows, err := db.Query("select * from ratings")
// 	defer rows.Close()
// 	if err != nil {
// 		fmt.Println(err)
// 	}

// 	for rows.Next() {
// 		var rating Rating
// 		err = rows.Scan(&rating.RaterId, &rating.TrainerId, &rating.Rating)
// 		if err != nil {
// 			fmt.Println(err)
// 		}
// 		ratings = append(ratings, rating)
// 	}

// 	return ratings
// }
