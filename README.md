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
      
      
      # How to use ajax request with emascript 
      
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="http://emascript.stockcode.site/emascript.js">
    </script>
</head>
<body>
    <button> run ajax request </button>

    <script>
        var time = 0;   
        // let us using emascript to creat an event 
        // if you don't know how to use this check the doc 
        //link :emascript.stockcode.site/start.html
        $("button")[0].onclick =function(){
               
        // it is not jquery 
        // let us make our ajax request using emascript 
        // emascript have a build function name ajax 
        ajax = {
            // inside this object we have a key name config
            config:{
                // here we set the config key and value
                action:"file.php",
                method:"get",// can be post or get,
                data:{
                    // let us set some data send to the server
                    username:"emanuel abizimi"
                } // it only used if you want send some data to the server 
            },
            toDo:(data, status_code, status_text)=>  {
            // this function send you the request data or status 
              console.log(data);
              console.log(status_code);
              console.log(status_text); 
              // let us set this data to html file
              // I'm using emascript and not jquery
              
              time++;
              $("body")[0].innerHTML = "it is my :" + time  + "time";   
            }
        }

        // now to run the request we need to call the runAjax function 
        // it is a build function 
        ajax.runAjax(Infinity /*time */, 2000 /* interval */, /*callback */requestIsDone);
        // as you can see it has 3 arguments but, are all optional
   
        // now let's explain some arg  into runAjax()
        // time is used to say how many time the request must be send 
        // if you say Infinity , it will never stop
        // you can also set a number like 1 , 2 ...
        }

        //interval is used to set the time of interval  1second == 1000 , 2second == 2000
        // callback is used to be called as soon as the   the request is done

        function requestIsDone(){
            alert("yes");
        }

        // thank you all and byebye .....
      </script>
</body>
</html>

 
  

