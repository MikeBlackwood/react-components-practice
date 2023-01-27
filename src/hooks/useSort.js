import {useState} from "react";


const useSort = (data, config) => {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortedBy, setSortedBy] = useState(null);

    const setSortColumn = (label) =>
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

    return {sortedData, sortOrder, sortedBy, setSortColumn };
}

export default useSort