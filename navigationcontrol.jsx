import React, {Component} from 'react'
import {Button, Icon,InputNumber,Label} from 'antd'
import './node_modules/antd/dist/antd.css'

export default class NavigationControl extends Component{
    static propType ={

    }

    render(){
        return <div
            style={{
                position:"fixed",
                top:0,
                right:0
            }}>
            <p><Button type="primary" shape="circle" icon="plus"/>
            <Button type="primary" shape="circle" icon="minus" /></p>
            <p>{this.props.zoom}-{this.props.lat}-{this.props.lng}</p>
        </div>
    }
}