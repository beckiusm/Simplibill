import React from 'react'
import {Link} from 'react-router-dom'

export default function CustomerListItem(props) {

    const {customerListItem} = props

    return (
        <Link to={`/customer/${customerListItem.id}`}>
            <li className="list-group-item">{customerListItem.name}</li>
        </Link>
    )
}
