import React from 'react';
import {Link} from "react-router-dom";
import CustomerList from '../components/CustomerList';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <CustomerList/>
        </div>
    );
};

export default Home;
