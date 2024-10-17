const nombreTareas = [
  { id: 1, nombre: "Redactar informe", confirmado: true },
  { id: 2, nombre: "Preparar desafio", confirmado: false },
  { id: 3, nombre: "Ir al supermercado", confirmado: false },
  { id: 4, nombre: "Recoger a los niños", confirmado: false },
];

function actualizarListaTareas() {
  let html = "";
  let totalConfirmados = 0;
  let totalTareas = 0;
  for (const tarea of nombreTareas) {
    totalTareas++;
    let estaCheck = "";
    if (tarea.confirmado) {
      estaCheck = "checked";
      totalConfirmados++;
    }
    html += `
            <tr>
            <td class="idtarea">${tarea.id}</td>
            <td class="nombretarea">${tarea.nombre}</td>
            <td class="estadoTarea">
                <input type="checkbox" ${estaCheck} onclick="confirmartarea(${tarea.id});"/>
            </td>
            <td class="accionBoton">
                <button class="delete-btn" onclick="eliminarTarea(${tarea.id})" type="button">X</button>
            </td>
        </tr>`;
  }
  document.querySelector("#lista_tareas").innerHTML = html;
  document.querySelector("#total").innerHTML = totalTareas;
  document.querySelector("#realizadas").innerHTML = totalConfirmados;
}

const agregarTarea = function (event) {
  event.preventDefault();
  const nuevaTarea = document.querySelector("#new_task");
  if (nuevaTarea.value != "") {
    nombreTareas.push({
      id: Date.now(),
      nombre: nuevaTarea.value,
      confirmado: false,
    });

    actualizarListaTareas();
    nuevaTarea.value = "";
  } else {
    alert("Debe ingresar una tarea para poder agregar");
  }
};

const eliminarTarea = function (id) {
  const posicionAEliminar = nombreTareas.findIndex((Tarea) => Tarea.id === id);
  nombreTareas.splice(posicionAEliminar, 1);
  actualizarListaTareas();
};

const confirmartarea = function (id) {
  const posicionAActualizar = nombreTareas.findIndex(
    (Tarea) => Tarea.id === id
  );

  nombreTareas[posicionAActualizar].confirmado =
    !nombreTareas[posicionAActualizar].confirmado;

  actualizarListaTareas();
};

actualizarListaTareas();
