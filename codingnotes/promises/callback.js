
const p = false
const f = false




// cb1,cb2 are success and cb3 is failure

function getTextSync(cb1,cb2,cb3){

    let name,message;


    if(p){
         name = ' cat white'
         message = 'this is my pet'
         cb1(name + ' ' + message)

    }
    else if(f){
         name = 'cat grey'
         message = 'this is my pet'
         cb2(name + ' ' + message)

    }
    else{
         name = 'no cat'
         message = 'sad no pets'
         cb3(name + ' ' + message)

    }



}



getTextSync((message)=>{
    console.log(message,'this is the first callback')
},(message)=>{
    console.log(message,'this is the second callback')
},(error)=>{
    console.log(error,'this is the third callback')
})



const getFileSync = () => {


    let name,message;


  return new Promise((resolve,reject)=>{
    
    
    if(p){
        name = ' dog white'
        message = 'this is my pet'
       //  cb1(name + ' ' + message)
       resolve(name+' '+message)


   }
   else if(f){
        name = 'dog grey'
        message = 'this is my pet'
        resolve(name+' '+message)

   }
   else{
        name = 'no dog'
        message = 'sad no pets'
        reject(name+' '+message)


   }

  })

}

getFileSync().then(message=>{
    console.log(message)
}).catch(err=>{
    console.log(err)
})



const tradeOne = new Promise((resolve,reject)=>{

    resolve({message:'text from one',key:5});

})


const tradeTwo = new Promise((resolve,reject)=>{
    let twoApple = 'apple'
    let twoWives = 'orange'
     resolve({twoApple,twoWives});

})
const tradeThree = new Promise((resolve,reject)=>{

     resolve({message:'text from three'});

})


Promise.all([
    tradeOne,
    tradeTwo,
    tradeThree,
]).then(messages => {
    console.log(messages)
})







