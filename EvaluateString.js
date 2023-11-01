// 2. Convert string to arithmetic operation
// For example accept a string like "10 + 20"
// and return output as 30
// b. "20 - 10" //Output 10
// Only string input is allowed which you have to parse and get a number output
// eval is not allowed




// Regex for identifying multiplication (x * y)
let multiplicationRegex = /(\d+(?:\.\d+)?) ?\* ?(\d+(?:\.\d+)?)/ 

// Regex for identifying division (x / y)
let divisionRegex = /(\d+(?:\.\d+)?) ?\/ ?(\d+(?:\.\d+)?)/ 

// Regex for identifying addition (x + y)
let additionRegex = /(\d+(?:\.\d+)?) ?\+ ?(\d+(?:\.\d+)?)/ 

// Regex for identifying subtraction (x - y)
let subtractionRegex = /(\d+(?:\.\d+)?) ?- ?(\d+(?:\.\d+)?)/  

function evaluateStringExpression(expression)
{
    //type check
    if(typeof expression === "string")
    {
        //evaluated expression
        let newExpression;
        
        //check the expression with which type of Regex 
        //and evaluate expression
       
       if(multiplicationRegex.test(expression))
        {
            newExpression = expression.replace(multiplicationRegex, function(match, operand1, operand2) {
                
                return Number(operand1) * Number(operand2);
            });
            return evaluateStringExpression(newExpression);
        }
        else if(divisionRegex.test(expression))
        {
            newExpression = expression.replace(divisionRegex, function(match, operand1, operand2) {
                if(operand2 != 0)
                   return Number(operand1) / Number(operand2);
                else
                   console.error("Division by zero");
            });
            return evaluateStringExpression(newExpression);
        }
        
        else if(subtractionRegex.test(expression))
        {
            newExpression = expression.replace(subtractionRegex, function(match, operand1, operand2) {
                return Number(operand1) - Number(operand2);
            });
            return evaluateStringExpression(newExpression);
        }
        else if(additionRegex.test(expression))
        {
            newExpression = expression.replace(additionRegex, function(match, operand1, operand2) {
                
                return Number(operand1) + Number(operand2);
            });
            // console.log(newExpression);
            return evaluateStringExpression(newExpression);
        }
       
    }
    else{
        console.error("Invalid expression");
        return false;
    }
    return expression;
}

const inputString = "20*10+30"
//"2 + 4*(30/5) - 34 + 45/2";
console.log(evaluateStringExpression(inputString));
// console.log(evaluateStringExpression([]));

// console.log(isNaN("10+30"))
// console.log(Number("10+30"))
