import { React } from 'react'
import '../Navbar/navbar.css'

const Navbar = () => {
    return (
        <div id="navbar-container">
            <div id="navbar">
                <a href="#" id="logo-img" title='Home Page'></a>
                <a href='#' id="news-button" title="News">News</a>
                <a href="#" id="acct-button" title="Account Settings">Account Settings</a>
                <a href="#" id="messages-button" title="Messages">Messages</a>

                <div id="dropdown">
                    <button id="dropbtn" title='Notifications'><span id='notifications'>3</span>Notifications</button>
                    <div id="dropdown-content">
                        <a href="#">One new friend request</a>
                        <a href="#">He thinks so posted on your wall</a>
                        <a href="#">Savvy L likes your post</a>
                    </div>
                </div>

                <a href="#" id="myacct-button" title="My Account">
                    <img id='avatar-img'></img>
                </a>

            </div>
        </div>

    )
}

export default Navbar