const dbConnect=require('./mongodb');

const deleteRecord =  async ()=>{
    const db= await dbConnect();
    //const result= await db.deleteOne({artist:"Rafeek"});
    const result= await db.deleteMany({artist:"Sonu Nigam"});
console.log(result.deletedCount);
}
deleteRecord();