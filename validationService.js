const validationService={
validateEmployee:(data)=>{
let err={};
if(!data.firstName) err.firstName="Required";
if(!data.email) err.email="Required";
return err;
}
};