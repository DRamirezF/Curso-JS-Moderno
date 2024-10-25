// Los WeakMaps se usan poco, más comunmente en las librerías y su uso común es mantener ciertos datos privados

const producto = {
    idProducto: 10
}

const weakmap = new WeakMap()

console.log(weakmap);
console.log(weakmap.set(producto, 'Monitor'));
console.log(weakmap.get(producto));
console.log(weakmap.delete(producto));
console.log(weakmap);

