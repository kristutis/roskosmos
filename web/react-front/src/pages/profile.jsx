import React from 'react'
import './Profile.css'

export default function Profile() {
    if (isLoggedIn()===false) {
        return <h1>UNAUTHORISED</h1>
    }

    return (
        <div>
            <br></br><br></br>
            <div className="row base-div bordered-div">
                    <div className="col-md-4 first-profile-div">
                        <br></br><br></br><br></br>
                        <img className="rounded-circle prof-img" width="300" height="300" src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Ffta-ez-prod%2Fez%2Fimages%2F1%2F9%2F7%2F1%2F1481791-4-eng-GB%2Farchitecture-camera-city-827209+%281%29.jpg%3Fv1?width=700&source=ftadviser"/>
                        <br></br><br></br>
                        <h1 className="text-center text-white">KLIENTAS</h1>
                        <br></br><br></br>
                        <div className="row">                        
                            <input type="text" class="w-50 form-control input-center" defaultValue="Vardas" />                       
                            <input type="text" class="w-50 form-control input-center" defaultValue="Pavardė" />                          
                        </div>
                        <br></br><br></br>
                        <div className="row justify-content-center">    
                            <h4 className="text-center text-white mr-1">Nauja nuotrauka</h4>
                            <input type="text" class="w-25 form-control"  />  
                            <br></br><br></br>
                        </div>
                    </div>
                    <div className="col-md-8 second-profile-div">
                        <div className="row">
                            <div className="col-md-6">
                                <br></br>
                                <h5>El. paštas</h5>
                                <input type="text" class="w-75 form-control" defaultValue="email" /> 
                            </div>   
                            <div className="col-md-6">
                                <br></br>
                                <h5>Keisti slaptažodį</h5>
                                <input type="text" class="w-75 form-control"/> 
                                <br></br>
                                <h5>Pakartokite slaptažodį</h5>
                                <input type="text" class="w-75 form-control"/> 
                            </div>                                             
                        </div> 
                        <br></br><br></br><br></br><br></br>
                        <hr/>
                        <div className="row">
                            <div className="col-md-6">
                                <br></br>
                                <h5>Profilis sukurtas:</h5>
                                <p>data</p>
                            </div>   
                            <div className="col-md-6">
                                <br></br>
                                <h5>Paskutinį kartą keista:</h5>
                                <p>data</p>
                            </div>                                                          
                        </div> 
                    </div>
            </div>
        </div>
    )

    // return (
    //     <>
    //         <br></br><br></br><br></br>
    //         <div class="page-content page-container" id="page-content">
    //             <div class="padding">
    //                 <div class="row container d-flex justify-content-center">
    //                     <div class="col-xl-6 col-md-12">
    //                         <div class="card user-card-full">
    //                             <div class="row m-l-0 m-r-0">
    //                                 <div class="col-sm-4 bg-c-lite-green user-profile">
    //                                     <div class="card-block text-center text-white">
    //                                         <div class="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image"/> </div>
    //                                         <h6 class="f-w-600">Hembo Tingor</h6>
    //                                         <p>Web Designer</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
    //                                     </div>
    //                                 </div>
    //                                 <div class="col-sm-8">
    //                                     <div class="card-block">
    //                                         <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
    //                                         <div class="row">
    //                                             <div class="col-sm-6">
    //                                                 <p class="m-b-10 f-w-600">Email</p>
    //                                                 <h6 class="text-muted f-w-400">rntng@gmail.com</h6>
    //                                             </div>
    //                                             <div class="col-sm-6">
    //                                                 <p class="m-b-10 f-w-600">Phone</p>
    //                                                 <h6 class="text-muted f-w-400">98979989898</h6>
    //                                             </div>
    //                                         </div>
    //                                         <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
    //                                         <div class="row">
    //                                             <div class="col-sm-6">
    //                                                 <p class="m-b-10 f-w-600">Recent</p>
    //                                                 <h6 class="text-muted f-w-400">Sam Disuja</h6>
    //                                             </div>
    //                                             <div class="col-sm-6">
    //                                                 <p class="m-b-10 f-w-600">Most Viewed</p>
    //                                                 <h6 class="text-muted f-w-400">Dinoter husainm</h6>
    //                                             </div>
    //                                         </div>
    //                                         <ul class="social-link list-unstyled m-t-40 m-b-10">
    //                                             <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
    //                                             <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
    //                                             <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
    //                                         </ul>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // )

    
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function isLoggedIn() {
    const c = getCookie('uid')
    if (c==='') {
        return false
    }
    return true
}