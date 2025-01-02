(async () => {
    const group = document.getElementById("group-area");
    const main = document.getElementById("main-area");

    const changeClass = setInterval(() => {
        if (group.className.includes("fl")) {
            group.className = group.className.replace("fl", "fr");
            main.className = main.className.replace("fr", "fl");
        }
    }, 100);
    setTimeout(function (){
        clearInterval(changeClass);
    }, 500);
    
})();