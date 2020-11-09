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
    <CustomerStyled className="container text-center my-5">
      <h1> { customer.name } </h1>
      <div className="edit">
        <Link to={`/edit/${customerId}`}>edit</Link>
      </div>

      <table className="table">
        <tbody>
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



    </CustomerStyled>
  )
}