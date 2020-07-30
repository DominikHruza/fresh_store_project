<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-10 col-md-offset-1">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th class="text-center">Price</th>
              <th class="text-center">Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <cart-item></cart-item>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <h3>Total</h3>
              </td>
              <td class="text-right">
                <h3>$31.53</h3>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button type="button" class="btn btn-default">
                  <span class="glyphicon glyphicon-shopping-cart"></span>
                  Continue Shopping
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-success">
                  Checkout <span class="glyphicon glyphicon-play"></span>
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "../components/CartItem";
export default {
  components: {
    CartItem,
  },
};
</script>
