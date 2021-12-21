import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({

    // to initialize the value (this is method)
    state() {
        return {
            counter: 0,
            historyList: [0],
        }
    },


    // to change the state (this is object) & we add methods here to change the state $ mutations can only deal with synchronous operations
    mutations: {
        addToCounter ( state, payload ) {
            state.counter = state.counter + payload;
            state.historyList.push(state.counter);
        },

        subtractFromCounter ( state, payload ) {
            state.counter = state.counter - payload;
            state.historyList.push(state.counter);
        }
    },


    // actions are used to deal with the asynchronous operations
    actions: {
        async addRandomNumber(context) {
            let randomNumber = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new");
            context.commit("addToCounter", randomNumber.data);
        }
    },


    // getters are used to find or filter the value of specific condition
    getters: {
        activeIndexes: (state) => (payload) => {
            let indexes = [];

            state.historyList.forEach((number, index) => {
                if(number === payload) {
                    indexes.push(index)
                }
            });
            return indexes;
        }
    }
})