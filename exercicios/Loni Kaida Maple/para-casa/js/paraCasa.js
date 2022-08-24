const infoText = document.querySelector("#exibir-info");
let userInputPais =  document.querySelector("#country-name");

let resultadoPais = 0;
let resultadoIDH = 0;

let paisEncontrado = false;
let complementaryText;

let classificationIDH = 
[
    "muito baixo❗❗",
    "baixo❗",
    "médio❕",
    "alto✅",
    "muito alto✅✅"
];
let paises = 
[
    "Noruega",
    "Qatar",
    "Canada",
    "Brasil",
    "Japão",
    "Vietnã",
    "Afeganistao",
    "Camaroes"
];
let paisesIDH = 
[
    0.944,
    0.850,
    0.913,
    0.755,
    0.891,
    0.666,
    0.465,
    0.512
];

function exibeIDH()
{
   if(paisEncontrado)
   {
        infoText.innerHTML="País: "+resultadoPais+" IDH: "+resultadoIDH.toFixed(3)+" considerado "+complementaryText+"!";
        paisEncontrado=!paisEncontrado;
   }
   else if(!paisEncontrado)
   {
        infoText.innerHTML="País: "+ userInputPais +" não consta no banco de dados!";
        console.log("país "+ userInputPais +" não consta no banco de dados!");
   }
}

function verfyList()
{
    userInputPais =  document.querySelector("#country-name").value;
    console.log(userInputPais);
    for(let p = 0; p<paises.length; p++)
    {
        if(paises[p]==userInputPais)
        {
            console.log(paises[p]);
            resultadoPais=paises[p];
            resultadoIDH=paisesIDH[p];
            console.log(paisesIDH[p]);
            paisEncontrado=true;
            idhClassf(resultadoIDH);
            break;
        }
        else 
        {
            if(p>=(paises.length-1))
            {
                exibeIDH();
            }            
        }
    }
}
function idhClassf(c)
{
    if(c<.5)
    {
        complementaryText=classificationIDH[0];
    }
    else if(c>=.5&&c<.6)
    {
        complementaryText=classificationIDH[1];
    }
    else if(c>=.6&&c<.7)
    {
        complementaryText=classificationIDH[2];
    }
    else if(c>=.7&&c<.8)
    {
        complementaryText=classificationIDH[3];
    }
    else if(c>=.8)
    {
        complementaryText=classificationIDH[4];
    }
    exibeIDH();
}