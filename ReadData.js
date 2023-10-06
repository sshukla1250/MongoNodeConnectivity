const dbConnect=require('./mongodb');

// first way using promises/using then method
dbConnect().then((resp) =>{
    resp.find({artist:"Artist 2222"}).toArray().then((data) =>{
        console.log(data);
    })
});

//second way using method/using await

// const main=async ()=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data);
// }
// main();
