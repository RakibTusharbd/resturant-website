import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h2 className='fw-bolder'>Blog Answer:</h2>
            <div className='blog1'>
                <h4>1. Frist Question : <span><small>Tell us the differences between uncontrolled and controlled components?</small></span></h4>
                <h4>Answer:</h4> 
                <p><small>Controlled components are managed by a parent component, while uncontrolled <br />
                components manage their own state independently. Controlled components offer greater <br />
                control over the state and behavior of the application, while uncontrolled components can <br />
                be more efficient when dealing with user input.</small></p>  
            </div>
            <div className='blog2'>
                <h4>2.Second Question: <span><small>How to validate React props using PropTypes?</small></span></h4>
                <h4>Answer:</h4> 
                <p><small>PropTypes will validate the types of the props passed to the component and display a <br />
                warning in the console if any of the passed props are of the wrong type or missing. The <br />
                'isRequired' keyword can be used to specify that a prop is required.
                </small></p>
            </div>
            <div className='blog3'>
                <h4>3.Thired Qustion: <span><small>Tell us the difference between nodejs and express js?</small></span></h4>
                <h4>Answer:</h4> 
                <p><small>Express is a minimal and flexible node. js web 
                application framework,  providing a robust set of    
               features for building single <br />  and multi-page,  and hybrid 
                web applications. On the other hand, Node. js is
                detailed as "A platform built on  <br /> Chrome's  JavaScript 
                runtime for easily building fast, scalable network 
                applications".
                </small></p>
            </div>
            <div className='blog4'>
                <h4>4.Four Question: <span><small>What is a custom hook, and why will you create a custom hook?</small></span></h4>
                <h4>Answer:</h4> 
                <p><small>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily,  which makes the code cleaner and reduces the time to write <br /> the code. It also enhances the rendering speed of the code as a custom hook does not need to be <br /> rendered again and again while rendering the whole code</small></p>
            </div>
        </div>
    );
};

export default Blog;