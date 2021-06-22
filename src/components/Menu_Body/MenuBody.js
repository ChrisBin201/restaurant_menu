/** @jsxRuntime classic */
/**@jsx jsx */  
import { css,jsx} from "@emotion/react";
import MealList_Category from "../List_Meal/MealList_Category";
import MealList_All from "../List_Meal/MealList_All";
function MenuBody(){
    return(
    <section css ={styles}>
        {/* <MealList_All/> */}
        <MealList_Category/>
    </section>
    )
};
const styles = css
`
margin-top: 60px;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 40px 15px;
`
export default MenuBody;