export default function (context) {
  //   console.log('I am middleware')
  context.$axios
    .$post('https://reqres.in/api/login', {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    })
    .then((res) => {
      if (res.token !== 'test') {
        return context.redirect('/')
      }
    })
}
