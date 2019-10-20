import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header'
import NuevaCita from './components/NuevaCita'

class App extends Component {
  state = {  
    citas: []
  }
  crearNuevaCita = datos =>{
    //copiar el state actual
    const citas = [...this.state.citas, datos]
    //agregar el nuevo state
    this.setState({
      citas
    })
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
