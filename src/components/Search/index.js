import React,{Component} from 'react'
import './index.css'

class Search extends Component{
    render(){
        return(
            <div className='Search'>
                <input type="text" placeholder="搜索全部文章"/>
                <button>搜 索</button>
            </div>
        )
    }
}

export default Search;
