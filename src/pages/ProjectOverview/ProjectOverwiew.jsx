import Button from "../../components/Button/Button";
import HomeHeader from "../../components/Header/HomeHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./ProjectOverview.scss";
import FileIcon from "../../assets/icons/file.png"
import Alert from "../../components/Alert/Alert"
import SuccesIcon from "../../assets/icons/success.png"
import NextIcon from "../../assets/icons/next.png"

import { Link } from "react-router-dom";


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

                     <Button className="overview__header-button">
                         Submit project
                     </Button>
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
                                   <a href="#" className="overview__content-files-link">
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
                                   <a href="#" className="overview__content-files-link">
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
                                   <a href="#" className="overview__content-files-link">
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

                     </div>
                 </div>
            </main>
        </>
    )
}