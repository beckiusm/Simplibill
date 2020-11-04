import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    /**
     * Temp!
     */
    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li><Link to='/customer/1'>Temp Link</Link></li>
            </ul>
        </div>
    );
};

export default Home;
