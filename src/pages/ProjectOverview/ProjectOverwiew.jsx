import Button from "../../components/Button/Button";
import HomeHeader from "../../components/Header/HomeHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./ProjectOverview.scss";
import FileIcon from "../../assets/icons/file.png"
import Alert from "../../components/Alert/Alert"
import SuccesIcon from "../../assets/icons/success.png"
import NextIcon from "../../assets/icons/next.png"
import Ellipse from "../../assets/icons/ellipse.png";
import SupportIcon from "../../assets/icons/support";  
import { Link } from "react-router-dom";  


import React, { useState, useEffect } from "react";  


export default function ProjectOverview() {
    return (
        <>
            <Sidebar/>
            <HomeHeader/>

            <main className="overview">
                 <div className="overview__header">
                     <h2 className="overview__header-title">
                         3D armchair

                         <span className="overview__header-id">
                             ID:32328943
                         </span>
                     </h2>

                     <div className="overview__header-button">
                         Submit project
                     </div>
                 </div>

                 <div className="overview__main">
                     <div className="overview__content-box">
                         <h4 className="overview__content-title">
                             Project overview
                          </h4>   

                          <p className="overview__content-description">
                               Model contain 4 parts ready for print with keys and also a presupported version. This model on 100% scale is 16cm tall, but can be printed larger.
                          </p>


                          <h4 className="overview__content-title">
                             Photos
                          </h4>
                          
                          <ul className="overview__content-photos-list">   
                              <li className="overview__content-photos-item">
                                  <img src="https://picsum.photos/150?2" alt="project" className="overview__content-photo" />
                              </li>
                              <li className="overview__content-photos-item">
                                  <img src="https://picsum.photos/150?3" alt="project" className="overview__content-photo" />
                              </li>
                              <li className="overview__content-photos-item">
                                  <img src="https://picsum.photos/150?4" alt="project" className="overview__content-photo" />
                              </li>
                          </ul> 
                        

                          <h4 className="overview__content-title">
                             Photos
                          </h4>

                          <ul className="overview__content-files-list">  
                              <li className="overview__content-files-item">
                                   <a href="/overview" className="overview__content-files-link">
                                       <img src={FileIcon} alt="File Icon" className="file-icon" />
                                       <p className="file-title">
                                           3D car model.rar

                                           <span className="file-size">
                                               2.3 MB
                                           </span>
                                       </p>
                                   </a>
                              </li> 
                              <li className="overview__content-files-item">
                                   <a href="/overview" className="overview__content-files-link">
                                       <img src={FileIcon} alt="File Icon" className="file-icon" />
                                       <p className="file-title">
                                           3D car model.rar

                                           <span className="file-size">
                                               2.3 MB
                                           </span>
                                       </p>
                                   </a>
                              </li> 

                              <li className="overview__content-files-item">
                                   <a href="/overview" className="overview__content-files-link">
                                       <img src={FileIcon} alt="File Icon" className="file-icon" />
                                       <p className="file-title">
                                           3D car model.rar

                                           <span className="file-size">
                                               2.3 MB
                                           </span>
                                       </p>
                                   </a>
                              </li> 
                          </ul>

                         
                          <Alert className="overview__alert">
                             <h4 className="overview__alert-title">
                                 Your request has been accepted
                                 <img src={SuccesIcon} alt="" className="succes-icon" /> 
                             </h4>
                             <span className="overview__alert-span">
                                 For the preparation of your order, you must pay 30% of the order.
                             </span>

                             <Link className="overview__payment-link" to="#">
                                 Go to payment

                                <img src={NextIcon} alt="" className="alert-icon" />
                             </Link>
                          </Alert>

                     </div>
                     <div className="overview__features-box">
                        <ul className="overview__features-list">
                            <li className="overview__features-item">
                                 <h5>3D skills</h5>

                                <ul className="overview__skills-list">
                                    <li className="overview__skills-item">
                                        <img src={Ellipse} alt="" className="ellipse" />
                                         <p>3D modelling</p>
                                    </li>
                                    <li className="overview__skills-item">
                                        <img src={Ellipse} alt="" className="ellipse" />
                                         <p>3D modelling</p>
                                    </li>
                                    <li className="overview__skills-item">
                                        <img src={Ellipse} alt="" className="ellipse" />
                                         <p>3D modelling</p>
                                    </li>
                                </ul>
                            </li>
                            <li className="overview__features-item">
                                <h5> 3D software</h5>

                                <ul className="overview__softwares-list">
                                    <li className="overview__softwares-item">
                                         <img src={Ellipse} alt="" className="ellipse" /> 
                                          <p>Autodesk 3D max</p>
                                    </li>
                                    <li className="overview__softwares-item">
                                         <img src={Ellipse} alt="" className="ellipse" /> 
                                          <p>Autodesk 3D max</p>
                                    </li>
                                    <li className="overview__softwares-item">
                                         <img src={Ellipse} alt="" className="ellipse" /> 
                                          <p>Autodesk 3D max</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                         <ul className="overview__service-list">
                             <li className="overview__service-item">
                                 <h5 className="service-title">
                                    Deadline
                                 </h5>

                                 <p className="service-number">
                                     12.02.2021
                                 </p>
                             </li>
                             <li className="overview__service-item">
                                 <h5 className="service-title">
                                    Price
                                 </h5>

                                 <p className="service-number">
                                     $500
                                 </p>
                             </li>
                         </ul> 

                         <div className="overview__links-box">
                             <Link className="overview__cancel-link" to="/cancel" >
                                Cancel the order
                             </Link>

                             <Button className="overview__contact-button">
                                 <SupportIcon className="overview__contact-button__icon" />
                                 Contact with moderator
                             </Button>
                         </div>

                         <Button className="overview__order-project">
                             Order a project
                         </Button>
                     </div>
                 </div>
            </main>
        </>
    )
}
