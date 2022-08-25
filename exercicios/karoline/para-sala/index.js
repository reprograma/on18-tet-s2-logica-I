let f = 100

if (f< 32 || f > 212) {
    console.log("Digite uma temperatura °F válida")
} else {
    let c = (f - 32) / 1.8
    console.log(`${f} °F corresponde à ${c} °C`)
}