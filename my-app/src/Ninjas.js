// import React,{Component} from 'react'

// class Ninjas extends Component{
//     render(){
//         const{ninjas} = this.props
//         const ninjaList = ninjas.map((ninj) => {
//             return(
//                 <div className="ninja" key={ninj.id}>
//                     <div>Name: {ninj.name}</div>
//                     <div>Age: {ninj.age}</div>
//                     <div>Belt: {ninj.belt}</div>
//                     <hr/>
//                 </div>
//             )
//             //Here ninj represents each individual ninjas
//         })
//         return(
//             <div className="ninja-list">           
//                 {ninjaList}
//             </div>
//         )
//     }
// }
// export default Ninjas

//changing a container component to a steteless functional component
//Use functional components when we don't need the state and we are primarily concerenc with the UI

import React from 'react'


// const Ninjas = (props) => {
const Ninjas = ({ninjas}) => {  //destructuring directly inside the parameter parenthesis
    // const{ninjas} = props
    const ninjaList = ninjas.map((ninj) => {
        return(
            <div className="ninja" key={ninj.id}>
                <div>Name: {ninj.name}</div>
                <div>Age: {ninj.age}</div>
                <div>Belt: {ninj.belt}</div>
                <hr/>
            </div>
        )
        //Here ninj represents each individual ninjas
    })
    return(
        <div className="ninja-list">           
            {ninjaList}
        </div>
    )

}
export default Ninjas