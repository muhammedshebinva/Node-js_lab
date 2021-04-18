var hello=(data)=>{
    console.log("Data"+data)
}

function hay(callback){
    console.log('heyWorking')
    callback('shebin')
}

hay(hello)

