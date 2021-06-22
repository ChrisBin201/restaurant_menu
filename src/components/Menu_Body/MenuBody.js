/** @jsxRuntime classic */
/**@jsx jsx */  
import { css,jsx} from "@emotion/react";
import MealList from "../List_Meal/MealList";
function MenuBody(){
    return(
    <section css ={styles}>
        <MealList/>
    </section>
    )
};
const styles = css
`
margin-top: 60px;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 50px 30px;
`
export default MenuBody;