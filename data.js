const users = [
    { id: 1, username: 'john', password: 'password1' },
    { id: 2, username: 'jane', password: 'password2' },
    { id: 3, username: 'alex', password: 'password3' },
    { id: 4, username: 'emma', password: 'password4' },
    { id: 5, username: 'michael', password: 'password5' },
    
  ];
  
  function getUsers() {
    return users;
  }
  function addUser(user) {
    users.push(user);
  }
  
  module.exports = {
    getUsers,
    addUser,
  };