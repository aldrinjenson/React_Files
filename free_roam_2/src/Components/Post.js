import React, {Component} from 'react'
import axios from 'axios'


class Post extends Component{

    state = {
        post:[]
    }

    componentDidMount(){
        let id = this.props.match.params.path_id;
        
        axios.get('https://jsonplaceholder.typicode.com/posts/'+ id)
        .then(res => {
            this.setState({
                post:res.data
            })
        })
    }

    render(){

        const pst = this.state.post?(
            <div className="post">
                <h3 className="center">{this.state.post.title}</h3>
                <p>{this.state.post.body}</p>
            </div>
        ):(
            <div className="center">Loading post...</div>
        )

        return(
            <div className="container">
                {pst}
            </div>
        )
    }
}

export default Post