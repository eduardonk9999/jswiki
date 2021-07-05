function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
  this.login = function() {
    console.log(this.email, 'has logged in')
  }
}



var userOner = new User('edu@gmail.com', 'Edu')
var userTwo = new User('silva@gmail', 'Silva')