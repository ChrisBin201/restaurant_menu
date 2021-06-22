/** @jsxRuntime classic */
/**@jsx jsx */  
import { css,jsx} from "@emotion/react";
import React, {useState, createContext} from "react";

export const MenuContext = createContext();
function Main({children}){
    const [Type, setType] = useState("all");
    // console.log(typeof(setCategory));
    return(
    <MenuContext.Provider value = {{Type, setType}}>
        <section css ={styles}>
            {children}
        </section>
    </MenuContext.Provider>
    );
};

const styles = css`
margin : 0 auto;
margin-top: 50px;
`;
export default Main;