const users = [];
const data =require('../data')


exports.registerUser = (req, res) => {
  const { username, password } = req.body;
  const id= data.getUsers().length +1;
  const user = { id, username, password };
  data.addUser(user);
  res.status(201).json({ message: 'User registered successfully',user });
};

exports.loginUser = (req, res) => {
  const allUsers = data.getUsers();
  const { username, password } = req.body;
  
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
  
  if (user.password !== password) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
  
  const token = generateToken(user);
  res.json({ token });
};

exports.getAllUsers = (req, res) => {
  const allUsers = data.getUsers();
 res.json(allUsers)
};

exports.getUserById = (req, res) => {
  const { id } = req.params;
  const users = data.getUsers();
  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};


exports.updateUser = (req, res) => {
  const { id } = req.params;
  const users= data.getUsers();
  const { username, password } = req.body;
  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  user.username = username;
  user.password = password;
  res.json({ message: 'User updated successfully' });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const users= data.getUsers();
  const userIndex = users.findIndex((user) => user.id === parseInt(id));
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users.splice(userIndex, 1);
  res.json({ message: 'User deleted successfully' });
};

function generateToken(user) {
  const token = 'your_generated_token';
  return token;
}
