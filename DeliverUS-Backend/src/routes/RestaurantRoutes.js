import RestaurantController from '../controllers/RestaurantController.js'

const loadFileRoutes = function (app) {
  // TODO: Include routes for restaurant described in the lab session README
  app.route('/restaurants')
    .get(
      RestaurantController.index
    )
    .post(
      RestaurantController.create
    )

  app.route('/restaurants/:restaurantId')
    .put(
      RestaurantController.update
    )
    .get(
      RestaurantController.show
    )
    .delete(
      RestaurantController.destroy
    )
}
export default loadFileRoutes
