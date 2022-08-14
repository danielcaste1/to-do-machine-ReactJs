import React from "react";
import { AppUI } from "./AppUI.jsx";
import { AppProvider } from "../../Context/";




function App() {
  

  
  return(
    <AppProvider>
      <AppUI
      />
    </AppProvider>
  )
}

export default App;


