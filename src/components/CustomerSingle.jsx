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

  return (
    <CustomerStyled className="container my-5">
      <h1 className="text-center my-5"> Customer details </h1>
      <table className="table">
        <tbody>
          <tr>
            <th>Name</th>
            <td> { customer.name } </td>
          </tr>
          <tr>
            <th>Organization nr.</th>
            <td> { customer.organisationNr } </td>
          </tr>
          <tr>
            <th>Var nr.</th>
            <td> { customer.vatNr } </td>
          </tr>
          <tr>
            <th>Reference</th>
            <td> { customer.reference } </td>
          </tr>
          <tr>
            <th>PaymentTerm</th>
            <td> { customer.paymentTerm } </td>
          </tr>
          <tr>
            <th>Website</th>
            <td> { customer.website } </td>
          </tr>
          <tr>
            <th>E-mail</th>
            <td> { customer.email } </td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td> { customer.phoneNumber } </td>
          </tr>
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