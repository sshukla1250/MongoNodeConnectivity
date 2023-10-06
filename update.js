const dbConnect=require('./mongodb');


const update= async ()=>{
    const db= await dbConnect();
    //const result= await db.updateOne({artist:"Sonu Nigam"},{$set:{title:"Super Jhumaka"}});
    const result= await db.updateMany({artist:"Sonu Nigam"},{$set:{title:"Super Jhumaka"}});
console.warn(result.acknowledged+' record updates');
}

update();