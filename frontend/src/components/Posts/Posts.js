import { React } from 'react'
import '../Posts/posts.css'

const Posts = () => {
    return (

        <div id="posts-container">
         <img id='img-one'></img>
        <span id="time-text">1 min</span> 
        <h4 title='Jordan Mook'>Jordan Mook</h4>
       <hr id='posts-line'></hr>
        <p id='posts-para'>Went on an epic excursion with my best friend/s today. 
            Hiking and then some delicious super awesome yum yums from this new 
            place in town that just opened up. OH YEAH!!! =)</p>
          <div id="row">
            <div id="half-one">
              <img id='img-two'></img>
            </div>
            <div id="half-two">
              <img id='img-three'></img>
          </div>
 
        <button id='like' title='Like'>Like</button> 
        <button id='comment' title='Comment'>Comment</button> 
    </div>
    </div>

    
  

    ) 
}

export default Posts