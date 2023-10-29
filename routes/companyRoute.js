const CompanyController = require('../controllers/companyController')

const router = require('express').Router()

router.get('/', CompanyController.findAllCompanies)
router.post('/', CompanyController.addNewCompany)
router.get('/:id', CompanyController.findCompanyById)
router.put('/:id', CompanyController.editCompany)
router.delete('/:id', CompanyController.deleteCompany)

module.exports = router