function calc(){

    num1 = parseInt(form1.num1.value);
    num2 = parseInt(form1.num2.value);
   
    if (op1.checked){
        
        answer = parseInt(num1 + num2);
        form1.answer.value=answer;
        
    }
    else if(op2.checked){
        answer = parseInt(num1 * num2);
        form1.answer.value=answer;

    }
    else if(op3.checked){
        answer = parseInt(num1 / num2);
       form1.answer.value=answer;

    }
    else if(op4.checked){
        answer = parseInt(num1 - num2);
       form1.answer.value=answer;

    }


}