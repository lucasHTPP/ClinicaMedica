
// função para gerar o calendario
function generateCalendar() {
    const calendarBody = document.getElementById('calendar-body');
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    calendarBody.innerHTML = '';
    let row = document.createElement('tr');
    
    for (let i = 0; i < firstDay; i++) {
        let cell = document.createElement('td');
        row.appendChild(cell);
    }
    
    for (let day = 1; day <= lastDate; day++) {
        let cell = document.createElement('td');
        cell.textContent = day;
        
        if (day === today.getDate()) {
            cell.classList.add('today');
        }
        
        row.appendChild(cell);
        
        if ((firstDay + day) % 7 === 0) {
            calendarBody.appendChild(row);
            row = document.createElement('tr');
        }
    }
    
    if (row.children.length > 0) {
        calendarBody.appendChild(row);
    }
}
generateCalendar();
 // fim da função gerar o calendario

function showhideview(view) {
    document.getElementById(view).classList.toggle('d-none');
}

 // planilha tela de Funcionario Informaçao pessoais
function editarPlanilha() {
    var btn = document.getElementById("editar-btn");
    var inputs = document.querySelectorAll("#form input");

    var editando = btn.innerHTML === "Salvar";

    // Permite ou não a edição dos campos
    inputs.forEach(function(input) {
        input.readOnly = editando;
        if (!editando) {
            input.style.backgroundColor = "#e0f7fa";
        } else {
            input.style.backgroundColor = "#fff";
        }
    });

    // Muda o texto do botão
    btn.innerHTML = editando ? "Editar" : "Salvar";
}

    // Adicionar o evento de clique nas estrelas tela cliente
    let estrelasSelecionadas = 0;

    // Adicionar o evento de clique nas estrelas
    const estrelas = document.querySelectorAll(".estrela");
    
    estrelas.forEach(estrela => {
        estrela.addEventListener("click", function() {
            estrelasSelecionadas = this.getAttribute("data-value");
            atualizarEstrelas();
        });
    });

// tela de AvaliaçãoAtualizar a cor das estrelas de acordo com a seleção
    function atualizarEstrelas() {
        estrelas.forEach(estrela => {
            if (estrela.getAttribute("data-value") <= estrelasSelecionadas) {
                estrela.style.color = "gold"; // Altera a cor para dourado quando a estrela for selecionada
            } else {
                estrela.style.color = "gray"; // Mantém a cor cinza para estrelas não selecionadas
            }
        });
        document.getElementById("avaliacao-texto").textContent = "Você escolheu " + estrelasSelecionadas + " estrela(s).";
    }

    // Função para simular o envio da avaliação
    function enviarAvaliacao() {
        if (estrelasSelecionadas === 0) {
            alert("Por favor, selecione a quantidade de estrelas.");
        } else {
            alert("Avaliação de " + estrelasSelecionadas + " estrela(s) enviada com sucesso!");
            // Aqui você pode implementar o envio da avaliação para um banco de dados ou outro processo
        }
    }

   // Lista de médicos organizados por área de atuação
// Lista de médicos com datas disponíveis
const datasMedicos = {
    "Ana Catarina S.": ["05/03/2025", "07/03/2025", "10/03/2025"],
    "Carlos Eduardo": ["06/03/2025", "08/03/2025", "12/03/2025"],
    "Patrícia Araujo": ["04/03/2025", "09/03/2025", "11/03/2025"]
};

function filtrarPorArea() {
    const area = prompt("Digite a especialidade desejada (Pediatra, Dentista, Ortopedista):");
    const medicos = document.querySelectorAll(".medico");
    
    medicos.forEach(medico => {
        if (medico.getAttribute("data-area").toLowerCase() === area.toLowerCase()) {
            medico.style.display = "flex";
        } else {
            medico.style.display = "none";
        }
    });
}

function mostrarDatas(medico) {
    document.getElementById("medico-selecionado").innerText = medico;
    const datasLista = document.getElementById("datas-lista");
    datasLista.innerHTML = "";
    
    datasMedicos[medico].forEach(data => {
        const button = document.createElement("button");
        button.innerText = data;
        button.classList.add("data-button");
        button.onclick = () => alert(`Você escolheu a data ${data} para consulta com ${medico}`);
        datasLista.appendChild(button);
    });

    document.getElementById("datas-disponiveis").style.display = "block";
}

function voltarPagina() {
    window.history.back();
}