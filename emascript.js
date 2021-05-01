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
  

// required function  .... and ajax request


Object.prototype.sendRequest = function(interval = 1000, repeat = 1, callBack){
    let url       =  this.url,
        data      =  this.data,
        type      =  this.type,
        objstKeys =  null,
        thisObj   =  this,
        setInt    =  1,
        setIntervalFn = null,
        xmlHttp   =  new XMLHttpRequest();   
        // data function 
        function setData(){
          let response  = '';
          if(data){
        // convert data to object 
            objstKeys = Object.keys(data);
            for(let i = 0; i < objstKeys.length ; i++){
        // send value for get method
              response +=objstKeys[i] +"="+data[objstKeys[i]] + "&";
            }
            type == "get"? response ="?"+response : response = response;
            return response;
          }else{
            return "";
          }
        }
        // get method
        function getMethod(){
           let setUrl = url + setData();
           xmlHttp.open(type,setUrl);
           xmlHttp.send();

    
        }
        // post method
        function postMethod(){
            let setUrl = setData();
            xmlHttp.open(type, url);
            xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlHttp.send(setUrl);
        }
        // initilize the request
        setIntervalFn = setInterval(() => {
            thisObj.url == undefined ?console.error("You must set the url key and value for ajax request"):
            true;

            xmlHttp.onreadystatechange = function(){
                if(this.readyState == 4  && this.status == 200){
                // send the data to 
                    thisObj.find == undefined ?true:
                    thisObj.find(xmlHttp.responseText);
                // for stop interval 
                setInt++;
                //call back function 
                callBack(this);
                }else if(this.status < 4 ){
                    thisObj.processing == undefined ?true:
                    thisObj.processing(this.status);
                 
                }else if(this.status != 200 ){
                    thisObj.fail == undefined ?true:
                    thisObj.fail(this.status, this.readyState);
                }
              
            }
            type == undefined ? type = "get": type = type;
            type.toLowerCase() == "get" ? getMethod():postMethod();

            // stop interval or clean it 
            if(setInt == repeat){
                clearInterval(setIntervalFn);
            }
         }, interval);
}

// require function 
var psxesodopdohpaeoi = null;
Object.prototype.required = function(){
    var el ;
    this.checkor = function(){
        for(this.index  = 0; this.index <= this.childElementCount -1 ; this.index++)
        {   // get the form children >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            el = this[this.index];
            if( el.tagName == "INPUT" || el.tagName == "TEXTAREA" || 
                el.tagName == "SELECT") 
            {
          
             // don't allow user to submit a empty input >>>>>>>>>>
               el.value == false ? el.value = "" :el.value = el.value;
               el.value == "" ? el.required = true: el.required = true;
                // if the user send the value , and the input has true required
                psxesodopdohpaeoi =  el.required ==true && el.value !="" ? 1:null;
             
            }
         }
    }
    this.onsubmit = function(e){
       e.preventDefault();
            this.checkor();
      }
      this.checkor();
      return psxesodopdohpaeoi;
}

    
