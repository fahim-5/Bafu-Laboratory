/* ===============================
   Bafu Laboratory Main Script
   =============================== */

/* Utility function to fetch JSON safely */
async function loadJSON(path) {
    try {
        const response = await fetch(path);

        if (!response.ok) {
            throw new Error("Failed to load " + path);
        }

        return await response.json();

    } catch (error) {
        console.error(error);
        return null;
    }
}


/* ===============================
   Load Tasks
   =============================== */
async function loadTasks() {

    const list = document.getElementById("task-list");
    if (!list) return; // stop if not on tasks page

    const data = await loadJSON("data/tasks.json");
    if (!data) return;

    list.innerHTML = "";

    data.tasks.forEach(task => {

        const li = document.createElement("li");

        li.textContent = `${task.title} (${task.status})`;

        list.appendChild(li);
    });
}


/* ===============================
   Load Learning Resources
   =============================== */
async function loadLearning() {

    const list = document.getElementById("learning-list");
    if (!list) return; // stop if not on learning page

    const data = await loadJSON("data/learning.json");
    if (!data) return;

    list.innerHTML = "";

    data.learning.forEach(resource => {

        const li = document.createElement("li");

        const link = document.createElement("a");
        link.href = resource.link;
        link.textContent = resource.title;
        link.target = "_blank";

        li.appendChild(link);

        list.appendChild(li);
    });
}


/* ===============================
   Load Plans
   =============================== */
async function loadPlans() {

    const list = document.getElementById("plans-list");
    if (!list) return; // stop if not on plans page

    const data = await loadJSON("data/plans.json");
    if (!data) return;

    list.innerHTML = "";

    data.plans.forEach(plan => {

        const li = document.createElement("li");

        li.textContent = `${plan.title} (${plan.category})`;

        list.appendChild(li);
    });
}


/* ===============================
   Initialize App
   =============================== */
document.addEventListener("DOMContentLoaded", () => {

    loadTasks();
    loadLearning();
    loadPlans();

});