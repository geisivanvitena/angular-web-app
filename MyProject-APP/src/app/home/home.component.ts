import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  destaques = [
  {
    titulo: 'Performance',
    descricao: 'Aplicação rápida e responsiva com Angular.',
    icone: 'fas fa-bolt'
  },
  {
    titulo: 'Design Moderno',
    descricao: 'Interface criada com Bootstrap 4 e ícones Font Awesome.',
    icone: 'fas fa-paint-brush'
  },
  {
    titulo: 'Código Limpo',
    descricao: 'Boas práticas e organização no desenvolvimento.',
    icone: 'fas fa-code'
    },
    {
  titulo: 'Segurança',
  descricao: 'Proteção de dados e autenticação segura.',
  icone: 'fas fa-lock'
  },

  {
    titulo: 'Responsividade',
    descricao: 'Funciona bem em desktops, tablets e celulares.',
    icone: 'fas fa-mobile-alt'
  },
  {
    titulo: 'Escalabilidade',
    descricao: 'Arquitetura pronta para crescer conforme a demanda.',
    icone: 'fas fa-expand-arrows-alt'
  }
  ];

  depoimentos = [
    { usuario: 'Usuário 1', mensagem: 'Excelente desempenho e design impecável!' },
    { usuario: 'Usuário 2', mensagem: 'Fácil de usar e muito responsivo.' },
    { usuario: 'Usuário 3', mensagem: 'Recomendo para qualquer projeto Angular.' }
  ];

  animacoes = [
    'float', 'pulse', 'rotate', 'swing', 'bounce', 'tilt'
  ];

   contato = {
    nome: '',
    email: '',
    mensagem: ''
  };

  constructor() { }

  ngOnInit(): void {
    this.revealOnScroll();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.revealOnScroll();
  }

  revealOnScroll() {
      const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    reveals.forEach((element: Element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  }

   enviarContato() {
    if (this.contato.nome && this.contato.email && this.contato.mensagem) {
      alert(`Obrigado, ${this.contato.nome}! Sua mensagem foi enviada.`);
      this.contato = { nome: '', email: '', mensagem: '' };
    } else {
      alert('Por favor, preencha todos os campos antes de enviar.');
    }
  }

}
