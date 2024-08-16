import React from 'react'

const Card = () => {
  return (
    <>
    <div class="w-[324px] h-[136px] bg-white shadow-lg rounded-lg overflow-hidden flex">
    
    <div class="flex-shrink-0 w-1/3 h-full">
      <img src="https://via.placeholder.com/108x136" alt="Imagen del curso" class="w-full h-full object-cover" />
    </div>
    
    <div class="w-2/3 p-2 flex flex-col">
      <p class="text-sm">Modalidad del Curso</p>
      <h3 class="text-lg font-semibold mb-1">Título del Curso</h3>
      <p class="text-sm"> 40 horas</p>
      
      <button class="mt-auto bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-700 focus:outline-none text-xs max-w-[390px] ml-auto">
        + Info
      </button>

      <div class="mt-2 hidden">
        <p class="text-sm">Descripción detallada del curso.</p>
        <p class="text-sm"><strong>Mentor:</strong> Nombre del Mentor</p>
        <p class="text-sm"><strong>Plataforma:</strong> Plataforma del Curso</p>
        <p class="text-sm"><strong>Precio:</strong> $200</p>
        <p class="text-sm"><strong>Fechas:</strong> 01/09/2024 - 01/12/2024</p>
        <p class="text-sm"><strong>Días:</strong> Lunes, Miércoles, Viernes</p>
        <p class="text-sm"><strong>Horario:</strong> 18:00 - 21:00</p>
        <p class="text-sm"><strong>Máx. Estudiantes:</strong> 20</p>
        <p class="text-sm"><strong>Estado:</strong> Activo</p>
      </div>
    </div>
  </div>
  </>
  )
}

export default Card
