import React, {Component} from 'react'
import {Button, Icon,InputNumber,Label} from 'antd'
import './node_modules/antd/dist/antd.css'
import './index.css'

export default class NavigationControl extends Component{
    static propType ={

    }



    render(){
        const outblock = {
            position:"fixed",
            top:0,
            right:0,
            zIndex:5000
        }
        

        return <div
            style={outblock}>
            <div>
            <Button className="navi-btn" type="primary" shape="circle" icon="plus" onClick={this.props.zoomIn}/>
            <Button className="navi-btn" type="primary" shape="circle" icon="minus" onClick={this.props.zoomOut}/>
            </div>
            <div>{this.props.zoom}-{this.props.lat}-{this.props.lng}</div>
            <div>{this.props.pitch}-{this.props.bearing}</div>
        </div>
    }
}