const Modal: React.FC<{showModal: boolean, onClose: () => void}> = ({showModal, onClose}) => {
    if(!showModal) {
        return null
    }
    
    return ( 
        <div onClick={onClose} className="fixed left-0 top-0 bottom-0 right-0 bg-red-200 bg-opacity-50 flex flex-col items-center justify-center">
            <div onClick={e => e.stopPropagation()} className="bg-black p-8 w-80 rounded-md">
                <div>Title</div>
                <div>Modal Content</div>
                <div><button onClick={onClose}>Close Modal</button></div>
            </div>
        </div>
     );
}
 
export default Modal;