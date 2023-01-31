const {insertToDb,findAllFromDb,updateToDB,deleteFromDB} = require("../database/connections")

const insertEmployeeData = async function(req,res){
   const employeeData = req.body;
   try {
      if (employeeData && employeeData.length > 0){
          const response = await insertToDb(employeeData)
          console.log(response)
          return res.status(200).send({success: response.acknowledged});
      }
   } catch (error) {
      console.log("Error occur in saving data",error)
      return res.status(200).send({message:"something went wrong"})
   }
}


 const getEmployee1Data = async function(req, res){

   try {
     const employees = await findAllFromDb()
     return res.status(200).send({employeesData: employees});
 
  } catch (error) {
     console.log("Error occur in  fetching data",error)
     return res.status(200).send({message:"something went wrong"})
  }
 }

 const getEmployee2Data = async function(req, res){
   const query = {salary:{$gt:30000}}
   console.log("query",query)
   try {
     const employees = await findAllFromDb(query)
     return res.status(200).send({employeesData: employees});
 
  } catch (error) {
     console.log("Error occur in  fetching data",error)
     return res.status(200).send({message:"something went wrong"})
  }
 }
 const getEmployee3Data = async function(req, res){
   const query = { overallExp: { $gt: 2 } }
   console.log("query",query)
   try {
     const employees = await findAllFromDb(query)
     return res.status(200).send({employeesData: employees});
 
  } catch (error) {
     console.log("Error occur in  fetching data",error)
     return res.status(200).send({message:"something went wrong"})
  }
 }

 const getEmployee4Data = async function(req, res){
   const query = { yearGrad: { $gt: 2015 }, overallExp: {$gt: 1}}
   console.log("query",query)
   try {
     const employees = await findAllFromDb(query)
     return res.status(200).send({employeesData: employees});
 
  } catch (error) {
     console.log("Error occur in  fetching data",error)
     return res.status(200).send({message:"something went wrong"})
  }
 }

 const getEmployee5Data = async function(req,res){
   const filter = {salary:{$gt:70000 }};
   const update = {salary:65000}
   const changedData = {
     $set: update
   }
    try {
      const employees = await updateToDB(filter,changedData)
 
      return res.status(200).send({success: employees.acknowledged});
  
   } catch (error) {
      console.log("Error occur in  updating data",error)
      return res.status(200).send({message:"something went wrong"})
   }
  
 }


const getEmployee6Data = async function(req,res){
   const query = { lastCompany:"Y" };
   try {
      const employees = await deleteFromDB(query)
      return res.status(200).send({"Deleted the data -> ": query});
  
   } catch (error) {
      console.log("Error occur in deleting data",error)
      return res.status(200).send({message:"something went wrong"})
   }
 }


module.exports = {insertEmployeeData, getEmployee1Data, getEmployee2Data, getEmployee3Data, getEmployee4Data, getEmployee5Data, getEmployee6Data}