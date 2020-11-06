class Customer {
  CUSTOMER_URL = 'https://frebi.willandskill.eu/api/v1/customers/'

  fetchCustomerData(customerId, privateHeaders) {
    const customerUrl = this.CUSTOMER_URL + customerId + '/'
    return fetch(customerUrl, { headers: privateHeaders })
  }

}

export default new Customer()