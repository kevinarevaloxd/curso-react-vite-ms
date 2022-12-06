import "./ExpenseDate.css";

function ExpenseDate(props) {
  //Logica de fechas
  const dia = props.fecha.toLocaleString("es-ES", { day: "2-digit" });
  const mes = props.fecha.toLocaleString("es-ES", { month: "long" });
  const anio = props.fecha.getFullYear();
  return (
    <div className="expense-date">
      <div>
        <div className="expense-date__day">{dia}</div>
        <div className="expense-date__month">{mes}</div>
        <div className="expense-date__year">{anio}</div>
      </div>
    </div>
  );
}

export default ExpenseDate;
