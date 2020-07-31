<template>
  <tr>
    <td class="product-col col-sm-8 col-md-6">
      <div class="media">
        <a class="thumbnail pull-left" href="#">
          <img class="media-object" :src="item.imageUrl" style="width: 72px; height: 72px;" />
        </a>
        <div class="media-body">
          <h4 class="media-heading">
            <a href="#">{{item.name}}</a>
          </h4>
        </div>
      </div>
    </td>
    <td class="col-sm-1 col-md-1" style="text-align: center">
      <div class="center">
        <div class="input-group">
          <span class="input-group-btn">
            <!-- Decrement item -->
            <button
              type="button"
              class="btn btn-danger btn-number"
              data-type="minus"
              data-field="quant[2]"
            >
              <span>
                <i class="fa fa-minus" aria-hidden="true"></i>
              </span>
            </button>
          </span>
          <!-- Input value -->
          <input type="text" name="quant[2]" class="input-number" value="10" min="1" max="100" />
          <span class="input-group-btn">
            <!-- Increment item -->
            <button
              type="button"
              class="btn btn-success btn-number"
              data-type="plus"
              data-field="quant[2]"
            >
              <span>
                <i class="fa fa-plus" aria-hidden="true"></i>
              </span>
            </button>
          </span>
        </div>
      </div>
    </td>
    <td class="col-sm-1 col-md-1 text-center">
      <strong>${{item.price}}</strong>
    </td>
    <td class="col-sm-1 col-md-1 text-center">
      <strong>${{itemTotal}}</strong>
    </td>
    <td class="col-sm-1 col-md-1">
      <button>
        <button
          class="btn btn-danger btn-sm rounded-0"
          type="button"
          data-toggle="tooltip"
          data-placement="top"
          title="Delete"
        >
          <i class="fa fa-trash"></i>
        </button>
      </button>
    </td>
  </tr>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["item"],

  data() {
    return {
      quantity: null,
      itemTotal: null,
    };
  },

  methods: {
    ...mapActions(["incrementItem", "decrementItem"]),

    setQuantity() {
      this.quantity = this.item.quantity;
    },
    setItemTotal() {
      this.itemTotal = this.item.price * this.quantity;
    },

    handleInputChange() {
      this.itemTotal = this.item.price * this.quantity;
      this.incrementItem(this.item.id);
    },
  },

  async created() {
    await this.setQuantity();
    this.setItemTotal();
  },
};
</script>

<style scoped>
.product-col {
  text-transform: uppercase !important;
}
.center {
  width: 130px;
  margin: auto;
}

.btn-number {
  padding: 2px 4px;
}

.input-number {
  padding: 2px 4px;
  height: auto;
  width: 30px !important;
}
</style>
