import Accordion from "../components/Accordion";

function AccordionPage() {

    const items = [ { id: '1', label : "Header 1", content : 'Content of 1 header'},
        { id: '2', label : "Header 2", content : 'Content of 2 header'},
        { id: '3', label : "Header 3", content : 'Content of 3 header'}]

    return (
        <div >
            <Accordion items={items}/>
        </div>
    );
}

export default AccordionPage;