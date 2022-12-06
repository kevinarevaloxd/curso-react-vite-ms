import './Card.css';

function Card(props) {
    const clases = 'card ' + props.className;
    console.log(clases)
  return <div className={clases}>{props.children}</div>;
}

export default Card;
