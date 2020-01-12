import React,{Component} from 'react'
// import axios from 'axios'
import {Link} from 'react-router-dom'
import Pokeball from '../pokeball.png'
import {connect} from 'react-redux';
// Here connect is a function which returns a higher order component 

class Home extends Component{

    // state = {
    //     posts:[]
    // }

    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then((res)=>{  //parameter is the response recieved
    //         // console.log(res)
    //         this.setState({
    //             posts:res.data.slice(0,10)
    //             //we are taking only the first 10 of the response recieved
    //         })
    //     })
    // }



    render(){
        // const {posts} = this.state  //using destructuring to store all the data from state to posts(variable has to be of the same name) 
        console.log(this.props)
        const {posts} = this.props
        const postList = posts.length ?(
            posts.map(p=>{
                return(
                    <div className="card post" key={p.id}>
                        <img src={Pokeball} alt="Pokeball"/>
                        <div className="card-content">
                            <Link to={'/'+p.id}>
                                <span className="card-title red-text">{p.title}</span>
                            </Link>
                            <p>{p.body}</p>
                        </div>
                    </div>
                )
            })
        ):(
            <div className="center">No Posts yet</div>
        )
        return(
            <div className="container home">
                <h4 className="center">Home</h4>
                {/* <p className="container red green-text lighten-4">You have {this.state.posts.length} Posts</p> */}
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        posts:state.posts    
    }
}

export default connect(mapStateToProps)(Home)

// The higher order component returned by the connect function is wrapping around Home