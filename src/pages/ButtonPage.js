import Button from "../components/Button";
import {GoBell, GoCloudDownload} from "react-icons/go";

const ButtonPage = () =>
{
    const handleClick = () => {
        console.log('clicked')
    }
    return (
        <div className="App">
            <div>
                <Button primary className='mb-5' onClick={handleClick}>
                    <GoBell/>Click</Button>
            </div>
            <div>
                <Button secondary onMouseLeave={handleClick}>
                    <GoCloudDownload/>
                    Test</Button>
            </div>
            <div>
                <Button secondary rounded outline>hello </Button>
            </div>
        </div>
    )
}

export default ButtonPage;