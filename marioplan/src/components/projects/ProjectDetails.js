import React from 'react'

const ProjectDetails = (props)=> {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi nam non quaerat, sed amet consequuntur aliquid corrupti minus rerum facere, doloremque culpa commodi illum et explicabo quis at sequi!</p>
                </div>
                <div className="card-action grey lighten-3 grey-text">
                    <div>Posted by Net Ninja</div>
                    <div>2nd September 2 AM</div>
                </div>
            </div>
        </div>
    )
    
}

export default ProjectDetails

