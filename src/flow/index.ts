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
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    {
      id: 112,
      message: "2. Site dinâmico",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    {
      id: 113,
      message: "3. Loja virtual",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    {
      id: 114,
      message: "4. Site one-page",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    {
      id: 115,
      message: "5. Portal",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    {
      id: 116,
      message: "6. Catálogo/portfólio",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    {
      id: 117,
      message: "7. Landing page",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
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
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    {
      id: 122,
      message: "2. App e-commerce",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    {
      id: 123,
      message: "3. App catálogo/portfólio",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    {
      id: 124,
      message: "4. App catálogo/portfólio",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    {
      id: 125,
      message: "5. App catálogo/portfólio",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    {
      id: 126,
      message: "6. Outro",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    {
      id: 127,
      message: "6. Saiba sobre aplicativos mobile",
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
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    {
      id: 22,
      message: "2. Plano básico",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    {
      id: 23,
      message: "3. Plano master",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
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
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    {
      id: 32,
      message: "2. Impressão comum ou xerox",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    {
      id: 33,
      message: "3. Impressão papel especial",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
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
