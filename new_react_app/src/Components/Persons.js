import React from 'react'

const Persons = ({names,deletePerson}) => {

    const personList = names.map(n=>{
        return(
            <div className="card " key={n.id}>
                <p>Name: {n.name}</p>
                <p>Age: {n.age}</p>
                <p>Favourite Food: {n.favFood}</p>
                <button className='btn' onClick={()=>{deletePerson(n.id)}}>Delete Person</button>
                <hr/>
            </div>
        )
    })

    return(
        <div className=" person">
            {personList}
        </div>
    )
}

export default Persons