import React from 'react'

const NinjaList = ({ninjas,deleteNinja}) => {
    let count = 1
    const list = ninjas.map(n=>{
        return(
            <div className="table" key={n.id}>
                <tr>
                    <td>{count++}.</td>
                    <td>{n.name}</td>
                    <td>{n.age}</td>
                    <td>{n.belt}</td>
                    <button className="btn-small blue lighten-1" onClick={ ()=>{deleteNinja(n.id)} }>Delete Ninja</button>
                </tr>
            </div>
        )

    })

    return (
        <div className='list'>
         <table className=''>
             <th>
                 <tr>
                     <td>Sl.No</td>
                     <td>Name</td>
                     <td>Age</td>
                     <td>Belt</td>
                 </tr>
             </th>
            <tbody>
                {list}
            </tbody>
        </table>
        </div>
    )
}

export default NinjaList
