import React, { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import "./styles.css";

export default function App() {
    
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="App">
        <input 
        type="text" 
        value={inputValue} 
        onChange={e => setInputValue(e.target.value)} 
        />
         <CopyToClipboard text={inputValue}>
      <Button variant="primary" size="sm">Copy to Clipboard</Button>
         </CopyToClipboard> 
      </div>  
       );
}

// export default CopyButton;