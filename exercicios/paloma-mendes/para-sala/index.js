let f = 212

if (f < 32 || f > 212){
    console.log("Digite uma temperatura ºF válida");
} else{
    let c = (f - 32)/1.8
    console.log(`${f}°F corresponde à ${c}°C`);
}
