const moving = document.querySelector(".circle")
document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === "a" || e.key === "A") {
        let currLeft;
        if (!moving.style.left) {
            currLeft = 0;
        } else {
            currLeft = parseInt(moving.style.left);
        }
        let newLeft = currLeft - 20;
        moving.style.left = newLeft + "px";
    } else if (e.key === "d" || e.key === "D") {
        let currLeft;
        if (!moving.style.left) {
            currLeft = 0;
        } else {
            currLeft = parseInt(moving.style.left);
        }
        let newLeft = currLeft + 20;
        moving.style.left = newLeft + "px";
    } else if (e.key === "s" || e.key === "S") {
        let currTop;
        if (!moving.style.top) {
            currTop = 0;
        } else {
            currTop = parseInt(moving.style.top);
        }
        let newTop = currTop + 20;
        moving.style.top = newTop + "px";
    } else if (e.key === "w" || e.key === "W") {
        let currTop;
        if (!moving.style.top) {
            currTop = 0;
        } else {
            currTop = parseInt(moving.style.top);
        }
        let newTop = currTop - 20;
        moving.style.top = newTop + "px";
    }
});

