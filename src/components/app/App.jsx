import { useState, useEffect } from 'react';
import Footer from '../footer/Footer';

import Formulario from "../formulario/Formulario";
import Header from "../header/Header";
import ListadoPacientes from "../listadopacientes/ListadoPacientes";

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [objetoMascota, setObjetoMascota] = useState({});

  useEffect(() => {
    const obtenerPacientesLocalStorage = () => {
      const pacientesLocalStorage = JSON.parse(localStorage.getItem('Pacientes')) ?? [];
      setPacientes(pacientesLocalStorage);
    }
    obtenerPacientesLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem('Pacientes', JSON.stringify(pacientes));
  }, [pacientes]);
  

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( listaActualizada => listaActualizada.id != id)
    setPacientes(pacientesActualizados)
  } 

  return (
    <div className="container mx-auto pt-10 pb-3">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} objetoMascota={objetoMascota} setObjetoMascota={setObjetoMascota}/>
        <ListadoPacientes pacientes={pacientes} setObjetoMascota={setObjetoMascota} eliminarPaciente={eliminarPaciente}/>
      </div>

      <Footer />
    </div>
  );
}

export default App;
