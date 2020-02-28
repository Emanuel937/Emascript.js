# Emascript.js
Emascript is library created especaly for big data , it is so young 
if you want know about emascript libray here is the link  :http://emascript.stockcode.site/start.html
with emascript help you also to make ajax request easyily like jquery also for your client secruity seek we build some function that help you to secure you website ... 

#How to use Emascript 
Adding Emascript to Your Web Pages

There are two ways to start using Emacript on your web site. You can:

    Download the Emacript library from emascript.stockcode.site
    Include Emascript from a CDN

Download
Emascript CDN
Only one Step

copty this code into your editor

    <!DOCTYPE html> 
        <html lang="en"> 
          <head>
               <script src="http://emascript.stockcode.site/emascript.js">
               </script>
         </head>
        </html>
        

Function
Useful Tip:

Addiction() : is used to get some of number in array
code Exemple:


  var  number = [1, 3, 4];
  
  console.log(number.addition()) // 1 + 3 + 4 = 8
  // it return 9
  
  
  

multiplication() : is used to multiplies numbers in array.
code Exemple:


  var  number = [1, 3, 4];
  
  console.log(number.multiplication()) // 1 * 3 * 4 =  12
  // it return 15
  
  
  

division() : is used to divide numbers in array.
code Exemple:


  var  number = [6, 1, 2];
  
  console.log(number.division()) // 6 / 1 /2 =  3
  // it return 3
  
  
  

subtraction() : is used to subtract numbers in array.
code Exemple:


  var  number = [4, 3, 1];
  
  console.log(number.subtraction()) // 4 - 3 -1 =  0 
  // it return 0
  
  
  

mean() : is used to find the mean of numbers in array.
code Exemple:


    
  // the mean of 1 , 3 => 1 + 3 / 2  => 2
  // eg.1
  var numbers = [1, 3]; 
  console.log(numbers.mean()) // 2
  
  // eg: 2
  var numbers = [1, 2, 3];
  console.log(numbers.mean()) // 3
  
  

// START

modal() : is used to find the modal of numbers in array.
code Exemple:


  // eg: 1
  var numbers = [1, 2, 3];
  console.log(numbers.modal()) // 2
  // eg:2
  var numbers  = [1, 2];
  console.log(numbers.modal()); //  1.5
  
  

center() : is used to find the center value in array . it return 0 if the array doesn't have a center value
code Exemple:


  // eg: 1
  var numbers = [1, 2, 3];
  console.log(numbers.center()) // 3
  // eg:2
  var numbers  = [1, 2];
  console.log(numbers.modal()); //  false
  
  

// END

range(start, end, step) : is used to creat an array , start is the first index, if the stop is not set the start will be the last index
code Exemple:


  // eg: 1
  var x =  range(3)
  console.log(array) // [1, 2, 3];
 
  // eg:2
  var x  = range(3, 6);
  console.log(x); //  [3, 4, 5, 6];
  
   // eg:2
  var x  = range(3, 10, 2);
  console.log(x); //  [3,5 ,7, 9]
  
  
  
  
  

topRepeat() : is used to find the value that apear more than other value in array ,it ca be a string or a number
code Exemple:


// eg:1
var number = [1, 3, 3, 3]
console.log(number.topReat()) // 3
// eg:2
var number = [1, 3, 3, 4 , 4, 4]
console.log(number.topReat()) // 4
// eg:3
var number = ['a', 'a', 'b', 'b' , 'b'];
console.log(number.topReat()) // b

  
  

isPropocional(fisrt_array, second_array) : is used to check if two array are propocional , they value must be a number, it return true , if they are propocional.
code Exemple:


// eg:1
var array_1 = [1, 3]
var array_2 = [1, 4 ]
console.log(isPropocional(array_1, array_2)) // false

// eg:2
var array_1 = [2, 4]   2/4 = 2   // so they are propocional because has the some quoficient .
var array_2 = [4, 8 ]   4/8 =2 
console.log(isPropocional(array_1, array_2)) // true 
  
  

fillPros(n_array, n_array) : is used to fill the empty array propocionaly if two array are propocionaly.
code Exemple:


// eg:1
var array_1 = [ 4, 2, 6, 4 ];
var array_2 =  [2] // this array is not complet because , it length is not egual to array_1
// so this function fill the value that must be use in order to be propocional and also to have the some length;

 fillPros(array_1, array_2)) // now array_2 =  [ 2, 4, 12, 8 ];
 array_2 =   fillPros(array_1, array_2);
 console.log(array_2) //[ 2, 4, 12, 8 ]

 
  

modal() : is used to find the modal of numbers in array.
code Exemple:


  // eg: 1
  var numbers = [1, 2, 3];
  console.log(numbers.modal()) // 2
  // eg:2
  var numbers  = [1, 2];
  console.log(numbers.modal()); //  1.5
  
  

per(%) : is used to find the percentage. this function take a paramenter that is used as percentage number.
code Exemple:


  // eg: 1
  var number = 40;
  number.per(100)  // 40  
 //explanation 
 number.per(100) ==> (40 * 100)/100 = 40 ;
 (100) = 100% ;
  
  
  

DOM
$() selector :

To select any html element use this $(css-selector)


// suppose that you have in your html file a html element(p) with id="#demo"
var p = $("#demo");
// now you select the p and you can use some html proprity like that:
console.log(p.innerHTML);
// if you select by using class or tag name , don't forget to indicate the index ;
eg:
var p = $("p");
console.log(p[0].innerHTML);


 
  

using css with emascript :

To use css with emascrpt is very simple check out this exemple:


// suppose that you have in your html file a html element(p) with id="#demo"
// first select the element using $() selector;
var p = $("#demo");

// creat a object with css value and propry
var css = {
    "color":"red",
    "font-size":"20px"
}

// then set this proprity into the selected element using setStyle function...
p.setStyle(css);

// well done ......

 
  

valueOrText(cssSelector// required, htmlElementIndex// optional ) :

this function get the html element text or value. if the cssSelector is not id , then you must indicate the element index number , it mean to indicate if you want get the fisrt one , or not ... check the exemple.


        // html file 
                // get text 
               <p id="test">
                This text will get using valueOrText function 
               </p>
    
            // exemple to get the value  ... 
             <input  id="test2" value="This value will get using valueOrText function">
                     
    
     // javascript 
     // because this p has id we don't need to indicate the html element index position .
     console.log( valueOrText("#test")) // This text will get using valueOrText function 
     
     // getting value 
     console.log(valueOrText("#test2")) // This text will get using valueOrText function 
     
     
     // html file 
        // get text 
               <p>
                 the first p 
               </p>
                   // get text 
               <p >
               
                The second p 
               </p>
        
        // js 
        // because we have more than one p so we need to indicate wich of p we want get the text , the first = 1, the second =2 and so on .
        // exemple
        // this exemple word the some way with the class ....
        
        console.log(valueOrText("p", 1)) // the first p
         console.log(valueOrText("p", 2)) // the second p
         
         // if you don't indicate the htm element index position it return an array 
         // try it 
          console.log(valueOrText("p")) // arrary[ the first p,   The second p  ]
        
    
     
      
 
  

Required() :

This function is realy important for everyone that code in javascript and works with form , the form information can be hacked sometime , so required function from emascript library help you to set security on your form.

Check this video tutorial to learn more


    // to start use required() function :
    // first select the form using emascript 
    var form  = $("form");
    // use the required function after select the form 
    form.required()
    
    // so in order to see how it works click on link above .

 
  

