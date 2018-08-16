import React from "react"
import {Link} from 'react-router-dom'
import Header from './Header'
import {Carousel} from 'antd'
import '../static/css/home.less'

import Gallery from "./gallery";
import Furniture from "./furniture";
import Grocery from "./grocery";
import Fnjihome from "./fnjihome";
import Dropping from './dropping'
import More from "./more";

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
                    <div className='linkBox'>
                        <Link to='/furniture'>
                            <div className='bmenuBox'>
                                <img src="http://m.fnji.com/view/webm/menu/menubottom/bmenu1.png" alt=""/>
                            </div>
                            <p>家具店</p>
                            <p>furniture</p>
                        </Link>
                        <Link to='/grocery'>
                            <div className='bmenuBox'><img src="http://m.fnji.com/view/webm/menu/menubottom/bmenu2.png"
                                                           alt=""/></div>
                            <p>杂货铺</p>
                            <p>grocery</p>
                        </Link>
                        <Link to='/gallery'>
                            <div className='bmenuBox'><img src="http://m.fnji.com/view/webm/menu/menubottom/bmenu3.png"
                                                           alt=""/></div>
                            <p>画廊</p>
                            <p>gallery</p>
                        </Link>
                        <Link to='/fnjihome'>
                            <div className='bmenuBox'>
                                <img src="http://m.fnji.com/view/webm/menu/menubottom/bmenu4.png"alt=""/>
                            </div>
                            <p>梵几在家</p>
                            <p>all home</p>
                        </Link>
                        <Link to='/dropping'>
                            <div className='bmenuBox'><img src="http://m.fnji.com/view/webm/menu/menubottom/bmenu7.png"
                                                           alt=""/></div>
                            <p>串门</p>
                            <p>dropping</p>
                        </Link>
                        <Link to='/more'>
                            <div className='bmenuBox'><img src="http://m.fnji.com/view/webm/menu/menubottom/bmenu6.png"
                                                           alt=""/></div>
                            <p>更多</p>
                            <p>more</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}





