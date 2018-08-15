import React from "react"
import Header from './Header'
import Footer from './Footer'
import Fnjihome from "./fnjihome";
import {Carousel} from 'antd'
import '../static/css/home.less'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='homeBox'>
                    <Carousel autoplay>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                
                </div>
            </div>
        )
    }
}





