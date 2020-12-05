package main

import (
	"fmt"
	"time"
)

type Comment struct {
	CommenterId string    `json:"fk_komentuotojo_id"`
	TrainerId   string    `json:"fk_trenerio_id"`
	Komentaras  string    `json:"komentaras"`
	Data        time.Time `json:"data"`
}

func putCommentToDb(comment Comment) error {
	db := getDb()
	defer db.Close()

	q := "INSERT INTO trenerio_komentarai (fk_komentuotojo_id,fk_trenerio_id,komentaras) VALUES ('" + comment.CommenterId + "','" + comment.TrainerId + "','" + comment.Komentaras + "')"
	_, err := db.Query(q)
	if err != nil {
		fmt.Print(err)
		return err
	}

	return nil
}

func getCommentsFromDbByTrainerId(tId string) ([]Comment, error) {
	db := getDb()
	defer db.Close()

	var comments []Comment

	q := "select * from trenerio_komentarai where fk_trenerio_id='" + tId + "'"
	rows, err := db.Query(q)
	defer rows.Close()
	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	for rows.Next() {
		var comment Comment
		err = rows.Scan(&comment.CommenterId, &comment.TrainerId, &comment.Komentaras, &comment.Data)
		if err != nil {
			fmt.Println(err)
			return nil, err
		}
		comments = append(comments, comment)
	}

	return comments, nil
}
