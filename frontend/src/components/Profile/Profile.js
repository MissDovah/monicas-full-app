import { React } from 'react'
import '../Profile/profile.css'

const Profile = () => {
    return (

        <div id="profile-card">

            <h4 id="profile-center" title='Monica R. White'>Monica R. White</h4>
            <img id="profile-img"></img>

            <hr></hr>

            <div id="profile-info">
                <p title='Web Developer'>Web Developer</p>
                <p title='Tennessee, USA'>Tennessee, USA</p>
                <p title='March 18th, 1992'>March 18th, 1992</p>

            </div>
        </div>

    )
}

export default Profile