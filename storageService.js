const storageService = {
getAll:()=>employees,
add:(e)=>employees.push(e),
update:(id,data)=>{
let i=employees.findIndex(e=>e.id==id);
employees[i]={...employees[i],...data};
},
remove:(id)=>{
let i=employees.findIndex(e=>e.id==id);
employees.splice(i,1);
},
nextId:()=>employees.length+1
};