import React,{Component} from 'react'
import axios from 'axios'

class Home extends Component{

    state = {
        posts:[]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{  //parameter is the response recieved
            // console.log(res)
            this.setState({
                posts:res.data.slice(0,10)
                //we are taking only the first 10 of the response recieved
            })
        })
    }

    render(){
        const {posts} = this.state  //using destructuring to store all the data from state to posts(variable has to be of the same name) 
        const postList = posts.length ?(
            posts.map(p=>{
                return(
                    <div className="card post" key={p.id}>
                        <div className="card-content">
                            <span className="card-title">{p.title}</span>
                            <p>{p.body}</p>
                        </div>
                    </div>
                )
            })
        ):(
            <div className="center">No Posts yet</div>
        )
        return(
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

export default Home