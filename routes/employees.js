const express = require("express")
const router = express.Router();
const employeeController = require('../controllers/employees')

router.post('/employee',employeeController.insertEmployeeData)
router.get('/employee1',employeeController.getEmployee1Data)
router.get('/employee2',employeeController.getEmployee2Data)
router.get('/employee3',employeeController.getEmployee3Data)
router.get('/employee4',employeeController.getEmployee4Data)
router.put('/employee5',employeeController.getEmployee5Data)
router.delete('/employee6',employeeController.getEmployee6Data)

module.exports = router;