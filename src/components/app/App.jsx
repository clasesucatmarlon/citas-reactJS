import { useState } from 'react';

import Formulario from "../formulario/Formulario";
import Header from "../header/Header";
import ListadoPacientes from "../listadopacientes/ListadoPacientes";

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [objetoMascota, setObjetoMascota] = useState({});

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( listaActualizada => listaActualizada.id != id)
    setPacientes(pacientesActualizados)
  } 

  return (
    <div className="container mx-auto mt-3">
      <Header />
      <div className="mt-12 md:flex ">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} objetoMascota={objetoMascota} setObjetoMascota={setObjetoMascota}/>
        <ListadoPacientes pacientes={pacientes} setObjetoMascota={setObjetoMascota} eliminarPaciente={eliminarPaciente}/>
      </div>
    </div>
  );
}

export default App;
