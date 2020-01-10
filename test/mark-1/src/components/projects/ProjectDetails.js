import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id    
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero consequatur amet debitis, vel laudantium aut libero earum dolorem, ratione dolores nobis repellendus, laboriosam architecto eaque natus labore voluptas quod velit!</p>
                </div>
                <div className="card-action grey lighten-3 grey-text">
                    <p>Posted by Aldrin Jenson</p>
                    <p>30th November 2019</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
