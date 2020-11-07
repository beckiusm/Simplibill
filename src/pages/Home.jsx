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
                <li><Link to='/edit/3463'>Ändra kund</Link></li>
                <li><Link to='/addCustomer'>Lägg till ny kund</Link></li>
            </ul>
        </div>
    );
};

export default Home;
