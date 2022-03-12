import React, { useState } from "react";
import {
  faTrash,
  faPencil,
  faCheck,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Mascota = ({ item, setObjetoMascota, eliminarPaciente }) => {
  const { mascota, propietario, email, fecha, sintomas, id } = item;
  const [show, setShow] = useState(false);
  const [eliminar, setEliminar] = useState(true);

  const handleModalEliminar = () => {
    setEliminar(true);
    setShow(false);
    if (eliminar) {
      eliminarPaciente(id);
    }
  };

  const handleModalCancelar = (e) => {
    setShow(false);
  };

  const handleModalOpen = (e) => {
    setShow(true);
  };

  return (
    <div className="border shadow-md md:w-full rounded-md mb-10 flex justify-around">
      <div hidden={!show}>
        <div className="BoxModal shadow-xl rounded-md flex flex-col">
          <h3 className="text-white font-bold text-2xl mb-12 uppercase">
            Eliminar paciente?
          </h3>
          <div className="flex justify-around w-10">
            <button
              className="btn bg-indigo-600 hover:bg-indigo-400 py-3 px-7 rounded-md mx-4"
              onClick={handleModalEliminar}
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button
              className="btn bg-red-700 hover:bg-red-400 py-3 px-7 rounded-md mx-4"
              onClick={handleModalCancelar}
            >
              <FontAwesomeIcon className="text-white text-xl" icon={faBan} />
            </button>
          </div>
        </div>
      </div>

      <div className="md:w-10/12">
        <p className="font-bold uppercase mb-2">
          <span className="text-decoration-line: underline">
            Nombre mascota
          </span>
          : <span className="font-normal normal-case ">{mascota}</span>
        </p>
        <p className="font-bold uppercase mb-2">
          <span className="text-decoration-line: underline">
            Propietario de la mascota
          </span>
          : {""}
          <span className="font-normal normal-case ">{propietario}</span>
        </p>
        <p className="font-bold uppercase mb-2">
          <span className="text-decoration-line: underline">
            Email de contacto
          </span>
          : {""}
          <span className="font-normal normal-case ">{email}</span>
        </p>
        <p className="font-bold uppercase mb-2">
          <span className="text-decoration-line: underline">Fecha de alta</span>
          : <span className="font-normal normal-case ">{fecha}</span>
        </p>
        <p className="font-bold uppercase mb-2">
          <span className="text-decoration-line: underline">
            Síntomas que presenta
          </span>
          : {""}
          <span className="font-normal normal-case ">{sintomas}</span>
        </p>
      </div>

      <div className="content-center flex justify-around flex-col">
        <button className=" text-indigo-800 text-2xl hover:text-indigo-300">
          <FontAwesomeIcon
            icon={faPencil}
            onClick={() => setObjetoMascota(item)}
          />
        </button>

        <button
          className="text-2xl hover:text-red-400 text-red-700"
          onClick={handleModalOpen}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default Mascota;
