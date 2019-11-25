import React from 'react'
import Rainbow from '../hoc/Rainbow'


const About = () => {
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est incidunt obcaecati amet a ipsum totam vitae nisi exercitationem veniam ab eveniet, fugit, ipsam sed id temporibus magnam minus optio tempore!</p>
        </div>
    )
}

export default Rainbow(About)