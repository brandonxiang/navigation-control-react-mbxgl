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
		const pitch = 0
		const bearing = 0

		this.state = {
			zoom:zoom,
			lat:lat,
			lng:lng,
			pitch: pitch,
			bearing: bearing
		}
	}

	componentDidMount() {
		MapboxGl.accessToken = this.props.accessToken

		const map = this.map = new MapboxGl.Map({
			container: this.container,
			style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
            center: [this.state.lng, this.state.lat], // starting position
            zoom: this.state.zoom // starting zoom
		});
        
		var self = this


		map.on("moveend",function(){
		    console.log(map.getCenter())
			self.setState({lat:map.getCenter().lat.toFixed(5)});
			self.setState({lng: map.getCenter().lng.toFixed(5)});
		})

	    map.on("zoomend",function(){
			self.setState({zoom:map.getZoom().toFixed(2)}) ;
		})
		
		map.on("pitch",function(){
			self.setState({pitch:map.getPitch().toFixed(2)})
		})

		map.on("rotateend",function(){
			self.setState({bearing:map.getBearing().toFixed(2)})
		})
	}

	zoomIn(){
		this.map.zoomIn()
	}

	zoomOut(){
		this.map.zoomOut()
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
				<NavigationControl 
				zoomIn={this.zoomIn.bind(this)}
				zoomOut={this.zoomOut.bind(this)}
				lat={this.state.lat} 
				lng={this.state.lng} 
				zoom={this.state.zoom}
				pitch={this.state.pitch}
				bearing={this.state.bearing}
				/>
				</div>
	}
}
