import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
    
  return (
    <div className="expenses">
      <ExpenseItem
        fecha={props.productos[0].fecha}
        titulo={props.productos[0].titulo}
        precio={props.productos[0].precio}
      />
      <ExpenseItem
        fecha={props.productos[1].fecha}
        titulo={props.productos[1].titulo}
        precio={props.productos[1].precio}
      />
      <ExpenseItem
        fecha={props.productos[2].fecha}
        titulo={props.productos[2].titulo}
        precio={props.productos[2].precio}
      />
    </div>
  );
}

export default Expenses;
