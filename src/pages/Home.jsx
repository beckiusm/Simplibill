import React from 'react';
import {Link} from "react-router-dom";
import CustomerList from '../components/CustomerList';

const Home = () => {
    return (
        <div>
            <h1>Your customers</h1>
            <CustomerList/>
            <ul>
                <li><Link to='/addCustomer'>Lägg till ny kund</Link></li>
            </ul>
        </div>
    );
};

export default Home;
