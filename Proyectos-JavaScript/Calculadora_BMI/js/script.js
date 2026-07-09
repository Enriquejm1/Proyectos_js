function calculaBMI(){
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value)/100;
        if(weight && height){
            const bmi = (weight/(height*height)).toFixed(2);
            if(bmi<25 && bmi>18){
            document.getElementById("result").style.color="green";
            document.getElementById("result").textContent = `BMI es ${bmi} segun el peso y la estatura, Estas Saludable`;    
            }else if(bmi>=25 && bmi<30){
            document.getElementById("result").style.color="blue";
            document.getElementById("result").textContent = `BMI es ${bmi} segun el peso y la estatura, Estas en sobrepeso consulta a un profesional de la salud.`;        
            }else if(bmi>=30 && bmi<40){
            document.getElementById("result").style.color="orange";
            document.getElementById("result").textContent = `BMI es ${bmi} segun el peso y la estatura, Estas en obesidad consulta a un profesional de la salud.`;        
            }else if(bmi>=40){
            document.getElementById("result").style.color="red";
            document.getElementById("result").textContent = `BMI es ${bmi} segun el peso y la estatura, Estas en obesidad 2 consulta a un profesional de la salud.`;        
            }else{
            document.getElementById("result").style.color="gray";
            document.getElementById("result").textContent = `BMI es ${bmi} segun el peso y la estatura, Estas bajo de peso  consulta a un profesional de la salud.`;            
            }
        }else{
            document.getElementById("result").style.color="red";
            document.getElementById("result").textContent = "Ingresa valor correspondientes";
        }
}