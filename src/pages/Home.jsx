import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    /**
     * Temp!
     */
    const tempCustomerID = 3363

    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li><Link to={`/customer/${tempCustomerID}`}>Detail page for customer {tempCustomerID} </Link></li>
                <li><Link to='/addCustomer'>Lägg till ny kund</Link></li>
            </ul>
        </div>
    );
};

export default Home;
