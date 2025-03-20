(async () => {
    const group = document.getElementById("group-area");
    const main = document.getElementById("main-area");

    const changeClass = setInterval(() => {
        if (group.className.includes("fl")) {
            try {
                group.className = group.className.replace("fl", "fr");
                main.className = main.className.replace("fr", "fl");
            } catch (e) {
                console.error(e);
            }
        }
    }, 100);
    setTimeout(function (){
        clearInterval(changeClass);
    }, 500);
    
})();