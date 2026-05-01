let current = 0;

let data = [
    {
        year: "1941 Карта начального периода.",
        img: "images/map1.jpg",
    },
    {
        year: "1941 Наступление на Москву.",
        img: "images/map2.jpg",
        
    },
    {
        year: "1941-1942 Наступление и Московская битва.",
        img: "images/map3.jpg",
        
    },
    {
        year: "1942 Переломный момент войны.",
        img: "images/map4.jpg",
        
    },
    {
        year: "1942-1943 Операция \"Кольцо\"",
        img: "images/map5.jpg",
       
    },
    {
        year: "1943 Курская битва.",
        img: "images/map6.jpg",
        text: ""
    },
    {
        year: "1943 Сталинградская битва — контрнаступление.",
        img: "images/map7.jpg",
        text: ""
    },
    {
        year: "1944 Освободительный период.",
        img: "images/map8.jpg",
        text: ""
    },
    {
        year: "1944 10 сталинских ударов.",
        img: "images/map9.jpg",
        text: ""
    },
    {
        year: "1945 Висло-Одерская операция.",
        img: "images/map10.jpg",
        text: ""
    },
    {
        year: "1945 Завершающий период войны.",
        img: "images/map11.jpg",
        text: ""
    },
    {
        year: "1945 Война с Японией.",
        img: "images/map12.jpg",
        text: ""
    }
];

function update() {
    document.getElementById("year").innerText = data[current].year;
    document.getElementById("mapImage").src = data[current].img;
    document.getElementById("desc").innerText = data[current].text;
}

function next() {
    if (current < data.length - 1) {
        current++;
        update();
    }
}

function prev() {
    if (current > 0) {
        current--;
        update();
    }
}
function openModal(img) {
    let modal = document.getElementById("imgModal");
    let modalImg = document.getElementById("modalImg");

    modal.style.display = "flex";
    modalImg.src = img.src;
}

function closeModal() {
    document.getElementById("imgModal").style.display = "none";
}
let scale = 1;
let posX = 0;
let posY = 0;
let isDragging = false;
let startX, startY;

function openModal(img) {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");

    modal.style.display = "flex";
    modalImg.src = img.src;

    // сброс
    scale = 1;
    posX = 0;
    posY = 0;
    updateTransform();
}

function closeModal() {
    document.getElementById("imgModal").style.display = "none";
}

function updateTransform() {
    const img = document.getElementById("modalImg");
    img.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
}

/* 🔍 ЗУМ колесом */
document.addEventListener("wheel", function(e) {
    if (document.getElementById("imgModal").style.display !== "flex") return;

    e.preventDefault();

    scale += e.deltaY * -0.001;
    scale = Math.min(Math.max(1, scale), 5);

    updateTransform();
});

/* 🖱️ ПЕРЕТАСКИВАНИЕ */
const modalImg = document.getElementById("modalImg");

document.addEventListener("mousedown", (e) => {
    if (document.getElementById("imgModal").style.display !== "flex") return;

    isDragging = true;
    startX = e.clientX - posX;
    startY = e.clientY - posY;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    posX = e.clientX - startX;
    posY = e.clientY - startY;

    updateTransform();
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

/* 📱 ЗУМ пальцами (упрощённый) */
document.addEventListener("touchmove", function(e) {
    if (e.touches.length === 2) {
        scale += 0.02;
        scale = Math.min(scale, 5);
        updateTransform();
    }
});
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closeModal();
    }
});