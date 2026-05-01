let score = 0;
let answered = {};

/* =========================
   QUIZ
========================= */
function answer(q, isCorrect, btn) {
    if (answered[q]) return;

    answered[q] = true;

    if (isCorrect) {
        score++;
        btn.classList.add("correct");
    } else {
        btn.classList.add("wrong");
    }

    const parent = btn.parentElement;
    parent.querySelectorAll("button").forEach(b => b.disabled = true);
}

/* =========================
   RESULT
========================= */
function showResult() {
    const result = document.getElementById("result");

    if (!result) {
        console.log("Нет элемента #result");
        return;
    }

    result.textContent = `Ваш результат: ${score} / 10`;
}

/* =========================
   RESET
========================= */
function resetTest() {
    score = 0;
    answered = {};

    document.getElementById("result").textContent = "";

    document.querySelectorAll(".question button").forEach(btn => {
        btn.disabled = false;
        btn.classList.remove("correct", "wrong");
    });
}

/* =========================
   REGIONS TOGGLE (ОСТАВИЛ ЧИСТЫЙ)
========================= */
function toggle(id) {
    const el = document.getElementById(id);
    el.classList.toggle("show");
}

/* =========================
   MAP
========================= */
let current = 0;

const data = [
    {year:"1941", img:"images/map1.jpg", text:"Начальный период войны"},
    {year:"1942", img:"images/map4.jpg", text:"Сталинградская битва"},
    {year:"1943", img:"images/map6.jpg", text:"Курская дуга"},
    {year:"1945", img:"images/map11.jpg", text:"Победа"}
];

function update() {
    document.getElementById("year").textContent = data[current].year;
    document.getElementById("mapImage").src = data[current].img;
    document.getElementById("desc").textContent = data[current].text;
}

function next() {
    if (current < data.length - 1) current++;
    update();
}

function prev() {
    if (current > 0) current--;
    update();
}

/* =========================
   MODAL
========================= */
function openModal(img) {
    document.getElementById("imgModal").style.display = "flex";
    document.getElementById("modalImg").src = img.src;
}

function closeModal() {
    document.getElementById("imgModal").style.display = "none";
}