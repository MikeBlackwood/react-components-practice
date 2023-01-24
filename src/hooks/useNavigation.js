import NavigateContext from '../context/navigation'
import {useContext} from "react";


const useNavigation = () => {

    return useContext(NavigateContext);
}
export default useNavigation;