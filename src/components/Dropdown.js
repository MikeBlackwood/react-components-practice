import {useState} from "react";

const Dropdown = ({onSelect, selected, options}) => {
    const [isOpen, setIsOpen] = useState(false)
    let content = 'Select...';
    if(selected)
    {
        content = selected;
    }
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    const handleOptionClick = (option) => {
        onSelect(option)
        setIsOpen(false)
    }
    const renderedOptions = options.map((option, index) => {
        return <div onClick={ () => handleOptionClick(option)} key={option.value}>{option.label}</div>
    })

    return(
        <div>
            <div onClick={handleClick}>{content}</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    )
}

export default Dropdown