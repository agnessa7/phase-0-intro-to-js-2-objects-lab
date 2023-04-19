// Write your solution in this file!
// function updateEmployeeWithKeyAndValue(employee, key, value){
//     return{
//         ...employee,
//         [key]: value,
//     };
// }
// const employee ={
//     name: "Sam",
//     streetAddress: "11 Broadway",  
// };

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
//     employee[key] = value
    
//     return employee;
// };
// function deleteFromEmployeeByKey(employee, key, value){
//    const newEmployee = {...employee}
//    newEmployee[key] = value
//    delete newEmployee.key;
   
//    return newEmployee;
// }
// function destructivelyDeleteFromEmployeeByKey(employee, key, value){
//     employee[key] = value
//     delete employee.key;

//     return employee;

// }

const employee = {
    name: "Sam" ,
    streetAddress: "11 Broadway",

}
const updateEmployeeWithKeyAndValue = (employee ,key, value) => {
    return{
        ...employee,
        [key]: value
    };
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
   employee [key] = value
    return employee;
}

const deleteFromEmployeeByKey = (employee, key) => {
    return{
        ...employee
       [key]
    };
   
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
     delete employee[key];
     return employee;
    
}