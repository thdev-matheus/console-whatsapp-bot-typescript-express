export const withoutQrCode = () => `
<style>
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    box-shadow: 0 0 0 0;
  }

  body {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    text-align: center;

    background-color: #192a56;
    color: #fbc531;
  }
</style>
  
<h1>Login</h1>
<h2>Carregando o código QR, recarregue a página</h2>
`;
