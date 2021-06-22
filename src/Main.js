/** @jsxRuntime classic */
/**@jsx jsx */  
import { css,jsx} from "@emotion/react";
import React, {useState, createContext, useEffect} from "react";
import menu from "./data";
export const MenuContext = createContext();
function Main({children}){
    const [Type, setType] = useState("all");
    const [Items, setItems] = useState(menu);
    const setMenu = () => {
        if(Type === "all")
            setItems(menu);
        else{
            let newItems = menu.filter(item => item.category === Type);
            setItems(newItems);
        } 
    }
    useEffect(() =>{
        setMenu();
    },[Type]);
    console.log(Items);
    return(
    <MenuContext.Provider value = {{Type, setType, Items}}>
        <section css ={styles}>
            {children}
        </section>
    </MenuContext.Provider>
    );
};

const styles = css`
margin : 0 auto;
margin-top: 50px;
margin-bottom: 50px;
`;
export default Main;