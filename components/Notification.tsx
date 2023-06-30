const Notification: React.FC<{children: React.ReactNode}> = ({children}) => {
    return ( 
        // <div className="absolute cursor-pointer bg-red-700 top-120 right-0 px-4 py-4 rounded-md mx-4 my-4">
        <div className="cursor-pointer bg-red-700 px-4 py-4 rounded-md mx-4 my-4">
            {children}
        </div>
     );
}
 
export default Notification;