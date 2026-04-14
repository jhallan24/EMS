const dashboardService={

getSummary:()=>{
let d=employeeService.getAll();
return {
total:d.length,
active:d.filter(e=>e.status=="Active").length,
inactive:d.filter(e=>e.status=="Inactive").length,
departments:new Set(d.map(e=>e.department)).size
};
},

getRecent:(n)=>{
return [...employeeService.getAll()].slice(-n);
},

getDept:()=>{
let res={};
employeeService.getAll().forEach(e=>{
res[e.department]=(res[e.department]||0)+1;
});
return res;
}

};