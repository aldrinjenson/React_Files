import React from 'react'

const Ninjas = ({ninjas}) => {
    const NinjaList = ninjas.map((n)=>{
        return(
            <div>
                <div>Name:{n.name}</div>
                <div>Age:{n.age}</div>
                <div>Belt:{n.belt}</div>
                <hr/>
            </div>
        )
    });


    return(
        <div className="ninjaList">
            {NinjaList}
        </div>
    )
    
}

export default Ninjas
