import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>terms And Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae molestias assumenda nostrum officia labore, vel eligendi, praesentium quae eius natus laudantium hic.</p>
            <p>Go Back to  <Link to='/register'>Register</Link> </p>
        </div>
    );
};

export default Terms;