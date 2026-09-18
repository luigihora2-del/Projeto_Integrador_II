// Array de reservas inicializado via localStorage
let reservas = JSON.parse(localStorage.getItem("agroReservas")) || [];

// Elementos do DOM
const formReserva = document.getElementById("formReserva");
const corpoTabela = document.getElementById("corpoTabela");
const reservaIdInput = document.getElementById("reservaId");
const btnSubmit = document.getElementById("btnSubmit");
const btnCancelarEdicao = document.getElementById("btnCancelarEdicao");
const tituloForm = document.getElementById("tituloForm");

// Função para renderizar as reservas na tabela
function renderizarTabela() {
    corpoTabela.innerHTML = "";

    if (reservas.length === 0) {
        corpoTabela.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; color: #777; padding: 20px;">
                    Nenhum agendamento cadastrado no momento.
                </td>
            </tr>
        `;
        return;
    }

    reservas.forEach((item) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td><strong>${item.pesquisador}</strong></td>
            <td>${item.curso}</td>
            <td>${item.talhao}</td>
            <td>${formatarData(item.dataInicio)} até ${formatarData(item.dataFim)}</td>
            <td><span class="status-aprovado"><i class="fa-solid fa-circle-check"></i> ${item.status}</span></td>
            <td class="actions-cell">
                <button class="btn-edit" onclick="prepararEdicao(${item.id})">
                    <i class="fa-solid fa-pen-to-square"></i> Editar
                </button>
                <button class="btn-delete" onclick="removerReserva(${item.id})">
                    <i class="fa-solid fa-trash"></i> Cancelar
                </button>
            </td>
        `;

        corpoTabela.appendChild(tr);
    });
}

// Formatador de Data (YYYY-MM-DD para DD/MM/YYYY)
function formatarData(dataStr) {
    if (!dataStr) return "";
    const partes = dataStr.split("-");
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

// Evento de submissão (Criar ou Atualizar)
formReserva.addEventListener("submit", function (e) {
    e.preventDefault();

    const id = reservaIdInput.value;
    const pesquisador = document.getElementById("pesquisador").value;
    const curso = document.getElementById("curso").value;
    const talhao = document.getElementById("talhao").value;
    const dataInicio = document.getElementById("dataInicio").value;
    const dataFim = document.getElementById("dataFim").value;

    if (new Date(dataInicio) > new Date(dataFim)) {
        return;
    }

    if (id) {
        // Modo Edição
        const index = reservas.findIndex(r => r.id == id);
        if (index !== -1) {
            reservas[index] = {
                id: Number(id),
                pesquisador,
                curso,
                talhao,
                dataInicio,
                dataFim,
                status: "Ativo"
            };
        }
    } else {
        // Modo Criação Automática
        const novaReserva = {
            id: Date.now(),
            pesquisador,
            curso,
            talhao,
            dataInicio,
            dataFim,
            status: "Ativo"
        };
        reservas.push(novaReserva);
    }

    salvarNoLocalStorage();
    renderizarTabela();
    resetarFormulario();
});

// Preparar formulário para Editar
function prepararEdicao(id) {
    const item = reservas.find(r => r.id == id);
    if (!item) return;

    reservaIdInput.value = item.id;
    document.getElementById("pesquisador").value = item.pesquisador;
    document.getElementById("curso").value = item.curso;
    document.getElementById("talhao").value = item.talhao;
    document.getElementById("dataInicio").value = item.dataInicio;
    document.getElementById("dataFim").value = item.dataFim;

    tituloForm.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Editar Agendamento`;
    btnSubmit.innerHTML = `<i class="fa-solid fa-floppy-disk"></i> Salvar Alterações`;
    btnCancelarEdicao.classList.remove("style-hidden");

    window.scrollTo({ top: document.getElementById("agendamento").offsetTop - 80, behavior: 'smooth' });
}

// Cancelar Edição
btnCancelarEdicao.addEventListener("click", resetarFormulario);

function resetarFormulario() {
    formReserva.reset();
    reservaIdInput.value = "";
    tituloForm.innerHTML = `<i class="fa-solid fa-calendar-plus"></i> Agendar Uso de Área Experimental`;
    btnSubmit.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Confirmar Agendamento`;
    btnCancelarEdicao.classList.add("style-hidden");
}

// Cancelar/Excluir Reserva Silenciosamente
function removerReserva(id) {
    reservas = reservas.filter((r) => r.id !== id);
    salvarNoLocalStorage();
    renderizarTabela();
}

// Persistir dados
function salvarNoLocalStorage() {
    localStorage.setItem("agroReservas", JSON.stringify(reservas));
}

// Inicializar Tabela
document.addEventListener("DOMContentLoaded", renderizarTabela);