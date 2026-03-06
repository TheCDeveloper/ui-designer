(function() {
    
    const MIN_ZOOM = -20;
    const MAX_ZOOM = 80;

    
    const designView = document.getElementById("view-design");
    const canvas = document.getElementById("canvas");

    let hold = false;
    let x = 0, y = 0 zoom = 0;

    function setTransform() {
        zoom = Math.min(Math.max(zoom, MIN_ZOOM), MAX_ZOOM);
        const scale = (100 + zoom) / 100;

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
