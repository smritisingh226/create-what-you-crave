"use strict";

function validateform(){  
    var name=document.forms["consult"]["custName"].value;  
    
    /*This fulfills 3.2.6 B "Validating form input using javaScript*/
    if (name==""){  
      alert("Name can't be blank");       /*This fulfills 3.2.6 C "Using javaScript alerts for validation*/
     }
     console.log(name);
     return false;
    }
  