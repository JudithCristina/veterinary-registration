import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header'
import NuevaCita from './components/NuevaCita'

class App extends Component {
  state = {  }
  crearNuevaCita = datos =>{
    console.log(datos)
  }
  render() { 
    return ( 
     <div className="container">
      <Header titulo='Administrador Pacientes Veterinaria'/>
     <div className="row">
       <div className="col-md-10 mx-auto">
         <NuevaCita  crearNuevaCita={this.crearNuevaCita}/>
       </div>

     </div>
     
     </div>
     );
  }
}
 

export default App;
