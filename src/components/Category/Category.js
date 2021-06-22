/** @jsxRuntime classic */
/**@jsx jsx */  
import { css,jsx} from "@emotion/react";
import {useContext} from "react";
import { MenuContext } from "../../Main";

function Category({name}){
    
    const {Type, setType} = useContext(MenuContext);
    // console.log(typeof(setType));
    // console.log(Type);
    let category_active = "";
    if(Type === name) category_active = "category_active";
    return(
        <li css ={styles} >
            <button className={category_active} onClick= {() => setType(name)}>{name}</button>
        </li>
    )
};

const styles = css
`
margin: 0 20px;
> button{
    border: none;
    border-radius: 3px;
    font-size: 18px;
    padding: 6px 15px;
    background-color: #f1f5f8;;
    color: #c59d5f;
    cursor: pointer;
    transition: all 0.2s linear;
    outline: none;
    text-transform: capitalize;
}
> button:hover{
    background-color: #c59d5f;
    color: white;
}
> .category_active{
    background-color: #c59d5f;
    color: white;
}
`;

export default Category;