const employees = [];

for(let i=1;i<=15;i++){
employees.push({
id:i,
firstName:"Emp"+i,
lastName:"Test",
email:"emp"+i+"@mail.com",
department:["HR","IT","Finance","Marketing","Ops"][i%5],
salary:30000+i*1000,
status: i%2==0 ? "Active":"Inactive"
});
}

let adminUser = {username:"admin",password:"admin123"};