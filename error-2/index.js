const userService = {
  getUser(){
    // Simulamos que la promesa salió mal
    return Promise.reject()
  }
}
async function getUser() {
  //try {
    const user = await userService.getUser()
  // } catch() {
  //   console.error(error.message)
  // }
}
getUser()
