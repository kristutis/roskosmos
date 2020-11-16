import React from 'react'
import './Treneriai.css'

export default function Treneriai() {
    // https://thispersondoesnotexist.com/
    // Nemažink savo tikslų, didink pastangas.
    return (
        <div className="treneriai-div">
            <br></br><br></br>
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>   
                    <tr>
                    <th scope="row">5</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>                 
                </tbody>
            </table>

            <br></br><br></br>

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
        </div>
    )
}
