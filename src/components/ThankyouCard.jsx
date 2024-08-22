const ThankyouCard =() => {
    return(
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">¡Gracias por tu interés en el proyecto!</h2>
                <p className="mt-4 text-gray-600">Por favor revisa tu correo electrónico para continuar.</p>
                <button className="mt-6 bg-white text-black px-2 py-1 hover:bg-white"
                onClick={() =>window.open('https://mail.google.com','_blank')}>Abrir correo</button>
            </div>
        </div>
    )
}

export {ThankyouCard}