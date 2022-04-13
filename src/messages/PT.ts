import { IMessage } from './types';

export const pt: IMessage = {
  presentationTitle: 'Olá me chamo Wanderson Marques',
  presentationSubtitle: 'Desenvolvedor Front-end',
  presentationText: 'Busco aprender um pouco sobre tudo.',
  aboutTitle: 'if(fail) tryAgain()',
  aboutText: 'Eu começei minha jornada a pouco mais de 2 anos, sou apenas um iniciante e eu amo entrar em um projeto novo e não entender nada, pois assim sei que tenho muito a aprender.',
  experiencesTitle: 'Carreira',
  experiences: [
    {
      company: 'Pixter technologies',
      role: 'Desenvolvedor web Front-end',
      date: 'Jun 2020 - Atual',
      duration: 'Atual',
    },
    {
      company: 'Sudeste Online - Especialista na legislação de produtos químicos',
      role: 'Estagiário',
      date: 'Set 2019 - Jun 2020',
      duration: '10 meses',
    },
    {
      company: 'Biblioteca Municipal de Itapetininga',
      role: 'Estagiário',
      date: 'Fev 2018 - Ago 2019',
      duration: '1 ano e 7 meses',
    },
  ],
  curriculum: 'Aqui você pode fazer o download do meu curriculo:',
  headers: {
    Curriculum: 'Currículo',
    Experiences: 'Experiências',
    About: 'Sobre'
  }
};
