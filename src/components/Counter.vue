<template>
  <div>
      <h1>Vuex Counter</h1>
      <h1 class="counter"> {{ counter }} </h1>

      <!-- subracting value from counter -->
      <button @click="subtractFromCounter( parseInt(value) )">-</button>

      <input type="number" v-model="value"/>

      <!-- Here we are passing payload i.e value, adding value to counter-->
      <button @click="addToCounter( parseInt(value) )">+</button>  

      <div>
          <button class="btn" @click="addRandomNumber">Add Random Number</button>
      </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {

    // name of this component
    name: "Counter",


    // to initialize the values
    data() {
        return {
            value: 1,
        }
    },


    // to access the state from the store
    computed: {
        ...mapState(["counter"])
    },


    // to write functionalities and to access mutations, actions from store
    methods: {
        ...mapMutations(["addToCounter", "subtractFromCounter"]),
        ...mapActions(["addRandomNumber"]),

    },


    // 

}
</script>

<style scoped>
    .counter {
        font-size: 3rem;
    }

    button {
        border-radius: 20px;
        background-color: lightgrey;
        width: 2rem;
        height: 2rem;
        border: none;
        font-weight: 700;
        cursor: pointer;
    }

    input {
        padding: 0.4rem;
        margin: 0 0.5rem;
        text-align: center;
    }

    .btn {
        border-radius: 0.5rem;
        width: auto;
        background-color: #41b983;
        margin-top: 1rem;
        color: #ffffff;
        cursor: pointer;
    }
</style>