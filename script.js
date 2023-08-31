const componentes = {
    procesador: {
        gamaBaja: 150,
        gamaMedia: 300,
        gamaAlta: 500,
    },
    memoriaRAM: {
        gamaBaja: 50,
        gamaMedia: 100,
        gamaAlta: 200,
    },
    tarjetaVideo: {
        gamaBaja: 100,
        gamaMedia: 200,
        gamaAlta: 400,
    },
    almacenamiento: {
        gamaBaja: 50,
        gamaMedia: 80,
        gamaAlta: 150,
    }
}

function calcularCostoTotal(componentesSeleccionados) {
    let costoTotal = 0
    for (const componente in componentesSeleccionados) {
        if (componentesSeleccionados.hasOwnProperty(componente)) {
            const gamaSeleccionada = componentesSeleccionados[componente]
            costoTotal += componentes[componente][gamaSeleccionada]
        }
    }
    return costoTotal;
}

const categorias = ["Gamer", "Diseño", "Arquitectura", "Hogar y Oficina"]
const gamaComponentes = ["Gama Baja", "Gama Media", "Gama Alta"]

// Simulación de interacción con el usuario
const categoriaElegida = prompt("Selecciona una categoría: " + categorias.join(", "))
if (categoriaElegida) {
    const usoGamer = confirm("¿Es para gaming?")
    if (usoGamer) {
        const gamaElegida = prompt("Selecciona la gama: " + gamaComponentes.join(", "))
        if (gamaElegida) {
            const componentesSeleccionados = {
                procesador: gamaElegida,
                memoriaRAM: gamaElegida,
                tarjetaVideo: gamaElegida,
                almacenamiento: gamaElegida
            };
            const costoTotal = calcularCostoTotal(componentesSeleccionados)
            console.log(`El costo total de tu PC es: ${costoTotal}`)
        }
    } else {
        console.log("Seleccionaste una categoría que no requiere configuración específica de componentes.")
    }
} else {
    console.log("No seleccionaste ninguna categoría.")
}
