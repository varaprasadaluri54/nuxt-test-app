export const state = () => ({
  counter: 1,
})

export const getters = {
  getCounter(state) {
    return state.counter
  },
}
export const mutations = {
  increment(state) {
    state.counter++
  },
}

export const action = {
  fetchCounter({ state }) {
    const res = { data: 10 }
    state.counter = res.data
    return res.data
  },
}
