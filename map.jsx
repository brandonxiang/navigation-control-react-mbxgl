import React from 'react'
import MapboxGl from 'mapbox-gl';
import NavigationControl from './navigationcontrol.jsx'

export default class Map extends React.Component {
	static propTypes = {
		accessToken: React.PropTypes.string,
	}

	constructor(props){
		super(props)
		
        const zoom = 9
		const lat = 40
		const lng = -74.50

		this.state = {
			zoom:zoom,
			lat:lat,
			lng:lng
		}
	}

	componentDidMount() {
		MapboxGl.accessToken = this.props.accessToken

		const map = new MapboxGl.Map({
			container: this.container,
			style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
            center: [this.state.lng, this.state.lat], // starting position
            zoom: this.state.zoom // starting zoom
		});
        
		var self = this


		map.on("moveend",function(){
		    console.log(map.getCenter())
			self.setState({lat:map.getCenter().lat.toFixed(2)});
			self.setState({lng: map.getCenter().lng.toFixed(2)});
		})

	    map.on("zoomend",function(){
			self.setState({zoom:map.getZoom().toFixed(2)}) ;
		})
	}

	render() {
			return <div
				ref={x => this.container = x}
				style={{
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    height: "100%",
					width: "100%",
				}}>
				<NavigationControl lat={this.state.lat} lng={this.state.lng} zoom={this.state.zoom}/>
				</div>
	}
}
