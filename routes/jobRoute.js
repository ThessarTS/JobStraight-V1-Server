const JobController = require('../controllers/jobController')

const router = require('express').Router()

router.get('/', JobController.findAllJobs)
router.post('/', JobController.addNewJob)
router.get('/:id', JobController.findJobById)
router.put('/:id', JobController.editJob)
router.delete('/:id', JobController.deleteJob)

module.exports = router