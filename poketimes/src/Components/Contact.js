import React from 'react'

const Contact = (props) => {
    // console.log(props);
    setTimeout(()=>{
        props.history.push('/About')
    },2000)
    
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est incidunt obcaecati amet a ipsum totam vitae nisi exercitationem veniam ab eveniet, fugit, ipsam sed id temporibus magnam minus optio tempore!</p>
            <ul className="list">
                <li>email:xyz@yahoo.com</li>
                <li>phone:+9876543210</li>
            </ul>
        </div>
    )
}

export default Contact