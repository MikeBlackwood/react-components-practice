import Modal from "../components/Modal";
import {useState} from "react";
import Button from "../components/Button";


const ModalPage = () => {

    const [showModal, setShowModal] = useState(false)
    const handelClick = () =>
    {
        setShowModal(!showModal)
    }

    const handleClose = () => {
        setShowModal(false)
    }
    const actionBar = <Button primary onClick={handleClose}>I accept</Button>
    const content = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Text</p>
    </Modal>
    return(<div>
        <Button primary onClick={handelClick}>Open Modal</Button>
        {showModal && content}
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida a ex sed ullamcorper. Nulla luctus ante eros, vel sodales nulla finibus vitae. Nam sed dapibus lacus, quis dapibus lectus. Mauris in vulputate massa. Pellentesque venenatis porttitor leo, in ultrices nunc convallis vitae. Sed varius diam turpis, vitae mattis tortor auctor id. Proin luctus blandit nibh, eget tristique velit tempor sed. Suspendisse rhoncus sem ac nisi consectetur rutrum. Vestibulum venenatis massa a arcu consectetur, at malesuada turpis cursus.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida a ex sed ullamcorper. Nulla luctus ante eros, vel sodales nulla finibus vitae. Nam sed dapibus lacus, quis dapibus lectus. Mauris in vulputate massa. Pellentesque venenatis porttitor leo, in ultrices nunc convallis vitae. Sed varius diam turpis, vitae mattis tortor auctor id. Proin luctus blandit nibh, eget tristique velit tempor sed. Suspendisse rhoncus sem ac nisi consectetur rutrum. Vestibulum venenatis massa a arcu consectetur, at malesuada turpis cursus.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida a ex sed ullamcorper. Nulla luctus ante eros, vel sodales nulla finibus vitae. Nam sed dapibus lacus, quis dapibus lectus. Mauris in vulputate massa. Pellentesque venenatis porttitor leo, in ultrices nunc convallis vitae. Sed varius diam turpis, vitae mattis tortor auctor id. Proin luctus blandit nibh, eget tristique velit tempor sed. Suspendisse rhoncus sem ac nisi consectetur rutrum. Vestibulum venenatis massa a arcu consectetur, at malesuada turpis cursus.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida a ex sed ullamcorper. Nulla luctus ante eros, vel sodales nulla finibus vitae. Nam sed dapibus lacus, quis dapibus lectus. Mauris in vulputate massa. Pellentesque venenatis porttitor leo, in ultrices nunc convallis vitae. Sed varius diam turpis, vitae mattis tortor auctor id. Proin luctus blandit nibh, eget tristique velit tempor sed. Suspendisse rhoncus sem ac nisi consectetur rutrum. Vestibulum venenatis massa a arcu consectetur, at malesuada turpis cursus.
        </p>

    </div>)
}

export default ModalPage;