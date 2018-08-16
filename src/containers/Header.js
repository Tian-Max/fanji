import React, {Component} from "react"
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Input} from 'antd'
import '../static/css/Header.less'
import '../static/css/Icon.less'

const Search = Input.Search;

class Header extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            n: document.documentElement.clientWidth,
            m:0,
            showFlag:false
        }

    }

    showhide = () => {
        if(this.state.showFlag){
            this.setState ( {
                n: document.documentElement.clientWidth,
                m:0,
                showFlag:false
            })
        }else {
            this.setState({
                n:0,
               m:1,
                showFlag:true
            });
        }
    };
    render() {
        return <div className='headBox'>
            <Link to='/'>
                <img src="http://m.fnji.com/view/webm/menu/menutop/logo.png" alt=""/>
            </Link>
            <i className='iconfont icon-sousuo' onClick={this.showhide}></i>
            <div className='btnShow' style={{left: `${this.state.n}px`, opacity:this.state.m,transition:'1s'}}>
                <input type="text" placeholder='search'/>
                <button>搜索</button>
                <i className='iconfont icon-guanbi' onClick={this.showhide}></i>
            </div>
        </div>
    }
}
export default connect(null, null)(Header)