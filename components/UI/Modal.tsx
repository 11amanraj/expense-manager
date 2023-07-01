import ReactDOM from "react-dom";

const Modal: React.FC<{showModal: boolean, onClose: () => void, children: React.ReactNode}> = ({showModal, onClose, children}) => {
    const portalRootEl = document.querySelector('#portal');
    
    const modalContent = () => {
        return ( 
            <div onClick={onClose} className="fixed left-0 top-0 bottom-0 right-0 bg-red-200 bg-opacity-50 flex flex-col items-center justify-center">
                <div onClick={e => e.stopPropagation()} className="bg-black p-8 w-80 rounded-md flex flex-col gap-4">
                    {children}
                </div>
            </div>
         );
    }
    
    if(!showModal) {
        return null
    }

    if(!portalRootEl) {
        return null
    }

    return ReactDOM.createPortal(
        modalContent(), portalRootEl
    )
}
 
export default Modal;