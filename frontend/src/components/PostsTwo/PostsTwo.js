import { React } from 'react'
import '../PostsTwo/poststwo.css'

const PostsTwo = () => {
    return (

        <div id="posts-container">
            <img id='img-one-sis'></img>
            <span id="time-text">16 min</span>
            <h4 title='Savvy L'>Savvy L</h4>
            <hr id='posts-line'></hr>
            <p id='posts-para'>I just adopted the cutest kitty ever! His name is Cheeseburger
                and he's totally awesome. High five little kitty, you're the best! =^.^= </p>
            <div id="row">
                <div id="half-one">
                    <img id='img-two-sis'></img>
                </div>
                <div id="half-two">
                    <img id='img-three-sis'></img>
                </div>

                <button id='like' title='Like'>Like</button>
                <button id='comment' title='Comment'>Comment</button>
            </div>
        </div>




    )
}

export default PostsTwo