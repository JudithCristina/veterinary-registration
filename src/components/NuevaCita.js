import React, { Component } from 'react';
import

class NuevaCita extends Component {
    state = { 
        cita:{
            mascota :'',
            propietario : '',
            fecha : '',
            hora : '',
            sintomas : ''

        },
        error: false
     }

     handleChange = e => {
         this.setState({
             cita : {
                 ...this.state.cita,
                 [e.target.name] : e.target.value
             }
         })
     }
     //cuando el usuario envía el formulario//
     handleSubmit =e => {
         e.preventDefault();

         //extraer valores del state
         const {mascota, propietario, fecha, hora, sintomas} = this.state.cita;

         //validar que todos los valores esten llenos
         if(mascota ==="" || propietario==="" || fecha ==="" || hora ==="" || sintomas=== ""){
            this.setState({
                error:true
            });
            return;
         }
         //Agregar la cita del estate en App
         this.props.crearNuevaCita(this.state.cita)
        }
    render() { 
        return ( 
           <div className="card mt-5 py-5">
               <div className="card-body">
                <h2 className="card-tittle text-center mb-5">
                  Llena el formulario para crear una cita
                </h2>
                 <form
                 onSubmit={this.handleSubmit}
                 >
                     <div className="form-group row">
                         <label className="col-sm-4 col-lg-2 col-form-label">Nombre de la Mascota</label>
                     <div className="col-sm-8 col-lg-10">
                         <input
                         type="text"
                         className="form-control"
                         placeholder="Nombre de la Mascota"
                         name="mascota"
                         onChange={this.handleChange}
                         value={this.state.cita.mascota}
                          />
                     </div>
                     </div>
                     <div className="form-group row">
                         <label className="col-sm-4 col-lg-2 col-form-label">Nombre del dueño</label>
                     <div className="col-sm-8 col-lg-10">
                         <input
                         type="text"
                         className="form-control"
                         placeholder="Nombre del dueño"
                         name="propietario"
                         onChange={this.handleChange}
                         value={this.state.cita.propietario}
                          />
                     </div>
                     </div>
                     <div className="form-group row">
                         <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                     <div className="col-sm-8 col-lg-4">
                         <input
                         type="date"
                         className="form-control"
                         name="fecha"
                         onChange={this.handleChange}
                         value={this.state.cita.fecha}
                          />
                     </div>
                         <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                     <div className="col-sm-8 col-lg-4">
                         <input
                         type="time"
                         className="form-control"
                         name="hora"
                         onChange={this.handleChange}
                         value={this.state.cita.hora}
                          />
                     </div>
                     </div>
                     <div className="form-group row">
                         <label className="col-sm-4 col-lg-2 col-form-label">Síntomas</label>
                     <div className="col-sm-8 col-lg-10">
                         <textarea
                         className="form-control"
                         placeholder="Describe los sintomas"
                         name="sintomas"
                         onChange={this.handleChange}
                         value={this.state.cita.sintomas}
                         ></textarea>
                     </div>
                     </div>
                     <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar nueva cita"/>
                </form>  
               </div>
           </div> 
         );
    }
}
 
export default NuevaCita;
