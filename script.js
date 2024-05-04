let bodyParts = document.getElementById("body-parts");
let container = document.getElementById("container");


let Chest = ["Push-ups", "Bench press", "Dumbbell flyes", "Chest dips"]
let Abs = ["Crunches", "Plank", "Russian twists", "Leg raises"]
let Back = ["Pull-ups", "Rows", "Lat pulldowns", "Deadlifts"]
let Shoulders = [
  "Military press",
  "Lateral raises",
  "Front raises",
  "Arnold press",
]
let Biceps = ["Bicep curls", "Hammer curls", "Concentration curls", "Chin-ups"]
let Triceps = [
  "Tricep extensions",
  "Skull crushers",
  "Overhead tricep extensions",
  "Dips",
]
let Quads = [
  "Squats",
  "Angled leg presses",
  "leg extension",
  "dumbbell lunges",
]
let Hamstrings = [
  "Hamstring Slide",
  "Kettlebell swing",
  "Nordic hamstring curl",
  "Lying Leg Curl",
]
let Calves = [
  "Skipping rope",
  "Seated Calf Raise",
  "Standing Dumbbell",
  "Barbell Split Squats",
]




let list = document.createElement("ul");

function showChestExcecises() {
  list.innerHTML = '';
  for (let i = 0; i < Chest.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `> ` + Chest[i];
    list.appendChild(listItem);
  }
}
function showAbsExcecises() {
  list.innerHTML = '';
  for (let i = 0; i < Abs.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `> ` + Abs[i];
    list.appendChild(listItem);
  }
}
function showBackExcecises() {
  list.innerHTML = '';
  for (let i = 0; i < Back.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `> ` + Back[i];
    list.appendChild(listItem);
  }
}
function showShouldersExcecises() {
  list.innerHTML = '';
  for (let i = 0; i < Shoulders.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `> ` + Shoulders[i];
    list.appendChild(listItem);
  }
}
function showBicepsExcecises() {
  list.innerHTML = '';
  for (let i = 0; i < Biceps.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `> ` + Biceps[i];
    list.appendChild(listItem);
  }
}
function showTricepsExcecises() {
  list.innerHTML = '';
  for (let i = 0; i < Triceps.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `> ` + Triceps[i];
    list.appendChild(listItem);
  }
}
function showQuadsExcecises() {
  list.innerHTML = '';
  for (let i = 0; i < Quads.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `> ` + Quads[i];
    list.appendChild(listItem);
  }
}
function showHamstringsExcecises() {
  list.innerHTML = '';
  for (let i = 0; i < Hamstrings.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `> ` + Hamstrings[i];
    list.appendChild(listItem);
  }
}

function showCalvesExcecises() {
  list.innerHTML = '';
  for (let i = 0; i < Calves.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `> ` + Calves[i];
    list.appendChild(listItem);
  }
}

container.appendChild(list);
list.style.lineHeight = "45px";

console.log(window.scrollY);

let btn=document.getElementById('btn')

window.onscroll=function () {
  if (window.scrollY>=578) {
    btn.style.display='block'
  } else {
    btn.style.display='none'
  }
}
btn.onclick=function () {
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
}
