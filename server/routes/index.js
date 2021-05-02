const productController = require('../controllers').productController;
const locationController = require('../controllers').locationController;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the JLS Demo API!',
  }));

  app.get('/api/products', productController.pagination);
  app.get('/api/locations/:id', locationController.getLocations);
  app.put('/api/location/:id', locationController.updateQuantity);
};