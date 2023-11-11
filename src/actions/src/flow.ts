import { IMenu } from "../../types/menu.type";

export class Flow {
  static firstMessage = `Olá, bem-vindo(a) a Kali Gráfica!
Estamos muito felizes por ter você por aqui.
Digite encerrar a qualquer momento para encerrar o atendimento.
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
      message: "2. E-commerce",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    {
      id: 113,
      message: "3. Catálogo",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    {
      id: 114,
      message: "4. Landing page",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    {
      id: 115,
      message: "5. Portfólio",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    {
      id: 116,
      message: "6. Outro",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    { id: 117, message: "7. Menu inicial" },

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
      message: "2. App E-commerce",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    {
      id: 123,
      message: "3. App Catálogo",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    {
      id: 124,
      message: "4. Outro",
      action:
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
    },

    { id: 125, message: "5. Menu inicial" },

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
        "Aguarde um pouco, em breve entraremos em contato para prosseguir com o seu atendimento.\nEnquanto aguarda, conte-nos um pouco mais sobre o seu pedido, toda informação é útil.",
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
      action:
        "Confira o nosso catálogo em:\nhttps://wa.me/c/558196336588\nA Kali Gráfica agradece o seu contato!",
    },

    {
      id: 6,
      message: "6. Ver site",
      action:
        "Confira o nosso site em:\nhttps://kali-grafica.vercel.app/\nA Kali Gráfica agradece o seu contato!",
    },

    {
      id: 7,
      message: "7. Encerrar",
      action:
        "Encerrando atendimento...\nA Kali Gráfica agradece o seu contato!",
    },
  ];
}
