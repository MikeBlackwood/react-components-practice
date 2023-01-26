import Table from "./Table";
import {useState} from "react";
import {GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

const SortableTable = (props) => {
    const [sortOrder , setSortOrder ] = useState(null);
    const [sortedBy, setSortedBy] = useState(null);

    const { config ,data } = props;


    const handleClick = (label) =>
    {
        if(sortedBy && label !== sortedBy)
        {
            setSortOrder('asc');
            setSortedBy(label);
            return
        }
        if (sortOrder === null)
        {
            setSortOrder('asc');
            setSortedBy(label);
        } else if (sortOrder === "asc")
        {
            setSortOrder('desc');
            setSortedBy(label);
        }
        else if (sortOrder === "desc")
        {
            setSortOrder(null);
            setSortedBy(null);
        }
    }

    let sortedData = data;
    if(sortedBy && sortedBy)
    {
        const {sortValue} = config.find((column) => column.label === sortedBy)
        sortedData = [...data].sort((a,b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc'? 1: -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            }
            else
            {
                return (valueA  - valueB) * reverseOrder;
            }
        })

    }

    const getIcons = (label, sortBy, sortOrder) => {
        if (label !== sortBy){
            return <div>
                <GoArrowSmallUp/>
                <GoArrowSmallDown/>
            </div>
        }
        if (sortOrder === null)
        { return <div>
            <GoArrowSmallUp/>
            <GoArrowSmallDown/>
        </div>

        }
        else if (sortOrder === 'asd')
        {
            return <div>
                <GoArrowSmallUp/>
            </div>
        }
        else if (sortOrder === 'desc')
        {
            return <div>
                <GoArrowSmallDown/>
            </div>
        }

    }
    const newConfig = config.map((column) => {
        if (!column.sortValue){
            return column;
        }
        return {...column, header: () => (
            <th className='cursor-pointer hover:bg-gray-50' onClick={ () => handleClick(column.label)}>
                <div className='flex items-center'>
                {getIcons(column.label, sortedBy,sortOrder)}
                {column.label}
                </div>
            </th>)
        }
    })

    return <div>
        <Table {...props} config={newConfig} data={sortedData}/>
    </div>
}

export default SortableTable;