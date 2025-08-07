function displayHomePage(req, res) {
  res.render(`${__dirname}/../views/home.pug`);
}

export { displayHomePage };
