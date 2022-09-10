


function oddishOrEvenish(num){
    let NumArray=[]
    let NumToString=num.toString()
    
    let StrArray=NumToString.split("")
    
    StrArray.forEach((item,index,array)=>{
      NumArray.push(Number(array[index]))
    })
    
    
    function Sum(accumulator,n){
     return accumulator+n
    }
    
    let SumArray=NumArray.reduce(Sum,0)
    
    
    if(SumArray%2==0){
        console.log("Even")
    }else{
        console.log("Odd")
    }
}
oddishOrEvenish(423)