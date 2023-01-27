import Table from "./Table";
import {GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import useSort from "../hooks/useSort";

const SortableTable = (props) => {

    const { config ,data } = props;
    const { sortedData, sortedBy, sortOrder, setSortColumn} = useSort(data, config);


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
            <th className='cursor-pointer hover:bg-gray-50' onClick={ () => setSortColumn(column.label)}>
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