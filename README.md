# Emascript.js
Emascript is library created especaly for big data , it is so young ,
 emascript help you also to make ajax request easyily like jquery also and for your client secruity, we build some function that help you to secure your website ... 
it is not totaly documented .

there are the function from emascript library:

# addiction()
This function return the total of addiction from an array
....
ex.:
var n = [0, 5, 9];
console.log(n.addiction());
output:
// 14

  # multiplication()
  this function return the total of value of multiplication from an arry 
  
  ex.: n = [1, 4, 5 ];
  
  console.log(n.multiplication());
  
  output:
  // 20;

# division()
 This function return the value of division from an array 
 
 ex.:
 var n = [1, 5, 2];
console.log(n.division());

output:
//0.1

# subtraction()
this function return the total value of substration from an array
 ex.:
 var n = [1, 5, 2];
console.log(n.substration());

output:
//0.1

# mean()

This function return the mean of number sequence . 
ex.:  
        
        var n =  [0, 5, 1];
        console.log(n.mean());
        
        output:
        //2
        
 # center()

This function return the center  of number sequence , it don't have a center number then return 0 
ex.:  
        
        var n =  [0, 5, 1];
        console.log(n.mean());
        
        output:
        //5
        
        var n_0 =  [0, 2];
        console.log(n_0.center());
        
        //output
        0
