import './Card.css';
export default Card;

function Card(props) {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
}

