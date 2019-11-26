import React,{Component} from 'react'
import axios from 'axios'

class Post extends Component{

    state = {
        post:null
    }

    componentDidMount(){
        let id = this.props.match.params.post_id
        // console.log(id);
        // console.log(this.props);
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(res => {
            this.setState({
                post:res.data
            })

        })
    }
    
    render(){

        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <h6>{this.state.post.body}</h6>
            </div>
        ):(
            <div className="center">Loading Post ....</div>
        )

        return(
            <div className="container">
                <h4>{post} </h4>
            </div>
        )
    }

}

export default Post



