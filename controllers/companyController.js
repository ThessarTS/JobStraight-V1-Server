const { Company } = require('../models/index')

class CompanyController {
    static async findAllCompanies(req, res, next) {
        try {
            let companies = await Company.findAll()
            res.json(companies)
        } catch (error) {
            next(error)
        }
    }

    static async findCompanyById(req, res, next) {
        try {
            let company = await Company.findByPk(req.params.id)
            res.json(company)
        } catch (error) {
            next(error)
        }
    }

    static async addNewCompany(req, res, next) {
        try {
            await Company.create(req.body)
            res.status(201).json({ message: 'success add new Company' })
        } catch (error) {
            next(error)
        }
    }

    static async editCompany(req, res, next) {
        try {
            await Company.update(req.body, {
                where: { id: req.params.id }
            })
            res.json({ message: 'success edit Company' })
        } catch (error) {
            next(error)
        }
    }

    static async deleteCompany(req, res, next) {
        try {
            await Company.destroy({
                where: { id: req.params.id }
            })
            res.json({ message: `Company with id ${req.params.id} deleted` })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = CompanyController