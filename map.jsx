import React from 'react'
import MapboxGl from 'mapbox-gl';

export default class Map extends React.Component {
	static propTypes = {
		accessToken: React.PropTypes.string,
	}

	componentDidMount() {
		MapboxGl.accessToken = this.props.accessToken

		const map = new MapboxGl.Map({
			container: this.container,
			style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
            center: [-74.50, 40], // starting position
            zoom: 9 // starting zoom
		});
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
				}}></div>
	}
}
