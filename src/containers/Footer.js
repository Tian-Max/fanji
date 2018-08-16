import React,{Component} from "react"
import {connect} from 'react-redux'
import {Link,NavLink} from 'react-router-dom'
import '../static/css/Footer.less'
class Footer extends Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <div className='footerBox'>
            <NavLink to='/furniture'>
                <div className='bmenuBox'>
                    <img src="http://m.fnji.com/view/webm/menu/menubottom/bmenu1.png" alt=""/>
                </div>
                <p>家具店</p>
            </NavLink>
            <NavLink to='/grocery'>
                <div className='bmenuBox'><img src="http://m.fnji.com/view/webm/menu/menubottom/bmenu2.png"
                                               alt=""/></div>
                <p>杂货铺</p>
            </NavLink>
            <NavLink to='/gallery'>
                <div className='bmenuBox'>
                    <img src="http://m.fnji.com/view/webm/menu/menubottom/bmenu3.png" alt=""/>
                </div>
                <p>画廊</p>
            </NavLink>
            <NavLink to='/fnjihome'>
                <div className='bmenuBox'>
                    <img src="http://m.fnji.com/view/webm/menu/menubottom/bmenu4.png"alt=""/>
                </div>
                <p>杂志</p>

            </NavLink>
            <NavLink to='/dropping'>
                <div className='bmenuBox'><img src="http://m.fnji.com/view/webm/menu/menubottom/bmenu51.png"
                                               alt=""/></div>
                <p>my账号</p>

            </NavLink>
            <NavLink to='/more'>
                <div className='bmenuBox'><img src="http://m.fnji.com/view/webm/menu/menubottom/bmenu6.png"
                                               alt=""/></div>
                <p>更多</p>
            </NavLink>
        </div>
    }
}
export default connect(null,null)(Footer)