import {useState} from "react";
import {GoChevronDown, GoChevronLeft} from "react-icons/go";

const Accordion = ({items}) => {

    const [expandedIndex, setExpendedIndex] = useState(-1);

    const handleClick = (index) => {
        setExpendedIndex((currentExpandedIndex) => {
            if(currentExpandedIndex === index){
                return -1;
            }else {
                return index;
            }
        })
    }
    const renderItems =  items.map((item, index) => {
        const isExpended = index === expandedIndex;
        const icon = <span className='text-2xl'>{isExpended?  <GoChevronDown/> :<GoChevronLeft/> } </span>
        return (
            <div key={item.id}>
                <div  className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer'
                    onClick={() =>handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpended &&  <div className='border-b p-5'>{item.content}</div>}
            </div>
        )
    })
    return (
        <div className='border-x border-t rounded'>
            {renderItems}
        </div>
    )
}

export default Accordion;