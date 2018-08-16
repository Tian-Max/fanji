import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Switch,Route,Redirect} from "react-router-dom"


import {Provider} from "react-redux"
import store from "./store"


import {LocaleProvider} from "antd"
import zh_CN from 'antd/lib/locale-provider/zh_CN';


import './static/css/reset.min.css';
import './static/css/common.less';



import Home from "./containers/home"
import Furniture from "./containers/furniture"
import Fnjihome from "./containers/fnjihome"
import Gallery from "./containers/gallery"
import Grocery from "./containers/grocery"
import More from "./containers/more"
import My from "./containers/my"


import axios from "./api/index"

//redux测试
console.log(store.dispatch({type:"TYPE_EXAMPLE"}));

axios.get('/shop').then((res)=>{
    console.log(res);
})

ReactDOM.render(<Provider store={store}>
        <HashRouter>
            <LocaleProvider locale={zh_CN}>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/furniture' component={Furniture}/>
                        <Route path='/fnjihome' component={Fnjihome}/>
                        <Route path='/gallery' component={Gallery}/>
                        <Route path='/grocery' component={Grocery}/>
                        <Route path='/more' component={More}/>
                        <Route path='/my' component={My}/>
                    </Switch>
                    <script>alert(1)</script>
                </div>
            </LocaleProvider>
        </HashRouter>
    </Provider>
    , document.getElementById('root'));

