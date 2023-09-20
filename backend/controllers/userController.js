const registerUser = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please enter all fields');
  }
  res.json({
    message: `Register User`,
  });
};

const loginUser = (req, res) => {
  res.json({
    message: `Login User`,
  });
};

const getMe = (req, res) => {
  res.json({
    message: `User data display`,
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
