function verificarIdade() {
    const input = document.getElementById("idadeInput");
    const resultado = document.getElementById("resultado");
    const valor = input.value.trim();

    if (valor === "" || isNaN(valor)) {
        resultado.innerText = "Por favor, digite uma idade válida.";
        resultado.style.color = "red";
        return;
    }

    const idade = parseInt(valor, 10);

    if (idade < 0) {
        resultado.innerText = "A idade não pode ser negativa.";
        resultado.style.color = "red";
        return;
    }

    if (idade > 130) {
        resultado.innerText = "Por favor, insira uma idade realista (até 130 anos).";
        resultado.style.color = "red";
        return;
    }

    let classificacao = "";

    if (idade <= 12) {
        classificacao = "Criança (0 a 12 anos)";
    } else if (idade <= 17) {
        classificacao = "Adolescente (13 a 17 anos)";
    } else if (idade <= 59) {
        classificacao = "Adulto(a) (18 a 59 anos)";
    } else {
        classificacao = "Idoso(a) (60 anos ou mais)";
    }

    resultado.innerText = `Com ${idade} ano(s), você é classificado(a) como: ${classificacao}.`;
    resultado.style.color = "inherit";
}

// Permitir acionar a verificação pressionando a tecla 'Enter'
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("idadeInput");
    if (input) {
        input.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                verificarIdade();
            }
        });
    }
});
