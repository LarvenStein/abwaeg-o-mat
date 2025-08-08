function displayHomePage(req, res) {
  res.render(`${__dirname}/../views/home.pug`, {
    locales: res.getLocales(),
    currentLocale: res.getLocale(req),
  });
}

export { displayHomePage };
