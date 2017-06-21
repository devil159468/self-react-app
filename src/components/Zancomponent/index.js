import React,{ Component } from 'react'

export default class Zancomponent extends Component{

    renderGoodWorld(goodworld,badworld){
        const isgoodworld = true
        return isgoodworld ? goodworld : badworld
    }


    render () {
        return(
            <div>
                React 小书
                {this.renderGoodWorld(
                    <strong>is good</strong>,<strong>is not good</strong>
                )}
            </div>
        )
    }
}