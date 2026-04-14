const uiService={

cards:(s)=>{
$("#cards").html(`
<div class="col-md-3"><div class="card-box blue">Total ${s.total}</div></div>
<div class="col-md-3"><div class="card-box green">Active ${s.active}</div></div>
<div class="col-md-3"><div class="card-box red">Inactive ${s.inactive}</div></div>
<div class="col-md-3"><div class="card-box orange">Dept ${s.departments}</div></div>
`);
},

table:(data)=>{
let html="";
data.forEach(e=>{
html+=`
<tr>
<td>${e.id}</td>
<td>${e.firstName}</td>
<td>${e.email}</td>
<td>${e.department}</td>
<td>${e.salary}</td>
<td>${e.status}</td>
<td>
<button onclick="edit(${e.id})">Edit</button>
<button onclick="del(${e.id})">Delete</button>
</td>
</tr>`;
});
$("#table").html(html);
},

recent:(data)=>{
let html="";
data.forEach(e=> html+=`<li class="list-group-item">${e.firstName}</li>`);
$("#recentList").html(html);
},

dept:(d)=>{
let html="";
for(let k in d){
html+=`<tr><td>${k}</td><td>${d[k]}</td></tr>`;
}
$("#deptTable").html(html);
}

};