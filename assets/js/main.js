/**
* Template Name: Clinic
* Template URL: https://bootstrapmade.com/clinic-bootstrap-template/
* Updated: Jul 23 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

})();

/**
 * Scroll Spy – ativa o menu conforme a seção visível
 */
const navLinks = document.querySelectorAll('#navmenu a');
const sections = document.querySelectorAll('section[id]');

function activateMenuOnScroll() {
  let scrollPosition = window.scrollY + 150; // ajuste fino do topo

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach(link => link.classList.remove('active'));

      const activeLink = document.querySelector(
        `#navmenu a[href="#${sectionId}"]`
      );

      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });

  // Caso especial: topo da página = Home
  if (window.scrollY < 200) {
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[0].classList.add('active');
  }
}

window.addEventListener('scroll', activateMenuOnScroll);
window.addEventListener('load', activateMenuOnScroll);

const noticias = {
  mcmv: {
    titulo: "Como Sair do Aluguel e Conquistar seu Apartamento?",
    texto: "<p>Realizar o sonho da casa própria em 2026 está mais acessível, especialmente com a parceria entre a Longitude Incorporadora e o programa Minha Casa, Minha Vida (MCMV). Com as atualizações recentes nas faixas de renda e nos subsídios, ficou mais fácil encontrar um apartamento que caiba no seu bolso.<br><br>Aqui está um guia prático de como você pode garantir o seu apê com as facilidades da Longitude:<br><br><b>1. Verifique em qual Faixa de Renda você se encaixa</b><br><br>O primeiro passo é entender o seu perfil financeiro. Em 2026, as faixas de renda bruta familiar mensal para áreas urbanas são:<br><br><i>Faixa</i><br><i>Renda Familiar Mensal</i><br><i>Benefícios Principais</i><br><br><b>Faixa 1</b><br>Até R$ 2.850,00<br>Maiores subsídios e menores taxas de juros.<br><br><b>Faixa 2</b><br>De R$ 2.850,01 a R$ 4.700,00<br>Subsídios de até R$ 55 mil e juros reduzidos.<br><br><b>Faixa 3</b><br>De R$ 4.700,01 a R$ 8.600,00<br>Taxas de juros atrativas e uso do FGTS.<br><br><b>Faixa 4</b><br>De R$ 8.600,01 a R$ 12.000,00<br>Financiamento de imóveis de até R$ 500 mil.<br><br><b>Nota: </b>Se você recebe Bolsa Família ou BPC e se enquadra na Faixa 1, pode ter direito à isenção total das prestações em imóveis específicos do governo.<br><br><b>2. As Vantagens de Comprar com a Longitude</b><br><br>A Longitude é conhecida por facilitar o caminho de quem está saindo do aluguel. Ao escolher um empreendimento da marca, você conta com:<br><br><b>• Entrada Facilitada:</b> Muitas vezes a entrada pode ser parcelada em até 82 vezes, o que ajuda muito quem não tem uma reserva imediata.<br><br><b>• Uso do FGTS:</b> Você pode utilizar o saldo do seu Fundo de Garantia para abater o valor da entrada ou amortizar as parcelas.<br><br><b>• Subsídios do Governo:</b> Dependendo da sua faixa, você pode receber um “desconto” de até R$ 55 mil dado pelo governo federal para ajudar no pagamento do imóvel.<br><br><b>• Projetos Modernos:</b> Diferente do estigma de “imóvel popular”, os projetos da Longitude em 2026 (como o Rio Branco ou em Perus) oferecem áreas de lazer completas e varanda gourmet.<br><br><b>3. Passo a Passo para a Conquista</b><br><br><b>Simulação Inicial:</b> O primeiro passo é conversar com um consultor da Longitude. Eles farão uma simulação para mostrar exatamente o valor das parcelas e o quanto de subsídio você tem direito.<br><br><b>Análise de Crédito:</b> Com seus dados, a Caixa Econômica Federal avalia seu potencial de financiamento. É rápido e sem custo.<br><br><b>Escolha da Unidade:</b> Com o crédito pré-aprovado, você escolhe o andar e a posição do seu futuro apartamento.<br><br><b>Assinatura e Contrato:</b> Após a aprovação final da engenharia e documentação, você assina o contrato e começa a pagar as parcelas (que muitas vezes são menores que um aluguel).<br><br><b>4. Documentação Necessária</b><br><br>Para agilizar o processo, já deixe separado (original e cópia):<br><br><b>• Identificação:</b> RG e CPF (ou CNH).<br><b>• Estado Civil:</b> Certidão de Nascimento ou Casamento (com averbação em caso de divórcio).<br><b>• Renda:</b> Holerites dos últimos 3 a 6 meses ou extratos bancários (para autônomos).<br><b>• Residência:</b> Comprovante atualizado (conta de luz, água ou telefone).<br><b>• Trabalho:</b> Carteira de Trabalho e extrato atualizado do FGTS.<br><br>A Longitude foca em transformar o processo de compra em algo leve, tirando o peso da burocracia para que você foque no que importa: a decoração do seu novo lar.</p>",
    imagem: "assets/img/informativo-mcmv.jpeg"
  },
  sbpe: {
    titulo: "Não se Encaixa no “Minha Casa, Minha Vida”?",
    texto: "<p>Você sonha com a casa própria, começou a pesquisar sobre financiamento e deu de cara com uma sopa de letrinhas: MCMV, TR, SAC, PRICE e... <b>SBPE.</b><br><br>Muita gente acha que, se não se enquadrar nas regras do programa social do governo (o Minha Casa, Minha Vida), o sonho acabou ou ficou impossível. <b>Isso é um grande mito.</b><br><br>Existe um universo inteiro de crédito imobiliário fora dos programas populares, e a principal porta de entrada para ele se chama SBPE. Vamos descomplicar?<br><br><b>O que é o tal do SBPE?</b><br><br>SBPE significa <b>Sistema Brasileiro de Poupança e Empréstimo.</b><br><br>De forma bem direta: é a linha de crédito imobiliário mais tradicional do Brasil, voltada para a classe média e alta. É o caminho para quem busca imóveis de médio a alto padrão e não se encaixa nos limites de renda ou valor do programa popular.<br><br><b>De onde vem o dinheiro?</b><br><br>Sabe a Caderneta de Poupança, a mais tradicional aplicação dos brasileiros? É de lá! Por lei, os bancos são obrigados a usar a maior parte do dinheiro depositado na poupança para financiar moradias.<br><br>Quando você financia pelo SBPE, você está usando esse recurso.<br><br><b>Para quem o SBPE é indicado?</b><br><br>O SBPE é perfeito para você se:<br><br>• Sua renda familiar é mais alta do que o teto permitido no “Minha Casa, Minha Vida”.<br><br>• O imóvel que você deseja custa mais caro do que os limites regionais do programa popular (geralmente acima de R$ 350 mil).<br><br>• Você já possui um imóvel no seu nome e quer comprar outro (seja para morar ou investir).<br><br><b>As Vantagens do SBPE:</b><br><br>Embora não tenha o subsídio (aquela ajuda em dinheiro do governo), o SBPE tem vantagens incríveis:<br><br><b>1. Prazos Longos:</b> Você tem até 35 anos (420 meses) para pagar.<br><br><b>2. Financiamento Alto:</b> Os bancos costumam financiar até 80% ou até 90% do valor do imóvel.<br><br><b>3. Use seu FGTS:</b> Se o imóvel custar até R$ 1,5 milhão, <b>você pode usar o seu saldo do FGTS</b> para abater a entrada ou reduzir as parcelas.<br><br><b>O Próximo Passo: Não tente decifrar isso sozinho.</b><br><br>Entender a teoria é fácil. O difícil é lidar com a burocracia dos bancos, comparar as taxas de juros (que variam muito de um banco para outro no SBPE) e montar o processo da forma certa para ser aprovado.<br><br>Você não precisa passar por essa dor de cabeça sozinho.<br></p>",
    imagem: "assets/img/informativo-sbpe.jpeg"
  },
  entrada: {
    titulo: "Não Possui Dinheiro Guardado? <br> Entrada Facilitada em 82x",
    texto: "<p>Atualmente, conquistar o apartamento próprio não precisa significar pagar uma entrada pesada de uma só vez. Hoje, com condições facilitadas, é possível organizar as finanças e começar seu investimento com mais tranquilidade.<br><br>Na <b>Longitude Incorporadora,</b> você encontra opções de <b>entrada parcelada,</b> pensadas para caber no seu bolso e acelerar sua conquista.<br><br><b>- O que é entrada facilitada?</b><br>É a possibilidade de dividir o valor da entrada em várias parcelas mensais, sem juros, em vez de pagar tudo à vista.<br><br><b>- Como isso ajuda você?</b><br>Ao parcelar em até 82x, o impacto no orçamento diminui. Assim, você consegue se planejar melhor sem comprometer suas despesas do dia a dia.<br><br><b>- Mais organização financeira:</b><br>Parcelas menores permitem manter seu equilíbrio financeiro, evitar dívidas extras e continuar guardando dinheiro para mobiliar ou personalizar seu novo apê.<br><br><b>- Aprovação mais acessível:</b><br>Com a entrada diluída, fica mais fácil dar o primeiro passo no financiamento e garantir sua unidade antes que os preços subam.<br><br><b>- Planejamento sem sustos:</b><br>Sem juros na entrada, você sabe exatamente quanto vai pagar do início ao fim, com total previsibilidade.<br><br>Para quem vive de aluguel ou quer sair da casa dos pais, condições facilitadas transformam o “depois eu vejo” em “agora eu consigo”.<br><br>Com entrada facilitada, o sonho não precisa esperar, ele começa hoje, parcela por parcela.</p>",
    imagem: "assets/img/informativo-entrada.jpeg"
  },
  empurraozinho: {
    titulo: "O 'Empurrãozinho' que Falta para sua Casa Própria",
    texto: "<p>O sonho da casa própria no Brasil, conta com mecanismos de suporte que facilitam essa trajetória.<br><br>O Brasil possui programas habitacionais consolidados, como o <b>Minha Casa, Minha Vida.</b> A grande “chave” aqui é o <b>subsídio do Governo Federal.</b><br><br><b>• O que é o subsídio?</b><br>É uma quantia em dinheiro que o governo aporta para pagar parte do valor do imóvel. Ele não é um empréstimo; você não precisa devolvê-lo.<br><br><b>• Redução do esforço:</b><br>Atualmente no Brasil, você pode se enquadrar em faixas de renda que garantem descontos significativos no valor final do imóvel, diminuindo a necessidade de uma entrada astronômica.<br><br><b>• Taxa de juros: </b>Além do subsídio direto, as taxas de juros para habitação popular no Brasil são significativamente menores do que as de mercado, facilitando o planejamento a longo prazo.<br><br>Para quem vive a realidade brasileira, a felicidade geralmente tem o formato de uma chave na mão.<br><br>Ter um imóvel próprio significa:<br><br><b>1. Segurança Psicológica:</b> O fim do medo do despejo.<br><b>2. Construção de Patrimônio:</b> O valor que antes ia para o aluguel (fundo perdido) passa a ser um investimento no que é seu.<br><b>3. Estabilidade Familiar:</b> Um ambiente fixo para o desenvolvimento dos filhos.<br><br><i>“Nunca deixe que ninguém te diga que você não pode fazer algo. Se você tem um sonho, tem que protegê-lo.” — Chris Gardner</i><br><br>Essa frase icônica do filme 'A Procura da Felicidade', resume bem o espírito de quem busca a casa própria no Brasil. A diferença é que, por aqui, além da sua resiliência pessoal, você pode contar com o “empurrão” dos subsídios para transformar o sonho em endereço fixo.</p>",
    imagem: "assets/img/informativo-empurraozinho.jpeg"
  },
  fgts: {
    titulo: "Como Utilizar seu FGTS na Realização do seu Sonho",
    texto: "<p>No Brasil, conquistar o apartamento próprio pode ser mais simples quando você utiliza os recursos certos a seu favor. Além dos programas habitacionais, existe um grande aliado nessa jornada: o <b>Fundo de Garantia do Tempo de Serviço (FGTS).</b><br><br>Ao comprar seu imóvel com a <b>Longitude Incorporadora,</b> você pode usar esse valor para reduzir custos, facilitar a entrada e deixar as parcelas mais leves, tornando o sonho da casa própria ainda mais acessível.<br><br><b>• O que é FGTS?</b><br>É um fundo formado por depósitos mensais feitos pelo empregador. Esse dinheiro é seu e pode ser utilizado em momentos importantes, como a compra do primeiro imóvel residencial.<br><br><b>• Como o FGTS ajuda na compra do apartamento?</b><br>Você pode usar o saldo para dar entrada, amortizar parcelas ou até diminuir o valor total financiado. Ou seja: menos juros e menos tempo pagando.<br><br><b>• Redução do esforço financeiro:</b><br>Com o FGTS, parte do valor sai do seu saldo já acumulado, diminuindo o que você precisa financiar. Isso facilita a aprovação do crédito e reduz o peso das prestações no orçamento.<br><br><b>• Parcelas mais leves:</b><br>Também é possível usar o FGTS ao longo do financiamento para abater o saldo devedor ou pagar algumas prestações, trazendo mais tranquilidade em períodos apertados.<br><br><b>• Combinação com programas habitacionais:</b>O uso do FGTS pode ser somado a benefícios como o Minha Casa Minha Vida, potencializando descontos, subsídios e condições especiais.<br><br>Para quem quer sair do aluguel, cada real do FGTS pode se transformar em um passo mais perto da chave na mão.<br><br>Seu FGTS já é seu por direito — usar esse recurso na compra do seu apê é transformar tempo de trabalho em realização.</p>",
    imagem: "assets/img/informativo-fgts.jpeg"
  } 
};

function abrirNoticia(id) {
  const noticia = noticias[id];
  const container = document.getElementById('noticiaConteudo');

  container.innerHTML = `
    <h2>${noticia.titulo}</h2>
    ${noticia.imagem ? `<img src="${noticia.imagem}" class="noticia-img" alt="banner">` : ''}
    <div>${noticia.texto}</div>
    <button class="btn btn-primary w-100 mt-4" style="background-color: var(--accent-color); border:none;" data-bs-dismiss="modal">Entendi</button>
  `;

  const modal = new bootstrap.Modal(document.getElementById('noticiaModal'));
  modal.show();
}

document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.swiper-noticias', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1200: { slidesPerView: 3, spaceBetween: 30 }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
});