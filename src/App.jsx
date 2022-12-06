import Expenses from "./components/Gastos/Expenses";
const App = () => {
  const productos = [
    { fecha: new Date(2022, 11, 5), titulo: "PS5", precio: "899.999" },
    { fecha: new Date(2022, 11, 5), titulo: "PS4", precio: "250.000" },
    { fecha: new Date(2022, 11, 5), titulo: "PS3", precio: "90.000" },
  ];
  return (
    <div>
      <h2>Inicio del proyecto de Kevin Arévalo!</h2>
      <Expenses productos={productos}/>
    </div>
  );
}

export default App;
