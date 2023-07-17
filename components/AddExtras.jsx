import { Component, useState } from "react";

export const AddExtras = ({addExtra}) =>{
    const [values, setValues] = useState({
        adicionales:"",
    })

    const handleInputChange = (event) =>{
        event.preventDefault();
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    const handleForm = (event)=>{
        event.preventDefault();
        console.log(values);
        addExtra(adicionales)
    }

    return(
        <div>
            <form onSubmit={handleForm}>
                <input type="text" name="adicionales" placeholder="Características Adicionales" onChange={handleInputChange}></input>
                <button type="submit">Agregar característica</button>
            </form>
        </div>
    )
}
export default AddExtras;