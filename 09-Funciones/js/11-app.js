const aprendiendo = function(tecnologia, tecnologia2) {
    console.log(`Aprendiendo ${tecnologia} y %${tecnologia2}`);
}
aprendiendo('Javascript', 'Node.js')

// Si solo pasas un parámetro puedes no usar paréntesis
// Si son dos o más debes sí o sí usarlos
const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y %${tecnologia2}`;
console.log(aprendiendo2('Javascript', 'Node.js'));