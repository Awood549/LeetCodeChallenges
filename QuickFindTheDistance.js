var findTheDistanceValue = function(arr1, arr2, d) {
    let distance = 0;
    
    for(let i=0; i < arr1.length; i++){
        
        
        for(let k=0; k < arr2.length; k++){
            
            
            if(Math.abs(arr1[i] - arr2[k]) < d){
                distance++
            }
        }
        
    }
