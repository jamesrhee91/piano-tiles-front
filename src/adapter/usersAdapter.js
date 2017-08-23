class UsersAdapter {

  constructor() {
    this.baseURL = "http://localhost:3000/api/v1/users"
  }

  createUser(name, score) {
    const userParams = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, score: score })
    }
    return fetch(this.baseURL, userParams).then(res => res.json())
  }

  getHighScores(){
    const highScores = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }
    return fetch(this.baseURL, highScores).then(res => res.json())
  }

}
