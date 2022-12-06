import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';


function ExpenseItem(props) {
    console.log(props);

  return (
    <Card className='expense-item'>
        <ExpenseDate fecha={props.fecha}/>
      <div className='expense-item__description'>
        <h2>{props.titulo}</h2>
        <div className='expense-item__price'>{props.precio} Pesos chilenos.</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
