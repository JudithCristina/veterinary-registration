import React from 'react';
import Cita from './Cita'
const ListaCitas = ({citas, eliminarCita}) => {
    const mensaje = Object.keys(citas).length === 0 ? "No hay citas" : "Administra tus citas"
    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
              <h2 className="caard-tittle text-center">{mensaje}</h2>
             <div className="lista-citas">
                 {citas.map(cita => (
                 <Cita 
                 key={cita.id}
                 cita={cita}
                 eliminarCita={eliminarCita}
                 />
                 ))}
             </div>
            </div>
        </div>
            )
}
  
export default ListaCitas;