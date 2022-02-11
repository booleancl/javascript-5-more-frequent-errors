function parseUserData(data) {
  return JSON.parse(data)
}
const data = `
  {
    "id": 1,
    "description": "Boolean Academia",
  }
`
parseUserData(data)
