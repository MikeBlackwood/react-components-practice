import {useEffect, useRef, useState} from "react";
import {GoChevronDown} from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({onChange, value, options}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef();

    useEffect(() => {
        const handler = (event) => {
            if(!dropdownRef.current)
            {
                return;
            }
            if (!dropdownRef.current.contains(event.target))
            {
                setIsOpen(false)
            }
        }
        document.addEventListener('click', handler)
        return () => {
            document.removeEventListener('click', handler);
        }
    }, [])
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    const handleOptionClick = (option) => {
        onChange(option)
        setIsOpen(false)
    }
    const renderedOptions = options.map((option, index) => {
        return <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={ () => handleOptionClick(option)} key={option.value}>{option.label}</div>
    })

    return(
        <div className='w-48 relative' ref={dropdownRef}>
            <Panel className='flex justify-between cursor-pointer items-center w-full'
                   onClick={handleClick}>{value?.label || 'Select...'}
                <GoChevronDown/>
            </Panel>
            {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
        </div>
    )
}

export default Dropdown