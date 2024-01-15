

module.exports = {
    about,
    signUp,
    logOut,
}

async function about(req, res){
    res.render('sitePages/about', {title: "Product Compare"});
}

async function signUp(req, res){
    res.render('sitePages/signUp', {title: "Product Compare"})
}

async function logOut(req, res){
    res.render('sitePages/logOut', {title: "Product Compare"})
}
