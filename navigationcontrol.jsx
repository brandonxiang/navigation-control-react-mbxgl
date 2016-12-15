import React, {Component} from 'react'
<<<<<<< HEAD
import {Button, Icon,InputNumber, Row, Col} from 'antd'
=======
import {Button, Icon,InputNumber,Label} from 'antd'
import './node_modules/antd/dist/antd.css'
import './index.css'
>>>>>>> ec7e91e6446c124d6fea98a624b8c5d2c0aad4b7

export default class NavigationControl extends Component{

  static propTypes ={
    zoom:React.PropTypes.number,
    lat:React.PropTypes.number,
    lng:React.PropTypes.number,
    pitch:React.PropTypes.number,
    bearing:React.PropTypes.number
  }


  static defaultProps = {
      zoom: 9,
      lat: 22,
      lng: 114,
      bearing: 10,
      pitch: 10
  }



    render(){
        const outblock = {
            position:"fixed",
            top:0,
            right:0,
            zIndex:5000
        }
        

        return <div
            style={{
                position:"fixed",
                top:0,
                right:0,
                zIndex:5000,
                padding:"5px",
                backgroundColor:"rgba(200, 200, 200, 0.5)",
                borderRadius:"3px"
            }}>
            <div>
            <Button type="primary" icon="plus"/>
            <Button type="primary" icon="minus"/>
            </div>
            <Row>
            <Col span={8}>
            <div>Zoom</div>
            <InputNumber defaultValue={this.props.zoom}/>
            </Col>
            <Col span={8}>
            <div>Bearing</div>
            <InputNumber defaultValue={this.props.bearing}/>
            </Col>
            <Col span={8}>
            <div>Pitch</div>
            <InputNumber defaultValue={this.props.pitch} />
            </Col>
            </Row>
            <Row>
            <Col span={8}>
            <div>Latitude</div>
            <InputNumber defaultValue={this.props.lat} />
            </Col>
            <Col span={8}>
            <div>Longitude</div>
            <InputNumber defaultValue={this.props.lng} />
            </Col>
            </Row>
        </div>
    }
}
