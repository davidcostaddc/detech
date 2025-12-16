/* ================= UTILITÁRIOS ================= */
function escapeQuotes(str){ return String(str).replace(/'/g,"\\'"); }
function formatPreco(p){ return (typeof p === 'number') ? p.toFixed(2) : p; }

/* ================= CATEGORIAS E SERVIÇOS ================= */
const categorias = {
  formatacao_celular: [
    { nome: "Hard Reset (Simples)", desc: "Restauração de fábrica pelos botões (sem salvar nada).", preco: 40 },
    { nome: "Formatação com Backup", desc: "Salvar fotos e contatos, formatar e devolver os dados.", preco: 80 },
    { nome: "Reinstalação de ROM", desc: "Celular travando na tela da marca (loop infinito).", preco: 120 },
    { nome: "Desbloqueio Conta Google (FRP)", desc: "Usuário esqueceu e-mail após formatar.", preco: 150 },
    { nome: "Desbloqueio Conta Mi (Xiaomi)", desc: "Remoção/bypass de Mi Cloud.", preco: 200 }
  ],

  formatacao_pc: [
    { nome: "Formatação Simples (sem backup)", desc: "Windows + Office + Drivers.", preco: 60 },
    { nome: "Formatação Completa (com backup)", desc: "Salvar arquivos, formatar e devolver.", preco: 100 },
    { nome: "Remoção de Vírus", desc: "Limpeza completa do sistema.", preco: 80 },
    { nome: "Taxa de Serviço a Domicílio", desc: "Atendimento adicional em casa.", preco: 30 },
    { nome: "Upgrade HD → SSD 240GB/256GB", desc: "Mão de obra (R$xxx) + SSD 256GB (R$ 220). Total: R$ 350", preco: 350 },
    { nome: "Upgrade HD → SSD 480GB/512GB", desc: "Mão de obra (R$xxx) + SSD 512GB. Total: R$ 500", preco: 500 },
    { nome: "Upgrade HD → SSD 1TB", desc: "Mão de obra (R$xxx) + SSD 1TB. Total: R$ 680", preco: 680 }
  ],

  formatacao_notebook: [
    { nome: "Formatação Simples (sem backup)", desc: "Windows + Office + Drivers.", preco: 60 },
    { nome: "Formatação Completa (com backup)", desc: "Salvar arquivos, formatar e devolver.", preco: 100 },
    { nome: "Remoção de Vírus", desc: "Limpeza completa do sistema.", preco: 80 },
    { nome: "Taxa de Serviço a Domicílio", desc: "Atendimento adicional em casa.", preco: 30 },
    { nome: "Upgrade HD → SSD 240GB/256GB", desc: "Mão de obra (R$ 100) + SSD 256GB (R$ 220). Total: R$ 320", preco: 320 },
    { nome: "Upgrade HD → SSD 480GB/512GB", desc: "Mão de obra (R$ 100) + SSD 512GB. Total: R$ 500", preco: 500 },
    { nome: "Upgrade HD → SSD 1TB", desc: "Mão de obra (R$ 100) + SSD 1TB. Total: R$ 680", preco: 680 }
  ],

  recuperacao_senhas_web: [
    { nome:"Recuperação Senhas Web", desc:"Senhas de sites e emails.", preco:50 }
  ],

  recuperacao_redes: [
    { nome:"Recuperação Redes Sociais", desc:"Facebook, Instagram, etc.", preco:60 }
  ],

  recuperacao_apps: [
    { nome:"Recuperação Apps", desc:"WhatsApp, Telegram, outros.", preco:70 }
  ],

  recuperacao_windows: [
    { nome:"Recuperar Senha Windows", desc:"Recuperação de senha perdida do Windows.", preco:50 }
  ],

  designer_logos: [
    { nome:"Logo Básico", desc:"Design de logotipo simples baseado em tipografia. Inclui 2 revisões.", preco:100 },
    { nome:"Logo Avançado", desc:"Criação completa com símbolo exclusivo + 3 opções + 5 revisões.", preco:380 }
  ],

  identidade_visual: [
    { nome:"Identidade Visual Essencial", desc:"Paleta de cores + tipografia + arquivo com códigos de cor.", preco:300 },
    { nome:"Identidade Visual Completa", desc:"Manual de marca simplificado + regras de aplicação.", preco:800 }
  ],

  material_impresso: [
    { nome:"Material Impresso Simples", desc:"Design de 1 item (cartão de visita OU flyer). Entrega em PDF/X.", preco:65 },
    { nome:"Material Impresso Completo", desc:"Design de catálogo/folder (até 6 páginas).", preco:350 }
  ],

  midia_social: [
    { nome:"Pacote Básico de Posts", desc:"5 posts estáticos OU 3 posts animados.", preco:150 },
    { nome:"Pacote Mensal Redes Sociais", desc:"20 posts/mês (estáticos/animados) + legendas.", preco:600 },
    { nome:"Capa para Facebook (Banner)", desc:"Design otimizado para Desktop e Mobile.", preco:35 },
    { nome:"Capa para LinkedIn (Banner)", desc:"Design na proporção correta do LinkedIn.", preco:35 },
    { nome:"Post Único para Facebook", desc:"Arte estática para feed.", preco:15 },
    { nome:"Post Único para Instagram", desc:"Arte estática para feed ou story.", preco:15 }
  ],

  edicao: [
    { nome:"Edição Simples", desc:"Recorte (fundo branco/transparente) ou ajuste rápido.", preco:15 },
    { nome:"Edição Avançada", desc:"Retoque de pele, manipulação ou remoção complexa.", preco:70 },
    { nome:"Modificação Extra", desc:"Ajustes simples de cor, fonte ou alinhamento.", preco:25 },
    { nome:"Recriação do Projeto", desc:"Refazer do zero — 40% do valor inicial.", preco:"40% do valor inicial" },
    { nome:"Design para Mídias Digitais", desc:"Criação de arte digital sob medida.", preco:35 }
  ],

  restauracao: [
    { nome:"Restauração Básica", desc:"Correção leve de cor e nitidez.", preco:60 },
    { nome:"Restauração Complexa", desc:"Rasgos, manchas grandes e áreas faltando.", preco:80 }
  ],

  tratamento_foto: [
    { nome:"Pacote Ensaio", desc:"Edição profissional em 20 fotos.", preco:250 },
    { nome:"Foto Individual", desc:"Edição completa em uma foto.", preco:40 }
  ],

  modificacoes_extras: [
    { nome:"Adicionar/Trocar Fonte", desc:"Mudar fonte ou adicionar texto.", preco:15 },
    { nome:"Alterar Conteúdo de Texto", desc:"Trocar nome, telefone, etc.", preco:20 },
    { nome:"Ajuste de Cor Simples", desc:"Trocar cores da arte.", preco:20 },
    { nome:"Reposicionamento de Elementos", desc:"Mover textos ou ícones.", preco:17 }
  ],

  analiseRiscos: [
    { nome:"Análise de Riscos", desc:"Identificação de vulnerabilidades.", preco:150 }
  ],

  senhaSegura: [
    { nome:"Configuração de Senhas Seguras", desc:"Ajuste completo de senhas.", preco:60 }
  ],

  protecoes: [
    { nome:"Hardening do Sistema", desc:"Camadas extras de proteção digital.", preco:120 }
  ],

  video_corte: [
    { nome:"Corte e Montagem", desc:"Cortes precisos e organização profissional.", preco:70 }
  ],

  video_efeitos: [
    { nome:"Adição de Efeitos", desc:"Efeitos visuais e aprimoramentos.", preco:90 }
  ],

  video_correcao: [
    { nome:"Correção de Cor", desc:"Color grading profissional.", preco:80 }
  ],

  video_audio: [
    { nome:"Inserção de Áudio/Música", desc:"Mixagem, limpeza e trilhas.", preco:50 }
  ],

  video_transicoes: [
    { nome:"Transições e Animações", desc:"Efeitos animados e dinâmicos.", preco:75 }
  ],

  video_render: [
    { nome:"Renderização Final", desc:"Exportação otimizada.", preco:40 }
  ],

  slides_criacao: [
    { nome:"Criação de Slides", desc:"Apresentação completa e profissional.", preco:25 }
  ],

  slides_design: [
    { nome:"Design Personalizado", desc:"Layout moderno e organizado.", preco:150 }
  ],

  slides_transicoes: [
    { nome:"Transições e Animações", desc:"Animações suaves e dinâmicas.", preco:60 }
  ],

  slides_graficos: [
    { nome:"Gráficos e Tabelas", desc:"Visual de dados estruturado.", preco:50 }
  ],

  slides_traducao: [
    { nome:"Tradução e Adaptação", desc:"Tradução com ajuste visual.", preco:80 }
  ],

  slides_edicao: [
    { nome:"Edição de Slides", desc:"Correções e melhorias.", preco:20 }
  ],

  cv_personalizado: [
    { nome:"Currículo Personalizado", desc:"Criação completa e moderna.", preco:90 }
  ],

  cv_layout: [
    { nome:"Ajuste de Layout", desc:"Melhoria visual do currículo.", preco:55 }
  ],

  cv_info: [
    { nome:"Inclusão de Informações", desc:"Atualização profissional.", preco:45 }
  ],

  cv_carta: [
    { nome:"Carta de Apresentação", desc:"Carta profissional.", preco:60 }
  ],

  cv_lattes: [
    { nome:"Currículo Lattes", desc:"Organização completa.", preco:85 }
  ],

  site_simples: [
    { nome:"Site Simples", desc:"Até 3 páginas", preco:350 }
  ],

  site_institucional: [
    { nome:"Site Institucional", desc:"Profissional e responsivo.", preco:650 }
  ],

  site_loja: [
    { nome:"Loja Virtual", desc:"E-commerce completo.", preco:1200 }
  ],

  site_portfolio: [
    { nome:"Site Portfólio", desc:"Apresentação de trabalhos.", preco:450 }
  ],

};

/* ================= SISTEMA (CARRINHO / UI) ================= */
let carrinho = [];

/* ================= INICIALIZAÇÃO E MENU TOGGLE ================= */
document.addEventListener('DOMContentLoaded', () => {

  // Inicializa submenu fechados e ativa evento de clique (controle via classe .ativo)
  document.querySelectorAll('.menu-item').forEach(item => {
    const btn = item.querySelector('.menu-btn');
    const submenu = item.querySelector('.submenu');
    if (!btn || !submenu) return;

    submenu.classList.remove('ativo');

    btn.addEventListener('click', (e) => {
      e.stopPropagation();

      // fecha todos os submenus exceto o que pertence ao botão clicado
      document.querySelectorAll('.submenu').forEach(s => {
        if (s !== submenu) s.classList.remove('ativo');
      });

      submenu.classList.toggle('ativo');

      // se for submenu-large, mantenha layout em row
      if (submenu.classList.contains('submenu-large')) {
        submenu.style.flexDirection = 'row';
      } else {
        submenu.style.flexDirection = 'column';
      }
    });
  });

  // Fecha submenus ao clicar fora
  document.addEventListener('click', () => {
    document.querySelectorAll('.submenu').forEach(s => s.classList.remove('ativo'));
  });

  const toggleCartBtn = document.getElementById('toggleCartBtn');
  const cartBox = document.getElementById('carrinho-box');

  if(toggleCartBtn && cartBox){
    toggleCartBtn.addEventListener('click', (e) => { 
      e.stopPropagation(); 
      cartBox.classList.toggle('ativo'); 
    });

    cartBox.addEventListener('click', (ev)=> ev.stopPropagation());

    document.addEventListener('click', ()=> cartBox.classList.remove('ativo'));
  }

  const finalizarBtn = document.getElementById('finalizar');
  if(finalizarBtn) finalizarBtn.addEventListener('click', finalizarCompra);

  const closePaymentBtn = document.getElementById('closePaymentBtn');
  if(closePaymentBtn) closePaymentBtn.addEventListener('click', fecharPagamento);

  // duplicar carrossel para loop infinito (se existir)
  const track = document.querySelector(".carrossel-track");
  if (track) track.innerHTML += track.innerHTML;
});

/* ================= FUNÇÕES PRINCIPAIS ================= */

function abrirCategoria(cat) {

  // ESCONDE SEÇÕES DA PÁGINA INICIAL
  const destaque = document.getElementById("secao-destaques");
  const sobre = document.getElementById("secao-sobre");

  if(destaque) destaque.style.display = "none";
  if(sobre) sobre.style.display = "none";

  const div = document.getElementById('produtos-secao');
  if(!div) return;
  // prepara a seção de produtos (grid de blocos)
  div.classList.add('ativo');
  div.style.display = 'grid';
  div.innerHTML = '';

  if(!categorias[cat]) {
    div.innerHTML = '<p class="instrucoes">Categoria não encontrada.</p>';
    return;
  }

  categorias[cat].forEach(p => {
    const precoTexto = (typeof p.preco === 'number') ? formatPreco(p.preco) : p.preco;
    const precoParaSomar = (typeof p.preco === 'number') ? p.preco : 0;
    const nomeEsc = escapeQuotes(p.nome);

    const card = document.createElement('div');
    card.className = 'card-servico';

    card.innerHTML = `
      <h3>${p.nome}</h3>
      <p>${p.desc}</p>
      <div><span class="preco">R$ ${precoTexto}</span></div>
      <button class="add-btn" onclick="adicionarCarrinho('${nomeEsc}', ${precoParaSomar})">
        Adicionar
      </button>
    `;

    div.appendChild(card);
  });
}

function adicionarCarrinho(nome, preco){
  carrinho.push({ nome, preco: (typeof preco==='number') ? preco : 0 });
  atualizarCarrinho();
}

function atualizarCarrinho(){
  const lista = document.getElementById('lista-carrinho');
  if(!lista) return;

  lista.innerHTML = '';
  let total = 0;

  carrinho.forEach((item,idx)=>{
    total += item.preco;

    const div = document.createElement('div');
    div.className = 'item-carrinho';

    div.innerHTML = `
      <span>${item.nome} — R$ ${item.preco.toFixed(2)}</span>
      <button onclick="removerItem(${idx})">❌</button>
    `;

    lista.appendChild(div);
  });

  const contador = document.getElementById('contador');
  if (contador) contador.innerText = carrinho.length;
  const totalSpan = document.getElementById('total-carrinho');
  if (totalSpan) totalSpan.innerText = total.toFixed(2);
}

function removerItem(i){
  carrinho.splice(i,1);
  atualizarCarrinho();
}

function finalizarCompra(){
  if(carrinho.length===0){
    alert('Seu carrinho está vazio!');
    return;
  }
  // Monta a mensagem contendo os itens, preços e total
  const telefone = '558187945897';
  const total = carrinho.reduce((a,b)=>a+b.preco,0);

  let texto = `Olá! Gostaria de finalizar minha compra na De-Tech.\n\n`;
  texto += `Itens:\n`;
  carrinho.forEach((it, idx) => {
    const preco = (typeof it.preco === 'number') ? it.preco.toFixed(2) : it.preco;
    texto += `- ${it.nome} — R$ ${preco}\n`;
  });

  texto += `\nTotal: R$ ${total.toFixed(2)}\n\n`;

  // Monta resumo automático (itens + total) e envia direto para WhatsApp sem prompt
  let resumoDefault = '';
  carrinho.forEach(it => {
    const preco = (typeof it.preco === 'number') ? it.preco.toFixed(2) : it.preco;
    resumoDefault += `${it.nome} — R$ ${preco}; `;
  });
  resumoDefault += `Total: R$ ${total.toFixed(2)}.`;

  texto += `Observações: ${resumoDefault}\n`;
  texto += `\nObrigado!`;

  // Abre o WhatsApp com a mensagem (web ou app) — sem mostrar prompt na página
  const wa = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;
  window.open(wa, '_blank');
  // opcional: limpar carrinho ou manter — aqui manteremos e apenas atualizamos a UI
}

function fecharPagamento(){
  const paymentModal = document.getElementById('payment-modal');
  if (paymentModal) paymentModal.classList.remove('ativo');
}

/* toggle carrinho */
function toggleCarrinho() {
  const box = document.getElementById('carrinho-box');
  if(!box) return;
  box.classList.toggle('ativo');
}

/* VOLTAR PARA INÍCIO (unificado) */
// A implementação final de `voltarInicio` está mais abaixo (mantida única)

/* ======== EFEITO DIGITAÇÃO (ÚNICO) ======== */
document.addEventListener("DOMContentLoaded", () => {
  const deEl = document.getElementById("typewriter");
  const techWordEl = document.querySelector(".tech-word");
  const cursorEl = document.querySelector(".cursor");
  
  if (!deEl || !techWordEl) return;

  let deIndex = 0;
  let techIndex = 0;
  const deText = "De-";
  const techText = "Tech";
  const speed = 140;

  function typeDe() {
    if (deIndex <= deText.length) {
      deEl.textContent = deText.slice(0, deIndex);
      deIndex++;
      setTimeout(typeDe, speed);
    } else {
      typeTech();
    }
  }

  function typeTech() {
    if (techIndex <= techText.length) {
      techWordEl.textContent = techText.slice(0, techIndex);
      techIndex++;
      setTimeout(typeTech, speed);
    } else {
      blinkCursor();
    }
  }

  function blinkCursor() {
    if (cursorEl) {
      setInterval(() => {
        cursorEl.style.opacity = cursorEl.style.opacity === "0" ? "1" : "0";
      }, 500);
    }
  }

  typeDe();
});

/* ================= FILTRO DE SEÇÕES ================= */
function mostrarApenasCategorias() {
  const secoes = document.querySelectorAll('section.secao:not(#produtos-secao)');
  secoes.forEach(s => s.style.display = 'none');
  document.getElementById('produtos-secao').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function mostrarTodoConteudo() {
  const secoes = document.querySelectorAll('section.secao');
  secoes.forEach(s => s.style.display = 'block');
  const produtos = document.getElementById('produtos-secao');
  if (produtos) {
    produtos.classList.remove('ativo');
    produtos.style.display = 'none';
    produtos.innerHTML = '';
  }
}

function voltarInicio() {
  mostrarTodoConteudo();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ================= AGENDAMENTO (MODAL -> WhatsApp) ================= */
function openAgendamentoModal(){
  const m = document.getElementById('agendamento-modal');
  if(!m) return;
  m.classList.add('ativo');
  m.style.display = 'flex';
  m.setAttribute('aria-hidden','false');
  try { document.getElementById('agendamento-nome').focus(); } catch(e){}
  document.body.style.overflow = 'hidden';
}

function closeAgendamentoModal(){
  const m = document.getElementById('agendamento-modal');
  if(!m) return;
  m.classList.remove('ativo');
  m.style.display = 'none';
  m.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

function enviarAgendamento(){
  const nome = (document.getElementById('agendamento-nome') || {}).value || '';
  const horario = (document.getElementById('agendamento-horario') || {}).value || '';
  const resumo = (document.getElementById('agendamento-resumo') || {}).value || '';

  if(!nome.trim() || !resumo.trim()){
    alert('Por favor, preencha seu nome e descreva brevemente o problema.');
    return;
  }

  let mensagem = `Olá, sou ${nome.trim()}. Gostaria de agendar um atendimento online.`;
  if(horario.trim()) mensagem += `\nHorário preferido: ${horario.trim()}`;
  mensagem += `\nResumo: ${resumo.trim()}`;
  mensagem += `\n\n(Enviado via De-Tech)`;

  const telefone = '558187945897';
  const wa = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(wa, '_blank');
  closeAgendamentoModal();
}

// close modal on escape key
document.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ closeAgendamentoModal(); } });

