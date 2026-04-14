let session=false;

const authService={
login:(u,p)=>{
if(adminUser.username===u && adminUser.password===p){
session=true; return {success:true};
}
return {success:false};
},
logout:()=>session=false,
isLoggedIn:()=>session
};