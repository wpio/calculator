let viewer = document.getElementById("viewer");

    let calculator = {
        valueSaved: null,
        functionToCalc: null
    }

    window.addEventListener("load", function () {
        atributeEvents();
    })

    function atributeEvents(){
        document.getElementById("zero").addEventListener("click", getNumber);
        document.getElementById("one").addEventListener("click", getNumber);
        document.getElementById("two").addEventListener("click", getNumber);
        document.getElementById("three").addEventListener("click", getNumber);
        document.getElementById("four").addEventListener("click", getNumber);
        document.getElementById("five").addEventListener("click", getNumber);
        document.getElementById("six").addEventListener("click", getNumber);
        document.getElementById("seven").addEventListener("click", getNumber);
        document.getElementById("eight").addEventListener("click", getNumber);
        document.getElementById("nine").addEventListener("click", getNumber);

        document.getElementById("clear").addEventListener("click", clearData);

        document.getElementById("dot").addEventListener("click", insertDot);

        document.getElementById("minus").addEventListener("click", clickOperator);
        document.getElementById("plus").addEventListener("click", clickOperator);
        document.getElementById("multiply").addEventListener("click", clickOperator);
        document.getElementById("divide").addEventListener("click", clickOperator);

        document.getElementById("equal").addEventListener("click", clickResult);
    }

    function getNumber() {
        if(isNaN (viewer.value) && (viewer.value != "0.")){
            
            viewer.value = event.target.textContent;
        } else {
            if (viewer.value == 0 && (viewer.value != "0.")){
                
                viewer.value = event.target.textContent;
            }else{
                
                viewer.value += event.target.textContent;
            }
        }
    }

    function add (value1, value2){
        return value1 + value2;
    }

    function minus (value1, value2){
        return value1 - value2;
    }

    function multiply (value1, value2){
        return value1 * value2;
    }

    function divide (value1, value2){
        if(value2 == 0){
            clearData;
            return "ERRO - Divisão por ZERO!";
        }else{
        return value1 / value2;
        }
    }

    function clearData(){
        viewer.value = "";

        calculator.valueSaved = null
        calculator.functionToCalc = null;
    }

    function insertDot(){
        if(viewer.value === "" || isNaN(viewer.value)){
            viewer.value = "0.";
        }else if(!viewer.value.includes(".")){
            viewer.value = viewer.value + ".";
        }
    }

    function clickOperator(){
         if(!isNaN(viewer.value)){
            if(calculator.valueSaved == null){
                calculator.valueSaved = Number(viewer.value);
            }else if (calculator.functionToCalc != null){
                calculator.valueSaved = calculator.functionToCalc(calculator.valueSaved, Number(viewer.value));
            }
        }

        let operator = event.target.textContent;
        atributeOperator(operator);
        viewer.value = operator;
    }

    function atributeOperator(operator){
        if (operator == "+"){
            calculator.functionToCalc = add;
        }else if (operator == "-"){
            calculator.functionToCalc = minus;
        }else if (operator == "*"){
            calculator.functionToCalc = multiply;
        }else {
            calculator.functionToCalc = divide;
    }
    }

    function clickResult(){
        if(!isNaN(viewer.value) && calculator.functionToCalc != null){
            let result = calculator.functionToCalc(calculator.valueSaved, Number(viewer.value));

            viewer.value = result;
            calculator.valueSaved = result;

            calculator.functionToCalc = null;
        }
    }