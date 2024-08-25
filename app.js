/* ====================
        VARIABLES
   ==================== */
var newTask;
var addButton;


/* ====================
        FUNCIONES
======================= */



/* =====================
    EVENTO PRINCIPAL
========================*/
function DOMLoaded() {
    newTask = document.getElementById("newTask");
    addButton = document.getElementById("addButton");
}


/* =====================
    LLAMADA PRINCIPAL
======================== */
document.addEventListener('DOMContentLoaded', DOMLoaded);