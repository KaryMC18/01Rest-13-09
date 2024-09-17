const { monitorEventLoopDelay } = require("perf_hooks");

let tasks = [
    {
        id: 1,
        title:"Tarea1 ",
        description:"Descripcion de la tarea 1"
    },
    {
        id: 2,
        title:"Tarea2 ",
        description:"Descripcion de la tarea 2"
    },
    {
        id: 3,
        title:"Tarea 3 ",
        description:"Descripcion de la tarea 3"
    }
];

function getAllTasks(){
    return tasks;
}

function createTask(title, description){
    const newTask = {
        id: tasks.length + 1,
        title,
        description
    };
    tasks.push(newTask);
    return newTask;
}

// Obtener una tarea por ID
function getTaskById(id) {
    return tasks.find(task => task.id === id) || null;
}

// Actualizar una tarea existente
function updateTask(id, title, description) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.title = title || task.title; // Mantiene el título anterior si no se proporciona uno nuevo
        task.description = description || task.description; // Mantiene la descripción anterior si no se proporciona una nueva
        return task;
    }
    return null; // Devuelve null si no se encuentra la tarea
}

// Eliminar una tarea por ID (ya proporcionada)
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        return true;
    }
    return false; 
}

// Exportar las funciones
module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    getTaskById,
    deleteTask
};
