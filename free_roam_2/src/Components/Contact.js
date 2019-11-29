import React from 'react';

const Contact = (props) =>{
    setTimeout(()=>{
        props.history.push('/about')
    },2000)
    
    return(
        <div className="container">
            <h2 className="center">Contact</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptas doloremque, excepturi illum error asperiores animi culpa distinctio consequatur et nesciunt architecto aliquid enim maxime laboriosam nulla est exercitationem a?</p>
        </div>
    )
}

export default Contact