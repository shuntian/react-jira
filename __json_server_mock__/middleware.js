module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/login') {
    const { username, password } = req.body;
    // for (let i = 0; i < 10000 * 10000; i ++) {};
    if (username === 'alex' && password === '123456') {
      res.status(200).json({
        user: {
          name: username,
          token: 'aaaaa',
        },
      });
      return;
    } else {
      return res.status(400).json({ message: '用户名或密码错误' });
    }
  }
  if (req.method === 'POST' && req.path === '/register') {
    const { username, password } = req.body;
    if (username === 'aaa') {
      res.status(400).json({
        message: '用户名已存在',
      });
      return;
    }
    if (username && password) {
      res.status(200).json({
        user: {
          name: username,
          token: 'aaaaa',
        },
      });
      return;
    } else {
      res.status(400).json({
        message: '用户名或密码不能为空',
      });
      return;
    }
  }
  if (req.method === 'GET' && req.path === '/me') {
    if (Math.random() * 10 < 8) {
      res.status(200).json({
        user: {
          name: 'alex',
          token: 'aaaaa',
        },
      });
      return;
    }
    res.status(500).json({ message: '服务器异常, 正在抢修, 请稍后...' });
    return;
  }
  next();
};
