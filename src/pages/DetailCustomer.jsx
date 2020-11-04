import React from 'react';

const DetailCustomer = (props) => {
    const customerId = props.match.params.id;
    return (
        <div>
            {console.log(customerId)}
        </div>
    );
};

export default DetailCustomer;
