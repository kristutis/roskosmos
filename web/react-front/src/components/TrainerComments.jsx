import React from 'react'

const source="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"

export default function TrainerComments() {
    return (
        <div>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">paveiks</th>
                    <th scope="col">Vardas</th>
                    <th scope="col">Komentaras</th>
                    <th scope="col">Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td><img className="rounded-circle img-thumbnail" src="https://randomuser.me/api/portraits/women/72.jpg" alt="" width="70" height="70"/></td>
                        <td>Akvilė</td>
                        <td>“Nėra nieko, kas tave stabdytų, išskyrus tave patį”</td>
                        <td>2020-20-20</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td><img className="rounded-circle img-thumbnail" src="https://randomuser.me/api/portraits/men/61.jpg" alt="" width="70" height="70"/></td>
                        <td>Dovydas</td>
                        <td>“Juk taip smagu daryti tai, kas neįmanoma!”</td>
                        <td>2020-20-20</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td><img className="rounded-circle img-thumbnail" src="https://randomuser.me/api/portraits/women/59.jpg" alt="" width="70" height="70"/></td>
                        <td>Raminta</td>
                        <td>“Gyvenime nėra nieko neįmanoma... Vienintelis klausimas tik, ar užteks drąsos siekti tai, ko iš tiesų nori?”</td>
                        <td>2020-20-20</td>
                    </tr>                     
                </tbody>
            </table>
        </div>
    )
}
