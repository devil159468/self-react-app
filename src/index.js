import React,{ Component }  from 'react'
import ReactDOM from 'react-dom'

import Topnav from './components/Topnav/index.js'
import Sildbar from './components/Sildbar/index.js'
import Footer from './components/Footer/index.js'
import Zancomponent from  './components/Zancomponent/index.js'
import Title from  './components/Title/index.js'
import LikeButton from  './components/state/index.js'

import './index.css'


class AppComponent extends  Component {   // 定义一个继承于react顶层Component的新组件AppComponent
    //这是一个基于es6的react组件
    render(){
        return  (
            <div>
                <Topnav />
                <Sildbar />
                <Footer />
                <Zancomponent />
                <Title />
                <LikeButton />
            </div>
        )
    }
}


ReactDOM.render(
    <AppComponent />,
    document.getElementById('app')
);
