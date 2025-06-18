window.addEventListener("click", event => {
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot);
  });
clean.addEventListener("click", event => {
    let clear = document.getElementByTagName("div");
    clear.innerHTML = "";
}
