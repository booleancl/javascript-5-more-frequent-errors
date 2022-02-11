function getSocialNetworkData() {
  try {
    const userData = {
      id: 1,
      socialNetworks: {
        facebook: { username: 'boolean-academia-spa' },
      }
    }
    const linkedinUsername = userData.socialNetworks.linkedin.username;

  } catch (error) {
    console.log(`Error Type: ${error.name}`)
    console.log(`Error Message: ${error.message}`)
    console.log(`Error Stack: ${error.stack}`)
  }
}
getSocialNetworkData()