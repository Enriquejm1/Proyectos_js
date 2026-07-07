function calculaBMI(){
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value)/100;
        if(weight && height){
            const bmi = (weight/(height*height)).toFixed(2);
            document.getElementById("result").style.color="green";
            document.getElementById("result").textContent = `BMI es: ${bmi}`;
        }else{
            document.getElementById("result").style.color="red";
            document.getElementById("result").textContent = "Ingresa valor valido";
        }
}