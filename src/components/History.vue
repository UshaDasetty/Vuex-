<template>
  <div class="container">
      <h2>History of the Random Numbers</h2>

        <div class="flex">
            <p v-for=" (number, index) in historyList " :key="index" :class="activeIndexes(parseInt(value)).includes(index) && 'bold' "> {{number}} </p>
        </div>

        <input type="number" placeholder="Search by index" v-model="value" />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    name: "History",

    data() {
        return {
            value: 0,
        }
    },

    computed: {
        ...mapState(["historyList"]),
        ...mapGetters(["activeIndexes"]),
    }
}
</script>

<style scoped>
    .container {
        margin-top: 7rem;
    }

    .flex {
        display: flex;
        text-align: center;
        width: 25rem;
        margin: 0 auto;
        justify-content: center;
        flex-wrap: wrap;
    }

    .flex p {
        margin: 1rem;
    }

    .bold {
        font-size: 20px;
        font-weight: bold;
    }
</style>