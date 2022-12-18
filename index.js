const inquirer = require ('inquirer')
const cTable = require ('console.table')

const mysql = require('mysql2')
const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    database: "employeeTracker"
});

function viewDepartments(){
    db.promise().query("select * from department;")
    .then(([rows])=> {
        console.table(rows)
    })
}

inquirer.prompt([
    {
        type:"list",
        message:"What would you like to do?",
        name:"UserChoice",
        choices:[
            "view all departments",
            "view all roles",
            "view all employees",
            "add a department",
            "add a role",
            "add an employee",
            "update an employee role"
        ]
    }
]).then((answers) => {
    if (answers.UserChoice == "view all departments"){
        viewDepartments ()
    }
}) 