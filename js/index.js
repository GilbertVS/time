
 window.addEventListener('load', iniciar, false); 
 function iniciar() {
    contanidor =""; contanidor2 = "";
    ceroM = 0;
    ceroS = 0;
    ceroSm = 0;
    ceroSmm = 0;
    now = new Date();
    hores = now.getHours();
    minuts = now.getMinutes();
    if (minuts>9) ceroM="";
    segons = now.getSeconds();
    if (segons>9) ceroS="";
    msegons = now.getMilliseconds();
    if (msegons>99) ceroSmm="";
    if (msegons>9) ceroSm="";
    contanidor  +='<h1 style="text-align:center;color:#111188;font-size:50pt;">';
    contanidor  +="H: "+hores+":"+ceroM+minuts+":"+ceroS+segons+","+ceroSmm+ceroSm+msegons;
    contanidor  +="</h1>";
    now = new Date();
    dia = now.getDay();
    if (dia==1) dia="dilluns";
    if (dia==2) dia="dimarts";
    if (dia==3) dia="dimecres";
    if (dia==4) dia="dijous";
    if (dia==5) dia="divendres";
    if (dia==6) dia="dissabte";
    if (dia==0) dia="diumenge";
    diames = now.getDate();
    mes = now.getMonth();
    if (mes==0) mes="gener";
    if (mes==1) mes="febrer";
    if (mes==2) mes="març";
    if (mes==3) mes="abril";
    if (mes==4) mes="maig";
    if (mes==5) mes="juny";
    if (mes==6) mes="juliol";
    if (mes==7) mes="agost";
    if (mes==8) mes="setembre";
    if (mes==9) mes="octubre";
    if (mes==10) mes="novembre";
    if (mes==11) mes="desembre";		
    any = now.getFullYear();		
    contanidor  +="<h1 style='text-align:center;color:#881111;font-size:32pt;margin-bottom:20pt;'>";
    contanidor  +=dia+", "+diames+" de "+mes+" del "+any;
    contanidor  +="</h1>";
    document.getElementById("rellotge").innerHTML=contanidor;
    localtime = now.toString();
    utctime = now.toGMTString();
    contanidor2  +="<p><strong>Hora Barcelona:</strong>"+localtime+"</p>";
    document.getElementById("rellotge2").innerHTML=contanidor2+"<p><strong>Hora Greenwich:</strong>"
+utctime+"</p>";    
 }

 function convertLliures() {
    var euros = document.getElementById("euros").value;
    var lliuresS = (euros * 0.89).toFixed(2);
    if (euros == null || euros == "" ){
        document.getElementById("euros").style.backgroundColor = 'red';
    }else{
        document.getElementById("euros").style.backgroundColor = 'white';
        document.getElementById("sortir").value = lliuresS + " lliures";   
    }
}

function convertEuros() {
    var lliures = document.getElementById("lliures").value;
    var eurosS = (lliures / 0.89).toFixed(2);
    if (lliures == null || lliures == "" ){
        document.getElementById("lliures").style.backgroundColor = 'red';
    }else{
        document.getElementById("lliures").style.backgroundColor = 'white';    
        document.getElementById("sortir2").value = eurosS + " euros";
    }
}
function convertDolars() {
    var eurosD = document.getElementById("eurosD").value;
    var dolarS = (eurosD / 0.9141).toFixed(2);
    if (eurosD == null || eurosD == "") {
        document.getElementById("eurosD").style.backgroundColor = 'red';
    } else {
        document.getElementById("eurosD").style.backgroundColor = 'white';
        document.getElementById("sortir3").value = dolarS + " $";
    }
}

function convertEuros2() {
    var dolars = document.getElementById("dolars").value;
    var eurosS2 = (dolars * 0.9141).toFixed(2);
    if (dolars == null || dolars == "") {
        document.getElementById("dolars").style.backgroundColor = 'red';
    } else {
        document.getElementById("dolars").style.backgroundColor = 'white';
        document.getElementById("sortir4").value = eurosS2 + " euros";
    }
}