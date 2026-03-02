(function() {
    
    const designTab = document.getElementById("tab-design");
    const designView = document.getElementById("view-design");
    const codeTab = document.getElementById("tab-code");
    const codeView = document.getElementById("view-code");

    designTab.addEventListener("click", () => {
        designTab.classList.add("selected");
        designView.classList.add("selected");
        codeTab.classList.remove("selected");
        codeView.classList.remove("selected");
    });

    codeTab.addEventListener("click", () => {
        codeTab.classList.add("selected");
        codeView.classList.add("selected");
        designTab.classList.remove("selected");
        designView.classList.remove("selected");
    });

})();
