import "./itemRight.css"
import picture from "../../assets/1.jpg"
import starOnl from "../../assets/star-on.png"

const ItemRight = (props) => {
    const dataString = props.data.created
    const newObject = new Date(dataString)
    const year = newObject.getFullYear()
    return (
        <>
            <li className="right-list-item">
                <a  className="right-item-img" href="">
                    <img src={props.data.thumb_url} alt={props.data.name} title={props.data.name} />     
                </a>
                <div className="right-item-content">
                    <p>{props.data.name}</p>
                    <p>{year}</p>
                </div>
                <div className="right-top-start">
                    <img src={starOnl} alt="" />
                    <img src={starOnl} alt="" />
                    <img src={starOnl} alt="" />
                    <img src={starOnl} alt="" />
                    <img src={starOnl} alt="" />
                    <img src={starOnl} alt="" />
                </div>
            </li>
            </>
    )
}

export default ItemRight