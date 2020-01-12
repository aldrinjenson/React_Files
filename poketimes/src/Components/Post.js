import React, { Component } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

class Post extends Component {

    // state = {
    //     post:null,
    //     id:null
    // }

    // componentDidMount(){
    //     var id = this.props.match.params.post_id
    //     // console.log(id);
    //     // console.log(this.props);
    //     axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
    //     .then(res => {
    //         this.setState({
    //             post:res.data,
    //             id
    //         })

    //     })
    // }

    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')

    }

    render() {
        const post = this.props.post ? (
            <div className="post">
                <p className="green red-text lighten-3">Post {this.props.post.id}</p>
                <h4 className="center">{this.props.post.title}</h4>
                <h6>{this.props.post.body}</h6>
            </div>
        ) : (
                <div className="center">Loading Post ....</div>
            )


        return (
            <div className="container">
                <h4>{post} </h4>
                <div className='center'>
                    <button className='btn grey' onClick={this.handleClick}>
                        Delte Post
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)