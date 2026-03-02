(function() {

    const designView = document.getElementById("view-design");
    const canvas = document.getElementById("canvas");

    var hold = false;
    var x = 0, y = 0;
    var zoom = 0;

    function transform() {
        canvas.style.transform = `scale(${100 + zoom}%) translate(${x / ((100 + zoom)/100)}px, ${y / ((100 + zoom)/100)}px)`;
        zoom = Math.min(Math.max(zoom, -20), 80);
    }

    designView.addEventListener("wheel", e => {
        zoom -= e.deltaY * 0.15;
        transform();
    });

    designView.addEventListener("mousedown", () => { hold = true });
    designView.addEventListener("mouseup", () => { hold = false });

    designView.addEventListener("mousemove", e => {
        if (!hold) {
            return;
        }

        x += e.movementX;
        y += e.movementY;
        transform();
    });

})();
