class Autos {
    constructor(modelo, anio, color, gama, precio) {
        this.modelo = modelo
        this.anio = anio
        this.color = color
        this.gama = gama
        this.precio = precio

    }
    cuotas() {
        let cantCuotas = Number(prompt('¿En cuantas cuotas lo queres hacer?'))
        let financiado = (this.precio / cantCuotas)
        alert('¡El auto ' + this.modelo + ' del ' + this.anio + ' de color ' + this.color + ' es de gama ' + this.gama + ' en ' + cantCuotas + ' cuotas te queda en ' + financiado + ' pesos por mes!')
    }
}

const fiesta = new Autos('Fiesta', 2010, 'Negro', 'Alta', 600000)
const siena = new Autos('Siena', 2015, 'Rojo', 'Media', 900000)
const gol = new Autos('Gol Power', 2018, 'Blanco', 'Media', 1200000)


let entrada = prompt('Elija una de las siguientes opciones: \n 1 - Fiesta \n 2 - Siena \n 3 - Gol Power')
if (entrada == '1') {
    fiesta.cuotas()
}
else if (entrada == '2') {
    siena.cuotas()
}
else if (entrada == '3') {
    gol.cuotas()
}
else {
    alert('Elija una opcion valida!')
}
/*     switch (entrada) {
        case '1':
            fiesta.cuotas()
            break
        case '2':
            siena.cuotas()
            break
        case '3':
            gol.cuotas()
            break
        default:
            alert('Ingrese otra opcion o esc para salir')
            break 
    }*/
