// import ItemSytled from "./style.jsx";

function ItemSidebar(props) {
    return (
          <>
            <i className= {props.icon}></i>
            <span>{props.nomeItem}</span>
          </>
     );
}

export default ItemSidebar;