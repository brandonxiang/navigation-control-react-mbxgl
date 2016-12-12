import React from 'react'
import { render } from 'react-dom';
import Map from './map.jsx'
import NavigationControl from './navigationcontrol.jsx'

render(<div>
<Map accessToken={"pk.eyJ1IjoieHdwaXNtZSIsImEiOiJ5cTlCQTlRIn0.QdV-wNUKbgs7jAlbVE747Q"}>
</Map>
				<NavigationControl lat={22} lng={114} zoom={8}/>
</div>
,document.querySelector("#map"));


