import React from 'react'
import DisplayAllTrenerisCards from '../components/TrenerioCard'
// import TrenerioCard from '../components/TrenerioCard'
import './Treneriai.css'

export default function Treneriai() {
    var treneriukas1= {
        vardas: "Akvilė",
        foto: "https://randomuser.me/api/portraits/women/72.jpg",
        moto: "“Nėra nieko, kas tave stabdytų, išskyrus tave patį”",
    }

    var treneriukas2= {
        vardas: "Dovydas",
        foto: "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",
        moto: "“Juk taip smagu daryti tai, kas neįmanoma!”",
    }

    var treneriukas3= {
        vardas: "Raminta",
        foto: "https://randomuser.me/api/portraits/women/59.jpg",
        moto: "“Gyvenime nėra nieko neįmanoma... Vienintelis klausimas tik, ar užteks drąsos siekti tai, ko iš tiesų nori?”",
    }


    var treneriukai = [treneriukas1, treneriukas2, treneriukas3]
    // https://thispersondoesnotexist.com/
    // Nemažink savo tikslų, didink pastangas.
    return (
        <div className="treneriai-div">
            <br></br><br></br>
            {/* <table class="table table-striped table-dark">
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
            </table> */}


            <DisplayAllTrenerisCards treneriai={treneriukai}/>

            <br></br><br></br>
        </div>
    )
}
