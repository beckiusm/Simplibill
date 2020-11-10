import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const CustomerStyled = styled.div`
  h1 {
    font-weight: normal;
    margin-top: 20px;
    margin-bottom: 0px;
  }
  .edit {
    margin-bottom: 20px;
  }
`

export default function CustomerSingle(props) {
  const { customer, customerId } = props
  const details = {
    'Name':             customer.name,
    'Organization nr.': customer.organisationNr,
    'Var nr.':          customer.vatNr,
    'Reference':        customer.reference,
    'PaymentTerm':      customer.paymentTerm,
    'Website':          customer.website,
    'E-mail':           customer.email,
    'Phone Number':     customer.phoneNumber,
  }

  return (
    <CustomerStyled className="container my-5">
      <h1 className="text-center my-5"> Customer details </h1>
      
      <table className="table">
        <tbody>
          {
           Object.entries(details).map( (detail, index) => {
             return (
              <tr key={index}>
                <th> { detail[0] } </th>
                <td> { detail[1] } </td>
              </tr>
              )
           })
          }
        </tbody>
      </table>

      <div className="edit text-center">
        <Link to={`/edit/${customerId}`}>
          <button className="btn btn-warning float-right">Edit Customer</button>
        </Link>
      </div>



    </CustomerStyled>
  )
}