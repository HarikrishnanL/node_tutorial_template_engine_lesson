exports.get404 = (req, res, next) => {
    // res.status(404).send('<h1>page not found </h1>');
    // res.status(404).sendFile(path.join(rootDir, './', 'Views', 'notfound.html'));
    res.status(404).render('404', { pageTitle: 'Page Not Found with ejs' });
}