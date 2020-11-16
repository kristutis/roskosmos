import React from 'react'

function TrenerioCard(props) {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img className="card-img-top" src="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Card title</h4>
                <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nisi eveniet harum accusamus sequi quam totam laboriosam tempore vitae inventore illo?
                </p>
                <a href="#" className="btn btn-outline-success">Plačiau</a>
            </div>
            
        </div>
    )
}

export default function DisplayAllTrenerisCards(props) {
    return (
        <div className="container-fluid d-flex justify content-center">
            <div className="col-md-4">
                <TrenerioCard/>
            </div>
            <div className="col-md-4">
                <TrenerioCard/>
            </div>
            <div className="col-md-4">
                <TrenerioCard/>
            </div>
        </div>
    )
}