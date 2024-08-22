const Modal= ({isOpen, onClose}) => {
    if(!isOpen) return null;

    return(
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800">¡Gracias por tu interés en el proyecto!</h2>
                <p className="mt-4 text-gray-600">Por favor revisa tu correo electrónico para continuar.</p>
                <button onClick={onClose} className="mt-6 bg-white text-black border border-white px-4 py-2 hover:bg-gray-100">cerrar</button>
            </div>
        </div>
    )
}

export {Modal};