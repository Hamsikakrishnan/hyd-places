export default function Place(props){
    return(
        <>
            <div className="place">
                <img src={`../public/images/${props.img}`} width="200"></img>
                <div className="info">
                    <h4 className="title">{props.title}</h4>
                    <p className="desc">{props.desc}</p>
                </div> 
            </div>
        </>
    )
}