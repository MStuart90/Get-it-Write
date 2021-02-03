import React, { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import "./styles.css";

class CopyButton extends Component {
    render() {
 
    const [inputValue, setInputValue] = useState("");

    return (
        <div>
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
}

export default CopyButton;