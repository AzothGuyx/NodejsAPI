const {createContainer,asClass,asValue,asFunction} = require('awilix');

//config
const config = require('../config');
const app =require('./index');

//Services
const {HomeService} = require('../services');

//Controllers
const {HomeController} = require('../controllers');

//Routes
const {HomeRoutes} = require('../routes/index.routes');
const Routes =require('../routes');

//models
const {User,Comment,Idea} = require('../models');

//repository
const {CommentRepository,IdeaRepository,UserRepository} = require('../repositories');

const container = createContainer();

container
.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config:asValue(config)
}).register({
    HomeService: asClass(HomeService).singleton()
}).register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
}).register({
    HomeRoutes : asFunction(HomeRoutes).singleton()
}).register({
    User : asValue(User),
    Comment: asValue(Comment),
    Idea: asValue(Idea)
}).register({
    CommentRepository : asClass(CommentRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    UserRepository: asClass(UserRepository).singleton(),
});


module.exports= container;