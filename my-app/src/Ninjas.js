//note: for destructuring, the names have to be the same
import React from 'react'
const Ninjas = ({ninjas}) => {
    //using ternary operator
    // const NinjaList = ninjas.map(n => {
    //     return n.age>20? (
    //         <div className="ninja" key={n.id}>
    //         <div>Name:{n.name}</div>
    //         <div>Age:{n.age}</div>
    //         <div>belt:{n.belt}</div>
    //     </div>)
    //     :null

    // })

    const NinjaList = ninjas.map((n)=>{
        if(n.age>20) //Conditional outputting
        return(
            <div className="ninja" key={n.id}>
                <div>Name:{n.name}</div>
                <div>Age:{n.age}</div>
                <div>belt:{n.belt}</div>
            </div>
        )
        else
            return null
    })

    return(
        <div className="ninjaList">
            {NinjaList}
        </div>
    )
}

export default Ninjas