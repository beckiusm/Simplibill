import React from 'react'

export default function DetailCustomer(props) {
    const customerId = props.match.params.id
    return (
        <div>
            customerId: {customerId}
        </div>
    )
}
