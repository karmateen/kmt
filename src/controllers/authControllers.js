const authService = require ('../services/authServices.js');

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

exports.logout = async (req, res, next) => {
  try {
    // Implement logout logic here
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    next(error);
  }
};

exports.register = async (req, res, next) => {
  try {
    const {name, username, email, password } = req.body;
    const user = await authService.register(name,username, email, password);
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};