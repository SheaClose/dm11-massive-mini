module.exports = {
  getPlanes(req, res) {
    const db = req.app.get("db");
    db.get_planes().then(resp => {
      return res.status(200).json(resp);
    });
  }
};
