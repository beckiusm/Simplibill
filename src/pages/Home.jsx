import React from 'react';
import CustomerList from '../components/CustomerList';

const Home = () => {
    return (
        <div>
            <h1 className="mt-3 mb-3">Your customers</h1>
            <CustomerList/>
        </div>
    );
};

export default Home;
