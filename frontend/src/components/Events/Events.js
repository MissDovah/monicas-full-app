import { React } from 'react'
import '../Events/events.css'

const Events = () => {
    return (

      <div id="events-container">
<div id="events-card">
  <div>
    <p title='Upcoming Events'><strong>Upcoming Events:</strong></p>
    <img id="events"></img>
    <p title='Niagara Falls'><strong>Niagara Falls</strong></p>
    <p title='Friday 12:30 p.m.'>Friday 12:30 p.m.</p>
    <p><button id="events-button" title='Info'>Info</button></p>
  </div>
</div>
</div>

)
}


export default Events