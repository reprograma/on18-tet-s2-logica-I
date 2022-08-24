let f = 214

if(f < 32 || f > 212) {
  console.log("Digite uma temperatura ºF válida")
} else {
  let c = (f - 32)/1.8
  console.log(`${f}ºF corresponde à ${c}ºC`)
}

