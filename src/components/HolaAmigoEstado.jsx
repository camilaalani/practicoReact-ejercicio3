import { useState } from "react";

const HolaAmigoEstado = ()=>{
    const [mensaje, setCambiarEstado] = useState("");

    const handleClick = ()=>{
        setCambiarEstado("(desde estado cambiado)");
    }

    return (
        <section>
            <h1>Hola amigo {mensaje}!</h1>
            <button onClick={handleClick}>Clickeame</button>
        </section>
    );
};

export default HolaAmigoEstado;