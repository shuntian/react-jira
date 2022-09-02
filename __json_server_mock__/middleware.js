module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/login') {
    const { username, password } = req.body;
    if (username === 'alex' && password === '123456') {
      res.status(200).json({
        user: {
          token: '123',
        },
      });
      return;
    } else {
      return res.status(400).json({ message: '用户名或密码错误' });
    }
  }
  next();
};
