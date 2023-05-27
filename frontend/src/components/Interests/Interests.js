import { React } from 'react'
import '../Interests/interests.css'

const Interests = () => {
    return (

        <div id="interests-card">

            <p id='int-title' title='Interests'><b>Interests</b></p>
            <hr></hr>
            <p id='int-container-one'>
                <span id="int-one" title='Video Games'>Video Games</span>
                <span id="int-two" title='Coding'>Coding</span>
                <span id="int-three" title='Horseback Riding'>Horseback Riding</span>
                <span id="int-four" title='Coffee'>Coffee</span>

                <p id='int-container-two'>
                    <span id="int-five" title='Asian Cuisine'>Asian Cuisine</span>
                    <span id="int-six" title='Traveling'>Traveling</span>
                    <span id="int-seven" title='Networking'>Networking</span>
                    <span id="int-eight" title='Photo Editing'>Photo Editing</span>

                    <p id='int-container-three'>
                        <span id="int-nine" title='Make-Up'>Make-Up</span>
                        <span id="int-ten" title='Drawing'>Drawing</span>
                        <span id="int-eleven" title='Painting'>Painting</span>
                    </p>
                </p>
            </p>
        </div>


    )
}

export default Interests