var isPerfectSquare = function(num) {
    
    let x= {
        iterator:1,
        ceiling:10
    };
    
    if(num===0){return true}
    
    while(x.iterator < x.ceiling){                         
        x.ceiling = num/x.iterator;

        console.log(x.iterator,x.ceiling)
        
        if(x.ceiling === x.iterator){
            return true
        } 
        else{
            x.iterator++;
        }
    }
    
    return false
    
};
