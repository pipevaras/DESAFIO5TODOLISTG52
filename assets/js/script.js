const ingresoTarea = document.querySelector('#inputTarea')
const botonAgregarTarea = document.querySelector('#boton')
const tbody = document.querySelector('tbody')
const contadorTareas = document.querySelector('#totalTareas')
const caja = document.getElementById('cbox1')
const contadorTareasRealizadas = document.getElementById('totalRealizadas')
const tareas = []
let contador = 0

function eliminarItem(tarea) {
  const index = tareas.findIndex((ele) => ele.id == tarea)
  tareas.splice(index, 1)
  actualizarTareas(tareas)
}

function actualizarTareas(tareas) {
  tbody.innerHTML = ''
  tareas.forEach((tarea) => {
    tbody.innerHTML += `<tr>
                <td>${tarea.id}</td>
                <td>${tarea.nombre}</td>
                <td><input type="checkbox" name="" id="${tarea.id}" ${
      tarea['complete'] ? 'checked' : ''
    } onchange="onChange(${tarea.id})"></td>
                <td><button onclick="eliminarItem(${tarea.id})">❌</button></td>
            </tr>`
  })
  contadorTareas.innerHTML = tareas.length
}

botonAgregarTarea.addEventListener('click', () => {
  const tareaAgregada = ingresoTarea.value
  tareas.push({ id: contador++, nombre: tareaAgregada })
  ingresoTarea.value = ''
  actualizarTareas(tareas)
})

function onChange(id) {
  const element = document.getElementById(id)

  tareas.find((tarea) => {
    if (tarea.id === id) {
      if (element.checked) {
        tarea['complete'] = element.checked
        console.log(tarea.complete)
      } else {
        tarea['complete'] = element.checked
        console.log(tarea.complete)
      }
    }
  })

  const contador_tareas = tareas.reduce((contador_tareas, tarea) => {
    if (tarea.hasOwnProperty('complete') && tarea['complete'] === true) {
      contador_tareas += 1
    }
    return contador_tareas
  }, 0)

  contadorTareasRealizadas.innerText = contador_tareas
}
