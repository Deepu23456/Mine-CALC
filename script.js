let string = "";
let input = document.querySelector("input");
let button = document.querySelectorAll(".row button");
let green = document.querySelectorAll(".row .green");
let ping = new Audio("click.mp3");
// let pick = new Audio("special-button.mp3");
Array.from(button).forEach((elem) =>{
    elem.addEventListener("click", (e)=>{
        ping.play();
        // if((input.value === "+" && input.value === "-")||(e.target.innerHTML === "*" && e.target.innerHTML === "/")||(e.target.innerHTML === "+" && e.target.innerHTML === "*")||(e.target.innerHTML === "-" && e.target.innerHTML === "*")||(e.target.innerHTML === "+" && e.target.innerHTML === "/")||(e.target.innerHTML === "/" && e.target.innerHTML === "-")){
        //     string = "Error";
        //     console.log(string);
        //     input.value = string;
        // }
        if(e.target.innerHTML === "="){
            // pick.play();
            string = eval(string);
            input.value = string;
           
        }
        
        
        
        else if(e.target.innerHTML === "x³"){
            let number = (string + e.target.innerHTML).slice(0, -2);
            // console.log(number);
            // pick.play();
            string = number*number*number;
            input.value = string;
           
        }
        else if(e.target.innerHTML === "x²"){
            let number = (string + e.target.innerHTML).slice(0, -2);
            // console.log(number);
            // pick.play();
            string = number*number;
            input.value = string;
           
        }
      
        else if(e.target.innerHTML==="AC"){
            // pick.play();
            string = ""
            input.value = string;
        }
        else if (e.target.innerHTML === 'DEL') {
            // pick.play();
            string = string.slice(0, -1);
            input.value = string;
        } 
        
        else if (e.target.innerHTML === '%') {
            // pick.play();
            string = (eval(string) + e.target.innerHTML).slice(0, -1)/(100);
            input.value = string;
            
           
        }    
        else{
            string = string + e.target.innerHTML;

            input.value = string;
            // console.log(input.value);
        }
        
        
    })
})

// Array.from(green).forEach((elem)=>{
//     elem.addEventListener("click",(e)=>{
//         pick.play();
        
//         // e.target.innerHTML === "-")||(e.target.innerHTML === "-" && e.target.innerHTML === "+")||(e.target.innerHTML === "*" && e.target.innerHTML === "/")||(e.target.innerHTML === "/" && e.target.innerHTML === "*")||(e.target.innerHTML === "+" && e.target.innerHTML === "*")||(e.target.innerHTML === "*" && e.target.innerHTML === "+")||(e.target.innerHTML === "-" && e.target.innerHTML === "*")||(e.target.innerHTML === "*" && e.target.innerHTML === "-")||(e.target.innerHTML === "+" && e.target.innerHTML === "/")||(e.target.innerHTML === "/" && e.target.innerHTML === "+")||(e.target.innerHTML === "-" && e.target.innerHTML === "/")||(e.target.innerHTML === "/" && e.target.innerHTML === "-")){
            
        
//     })
// })

Array.from(button).forEach((elem)=>{
    elem.addEventListener("click",(e)=>{
        if(e.target.innerHTML.includes('x!')){
            // console.log("yes");
            let result =  parseInt((input.value).slice(0, -2));
            // console.log(result);
            string = 1;
            for(let i = 1; i<=result; i++){
               string *= i;
               input.value = string;
            }
            
        }
        else if(e.target.innerHTML.includes("√")){
            // console.log("yes");
            let number = parseInt((input.value).slice(0, -1));
            // console.log(number);
            let squareRoot = Math.sqrt(number);
            // console.log(squareRoot);
            string = squareRoot;
            input.value = string;
        }
        else if(e.target.innerHTML.includes("10^")){
            let number = parseInt((input.value).slice(0, -3));
            // console.log(number);
            let power = Math.pow(10, number);
            string = power;
            // console.log(power);
            input.value = string;
            
            // string = Math.pow(10, )
        }
        else if(e.target.innerHTML.includes("π")) {
           
                let number = parseInt((input.value).slice(0, -1))
                // console.log(number);
                let pi = number * (22/7);
                string = pi;
                // console.log(string);
                input.value = string;
            
            
            
        }
        
         
        // var number = 25; // Replace 25 with your desired number
        // var squareRoot = Math.sqrt(number);

        // console.log("The square root of " + number + " is " + squareRoot);
    })
    
})

