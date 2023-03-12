import './LayoutBox.css';

function LayoutBox(props) {
  return <div className="box">{props.children}</div>;
}

export default LayoutBox;
