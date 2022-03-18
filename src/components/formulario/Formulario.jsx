import { useState, useEffect } from "react";
import Error from "../helpers/Error";
import LabelForm from "./LabelForm";
import swal from 'sweetalert';


const Formulario = ({ pacientes, setPacientes, objetoMascota, setObjetoMascota}) => {
  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect( () => {
    if (Object.keys(objetoMascota).length > 0) {
      setMascota(objetoMascota.mascota);
      setPropietario(objetoMascota.propietario);
      setEmail(objetoMascota.email);
      setFecha(objetoMascota.fecha);
      setSintomas(objetoMascota.sintomas);
    }

  }, [objetoMascota])


  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar formulario
    if ([mascota, propietario, email, fecha, sintomas].includes('')) {
      setError(true);
      swal({
        title: 'Error',
        text: 'Todos los campos son obligatorios',
        icon: 'error',
        timer: 4000
      })
      return;
    }
    setError(false);
    // Objeto de paciente
    const objetoPaciente = {
      mascota, 
      propietario, 
      email, 
      fecha, 
      sintomas,
    }
    
    
    if (objetoMascota.id) {
      // Editando registro
      objetoPaciente.id = objetoMascota.id;
      const pacientesActualizados = pacientes.map( itemActualizado => itemActualizado.id === objetoMascota.id ? objetoPaciente : itemActualizado);
      setPacientes(pacientesActualizados);
      setObjetoMascota({})
      swal({
        title: 'Actualizaciòn de datos',
        text: 'Los datos de la mascota se actualizaron correctamente',
        icon: 'info',
        timer: 4000
      })
    } else {
        // Nuevo registro
        objetoPaciente.id = generarID();
        setPacientes([...pacientes, objetoPaciente]);
        swal({
          title: 'Agregar mascota',
          text: 'La mascota se agregò correctamente',
          icon: 'info',
          timer: 4000
        })
      }

    // Reiniciar formulario
    setMascota('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
    setError('')
  };

  const generarID = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 m-3">
      <h2 className="font-black text-3xl text-center ">
        Seguimiento de Pacientes 
      </h2>
      <p className="text-center text-lg mt-4 mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Adminístralos </span>
      </p>

      <form
        className="border shadow-md rounded-md py-10 px-5 flex flex-col mb-10"
        onSubmit={handleSubmit}
      >
        

        <LabelForm htmlFor="mascota" textLabel="Nombre de la mascota:" />
        <input
          id="mascota"
          type="text"
          placeholder="Nombre de la mascota"
          className="placeholder-gray-400 border-2 rounded-md w-full p-2 mt-1 mb-5 text-xs"
          value={mascota}
          onChange={(e) => setMascota(e.target.value)}
        />

        <LabelForm htmlFor="propietario" textLabel="Propietario:" />
        <input
          id="propietario"
          type="text"
          placeholder="Nombre del propietario"
          className="placeholder-gray-400 border-2 rounded-md w-full p-2 mt-1 mb-5 text-xs"
          value={propietario}
          onChange={(e) => setPropietario(e.target.value)}
        />

        <LabelForm htmlFor="email" textLabel="Email:" />
        <input
          id="email"
          type="email"
          placeholder="Email de contacto"
          className="placeholder-gray-400 border-2 rounded-md w-full p-2 mt-1 mb-5 text-xs"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <LabelForm htmlFor="fecha" textLabel="Fecha de alta:" />
        <input
          id="fecha"
          type="date"
          className="placeholder-gray-400 border-2 rounded-md w-full p-2 mt-1 mb-5 text-xs"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />

        <LabelForm htmlFor="sintomas" textLabel="Síntomas que presenta:" />
        <textarea
          id="sintomas"
          type="area"
          placeholder="Síntomas"
          className="placeholder-gray-400 border-2 rounded-md w-full p-2 mt-1 mb-5  text-xs"
          rows="6"
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
        />

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 uppercase font-bold text-white rounded-md mt-2 hover:bg-indigo-800 cursor-pointer transition-all"
          value={objetoMascota.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
