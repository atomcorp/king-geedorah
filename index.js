(() => {
  const axiis = [
    {
      id: "xSpin",
      var: "--x-axis",
    },
    {
      id: "zSpin",
      var: "--z-axis",
    },
  ];

  axiis.forEach((axis) => {
    const slider = document.getElementById(axis.id);
    const viewEl = document.querySelector(".view");
    const initalXAxis = getComputedStyle(viewEl).getPropertyValue(axis.var);
    slider.value = parseInt(initalXAxis).toString();
    slider.addEventListener("input", (e) => {
      viewEl.style.setProperty(axis.var, e.currentTarget.value + "deg");
    });
  });
})();
