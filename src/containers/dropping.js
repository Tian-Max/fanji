import React,{Component} from "react"
import {connect} from 'react-redux'
import Footer from './Footer'
class dropping extends Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <div>
            dropping
            <Footer/>
        </div>
    }
}
export default connect(null,null)(dropping)