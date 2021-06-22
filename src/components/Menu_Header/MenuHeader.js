/** @jsxRuntime classic */
/**@jsx jsx */  
import { css,jsx} from "@emotion/react";
import Category from "../Category/Category";
function MenuHeader(){

    return(
    <div css={styles}>
        <h1>
            Our Menu
        </h1>
        <span></span>
        <ul className="Meal_categories">
            <Category name="all"/>
            <Category name="breakfast"/>
            <Category name="lunch"/>
            <Category name="shakes"/>
        </ul>
    </div>
    )
};
const styles = css`
display: flex;
flex-direction: column;
align-items: center;
> h1{
    font-size: 40px;
}
> span{
    display: block;
    width: 80px;
    height: 4px;
    background-color: #c59d5f;
    position: relative;
    top: -28px;
    left: 0;
}
> .Meal_categories{
    margin: 0;
    margin-top: 30px;
    padding: 0;
    display:flex;
    list-style: none;
}
`;
export default MenuHeader;