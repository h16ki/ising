document.addEventListener("DOMContentLoaded", 
function() {
  renderMathInElement(document.body, {
    delimiters: [
      // { left: "\\begin{align}", right: "\\end{align}", display: true },
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
    ]
  });
});
