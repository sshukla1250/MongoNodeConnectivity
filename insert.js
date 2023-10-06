const dbConnect= require('./mongodb');

const insert =async ()=>{
    const db=await dbConnect();
    //const result = await db.insertMany({title:"Song dabang",artist:"Sonu Nigam",album:"Album34"});

    const result = await db.insertMany(
        [{
         title:"Song dabang",
        artist:"Sonu Nigam",
        album:"Album34"
        },
        {
            title:"Song dabang",
           artist:"Sonu Nigam",
           album:"Album34"
           },
           {
            title:"Song dabang",
           artist:"Sonu Nigam",
           album:"Album34"
           }]
    );
    if(result.acknowledged){
       console.log('data inserted!'); 
    }
}

insert();