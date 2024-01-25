const productos = [
    {id: "1", nombre: "Fernet", precio: 1500, img: "../img/fernet.jpg", idCat: "2"},
    {id: "2", nombre: "Sex on the beach", precio: 2500, img: "../img/sexon.jpg", idCat: "2"},
    {id: "3", nombre: "Campari", precio: 1200, img: "../img/campari.jpg", idCat: "3"},
    {id: "4", nombre: "Vodka naranja", precio: 1000, img: "../img/vodka.jpg", idCat: "3"}
]

export const getProductos = () => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100);
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}