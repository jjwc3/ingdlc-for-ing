const interval = setInterval(() => {
    if (document.getElementById("btn_sound") && !document.getElementById("btn_sound").className.includes("mute")) {
        // document.getElementById("btn_sound").className += ' mute small';
        document.getElementById("btn_sound").click();
        document.getElementsByClassName("write_area")[0].focus();
        clearInterval(interval);
    }
}, 500)