// Burger menu
let burger = document.querySelector('#burger-menu');
let box = document.querySelector('#mobile-nav-box');

burger.addEventListener('click', () => {
    if (box.classList.contains('hide')) {
        box.classList.remove('hide');

    } else {
        box.classList.add('hide');
    }
})

// Mouse OVER
// let menuBtn = document.querySelector('#menu-nav-btn');
// let normalMenuP = document.querySelector('#menu-nav-p');

// menuBtn.addEventListener('mouseover', () => {
//     console.log('00000')
//     menuBtn.classList.toggle('x')
//     normalMenuP.classList.toggle('v')
// })


// let Btn = document.querySelector('#starters');
// let item1 = document.querySelector('#item1');
// let item2 = document.querySelector('#item2');
// let item3 = document.querySelector('#item3');
// let startersP = document.querySelector('#startersP');



// function add() {
//     item1.classList.add('fill');
//     item2.classList.add('fill');
//     item3.classList.add('fill');
//     startersP.classList.add('red');

// }

// function remove() {
//     item1.classList.remove('fill');
//     item2.classList.remove('fill');
//     item3.classList.remove('fill');
//     startersP.classList.remove('red');

// }

// MENU MAIN NAVIGATION

let menuNavBTn = document.getElementById('menu-nav-btn');
let monthlyMenuNavBtn = document.getElementById('monthly-menu-nav-btn');
let menuWrapper = document.getElementById('menu-wrapper');
let monthlyMenuWrapper = document.getElementById('monthly-menu-wrapper');

menuNavBTn.onclick = function() {
    menuWrapper.style.display = "block"
    monthlyMenuWrapper.style.display = "none"
    menuNavBTn.classList.add('active-bg')
    document.getElementById('menu-nav-p').classList.add('active-cl')
    monthlyMenuNavBtn.classList.remove('active-bg')
    document.getElementById('monthly-menu-nav-p').classList.remove('active-cl')
}

monthlyMenuNavBtn.onclick = function() {
    menuWrapper.style.display = "none"
    monthlyMenuWrapper.style.display = "block"
    monthlyMenuNavBtn.classList.add('active-bg')
    document.getElementById('monthly-menu-nav-p').classList.add('active-cl')
    menuNavBTn.classList.remove('active-bg')
    document.getElementById('menu-nav-p').classList.remove('active-cl')
}

function checkLink() {
    if (window.location.href.indexOf("#menu") > -1) {
        menuNavBTn.click();
    } else if (window.location.href.indexOf("#monthly-menu") > -1) {
        monthlyMenuNavBtn.click();
    } else if (window.location.href.indexOf("menu.html") > -1) {
        menuNavBTn.click();

    }
}

window.onload = checkLink();


// SUB MENU MAIN NAVIGATION////////////////////////////////////////////

//sub nav buttons
let startersBtn = document.getElementById('starters');
let mainCourseBtn = document.getElementById('mainCourse');
let dessertsBtn = document.getElementById('desserts');
let drinksBtn = document.getElementById('drinks');
let childrenBtn = document.getElementById('children');
let luxuryBtn = document.getElementById('luxury');

//menu items

let foodStarters = document.getElementById('food-starters');
let foodMainCourse = document.getElementById('food-main-course');
let foodDesserts = document.getElementById('food-desserts');
let foodDrinks = document.getElementById('food-drinks');
let foodChildren = document.getElementById('food-children');
let foodLuxury = document.getElementById('food-luxury');

//SVG paths + texts//////////////

//STARTERS paths 
let path1 = document.getElementById('path1');
let path2 = document.getElementById('path2');
let path3 = document.getElementById('path3');
let pStarters = document.getElementById('add-1');
//MAIN MENU paths
let path4 = document.getElementById('path4');
let pMain = document.getElementById('add-2');
//DESSERTS paths
let path5 = document.getElementById('path5');
let pDeserts = document.getElementById('add-3');
//DRINKS paths
let path6 = document.getElementById('path6');
let pDrinks = document.getElementById('add-4');
//CHILDREN paths
let path7 = document.getElementById('path7');
let pChildren = document.getElementById('add-5');
//LUXURY paths
let path8 = document.getElementById('path8');
let path9 = document.getElementById('path9');
let path10 = document.getElementById('path10');
let pLuxury = document.getElementById('add-6');
///////////////////////////////

//ACTIVATE STARTERS
startersBtn.onclick = function(e) {
    activateStarters();
    if (screen.width > 425) {
        foodStarters.style.display = "grid"
    } else {
        foodStarters.style.display = "block"
    }
    foodMainCourse.style.display = "none"
    foodDesserts.style.display = "none"
    foodDrinks.style.display = "none"
    foodChildren.style.display = "none"
    foodLuxury.style.display = "none"
        // e.preventDefault();
}

function activateStarters() {
    if (window.location.href.indexOf("starters")) {
        path1.classList.add('active-fill')
        path2.classList.add('active-fill')
        path3.classList.add('active-fill')
        pStarters.classList.add('active-p')
            //remove from others
        path4.classList.remove('active-fill')
        pMain.classList.remove('active-p')
        path5.classList.remove('active-fill')
        pDeserts.classList.remove('active-p')
        path6.classList.remove('active-fill')
        pDrinks.classList.remove('active-p')
        path7.classList.remove('active-fill')
        pChildren.classList.remove('active-p')
        path8.classList.remove('active-fill')
        path9.classList.remove('active-fill')
        path10.classList.remove('active-fill')
        pLuxury.classList.remove('active-p')
        console.log('active')
    } else {}
}

//ACTIVATE MAIN COURSE
mainCourseBtn.onclick = function() {
    activateMainCourse();
    if (screen.width > 425) {
        foodMainCourse.style.display = "grid"
    } else {
        foodMainCourse.style.display = "block"
    }
    foodStarters.style.display = "none"
    foodDesserts.style.display = "none"
    foodDrinks.style.display = "none"
    foodChildren.style.display = "none"
    foodLuxury.style.display = "none"

}

function activateMainCourse() {
    if (window.location.href.indexOf("mainCourse")) {
        path4.classList.add('active-fill')
        pMain.classList.add('active-p')
            //remove from others
        path1.classList.remove('active-fill')
        path2.classList.remove('active-fill')
        path3.classList.remove('active-fill')
        pStarters.classList.remove('active-p')
        path5.classList.remove('active-fill')
        pDeserts.classList.remove('active-p')
        path6.classList.remove('active-fill')
        pDrinks.classList.remove('active-p')
        path7.classList.remove('active-fill')
        pChildren.classList.remove('active-p')
        path8.classList.remove('active-fill')
        path9.classList.remove('active-fill')
        path10.classList.remove('active-fill')
        pLuxury.classList.remove('active-p')
        console.log('active')
    } else {}
}

//ACTIVATE DESERTS
dessertsBtn.onclick = function() {
    activateDesserts();
    if (screen.width > 425) {
        foodDesserts.style.display = "grid"
    } else {
        foodDesserts.style.display = "block"
    }
    foodStarters.style.display = "none"
    foodMainCourse.style.display = "none"
    foodDrinks.style.display = "none"
    foodChildren.style.display = "none"
    foodLuxury.style.display = "none"

}

function activateDesserts() {
    if (window.location.href.indexOf("desserts")) {
        path5.classList.add('active-fill')
        pDeserts.classList.add('active-p')
            //remove from others
        path1.classList.remove('active-fill')
        path2.classList.remove('active-fill')
        path3.classList.remove('active-fill')
        pStarters.classList.remove('active-p')
        path4.classList.remove('active-fill')
        pMain.classList.remove('active-p')
        path6.classList.remove('active-fill')
        pDrinks.classList.remove('active-p')
        path7.classList.remove('active-fill')
        pChildren.classList.remove('active-p')
        path8.classList.remove('active-fill')
        path9.classList.remove('active-fill')
        path10.classList.remove('active-fill')
        pLuxury.classList.remove('active-p')
        console.log('active')
    } else {}
}

//ACTIVATE DRINKS
drinksBtn.onclick = function() {
    activateDrinks();
    if (screen.width > 425) {
        foodDrinks.style.display = "grid"
    } else {
        foodDrinks.style.display = "block"
    }
    foodStarters.style.display = "none"
    foodMainCourse.style.display = "none"
    foodDesserts.style.display = "none"
    foodChildren.style.display = "none"
    foodLuxury.style.display = "none"
}

function activateDrinks() {
    if (window.location.href.indexOf("drinks")) {
        path6.classList.add('active-fill')
        pDrinks.classList.add('active-p')
            //remove from others
        path1.classList.remove('active-fill')
        path2.classList.remove('active-fill')
        path3.classList.remove('active-fill')
        pStarters.classList.remove('active-p')
        path4.classList.remove('active-fill')
        pMain.classList.remove('active-p')
        path5.classList.remove('active-fill')
        pDeserts.classList.remove('active-p')
        path7.classList.remove('active-fill')
        pChildren.classList.remove('active-p')
        path8.classList.remove('active-fill')
        path9.classList.remove('active-fill')
        path10.classList.remove('active-fill')
        pLuxury.classList.remove('active-p')
        console.log('active')
    } else {}
}

//ACTIVATE CHILDREN
childrenBtn.onclick = function() {
    activateChildren();
    if (screen.width > 425) {
        foodChildren.style.display = "grid"
    } else {
        foodChildren.style.display = "block"
    }
    foodStarters.style.display = "none"
    foodMainCourse.style.display = "none"
    foodDesserts.style.display = "none"
    foodDrinks.style.display = "none"
    foodLuxury.style.display = "none"
}

function activateChildren() {
    if (window.location.href.indexOf("children")) {
        path7.classList.add('active-fill')
        pChildren.classList.add('active-p')
            //remove from others
        path1.classList.remove('active-fill')
        path2.classList.remove('active-fill')
        path3.classList.remove('active-fill')
        pStarters.classList.remove('active-p')
        path4.classList.remove('active-fill')
        pMain.classList.remove('active-p')
        path5.classList.remove('active-fill')
        pDeserts.classList.remove('active-p')
        path6.classList.remove('active-fill')
        pDrinks.classList.remove('active-p')
        path8.classList.remove('active-fill')
        path9.classList.remove('active-fill')
        path10.classList.remove('active-fill')
        pLuxury.classList.remove('active-p')
        console.log('active')
    } else {}
}
//ACTIVATE LUXURY
luxuryBtn.onclick = function() {
    activateLuxury();
    if (screen.width > 425) {
        foodLuxury.style.display = "grid"
    } else {
        foodLuxury.style.display = "block"
    }
    foodStarters.style.display = "none"
    foodMainCourse.style.display = "none"
    foodDesserts.style.display = "none"
    foodDrinks.style.display = "none"
    foodChildren.style.display = "none"

}

function activateLuxury() {
    if (window.location.href.indexOf("children")) {
        path8.classList.add('active-fill')
        path9.classList.add('active-fill')
        path10.classList.add('active-fill')
        pLuxury.classList.add('active-p')
            //remove from others
        path1.classList.remove('active-fill')
        path2.classList.remove('active-fill')
        path3.classList.remove('active-fill')
        pStarters.classList.remove('active-p')
        path4.classList.remove('active-fill')
        pMain.classList.remove('active-p')
        path5.classList.remove('active-fill')
        pDeserts.classList.remove('active-p')
        path6.classList.remove('active-fill')
        pDrinks.classList.remove('active-p')
        path7.classList.remove('active-fill')
        pChildren.classList.remove('active-p')
        console.log('active')
    } else {}
}


///SUB MENU LINKS FORM FRONT PAGE////////////////////////////////////
function checkMenu() {
    if (window.location.href.indexOf("#starters") > -1) {
        menuNavBTn.click();
        startersBtn.click();
    } else if (window.location.href.indexOf("#mainCourse") > -1) {
        menuNavBTn.click();
        mainCourseBtn.click();

    } else if (window.location.href.indexOf("#desserts") > -1) {
        menuNavBTn.click();
        dessertsBtn.click();
    } else if (window.location.href.indexOf("#drinks") > -1) {
        menuNavBTn.click();
        drinksBtn.click();
    } else if (window.location.href.indexOf("#children") > -1) {
        menuNavBTn.click();
        childrenBtn.click();
    } else if (window.location.href.indexOf("#luxury") > -1) {
        menuNavBTn.click();
        luxuryBtn.click();
    } else {
        /// menu button with starters activated
    }
}


window.onload = checkMenu();