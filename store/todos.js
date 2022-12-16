export const state = () => ({
  list: [{ todo: 'todo', done: false }],
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false,
    })
  },
}
