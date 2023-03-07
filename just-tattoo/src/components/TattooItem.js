import "./TattooItem.css";
function TattooItem(props) {
  const {tattoo, clickOpen} = props;
  return (
    <div className="tattoo-item">
      <img className="" src={tattoo.thumbnaiUrl} onClick={() =>{
        {clickOpen(tattoo)}
      }}/>
      <h4>{tattoo.title}</h4>
    </div>
  );
}
export default TattooItem;