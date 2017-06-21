import React,{ Component }  from 'react';

import './index.css'

import Search from '../Search/index.js'

var imgUrl=require('./img/img.jpg');



class Topnav extends Component{

    render(){
        return(
            <div className='Topnav'>
                <img src={imgUrl} alt=""/>
                <ul>
                    <li>博文</li>
                    <li>分享</li>
                    <li>更多</li>
                </ul>
                <Search />
            </div>
        )
    }
}

export default Topnav