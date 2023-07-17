import { useState } from "react";
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>

 export const AddVehicle = (props) =>{
    const [values, setValues] = useState({
        placa : "",
        marca : "",
        modelo : "",
        ano_fabricacion : "",
        color : "",
        adicionales:"",
    });

    const handleInputChange = (event) =>{
        event.preventDefault();
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    const clearData = () =>{
        setValues("");
    }

    const handleForm = (event)=>{
        event.preventDefault();

        let placa = (values.placa);
        let marca = (values.marca);
        let modelo = (values.modelo);
        let ano_fabricacion = (values.ano_fabricacion);
        let color = (values.color);
        props.onAdd(placa, marca, modelo, ano_fabricacion, color);

        clearData();
        document.getElementById("form").reset();
    }

    return(
        <div className='addForm'>
            <form id="form" className="mb-3" onSubmit={handleForm}>
                <h1>Registro de Vehículos</h1>
                <label className="form-label" htmlFor="placa">Digite la placa</label>
                <input className="form-control" type="text" id="placa" name="placa" placeholder="Placa" onChange={handleInputChange} required></input>
                
                <label className="form-label" htmlFor="marca">Digite la marca</label>
                <input className="form-control" type="text" id="marca" name="marca" placeholder="Marca" onChange={handleInputChange} required></input>

                <label className="form-label" htmlFor="modelo">Digite el modelo</label>
                <input className="form-control" type="text" id="modelo" name="modelo" placeholder="Modelo" onChange={handleInputChange} required></input>

                <label className="form-label" htmlFor="ano_fabricacion">Digite el año</label>
                <input className="form-control" type="number" id="ano_fabricacion" name="ano_fabricacion" placeholder="Año de fabricación" onChange={handleInputChange} required></input>
                
                <label className="form-label" htmlFor="color">Digite el color</label>
                <input className="form-control" type="text" id="color" name="color" placeholder="Color" onChange={handleInputChange} required></input>

                <button className="btn btn-primary" type="submit"> Agregar Vehículo</button>
            </form>
        </div>
    )
 }

 export default AddVehicle;