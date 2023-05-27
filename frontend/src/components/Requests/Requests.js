import { React } from 'react'
import '../Requests/requests.css'

const Requests = () => {
    return (

<div id="requests-container">
<div id="requests-card">
  <p title='NEW! Friend Request'><strong>Friend Request</strong></p>
  <img id='requests-img'></img>
  <span title='Carrie W'>Carrie W</span>
  <div class="row">
    <div class="w3-half">
      <button id="green-button" title="Accept">Accept</button>
    </div>
    <div class="w3-half">
      <button id="red-button" title="Decline">Decline</button>
    </div>
  </div>
</div>
</div>

) 
}

export default Requests