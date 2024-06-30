import { IMessage } from './types';

export const pt: IMessage = {
  presentationTitle: 'Olá, me chamo Wanderson Marques',
  presentationSubtitle: 'Desenvolvedor Full stack ( Front end e Back end )',
  presentationLink: 'Ver habilidades',
  presentationText: 'Eu realmente amo resolver problemas.',
  aboutTitle: 'if(fail) tryAgain()',
  aboutText: 'Desenvolvedor Full-Stack com 6 anos de experiência em FrontEnd e BackEnd, especializado na stack MERN. Habilidades avançadas em React.js, Next.js, TypeScript, MongoDB, SQL, AWS, Docker, Kubernetes, GCP, Azure e Redis. Conhecimento em desenvolvimento e integração de IAs. Busco a posiçãões de desenvolvimento ou liderança.',
  experiencesTitle: 'Carreira',
  experiences: [
    {
      company: 'Cobasi',
      role: 'Desenvolvedor Full-Stack Sênior',
      date: 'Dez 2022 - Jun 2024',
      duration: '2 anos',
    },
    {
      company: 'Pixter technologies',
      role: 'Desenvolvedor web Front-end',
      date: 'Jun 2020 - Nov 2022',
      duration: '2 anos e 8 meses',
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
    About: 'Sobre',
    Skills: 'Habilidades'
  }
};
