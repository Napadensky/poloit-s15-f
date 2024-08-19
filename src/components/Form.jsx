const Form = () => {
    return (
        
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="mb-4 text-gray-700"> Llene el siguiente formulario y te enviaremos toda la información a tu correo electrónico</p>
        
            <form >
                <div className="mb-4 ">
                    <label className="block text-gray-700 text-sm font-bold mb-2"htmlFor='nombre'>Nombre Completo</label>
                    <input type="text" id="nombre"className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"placeholder="Nombre Completo" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2"htmlFor='dni'>DNI</label>
                    <input type="text" id="dni" className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"placeholder="DNI" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2"htmlFor="email">Correo Electrónico</label>
                    <input type="email"id="email"className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"placeholder="Correo Electrónico"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="comentarios">Comentarios</label>
                    <textarea id="comentarios"className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Comentarios"></textarea>
                </div>
                <div className="flex justify-between">
                    <button type="button"className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cancelar</button>
                
                <button type="submit"className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Quiero más info</button>
                </div>
            </form>
        </div>
    )
}
export {Form}  ;