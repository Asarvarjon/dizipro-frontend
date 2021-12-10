import "./Alert.scss";
import CloseButton from "./../../assets/icons/close_button.png"
import { useState } from "react";


export default function Alert({children}) {

    const [closed, setClosed] = useState(false);

    if(closed) {
        return <></>;
    }

    return (
        <div className="alert"> 
            {children}


            <button onClick={() => {
                setClosed(true)
            }} className="alert__close-button" >
                <img className="alert__close-img" src={CloseButton} alt="close button" />
            </button>
        </div> 
    )
}
   