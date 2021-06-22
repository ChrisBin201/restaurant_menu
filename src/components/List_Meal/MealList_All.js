/** @jsxRuntime classic */
/**@jsx jsx */  
import { css,jsx} from "@emotion/react";
import menu from "../../data";
import {useContext} from "react";
import { MenuContext } from "../../Main";
function MealList_All(){
    const {Type, setType} = useContext(MenuContext);
    return(
        menu.map((item,itemIndex) => {
            let {img, title, desc} = item;
            if(Type ==='all')
            return(
                <div css={styles}>
                    <div>
                        <img src={img}></img>
                    </div>
                    <div>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div>
                </div>
            )
        })
    )
};
const styles = css
`
display: flex;
 img{
     width: 225px;
     height:150px;
     border: 4px solid #c59d5f;
     border-radius: 4px;
     margin-right: 20px;
 }
 h4{
     text-transform: capitalize;
 }
 p{
     color: #979ba1;
 }
`
export default MealList_All;