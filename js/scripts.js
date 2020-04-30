function myFunction(){
    var trElements = document.getElementsByTagName('tr');
    var btnZebra = document.getElementById('btnZebra');
    var btnZebra2 = document.getElementById('btnZebra2');
    for (var i = 0; i < trElements.length; i++) {
        if (i === 0) {
            //Do nothing to headings
        }
        else if (i % 2 === 0) {
            //Do nothing to even columns
        }
       else {
           //Zebra stripe odd rows
            trElements[i].style.background = 'black';
            trElements[i].style.color = 'white';
            //Remove zebra button and Display cancle button
            btnZebra.style.visibility = 'hidden';
            btnZebra2.style.visibility = 'visible';
        }                 
    }          
}

function myFunction2(){
    var trElements = document.getElementsByTagName('tr');
    var btnZebra = document.getElementById('btnZebra');
    var btnZebra2 = document.getElementById('btnZebra2');
    for (var i = 0; i < trElements.length; i++) {
        if (i === 0) {
            //Do nothing to headings
        }
        else if (i % 2 === 0) {
            //Do nothing to even columns
        }
       else {
           //Zebra stripe odd rows
            trElements[i].style.background = '#f2f2f2';
            trElements[i].style.color = 'black';
            //Remove cancel button and Display cancle zebra
            btnZebra.style.visibility = 'visible';
            btnZebra2.style.visibility = 'hidden';
        }                 
    }            
}