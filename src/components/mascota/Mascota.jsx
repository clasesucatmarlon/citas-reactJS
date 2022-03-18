import React, { useState } from "react";
import {
  faTrash,
  faPencil,
  faCheck,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from 'sweetalert';

const Mascota = ({ item, setObjetoMascota, eliminarPaciente }) => {
  const { mascota, propietario, email, fecha, sintomas, id } = item;
  const [eliminar, setEliminar] = useState(true);

  const handleModalEliminar = (id) => {
    setEliminar(true);
    if (eliminar) {
      eliminarPaciente(id);
    }
  };

    const handDeleted = (id) => {
    console.log(id)
    swal({
      title: 'Eliminar mascota',
      text: 'Seguro(a) que quiere eliminar esta mascota?',
      icon: 'warning',
      buttons: ['No', 'Sí']
    }).then(respuesta => {
      console.log(respuesta)
      if (respuesta) {
        handleModalEliminar(id);
        swal({
          text: 'La mascota se eliminó correctamente...',
          icon: 'success',
          timer: 4000
        });
      }
    })
  }

  return (
    <div className="border shadow-md md:w-full rounded-md mb-10 flex justify-around">
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
          onClick={() => handDeleted(id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default Mascota;
