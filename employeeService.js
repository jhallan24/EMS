const employeeService={

getAll:()=>storageService.getAll(),

add:(data)=>{
data.id=storageService.nextId();
storageService.add(data);
},

update:(id,data)=>storageService.update(id,data),

remove:(id)=>storageService.remove(id),

applyFilters:(search,dept,status)=>{
return storageService.getAll().filter(e=>{
return (
(e.firstName.toLowerCase().includes(search) || e.email.includes(search)) &&
(dept==="All"|| e.department===dept) &&
(status==="All"|| e.status===status)
);
});
}

};