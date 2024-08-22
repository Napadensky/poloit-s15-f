import { useState } from "react";

const ThankyouCard =() => {
    const [isModalOpen, setIsModalOpen]= useState(false);

    const handleOpenModal =()=>{
        setIsModalOpen(true);
    };

    const handleCloseModal =() => {
        setIsModalOpen(false);
    };
    return(
        <div className="max-w-md mx-auto bg-gray-300 shadow-lg rounded-lg overflow-hidden mt-10">
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">¡Gracias por tu interés en el proyecto!</h2>
                <p className="mt-4 text-gray-600">Por favor revisa tu correo electrónico para continuar.</p>
                <div className="flex justify-center">
                    <button className="mt-6 bg-white text-black border border-white  px-4 py-2 hover:bg-gray-100"
                    onClick={handleOpenModal}>Abrir correo</button>
                
            </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
    )
}

export {ThankyouCard};