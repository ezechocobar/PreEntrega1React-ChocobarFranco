import React from "react";
import './ItemDetail.css';

const ItemDetail = ({id, nombre, precio, img}) => {
    return (
        <div className='contenedorItem'> 
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <p>ID: {id} </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste at blanditiis dolor rerum delectus beatae, illum perferendis ullam sint autem reprehenderit! Fuga, maiores reiciendis. Delectus iure atque laborum aspernatur obcaecati.</p>
            <img src={img} alt={nombre} />
        </div>
    )
}

export default ItemDetail