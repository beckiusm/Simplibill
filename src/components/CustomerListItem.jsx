import React from 'react'
import {Link} from 'react-router-dom'

export default function CustomerListItem(props) {

    const {customerListItem} = props

    return (
        <tr>
            <td>
                <Link to={`/customer/${customerListItem.id}`}>{customerListItem.name}</Link>
            </td>
            <td>{customerListItem.phoneNumber}</td>
            <td>{customerListItem.email}</td>
        </tr>
    )
}
