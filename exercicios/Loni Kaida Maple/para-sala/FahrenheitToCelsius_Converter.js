let fTemp=float = 0, cTemp=float = 0;
const msgInvalidTemp="Insira uma temperatura valida!";
const msgValidTemp="A temperatura é: ";
function calcTemp()
{
   if(fTemp>=-459.4)
   {
        cTemp=((fTemp-32)*0.5556);
        console.log(msgValidTemp+cTemp.toFixed(2)+"°C");
   }
   else
   {
        console.log(msgInvalidTemp);
   }
}
fTemp=65;
calcTemp();