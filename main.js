// first task
var firstRow = prompt('Введите первую строку')
var secondRow = prompt('Введите вторую строку')
var symbol = prompt('Введите букву');

var fcount = 0, scount = 0;

// second task
var Phone = prompt('Введите номер телефона');
var formPhone ='';
var newPhone ='';

// first task
function getRow(el1,el2){

    for (let i=0; i < el1.length; i++){
        if (el1.charAt(i) == symbol ){
            fcount++;
        }
    }

    for (let i=0; i < el2.length; i++){
        if (el2.charAt(i) == symbol){
            scount++;
        }
    }

    alert(" В первой строке '"+ symbol+"' встречается " + fcount + " раз." + " Во второй строке '"+ symbol+"' встречается " + scount + " раз.");
    
    if (fcount > scount){
        alert(firstRow)
    }
    else{
        alert(secondRow)
    }
}
getRow(firstRow,secondRow);

// second task
function formattedPhone(el3){
    formPhone = el3;

    if (formPhone.length == 11){
        if (formPhone.charAt(0) == '7' || formPhone.charAt(0) == '8' || formPhone.charAt(0) == '9'){
            formPhone = formPhone.substr(1);
            formPhone = '+7'+formPhone;
        }
        else{
            alert('Неверный номер');
            return;
        }
    }
    else if (formPhone.length != 12 || formPhone.charAt(0) != '+' || formPhone.charAt(1) != '7'){
        alert('Неверный номер');
        return;
    }

    el3 = formPhone;

    for (let i=0; i < el3.length; i++){
        newPhone+=el3.charAt(i);

        if (el3.charAt(i) == '7'){
            if (el3.charAt(i-1) == '+'){
                newPhone+=' (';
            }
        }

        if (i == '4'){
            newPhone+=') ';
        }

        if (i =='7'){
            newPhone+='-';
        } 
        
        if (i =='9'){
            newPhone+='-';
        }  
    
    }

    alert('Номер телефона ' + newPhone);    
}
formattedPhone(Phone);



