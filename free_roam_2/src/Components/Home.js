import React ,{Component}from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Pokeball from '../pokeball.png'

class Home extends Component{

    state = {
        posts:[]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({
                posts:res.data.slice(0,10)
            })            
        })
    }

    render(){
        const {posts} = this.state
        const postList = posts.length?(
            posts.map(p =>{
                return(
                    <div className="card post" key={p.id}>
                        <img src={Pokeball} alt="Pokeball"/>
                        <div className="card-content">
                            <Link to={"/" + p.id}>
                                <span className="card-title">{p.title}</span>
                            </Link>
                            <p>{p.body}</p>
                        </div>
                    </div>
                )
            })
        ):(
            <div className="center">
                <p>No posts Currently..</p>
            </div>
        )
        return(
            <div className="container home">
                <h2 className="center">Home</h2>
                {postList}
            </div>
        )
    }
}

export default Home