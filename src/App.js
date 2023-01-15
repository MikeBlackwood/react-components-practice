import './index.css'
import Dropdown from "./components/Dropdown";
import {useState} from "react";

function App() {

    const options = [ {label: 'Red', value: 'red'}, {label: 'Green', value: 'green'}, {label: 'Blue', value: 'blue'}]
    const [selection, setSelection] = useState(null)
    const handleSelectOption = (option) => {
        setSelection(option.label)
    }
  return (
    <div className="App">
        <Dropdown options={options} onSelect={handleSelectOption} selected={selection}/>
    </div>
  );
}

export default App;
