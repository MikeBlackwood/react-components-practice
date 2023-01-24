import {useState} from "react";
import Dropdown from "../components/Dropdown";

const DropdownPage = ( ) => {
    const options = [ {label: 'Red', value: 'red'}, {label: 'Green', value: 'green'}, {label: 'Blue', value: 'blue'}]
    const [selection, setSelection] = useState(null)
    const handleSelectOption = (option) => {
        setSelection(option)
    }
    return (
        <div className="App">
            <Dropdown options={options} onChange={handleSelectOption} value={selection}/>
        </div>
    );
}

export default DropdownPage;