import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'

class Dashboard extends Component {
    render() {
        return (
            <div className="container dashboard">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList/>
                    </div>
                    <div className="col m5 s12 offset-m1">
                        <Notifications/>
                    </div>

                </div>
            </div>
        )
    }
}

export default Dashboard
