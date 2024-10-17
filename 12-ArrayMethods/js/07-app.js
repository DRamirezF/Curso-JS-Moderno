const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre']
const meses3 = ['Octubre', 'Noviembre', 'Diciembre']

// En ambos el orden es importante, ya que de esa manera será como los una
// .concat
const resultado = meses.concat(meses2, meses3, 'Otro mes')


// Spreed Operator
// Si a 'Otro mes' le pones el spreed operator antes lo divifirá por letra
const resultado2 = [...meses, ...meses2, ...meses3, 'Otro mes']