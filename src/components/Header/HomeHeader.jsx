import "./HomeHeader.scss";
import SearchIcon from "./../../assets/icons/search.jsx"
import NotificationIcon from "./../../assets/icons/notification.jsx"
import SearchDropdown from "../SearchDropdown/SearchDropdown";
import { useState } from "react";


export default function HomeHeader() {

    const [searchOpened, setSearchOpened] = useState(false);

    return <header className="home-header">
        <h2 className="home-header__title" >
            Projects
        </h2>

        <ul className="home-header__actions-list">
            <li className="home-header__actions-item">
                
                 <SearchDropdown opened={searchOpened} placeholder="Search" />
                    <button
                            onClick={() => setSearchOpened(!searchOpened)}
                            className="home-header__action-link"
                        > 
                            <SearchIcon /> 
					</button>
            </li>
            <li className="home-header__actions-item">
					<button
						// onClick={() =>
						// 	setNotificationOpened(!notificationOpened)
						// }
						className="home-header__action-link"
					>
						<NotificationIcon />
					</button>
					{/* <Notification opened={notificationOpened} /> */}
			</li>
            <li className="home-header__actions-item">
					<button className="home-header__action-link"> 
                        <img src="https://picsum.photos/30" alt="" className="home-header__action-profile-img" />
					</button> 
			</li>
        </ul>
    </header>
}