/**
 *  Library: Emacript
 *  Author: Emanuel Abizimi 
 *  this is a simple library , where you can find some 
 *  function used in python library
 */
Array.prototype.addiction = function () {
    let total = 0;
    this.filter((array_value) =>
     {
       if(typeof array_value === "number"){
         total += Number(array_value);
       }
      });
    return total;
  }
  
  // multiplication 
  Array.prototype.multiplication = function () {
    let total = 1;
    this.filter((array_value) =>
     {
       if(typeof array_value === "number"){
         total *= Number(array_value);
       }
      });
    return total;
  }
  // division 
  Array.prototype.division = function () {
    let total = 1;
    this.filter((array_value) =>
     {
       if(typeof array_value === "number"){
         total /= Number(array_value);
       }
      });
    return total;
  }
  // subtraction 
  Array.prototype.subtraction = function(){
    let total = null;
    this.filter((array_value) =>
     {
       if(typeof array_value === "number"){
         if(isNaN(total) == true){
          total = Number(array_value);
      
         }else{
          total -= Number(array_value);
      
         }
       }
      });
    return total;
  }
  
  // mean
  Array.prototype.mean = function(){
    let dividend = this.length;
    return this.addiction()/dividend;
  }
  
  //center
  Array.prototype.center = function(){
    let center;
    let array_len = this.length;
    if((array_len % 2) == 1){
      center = array_len / 2;
      center = Math.floor(center);
      return this[center];
    }else{
      return 0;
    }
  }
  
 // modal 
  Array.prototype.modal = function(){
    let modal  = null,
    index;
    let has_center = this.center();
    if(typeof has_center == "string"){
        modal = this.length / 2;
        index = Math.floor(modal);
        modal = (this[index] + (this[index -1])) / 2;
      
      
    }else{
      // you dont need calculate anything....
      modal = has_center;
    }
    return modal ;
  }
  
  // range like in pyton 
  range = function(start, end = null, step = null){
    let n_array = [];
    let for_start , for_end;
    if(end == null && step == null){
      for_start = 0;
      for_end = start;
    }else{
      for_start = start;
      for_end = end;
    }
    if(step == null){
      for(for_start ; for_start <= for_end; for_start++){
        n_array.push(for_start);
      }
    }else{
      for(for_start ; for_start <= for_end; for_start++){
      
        if(for_start % step == 0){
          n_array.push(for_start);
        }
      }
      n_array[0] = start;
    }
    
    return n_array;
  }
  
  
  // to repeat
  Array.prototype.topRepeat = function(){
    let index,
        i ,
        index_top = 0,
        max_repeat = -1,
        pos = null;
     
     for(index = 0; index <= this.length; index++){
       pos = 0;
       for(i = 0; i <= this.length; i++){
          if(this[index] == this[i]){
            pos++
          }
          if(max_repeat < pos){
               max_repeat = pos; 
               index_top = index;
           }
       }
     }
    return  this[index_top];
  }
  // is propocional
  const isPropocional = function(array_a, array_b){
    let conf1 = array_a[0]/array_b[0];
    let conf = null;
      if(array_a.length == array_b.length){
        for(let i in array_a){
         conf =  array_a[i]/array_b[i];
          if(conf == conf1){
            return true;
          }else{
            return false;
          }
        }
      }else{
        console.log("=========== Emascript error:  this array don't have the same length ========");
      }
  }
  
  // fill a table propocionaly 
  function fillPros(a, b){
    let con = a[0] / b[0];
    let filled, max_len, index, first, not_max, array_value;
    
    if(a.length > b.length){
      max_len = a;
      filled = b;
      not_max = b;
    }
    else if(!a.length > b.length)
     {
      max_len = b;
      filled = a;
      not_max = a;
    }else{
      filled= "you have already filled your array";
    }
    
    for(index = 0; index <= max_len.length -1; index++){
      array_value = con * max_len[index];
      if(index == 0){
        continue;
      }else{
           filled[index] = array_value;
      }
   }
    return filled;
  }
  /***
   *  
   *  Emascript DOM 
   */
  function f(selector){
    let res = null;
    this.name = "emanuel abizimi";
    if(selector.indexOf("#") > -1){
      res = document.querySelector(selector);
    }else{
     res = document.querySelectorAll(selector);
    }
    return res;
  }
  function $(emacript){
    return new f(emacript);
  }
  
  Object.prototype.setStyle = function(style){
    for(let prop in  css){
      this['style'][prop] = css[prop];
    }
  }
  
  
  /**  Emascript version 2  ajax , valueoOrText , requiredSecurity**/
  
         /******************************     ****************************************
                     *****************  Emascript ajax            *******************
                                      javascript library 
                                  Created by Emanuel Abizimi 
           *******************************      **************************************/ 
      Object.prototype.runAjax = function(time = null, interval = null, callBack = null){
          let action, method, data, result, to_do, closer, cleaner,callback;
          action = this.config.action;
          method = this.config.method;
          closer = 0;
          data = this.config.data;
          callback = 0;
          // processing animation
          function proccessing(){
              let link, nodeId, img_url, key, tag, proc;
              link =  this.ajax.proccessing.link;
              nodeId = "#"+this.ajax.proccessing.nodeId;
              img_url = {
                  first:"http://emascript.stockcode.site/img/first.gif",
                  secod:"http://emascript.stockcode.site/img/second.gif",
                  third:"http://emascript.stockcode.site/img/third.gif",
              }
              tag = document.querySelector(nodeId);
              // for loop for animation git image
              for( key in img_url){
                  if(link != key){
                     tag.src = link;       
                  }
                  if(link == key){
                     if(!tag.tagName == "IMG"){
                        proc = "This tag name must be img";
                     }else{
                        stag.src=img_url[key];
                     }
                  }
              }
           }
          function ajax_js(typed, url, info = null){
                  let http =  new XMLHttpRequest();
                  let response, status_code,
                   status_text, minut,
                   data_http =""; // request data
                  http.onreadystatechange = function(){
                      if(this.readyState >= 1 && this.readyState < 4 ){
                          // call the processing function 
                          //proccessing();
                          response = false;
                      }
                      if(this.status != 200 && this.readyState != 4){
                          status_code = this.status;
                          response = false;
                      }
                      else if( this.status == 200 && this.readyState == 4 ){
                          // stop the processing 
                          //and send the data to sucess function ...
                          response = this.responseText;
                          response = response == false? false : response; 
                          status_code = 200;
                      }
                  }
                  if(typed == "post" || typed == "POST" && status_code == 200 ){
                      // post method
                      minut = 0;
                      data_http ="";
                      for(let key in info){
                          if(key != 'runAjax'){
                              minut++;
                              
                              data_http +="&"+key+'='+info[key];
  
                          }
                          if(minut == 0){
                            data_http = " ";
                          }
                      }
                      http.open(typed, url, false);
                      http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                      http.send(data_http);
                  }
                  if(typed =="get" || typed == "GET" && status_code == 200){
                      minut = 0;
                      for(let key in info){
                          if(key != 'runAjax'){
                              minut++;
                              if(minut == 1){
                                data_http += "?"+key+"="+info[key];
                              }
                              if(minut > 1){
                                data_http += "&"+key+"="+info[key];
                              }
                          }
                      }
                      if(minut == 0){
                          data_http =" ";
                      }
                      http.open(typed, url + data_http, false );
                      http.send();
                  }
                  // ....... open the file ....... Emascript .........................
                  /*****************       status text   ***************************/
                  switch(status_code){
                     case 200:
                     status_text =" The page was found";
                     break;
                     case 404:
                     status_text ="The page was not foud";
                     break;
                     case 403:
                     status_text = "You don't have permission to load this file , change this file permission"
                     break;
                     default:
                     console.error(status_code);
                 }
                  return {
                      response:response,
                      error:status_code,
                      status_text:status_text
                  }
             }
           /*******************************  Emascript *****************************************/
          const  setMethodActionData = function(){
               // call the ajax_js function :::::::::
               let success_arg, error_arg, status_text_arg, ajax_f;
                     ajax_f = ajax_js(method, action, data);
                      success_arg = ajax_f.response;
                      // error arg ...
                     
                      error_arg =  ajax_f.error;
                      // status_text ;
                     status_text_arg = ajax_f.status_text;
                      // toDo function .........
                      return this.ajax.toDo(success_arg, error_arg, status_text_arg);
          }
          const setup = function(){
              if(action == undefined || action == " "){
                  result = "please set the action value ajax = { action: mypage.html}";
                  console.error(result);
              }else if(method == undefined || method == " "){
                  result ="please set the method value eg.: ajax = { method: post/get}";
                  console.error(result);
              }else if(!action == false  && !method == false){
              // make the ajax request ......
              if(time == null && interval == null){
                  if(this.ajax){
                      result = setMethodActionData();
                      const parms = ()=>{
                          callBack !== null ? callBack(arg = []): null;
                      }       
                      setTimeout(parms, 1000);
                  }else{
                      result = "name your  object 'ajax'  eg.: ajax = { } ";
                      console.error(result);
                  }
              }else{
                  if(time == Infinity && interval == null || time == Infinity && interval == 1000){
                      // setInterval ....
                      function to_do(){
                          setMethodActionData(); 
                          callBack !== null ? callBack(arg = []): null;
                      }
                      setInterval(to_do, 1000);              
                    }else if(time == Infinity  && interval > 1000 || time == Infinity && interval == 1000 ){
                       // setInterval ....
                       function to_do(){
                          setMethodActionData();
                          callBack !== null ? callBack(arg = []): null;
                      }
                      setInterval(to_do, interval);
                    }else if(typeof time == "number" && time != 0 && time > -1 ){
                        let inter = null;
                        if(interval == null || interval == 1000){
                            inter =  1000;
                        }else if(interval > 1000){
                          inter = interval;
                        }
                        // interval 
                        // setInterval ....
                       function to_do(){
                          closer++;
                          setMethodActionData()
                          if(closer == time){
                              // clear interval ...
                              clearInterval(cleaner);
                              // callback
                              callBack !== null ? callBack(arg = []): null
                          }
                      }
                     cleaner = setInterval(to_do, inter);
                    }else{
                        result = "time musst be > 0, check the first arg of runAjax function if is > 0"
                        console.error(result);
                    }
                  }
              }
          }
          
          setup();
          
      }
      
      
      /* user example .......
          
          ajax = {
              config:{
                action:"test.php",
                method:"post",
                data:{
                    name:"Emanuel Abizimi",
                    age:"secret"
                  }  // is optional 
              },
            
              proccessing:{link:"branham.php", nodeId:"case"}, // is optionnal 
              toDo:(data, status_code, status_text)=>  {
                 
              }
          }
          
          ajax.runAjax(time, interval, callback);
          
          the callback function has an array arg ...
      */
      
      /****** **************** end ajax   ************************* *********/
      
      /*********         Emascript form security   By Emanuel Abizimi   ****************/
  
      
  /*
      user example 
      var form = document.querySelector('form');
      form.required(); // this required function can receive class name as parament to avoid for  set required to element that has this class name .....
  
  */
  // the end of required security ......
  
  
  /* ********************   value or text of the html element *****************
  
                       Emacript by Emanuel Abizimi 
                            javascript library
  
  *************************************--------************************************/
  
  const valueOrText = (cssSelector, index=null)=>{
      let get_el, array_text = [], response, pos, tags, tags_status;
      get_el =  document.querySelector(cssSelector);
      tags = ["input, textarea, p, h1, h2, h3, h4, h5,h6, span , strong,button"];
      for( let i in tags){
              if(tags[i] == cssSelector){
               tags_status == true;
              }else{
                  tags_status == false;
              }
          }
      if(cssSelector.indexOf("#") > -1 
        
         ) 
         {
              if(get_el.tagName == "INPUT"){
                  response = get_el.value;
              }else{
                  response = get_el.textContent;
              };
      }else{
         get_el =  document.querySelectorAll(cssSelector);
         for(pos = 0; pos <= get_el.length -1 ; pos++){        
              if(get_el[pos].tagName == "INPUT"){
                   if(index == null){
                      array_text.push(get_el[pos].value);
                   }else{
                      return get_el[index -1].value;
                   }
               }else{
                  if(index == null){
                      array_text.push(get_el[pos].textContent)
                   }else{
                      return get_el[index -1].textContent;
                   }
               } 
          }
          response = array_text;
      }
      return response;
  }
  
  /******* per function to find the percentage  */
  Number.prototype.per = function(n_value){
    // make sur that the number is convert ino
     return (this * n_value)/100;
  }
  

 Object.prototype.required = function(){
  this.onsubmit = function(){
     let el ;
     for(this.index  = 0; this.index <= this.childElementCount -1 ; this.index++)
     {   // get the form children >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
         el = this[this.index];
         if( el.tagName == "INPUT" || el.tagName == "TEXTAREA" || 
             el.tagName == "SELECT") 
         {
          // don't allow user to submit a empty input >>>>>>>>>>
            el.value == false ? el.value = "" :el.value = el.value;
            el.value == "" ? el.required = true: el.required = true;
         }
      }  
      return false;  
    }   
  }

/**** removePrevent() ********/
    Object.prototype.removePrevent = function(){
        this.onsubmit = function(){
            return true;
        }
    }
    
    
