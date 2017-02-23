var store = require("../controllers/stores.js")
module.exports = function(app){
  // app.get('/', store.index),
  app.get('/customers', store.showCustomers),
  app.post('/customers', store.addCustomer),
  app.delete('/customers/:id', store.removeCustomer),
  app.get('/products', store.showProducts),
  app.post('/products', store.addProduct),
  app.post('/orders', store.addOrder),
  app.get('/orders', store.showOrders)
}
