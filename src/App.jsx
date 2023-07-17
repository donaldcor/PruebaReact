import { useState, useEffect } from "react";
import "./App.css";
import AddVehicle from "../components/AddVehicle";
import Vehicles from "../components/Vehicles";
import TableHeader from "../components/TableHeader";
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>

export function App() {
  const getVehicles = () => {
    var storedVehicles = localStorage.getItem("vehicles");
    if (storedVehicles) {
      return JSON.parse(storedVehicles);
    } else {
      return [];
    }
  };

  const [vehicles, setVehicles] = useState(getVehicles());

  useEffect(() => {
    localStorage.setItem("vehicles", JSON.stringify(vehicles));
  }, [vehicles]);

  const onAdd = (placa, marca, modelo, ano_fabricacion, color) => {
    if (Array.isArray(vehicles)) {
      vehicles.push({
        placa: placa,
        marca: marca,
        modelo: modelo,
        ano_fabricacion: ano_fabricacion,
        color: color,
      });
    }
    setVehicles([...vehicles]);
  };

  const saveEdit = (placa, marca, modelo, ano_fabricacion, color) => {
    let vehiclesAux = getVehicles();
    vehiclesAux.map((v) => {
      if (v.placa === placa) {
        v.marca = marca;
        v.modelo = modelo;
        v.ano_fabricacion = ano_fabricacion;
        v.color = color;
      }
      return v;
    });
    setVehicles([...vehiclesAux]);
  };

  const onDelete = (placa) => {
    const filteredVehicles = vehicles.filter((v) => v.placa !== placa);
    setVehicles([...filteredVehicles]);
  };

  return (
    <div className="addContainer">
      <AddVehicle onAdd={onAdd} />
      <div className="vehicleContainer">
        <table className="table table-sm table-group-divider table-striped-columns table-hover table-bordered">
          <TableHeader></TableHeader>
          {Array.isArray(vehicles)
            ? vehicles.map((v) => {
                return (
                  <Vehicles key={v.placa} data={v} onDelete={onDelete} saveEdit={saveEdit} />
                );
              })
            : null}
        </table>
      </div>
    </div>
  );
}

export default App;
