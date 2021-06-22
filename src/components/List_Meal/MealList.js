/** @jsxRuntime classic */
/**@jsx jsx */  
import { css,jsx} from "@emotion/react";
import {useContext} from "react";
import { MenuContext } from "../../Main";
function MealList(){
    const {Type, setType, Items} = useContext(MenuContext);
    // console.log(Items);
    return(
        Items.map((item,itemIndex) => {
            let {img, title, desc} = item;
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
border-bottom: 1px solid #c59d5f;
margin: 0 15px;
padding-bottom: 10px;
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
export default MealList;