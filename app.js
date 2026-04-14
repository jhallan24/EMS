let editId=null;

$(function(){

$("#loginForm").submit(function(e){
e.preventDefault();

let r=authService.login($("#username").val(),$("#password").val());

if(r.success){
$("#loginSection").hide();
$("#dashboardSection").removeClass("d-none");
loadDashboard();
}else alert("Invalid");
});

$("#employeeNav").click(()=>{
$("#dashboardSection").addClass("d-none");
$("#employeeSection").removeClass("d-none");
loadEmployees();
});

$("#dashboardNav").click(()=>{
$("#employeeSection").addClass("d-none");
$("#dashboardSection").removeClass("d-none");
});

$("#search,#deptFilter,#statusFilter").on("input change",()=>{
loadEmployees();
});

$("#addBtn").click(()=>{
editId=null;
$("#empModal").modal("show");
});

$("#saveBtn").click(()=>{
let data={
firstName:$("#firstName").val(),
lastName:$("#lastName").val(),
email:$("#email").val(),
department:$("#department").val(),
salary:$("#salary").val(),
status:$("#status").val()
};

if(editId){
employeeService.update(editId,data);
}else{
employeeService.add(data);
}

$("#empModal").modal("hide");
loadEmployees();
loadDashboard();
});

window.edit=(id)=>{
editId=id;
$("#empModal").modal("show");
};

window.del=(id)=>{
employeeService.remove(id);
loadEmployees();
loadDashboard();
};

function loadDashboard(){
let s=dashboardService.getSummary();
uiService.cards(s);
uiService.recent(dashboardService.getRecent(5));
uiService.dept(dashboardService.getDept());
}

function loadEmployees(){
let data=employeeService.applyFilters(
$("#search").val()||"",
$("#deptFilter").val(),
$("#statusFilter").val()
);
uiService.table(data);
}

});