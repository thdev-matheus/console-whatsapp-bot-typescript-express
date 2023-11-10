import { IMenu } from "../../types/menu.type";

class Menu {
  id: string;
  message: string;
  submenu?: IMenu[];

  constructor({ id, message, subMenu }: IMenu) {
    this.id = id;
    this.message = message;
    this.submenu = subMenu;
  }
}

export class Flow {
  static firstMessage = `Olá, bem-vindo(a) a Kali Gráfica!
Estamos muito felizes por ter você por aqui.
Em que podemos ajudar?`;

  static recurringMessage = `Bem vindo(a) de volta!
Em que podemos ajudar?`;

  static flow: Menu[] = [
    new Menu({
      id: "1",
      message: "1. Desenvolvimento de Sites e Aplicativo.",
      subMenu: [
        new Menu({
          id: "1.1",
          message: "1. Desenvolvimento de Sites",
          subMenu: [
            new Menu({
              id: "1.1.1",
              message: "1. Site Institucional",
            }),

            new Menu({
              id: "1.1.2",
              message: "2. Landing Page",
            }),

            new Menu({
              id: "1.1.3",
              message: "3. E-commerce",
            }),

            new Menu({
              id: "1.1.4",
              message: "4. Catálogo",
            }),

            new Menu({
              id: "1.1.5",
              message: "5. Portfólio",
            }),

            new Menu({
              id: "1.1.6",
              message: "6. Outros",
            }),

            new Menu({
              id: "1.1.7",
              message: "7. Voltar",
            }),
          ],
        }),

        new Menu({
          id: "1.2",
          message: "2. Desenvolvimento de Aplicativos",
          subMenu: [
            new Menu({
              id: "1.2.1",
              message: "1. Institucional",
            }),

            new Menu({
              id: "1.2.2",
              message: "2. E-commerce",
            }),

            new Menu({
              id: "1.2.3",
              message: "3. Catálogo",
            }),

            new Menu({
              id: "1.2.4",
              message: "4. Outros",
            }),

            new Menu({
              id: "1.2.5",
              message: "5. Voltar",
            }),
          ],
        }),

        new Menu({
          id: "1.3",
          message: "3. voltar",
        }),
      ],
    }),

    new Menu({
      id: "2",
      message: "2. Gerenciamento de Redes Sociais.",
      subMenu: [
        new Menu({
          id: "2.1",
          message: "1. Plano Inicial",
        }),

        new Menu({
          id: "2.2",
          message: "2. Plano Básico",
        }),

        new Menu({
          id: "2.3",
          message: "3. Plano Master",
        }),

        new Menu({
          id: "2.4",
          message: "4. Conhecer Planos",
        }),

        new Menu({
          id: "2.5",
          message: "5. Voltar",
        }),
      ],
    }),

    new Menu({
      id: "3",
      message: "3. Serviços Gráficos",
      subMenu: [
        new Menu({
          id: "3.1",
          message: "1. Arte, Diagramação ou Ilustração",
        }),

        new Menu({
          id: "3.2",
          message: "2. Impressão Comum ou Xerox",
        }),

        new Menu({
          id: "3.3",
          message: "3. Impressão em Papel Especial",
        }),

        new Menu({
          id: "3.4",
          message: "4. Personalizados",
        }),

        new Menu({
          id: "3.5",
          message: "5. voltar",
        }),
      ],
    }),

    new Menu({
      id: "4",
      message: "4. Falar com atendente",
    }),

    new Menu({
      id: "5",
      message: "5. Ver catálogo",
    }),

    new Menu({
      id: "6",
      message: "6. Ver site",
    }),

    new Menu({
      id: "7",
      message: "7. Encerrar",
    }),
  ];
}
