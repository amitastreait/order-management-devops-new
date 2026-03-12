function order(orderId){
    console.info('Order Id is order record Id ', orderId);
    /** get order information */
    fetch(orderId)
    .then(result)
    .catch(error)
    .finally()
}