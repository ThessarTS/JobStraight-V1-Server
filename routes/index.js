const UserController = require('../controllers/userController')
const authentication = require('../middlewares/authentication')

const router = require('express').Router()
const jobs = require('./jobRoute')
const companies = require('./companyRoute')
const JobController = require('../controllers/jobController')
const CompanyController = require('../controllers/companyController')

router.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
})

router.post('/login', UserController.login)
router.get('/pub/jobs', JobController.findAllJobs)
router.get('/pub/jobs/:id', JobController.findJobById)
router.get('/pub/companies', CompanyController.findAllCompanies)

router.use(authentication)

router.post('/register', UserController.register)
router.use('/jobs', jobs)
router.use('/companies', companies)


module.exports = router