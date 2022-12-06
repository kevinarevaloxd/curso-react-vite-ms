import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    console.log(props);

  return (
    <div className='expense-item'>
        <ExpenseDate fecha={props.fecha}/>
      <div className='expense-item__description'>
        <h2>{props.titulo}</h2>
        <div className='expense-item__price'>{props.precio} Pesos chilenos.</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
