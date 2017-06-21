import React ,{ Component } from 'react'

export default class LikeButton extends Component {
    constructor () {
        super()
        this.state = { isLiked: true }
    }

    handleClickOnLikeButton () {
        this.setState({
            isLiked: !this.state.isLiked
        })
        console.log(this)
    }

    render () {
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? '点赞👍' : '取消'}
            </button>
        )
    }
}