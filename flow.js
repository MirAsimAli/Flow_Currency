let Indian_Rupee = document.getElementById("Indian_Rupee");
let US_Dollar = document.getElementById("US_Dollar");
let Euro = document.getElementById("Euro");
let Japanese_Yen = document.getElementById("Japanese_Yen");
let British_Pound_Sterling = document.getElementById("British_Pound_Sterling");
let Australian_Dollar = document.getElementById("Australian_Dollar");
let Canadian_Dollar = document.getElementById("Canadian_Dollar");
let Swiss_Franc = document.getElementById("Swiss_Franc");
let Chinese_Yuan = document.getElementById("Chinese_Yuan");
let New_Zealand_Dollar = document.getElementById("New_Zealand_Dollar");


function Indian_RupeeToOther(val){
    US_Dollar.value = val*83.1889;
    Euro.value = val*90.4222;
    Japanese_Yen.value = val*0.5303;
    British_Pound_Sterling.value =val*106.2231;
    Australian_Dollar.value =val*55.3947;
    Canadian_Dollar.value =val*61.037;
    Swiss_Franc.value =val*91.207;
    Chinese_Yuan.value =val*11.48;
    New_Zealand_Dollar.value =val*51.2256;
}
function  US_DollarToOther(val){
    Indian_Rupee.value = val*0.012;
    Euro.value = val*1.0868;
    Japanese_Yen.value  =val*0.0064;
    British_Pound_Sterling.value = val*1.2765;
    Australian_Dollar.value  = val*0.6658;
    Canadian_Dollar.value  = val*0.7337;
    Swiss_Franc.value  = val*1.0964;
    Chinese_Yuan.value  = val*0.138;
    New_Zealand_Dollar.value = val*0.6161;
}
function EuroToOther(val){
    Indian_Rupee.value = val*0.0111;  
    US_Dollar.value = val*0.92;
    Japanese_Yen.value =val*0.0059;
    British_Pound_Sterling = val*1.1747; 
    Australian_Dollar.value = val*0.6128;
    Canadian_Dollar.value = val*0.6752;
    Swiss_Franc.value = val*1.0088;
    Chinese_Yuan.value =val*0.127;
    New_Zealand_Dollar.value = val*0.5667;
}
function Japanese_YenToOther(val){
    Indian_Rupee.value = val*1.8865; 
    US_Dollar.value = val*156.9367;
    Euro.value   = val*170.5923;
    British_Pound_Sterling.value = val*200.3487; 
    Australian_Dollar.value = val*104.5119;
    Canadian_Dollar.value = val*115.1845;
    Swiss_Franc.value = val*172.1306;
    Chinese_Yuan.value = val*21.6611;
    New_Zealand_Dollar.value = val*96.6907;
}
function British_Pound_SterlingToOther(val){
    Indian_Rupee.value = val*0.0094;
    US_Dollar.value = val*0.7835;
    Euro.value = val*0.8518;
    Japanese_Yen.value  =val*0.005;
    Australian_Dollar.value = val*0.5216;
    Canadian_Dollar.value = val*0.5749;
    Swiss_Franc.value = val*0.8591;
    Chinese_Yuan.value = val*0.1081;
    New_Zealand_Dollar.value = val*0.4826;
} 
function Australian_DollarToOther(val){
    Indian_Rupee.value = val*0.0181;
    US_Dollar.value = val*1.5022;
    Euro.value = val*1.6331;
    Japanese_Yen.value = val*0.0096;
    British_Pound_Sterling.value = val*1.9175;
    Canadian_Dollar.value = val*1.1021;
    Swiss_Franc.value = val*1.647;
    Chinese_Yuan.value = val*0.2072;
    New_Zealand_Dollar.value = val*0.9252;
}
function Canadian_DollarToOther(val){
    Indian_Rupee.value =val*0.0164;
    US_Dollar.value = val*1.3625;
    Euro.value = val*1.4817;
    Japanese_Yen.value = val*0.0087;
    British_Pound_Sterling.value = val*1.74;
    Australian_Dollar.value = val*0.9072; 
    Swiss_Franc.value = val*1.4946;
    Chinese_Yuan.value = val*0.188;
    New_Zealand_Dollar.value = val*0.8395;
  
}
function Swiss_FrancToOther(val){
    Indian_Rupee.value = val*0.011;
    US_Dollar.value = val*0.9114;
    Euro.value = val*0.9911;
    Japanese_Yen.value =val*0.0058;
    British_Pound_Sterling.value =val*1.1638;
    Australian_Dollar.value =val*0.6067;
    Canadian_Dollar.value =val*0.6688;
    Chinese_Yuan.value = val*0.1258;
    New_Zealand_Dollar.value = val*0.5612
  
}

function  Chinese_YuanToOther(val){
    Indian_Rupee.value = val*0.0871
    US_Dollar.value = val*7.2463;
    Euro.value = val*7.8805;
    Japanese_Yen.value = val*0.0462;
    British_Pound_Sterling.value = val*9.2546;
    Australian_Dollar.value  = val*4.8239;
    Canadian_Dollar.value  =val*5.3173;
    Swiss_Franc.value = val*7.9548;
    New_Zealand_Dollar.value = val*4.4635;   
  
}

function   New_Zealand_DollarToOther(val){
    Indian_Rupee.value = val*0.0195;
    US_Dollar.value = val*1.6236;
    Euro.value = val*1.7658;
    Japanese_Yen.value = val*0.0103;
    British_Pound_Sterling.value = val*2.0739;
    Australian_Dollar.value = val*1.0808;
    Canadian_Dollar.value = val*1.1916;
    Swiss_Franc.value = val*1.7826;
    Chinese_Yuan.value = val*0.2241;
}
// *********************//



function convertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "Indian_Rupee": Indian_RupeeToOther (parseFloat(value)); break;
        case "US_Dollar": US_DollarToOther(parseFloat(value)); break;
        case "Euro": EuroToOther(parseFloat(value)); break;
        case "Japanese_Yen": Japanese_YenToOther(parseFloat(value)); break;
        case "British_Pound_Sterling": British_Pound_SterlingToOther (parseFloat(value)); break;
        case "Australian_Dollar": Australian_DollarToOther (parseFloat(value)); break;
        case "Canadian_Dollar": Canadian_DollarToOther(parseFloat(value)); break;
        case "Swiss_Franc": Swiss_FrancToOther(parseFloat(value)); break;
        case "Chinese_Yuan":  Chinese_YuanToOther(parseFloat(value)); break;
        case "New_Zealand_Dollar":  New_Zealand_DollarToOther(parseFloat(value)); break;

    }
}