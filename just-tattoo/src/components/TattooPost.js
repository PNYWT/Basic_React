import "./TattooPost.css";
function TattooPost(props){
    const {tattoo, onBgClick} = props;
    return(
        <div className="tattoo-post">
            <div className="tattoo-post-bg" onClick= {onBgClick}></div>
            <div className="tattoo-post-content">
            <img className="" src={tattoo.fullImgUrl}/>
            <h4>{tattoo.title}</h4>
            </div>
        </div>
    );
}
export default TattooPost;