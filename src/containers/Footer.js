import React,{Component} from "react"
import {connect} from 'react-redux'
class Footer extends Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <div>
            Footer
        </div>
    }
}
export default connect(null,null)(Footer)