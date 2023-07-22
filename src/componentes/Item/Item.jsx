import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./styles.css"
function Item(props){
    const {title, price,img}=props;
    return(
        <div class="card card-body">
            <h1 class="card-title">{title}</h1>
            <img class= "card-img-overlay" width="200" src={img}/>
            <p>$ {price}</p>
            <ButtonComponent colorBG="darkgreen" label="Ver Producto"></ButtonComponent>
            
        </div>
    )
}
export default Item;