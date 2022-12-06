import './Card.css';

const Card = (props) => {
    const clases = 'card ' + props.className;
    console.log(clases)
  return <div className={clases}>{props.children}</div>;
}

export default Card;
