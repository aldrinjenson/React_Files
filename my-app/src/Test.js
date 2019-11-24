// import React,{Component} from 'react'

// class Test extends Component{
//     render(){
//         const{ninjas} = this.props
//         const{ninjaList} = ninjas.map((n)=>{
//             return(
//                 <div className="ninja-list">
//                     <div>{n.name}</div>
//                     <div>{n.age}</div>
//                     <div>{n.belt}</div>
//                 </div>
//             )
//         })
//         return(
//             {ninjaList}
//         )
//     }
// }
// export default Test
import React,{Component} from 'react'

class Test extends Component{
    render(){
        const{test} = this.props
        const ninjaList = test.map((ninj) => {
            return(
                <div className="ninja-list">
                    <div>Name: {ninj.name}</div>
                    <div>Age: {ninj.age}</div>
                    <div>Belt: {ninj.belt}</div>
                    <hr/>
                </div>
            )
        })
        return(
            <div>           
                {ninjaList}
            </div>
        )
    }
}
export default Test