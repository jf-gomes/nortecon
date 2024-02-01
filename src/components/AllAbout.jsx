import AccordionMenu from "./AccordionMenu"
import './AllAbout.css'

export default function AllAbout(){
    return(
        <div className="allAboutContainerDiv d-flex flex-column align-items-center justify-content-center" style={{height: '700px'}}>
            <h3 className="text-center p-4 m-4 text-white">Tudo sobre o consórcio</h3>
            <div className="accordionContainerDiv p-4">
                <AccordionMenu />
            </div>
        </div>
    )
}