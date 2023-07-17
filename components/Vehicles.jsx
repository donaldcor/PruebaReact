import { useState } from "react";
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>

import React from "react";


const Vehicles = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  const [values, setValues] = useState({
    placa : "",
    marca : "",
    modelo : "",
    ano_fabricacion : "",
    color : "",
});

  const onEdit = () => {
    return setIsEdit(!isEdit);
  };

  
  const handleInputChange = (event) =>{
    event.preventDefault();
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value,
        });
  }
  const saveEdit = (event) => {
    event.preventDefault();

    let placa = values.placa;
    let marca = values.marca;
    let modelo = values.modelo;
    let ano_fabricacion = values.ano_fabricacion;
    let color = values.color;
    
    props.saveEdit(placa, marca, modelo, ano_fabricacion, color);

    onEdit();
  };

  const onDelete = () => {
    const  placa = props.data.placa;
    props.onDelete(placa);
  };

  return (
    <tbody>
      {isEdit ? (
        <tr className="editInputs">
          <td>
            <input
            className="form-control"
              type="text"
              name="placa"
              placeholder="Placa"
              required
              defaultValue={props.data.placa}
              onChange={handleInputChange}
            ></input>
          </td>
          <td>
            <input
            className="form-control"
              type="text"
              name="marca"
              placeholder="Marca"
              required
              defaultValue={props.data.marca}
              onChange={handleInputChange}
            ></input>
          </td>
          <td>
            <input
            className="form-control"
              type="text"
              name="modelo"
              placeholder="Modelo"
              required
              defaultValue={props.data.modelo}
              onChange={handleInputChange}
            ></input>
          </td>
          <td>
            <input
            className="form-control"
              type="text"
              name="ano_fabricacion"
              placeholder="Año de fabricación"
              required
              defaultValue={props.data.ano_fabricacion}
              onChange={handleInputChange}
            ></input>
            <input
            className="form-control"
              type="text"
              name="color"
              placeholder="Color"
              required
              defaultValue={props.data.color}
              onChange={handleInputChange}
            ></input>
          </td>
          <td className="editTd">
            <button className="btn btn-primary" onClick={saveEdit}>
              Guardar
            </button>
          </td>
          <td className="deleteTd">
            <button className="btn btn-primary" onClick={onDelete}>
              Eliminar
            </button>
          </td>
        </tr>
      ) : (
        <tr>
          <td>{props.data.placa}</td>
          <td>{props.data.marca}</td>
          <td>{props.data.modelo}</td>
          <td>{props.data.ano_fabricacion}</td>
          <td>{props.data.color}</td>
          <td className="editTd" onClick={onEdit}>
            <button className="btn btn-primary">
              Editar
            </button>
          </td>
          <td className="deleteTd">
            <button className="btn btn-primary" onClick={onDelete}>
              Eliminar
            </button>
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default Vehicles;
