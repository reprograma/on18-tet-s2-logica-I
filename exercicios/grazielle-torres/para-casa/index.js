let inputPais = document.querySelector('#caixaNomepais');
let resultadoClassificacao = document.querySelector('.mensagem-retornada');
let buttonClassificar = document.querySelector('.classificar');

const idhPaises = [
    {
        nome: "Noruega",
        idh: 0.944
    },
    {
        nome: "Qatar",
        idh: 0.850
    },
    {
        nome: "Canadá",
        idh: 0.913
    },
    {
        nome: "Brasil",
        idh: 0.755
    },
    {
        nome: "Japão",
        idh: 0.891
    },
    {
        nome: "Vietnã",
        idh: 0.666
    },
    {
        nome: "Afeganistão",
        idh: 0.465
    },
    {
        nome: "Camarões",
        idh: 0.512
    }
]

function classificar(idh) {
    if (idh > 0.8) {
        return "muito alto";
    } else if (idh > 0.7) {
        return "alto";
    } else if (idh > 0.6) {
        return "médio";
    } else if (idh > 0.5) {
        return "baixo";
    } else {
        return "muito baixo";
    }
}

function btnClassificarIdh() {
    const nomePais = inputPais.value;
    const primeiraMaiuscula = nomePais[0].toUpperCase() + nomePais.slice(1).toLowerCase();

    if (!nomePais) {
        resultadoClassificacao.innerHTML = "Confira aqui a classificação do país escolhido";
    }

    let paisEncontrado = idhPaises.find(pais => pais.nome === primeiraMaiuscula);
    resultadoClassificacao.innerHTML = `${primeiraMaiuscula} tem IDH (${paisEncontrado.idh}) e é considerado ${classificar(paisEncontrado.idh)} de acordo com a Escala de IDH do Programa das Nações Unidas para o Desenvolvimento – PNUD da ONU.`;
}







