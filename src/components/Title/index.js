import React,{ Component } from 'react'

export default class Title extends Component{
    handleClickOnTitle(word,e){
        console.log( this, word );
    }


    render () {
        return(
            <h1 onClick={this.handleClickOnTitle.bind(this,'Hello')}>React 点击事件组件</h1>
        )
    }
}