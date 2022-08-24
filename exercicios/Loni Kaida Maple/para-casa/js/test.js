

var Data = [
    nome = String,
    id = String,
    saldo = float =0
]

let DataBase = [Data,Data,Data];

DataBase[0]=nome="forno";
DataBase[0]=saldo=599;
DataBase[0]=id="faksdoo342";


DataBase[1]=nome="Geladeira";
DataBase[1]=saldo=1399;
DataBase[1]=id="ze4478lemn";


DataBase[2]=nome="Maid";
DataBase[2]=saldo=10999;
DataBase[2]=id="n3k0m41d3ll";

DataBase[3]="maco";

for (let i = 0; i<DataBase.length ; i++)
{
    console.log(DataBase[i]);
}