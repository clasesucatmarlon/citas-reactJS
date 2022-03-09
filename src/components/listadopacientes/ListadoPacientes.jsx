import Mascota from "../mascota/Mascota";

const ListadoPacientes = ({ pacientes, setObjetoMascota, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:overflow-y-scrollh-screen m-3">
      
      {
        (pacientes.length > 0 && pacientes) ? (
          <>
            <h2 className="font-black text-3xl text-center ">
              Lista de Pacientes 
            </h2>
            <p className="text-center text-lg mt-4 mb-10">
              Administra {""}
              <span className="text-indigo-600 font-bold">Pacientes y citas</span>
            </p>
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center ">
              No hay pacientes registrados
            </h2>
            <p className="text-center text-lg mt-4 mb-10">
              Comienza agregando {""}
              <span className="text-indigo-600 font-bold">Pacientes</span>
            </p>
          </>
      )
      }

      {pacientes.map((item) => (
        <Mascota item={item} key={item.id} setObjetoMascota={setObjetoMascota} eliminarPaciente={eliminarPaciente}/>
      ))}
    </div>
  );
};

export default ListadoPacientes;
