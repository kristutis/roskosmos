import React from 'react'
import './Treneris.css'

export default function Treneris() {
    return (
        <div className="first-div">
            <br></br><h1>Rimulis</h1><br></br>
            <div className="ts container-fluid d-flex justify content-center">
                <div className="row">
                    <div className="col-md-6">                        
                        <img width="100%" height="700" src="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"/>
                    </div>
                    <div className="col-md-6">                        
                        <table class="table table-striped table-dark">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">paveiks</th>
                                <th scope="col">Vardas</th>
                                <th scope="col">Frazė</th>
                                <th scope="col">Plačiau</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><img class="img-thumbnail" src="https://randomuser.me/api/portraits/women/72.jpg" width="70" height="70"/></td>
                                    <td>Akvilė</td>
                                    <td>“Nėra nieko, kas tave stabdytų, išskyrus tave patį”</td>
                                    <td><button type="button" class="btn btn-secondary">Plačiau</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td><img class="img-thumbnail" src="https://randomuser.me/api/portraits/men/61.jpg" width="70" height="70"/></td>
                                    <td>Dovydas</td>
                                    <td>“Juk taip smagu daryti tai, kas neįmanoma!”</td>
                                    <td><button type="button" class="btn btn-secondary">Plačiau</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td><img class="img-thumbnail" src="https://randomuser.me/api/portraits/women/59.jpg" width="70" height="70"/></td>
                                    <td>Raminta</td>
                                    <td>“Gyvenime nėra nieko neįmanoma... Vienintelis klausimas tik, ar užteks drąsos siekti tai, ko iš tiesų nori?”</td>
                                    <td><button type="button" class="btn btn-secondary">Plačiau</button></td>
                                </tr>                     
                            </tbody>
                        </table>
                        <h1>Ivertinimas</h1>
                        <br></br>
                        <h4>komentaras</h4>
                        <input width="100" height="100" type="text"></input>
                    </div>           
                </div>
            </div> 
            <br></br><br></br><br></br><br></br>
        </div>
    )
}
