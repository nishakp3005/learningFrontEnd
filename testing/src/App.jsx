import { AccordionDemo } from "./components/AccordionDemo";
import { ButtonDemo } from "./components/ButtonDemo";
import { CardWithForm } from "./components/CardwithForm";
import { DragCards } from "./components/DragCard";
import { TableDemo } from "./components/TableDemo";

function App() {
    return (
        <>
            {/* <div className="flex flex-col h-full w-full justify-center items-center gap-10 p-24">
                <div className="w-1/2">
                    <AccordionDemo />
                </div>
                <ButtonDemo />
                <CardWithForm/>
                <div className="w-1/2">
                    <TableDemo/>
                </div>
                
            </div> */}
            <DragCards/>
        </>
    );
}

export default App;
