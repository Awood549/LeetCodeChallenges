var distributeCandies = function(candies) {
    let candyMap = new Map();
    let result = 0;
    
    
    for(let i=0; i < candies.length; i++){
        
        if(candyMap.has(candies[i])){
            
            if(candyMap.get(candies[i]) === 1){
                result ++
            }
            else{
                candyMap.set(candyMap.get(candies[i]) + 1)
            }
            
        } 
        else if(!candyMap.has(candies[i])){
            candyMap.set(candies[i],1)
        }
    }
    
    return result
    
};
