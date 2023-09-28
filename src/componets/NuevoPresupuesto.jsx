import React from "react";

const NuevoPresupuesto = ({ presupuesto }) => {
  return (
    <div className="contenedor-presupuesto contendor sombra">
      <form className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>

          <input
            className="nuevo-presupuesto"
            type="text"
            placeholder="Añade tu Presupuesto"
            value={presupuesto}
          />
        </div>

        <input type="submit" value="Añadir" />
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
