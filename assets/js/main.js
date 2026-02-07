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
    titulo: "Minha Casa, Minha Vida 2026",
    texto: "<p>O programa passou por atualizações importantes. Agora, famílias com renda de até R$ 8 mil podem participar. Os subsídios aumentaram, chegando a até R$ 55 mil para ajudar na compra do seu primeiro imóvel.</p>",
    imagem: "assets/img/informativo-mcmv.jpeg"
  },
  sbpe: {
    titulo: "Não se encaixa no “Minha Casa, Minha Vida”?",
    texto: "<p>Você sonha com a casa própria, começou a pesquisar sobre financiamento e deu de cara com uma sopa de letrinhas: MCMV, TR, SAC, PRICE e... SBPE.<br><br>Muita gente acha que, se não se enquadrar nas regras do programa social do governo (o Minha Casa, Minha Vida), o sonho acabou ou ficou impossível. Isso é um grande mito.<br><br>Existe um universo inteiro de crédito imobiliário fora dos programas populares, e a principal porta de entrada para ele se chama SBPE. Vamos descomplicar?<br><br>O que é o tal do SBPE?<br><br>SBPE significa Sistema Brasileiro de Poupança e Empréstimo.<br><br>De forma bem direta: é a linha de crédito imobiliário mais tradicional do Brasil, voltada para a classe média e alta. É o caminho para quem busca imóveis de médio a alto padrão e não se encaixa nos limites de renda ou valor do programa popular.<br><br>De onde vem o dinheiro?<br><br>Sabe a Caderneta de Poupança, a mais tradicional aplicação dos brasileiros? É de lá! Por lei, os bancos são obrigados a usar a maior parte do dinheiro depositado na poupança para financiar moradias.<br><br>Quando você financia pelo SBPE, você está usando esse recurso.<br><br>Para quem o SBPE é indicado?<br><br>O SBPE é perfeito para você se:<br><br>• Sua renda familiar é mais alta do que o teto permitido no “Minha Casa, Minha Vida”.<br><br>• O imóvel que você deseja custa mais caro do que os limites regionais do programa popular (geralmente acima de R$ 350 mil).<br><br>• Você já possui um imóvel no seu nome e quer comprar outro (seja para morar ou investir).<br><br>As Vantagens do SBPE:<br><br>Embora não tenha o subsídio (aquela ajuda em dinheiro do governo), o SBPE tem vantagens incríveis:<br><br>1. Prazos Longos: Você tem até 35 anos (420 meses) para pagar.<br><br>2. Financiamento Alto: Os bancos costumam financiar até 80% ou até 90% do valor do imóvel.<br><br>3. Use seu FGTS: Se o imóvel custar até R$ 1,5 milhão, você pode usar o seu saldo do FGTS para abater a entrada ou reduzir as parcelas.<br><br>O Próximo Passo: Não tente decifrar isso sozinho.<br><br>Entender a teoria é fácil. O difícil é lidar com a burocracia dos bancos, comparar as taxas de juros (que variam muito de um banco para outro no SBPE) e montar o processo da forma certa para ser aprovado.<br><br>Você não precisa passar por essa dor de cabeça sozinho.<br><br></p>",
    imagem: "assets/img/informativo-sbpe.jpeg"
  },
  entrada: {
    titulo: "Entrada Facilitada em 60x",
    texto: "<p>Sabemos que a entrada é o maior desafio. Por isso, a Equipe Stark oferece o parcelamento da sua entrada em até 60 meses, permitindo que você saia do aluguel com parcelas que cabem no seu bolso.</p>",
    imagem: "assets/img/informativo-entrada.jpeg"
  },
  feirao: {
    titulo: "Feirão Limpa Nome",
    texto: "<p>Ter restrições no CPF impede o financiamento. Durante os feirões, é possível quitar dívidas com até 90% de desconto. Limpar seu nome é o primeiro passo para a aprovação bancária.</p>",
    imagem: "assets/img/informativo-limpanome.jpeg"
  },
  fgts: {
    titulo: "Como utilizar seu FGTS",
    texto: "<p>Você pode usar o saldo do seu FGTS para abater o valor da entrada ou reduzir o saldo devedor do financiamento. É necessário ter pelo menos 3 anos de trabalho sob regime CLT (somando todos os períodos).</p>",
    imagem: "assets/img/informativo-mcmv.jpeg"
  } // <-- Verifique se fechou corretamente aqui
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