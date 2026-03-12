function order(orderId){
    console.info('Order Id is order record Id ', orderId);
    /** get order information */
    /** fetch the Order Details using the API */
    fetch(`/api/orders/${orderId}`)
    .then(response => response.json())
    .then(orderDetails => {
        console.info('Order Details:', orderDetails);
    })
    .catch(error => {
        console.error('Error fetching order details:', error);
    });
}