import { IMenu } from "../types/menu.type";

export class Flow {
  static firstMessage = `Olá, bem-vindo(a) a Kali Gráfica!
Estamos muito felizes por ter você por aqui.
Digite "menu" para ver as opções ou "encerrar" a qualquer momento para encerrar o atendimento.
Em que podemos ajudar?`;

  static menu: IMenu[] = [
    { id: 1, message: "1. Desenvolvimento de sites e aplicativos" },

    {
      id: 11,
      message: "1. Desenvolvimento de sites",
    },

    {
      id: 111,
      message: "1. Site institucional",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu site institucional.",
    },

    {
      id: 112,
      message: "2. Site dinâmico",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu site dinâmico.",
    },

    {
      id: 113,
      message: "3. Loja virtual",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre a sua loja virtual.",
    },

    {
      id: 114,
      message: "4. Site one-page",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre a sua página única.",
    },

    {
      id: 115,
      message: "5. Portal",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu portal.",
    },

    {
      id: 116,
      message: "6. Catálogo/portfólio",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu catálogo ou portfólio.",
    },

    {
      id: 117,
      message: "7. Landing page",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre a sua landing page.",
    },

    {
      id: 118,
      message: "8. Saiba como escolher",
      action:
        "Existem diferentes tipos de sites, cada um com um propósito diferente.\nSeparamos aqui algumas definições para que você possa saber qual é o tipo de site que deseja\n\nhttps://pontodesign.com.br/quais-os-7-principais-tipos-de-site-e-qual-o-mais-indicado-para-o-seu-negocio/",
    },

    { id: 119, message: "9. Menu inicial" },

    {
      id: 12,
      message: "2. Desenvolvimento de aplicativos",
    },

    {
      id: 121,
      message: "1. App institucional",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu app institucional.",
    },

    {
      id: 122,
      message: "2. App loja",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu app loja.",
    },

    {
      id: 123,
      message: "3. App catálogo/portfólio",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu app catálogo ou app portfólio.",
    },

    {
      id: 124,
      message: "4. App de educação",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu app de educação.",
    },

    {
      id: 125,
      message: "5. App funcionalidades pessoais",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu app de funcionalidades pessoais.",
    },

    {
      id: 126,
      message: "6. Outro",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    {
      id: 127,
      message: "7. Saiba sobre aplicativos mobile",
      action:
        "A busca por aplicações mobile cresceu muito e continuará crescendo junto com a tecnologia.\nSeparamos aqui para você um artigo sobre a iportância de levar seu negócio para o digital.\nDaremos vida a sua idéia e com isso você estará um passo a frente no seu negócio.\n\nhttps://www.linkedin.com/pulse/3-motivos-para-voc%C3%AA-investir-em-um-aplicativo-mobile-code-n-app/",
    },

    { id: 128, message: "8. Menu inicial" },

    { id: 13, message: "3. Menu inicial" },

    {
      id: 2,
      message: "2. Gerenciamento de redes sociais",
    },

    {
      id: 21,
      message: "1. Plano inicial",
      action:
        "Com o plano inicial você dá o start e uma repaginada básica no seu insta.\nAlém disso vai ter dicas preciosas sobre como cuidar da aparência da sua rede e saber sobre o seu público.\n\nAguarde um pouco, em breve entraremos em contato para prosseguir com o atendimento.",
    },

    {
      id: 22,
      message: "2. Plano básico",
      action:
        "Com o plano básico você deixa com a gente que a gente cuida da sua rede criando postagens semanais, cuidando da aparência da sua rede, respeitando a sua regra de negócio e cuidando do crescimento do seu insta.\n\nAguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.",
    },

    {
      id: 23,
      message: "3. Plano master",
      action:
        "Aqui na Kali, com o plano master, além de todos os benefícios do plano básico, vocÊ contará com um volume de postagens maior além de tráfego pago para impulsionar a sua rede.\n\nAguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.",
    },

    {
      id: 24,
      message: "4. Conhecer planos",
      action:
        "Conheça aqui os nossos planos para gerenciamento de redes sociais\n\nhttps://wa.me/p/6772499766181726/558196336588",
    },

    { id: 25, message: "5. Menu inicial" },

    {
      id: 3,
      message: "3. Serviços gráficos",
    },

    {
      id: 31,
      message: "1. Arte, diagramação ou ilustração",
      action:
        "Uma boa arte pode ser o diferencial que fará com que atinja o resultado que deseja.\nUma boa diagramação faz um texto se tornar fácil de ler além de tornar a leitura prazerosa e proveitosa.\nAqui na Kali você conta com excelência e versatilidade tanto de ferramentas quanto de técnicas que vão te ajudar a expressar sua ideia em forma de arte digital.\n\nAguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre a sua arte ou diagramação.",
    },

    {
      id: 32,
      message: "2. Impressão comum ou xerox",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, envie aqui os arquivos a serem impressos.\nTambém escreva os detalhes do seu pedido.",
    },

    {
      id: 33,
      message: "3. Impressão papel especial",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, envie aqui os arquivos para impressão e conte mais detalhes sobre o seu pedido",
    },

    {
      id: 34,
      message: "4. personalizados",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    { id: 35, message: "5. Menu inicial" },

    {
      id: 4,
      message: "4. Falar com atendente",
      action:
        "Você solicitou falar com atendente.\nDentro de instantes entraremos em contato.\nPara melhor atender, conte aqui o que deseja.",
    },

    {
      id: 5,
      message: "5. Ver catálogo",
      action: "Confira o nosso catálogo em:\n\nhttps://wa.me/c/558196336588",
    },

    {
      id: 6,
      message: "6. Ver site",
      action: "Confira o nosso site em:\n\nhttps://kali-grafica.vercel.app/",
    },

    {
      id: 7,
      message: "7. Encerrar",
      action:
        "Encerrando atendimento...\nA Kali Gráfica agradece o seu contato!",
    },
  ];
}
