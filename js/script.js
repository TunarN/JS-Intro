let salary = 600;

let operator = prompt("Operator")
let number = Number (prompt("Include Money"))
calculation(salary,number,operator)

function sum (salary,number){
    return salary + number;
}

function sub (salary,number){
   return salary-number;
}

function calculation (salary,number,operator){
    switch (operator){
        case"+":
        alert(sum(salary,number) )
        break;
        
        case"-":
         if(salary>number)

        alert(sub(salary,number) )

        else if(salary<number) {
         alert("Balansda kifayet qeder vesait yoxdur")
        }
        break;
        default:
            alert("Duzgun emeliyyat sistemi daxil edin")
        break;
    }
}