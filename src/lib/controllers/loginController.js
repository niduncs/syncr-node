const login = (req, res) => {
  if (!req.params.email || !req.params.password) {
    res.status(422);
    return res.json({ success: false, token: null });
  }
  return res.json({ success: true });
};

const register = (req, res) => {
  return res.status(200).json({success: true});
};

export default {
  login,
  register
};
