// let flexLayout = document.getElementById("flex--2")
// console.log(flexLayout);
// let boxes = document.querySelectorAll(".box-effects");
// let allImageCard = document.querySelectorAll(".img-card")
// let titles = document.querySelectorAll(".title_js");
// let texts = document.querySelectorAll(".text_js")

// console.log(titles);
// console.log(boxes)


// function stopEffects() {
//     clearInterval(timeoutID);
// }

// function startEffects() {
//     setInterval(timeoutID)
// }

// flexLayout.addEventListener("mouseover", startEffects);
// flexLayout.addEventListener("mouseout", stopEffects);

// let index = 0;
// document.addEventListener("DOMContentLoaded", () => {
//     timeoutID = setInterval(function() {
//         boxes.forEach((box, id) => {
//             box.lastElementChild.classList.remove("effects");
//             boxes[id].classList.remove(`case_${id}`);
            
//         });

//         switch (index) {
//             case 0:
//                 boxes[index].lastElementChild.classList.add("effects");
//                 boxes[index].classList.add(`case_${index}`);
//             case 1:
//                 boxes[index].lastElementChild.classList.add("effects");
//                 boxes[index].classList.add(`case_${index}`)
//             case 2:
//                 boxes[index].lastElementChild.classList.add("effects");
//                 boxes[index].classList.add(`case_${index}`)
//             case 3:
//                 boxes[index].lastElementChild.classList.add("effects");
//                 boxes[index].classList.add(`case_${index}`)
//             case 4:
//                 boxes[index].lastElementChild.classList.add("effects");
//                 boxes[index].classList.add(`case_${index}`)
//         }
//         index = (index + 1) % boxes.length;
//     }, 3000);
// });

let flexLayout = document.getElementById("flex--2");
let boxes = document.querySelectorAll(".box-effects");
let allImageCard = document.querySelectorAll(".img-card");
let titles = document.querySelectorAll(".title_js");
let texts = document.querySelectorAll(".text_js");
let index = 0;
let timeoutID;

function stopEffects() {
    clearInterval(timeoutID);
    boxes.forEach((box, id) => {
        box.lastElementChild.classList.remove("effects");
        boxes[id].classList.remove(`case_${id}`);
    });
}

function startEffects() {
    timeoutID = setInterval(function() {
        boxes.forEach((box, id) => {
            box.lastElementChild.classList.remove("effects");
            boxes[id].classList.remove(`case_${id}`);
        });

        switch (index) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                boxes[index].lastElementChild.classList.add("effects");
                boxes[index].classList.add(`case_${index}`);
                break; // Add break statement to exit the switch case
        }
        index = (index + 1) % boxes.length;
    }, 3000);
}
boxes.forEach((box, id)=> { 
    box.addEventListener("mouseover", stopEffects)
    index = id;
})
boxes.forEach((box)=> {
    box.addEventListener("mouseout", startEffects)
})

// Start the effects on DOMContentLoaded
document.addEventListener("DOMContentLoaded", startEffects);
