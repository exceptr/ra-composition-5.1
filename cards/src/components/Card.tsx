interface CardProps {
    title: string;
    text: string;
    link: string;
    image?: string;
  }

export default function Card( {title, text, link, image}: CardProps) {
    return (
        <>
        <div className="card" style={{width: "18rem"}}>
        {image && <img src={image} className="card-img-top" alt="some name"></img>}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href={link} className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </>
    )
}