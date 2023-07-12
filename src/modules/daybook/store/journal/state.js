export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "lorem ipsum dolor sit amet, consectetur adip",
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: "Hola como estas sucio, bañate",
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: "Chauu nos re vimos wachin",
      picture: null,
    },
  ],
});

// CUANDO SE CAMBIE EL STATE NOTIFICA A TODOS LOS COMPONENTES PARA CAMBIARLO
