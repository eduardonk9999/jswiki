class User {
  constructor(email, name) {
    this.email = email
    this.name = name
    this.score = 0
  }
  login() {
    console.log(this.email, 'just logged in')
    return this
  }
  logout() {
    console.log(this.email, 'just logged out')
    return this
  }
  updateScore() {
    this.score++
    return this
  }
} 

class Admin extends User{
  deletarUser(user) {
    users = users.filter(u => {
      return u.email != user.email
    })
  }
}

var userOner = new User('edu@gmail.com', 'Edu')
var userTwo = new User('silva@gmail', 'Silva')

userOner.login()
userTwo.logout()


var users = [userOne, userTwo];