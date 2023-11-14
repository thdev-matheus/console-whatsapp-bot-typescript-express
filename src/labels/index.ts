const labels = [
  { id: "6", name: "Pago 50%", hexColor: "#FF9DFF" },
  { id: "5", name: "Pedido finalizado", hexColor: "#55CCB3" },
  { id: "4", name: "Pago", hexColor: "#DFAEF0" },
  { id: "3", name: "Possíveis Clientes", hexColor: "#FF9485" },
  { id: "2", name: "Novo pedido", hexColor: "#FFD429" },
  { id: "1", name: "Novo cliente", hexColor: "#64C4FF" },
];

export const getLabelId = (name: string) => {
  return labels.find((label) => label.name.toLowerCase() === name.toLowerCase())
    .id;
};
