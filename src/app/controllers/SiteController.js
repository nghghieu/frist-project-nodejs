class SiteController {
  // [GET] /
  index(req, res) {
    res.render('home');
  }
  // [GET] /search
  search(req, res) {
    res.send('New DETAIL');
  }
}

module.exports = new SiteController();
