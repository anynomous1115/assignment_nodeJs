class HomeController {
    async index(request, response, next) {
        response.render('home')
    }
    async login(request, response, next) {
        response.render('logIn', { layout: 'login-layout.hbs' })
    }
    async dangKi(request, response, next) {
        response.render('signUp', { layout: 'login-layout.hbs' })

    }
}
module.exports = new HomeController;