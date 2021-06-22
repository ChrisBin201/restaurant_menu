/** @jsxRuntime classic */
/**@jsx jsx */  
import { css,jsx} from "@emotion/react";
import MenuHeader from "./components/Menu_Header/MenuHeader";
import MenuBody from "./components/Menu_Body/MenuBody";
import Main from "./Main";
function App() {
  return (
  <div css={styles}>
    <Main>
      <MenuHeader/>
      <MenuBody/> 
    </Main>
  </div>
  );
}
const styles = css
`
display: flex;
background-color: #f1f5f8;
`


export default App;
