(function() {

    const designView = document.getElementById("view-design");
    const canvas = document.getElementById("canvas");

    let hold = false;
    let x = 0, y = 0;
    let zoom = 0;

    const MIN_ZOOM = -20;
    const MAX_ZOOM = 80;

    function setTransform() {
        // clamp zoom first
        zoom = Math.min(Math.max(zoom, MIN_ZOOM), MAX_ZOOM);

        // calculate scale from zoom (0 => 1, 80 => 1.8, -20 => 0.8)
        const scale = (100 + zoom) / 100;

        // apply transform
        canvas.style.transform = `scale(${scale}) translate(${x / scale}px, ${y / scale}px)`;
    }

    designView.addEventListener("wheel", e => {
        e.preventDefault();
        zoom -= e.deltaY * 0.15;
        setTransform();
    });

    designView.addEventListener("mousedown", () => { hold = true });
    designView.addEventListener("mouseup", () => { hold = false });

    designView.addEventListener("mousemove", e => {
        if (!hold) return;

        x += e.movementX;
        y += e.movementY;
        setTransform();
    });

})();
