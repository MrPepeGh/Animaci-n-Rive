const container = document.getElementById("animacion");
const canvas = document.createElement("canvas");
container.appendChild(canvas);
const rect = container.getBoundingClientRect();
const dpr = window.devicePixelRatio || 1;
canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr;
canvas.style.width = rect.width + "px";
canvas.style.height = rect.height + "px";
const riveInstance = new rive.Rive({
  src: "assets/RoyalE.riv",
  canvas: canvas,
  stateMachines: ["StateMachine1"],
  autoplay: true,
  onLoad: () => {
    const inputs = riveInstance.stateMachineInputs("StateMachine1");
    const numberInput = inputs.find(i => i.name === "Number1");
    if (!numberInput) {
      console.error("Input 'Number1' no encontrado.");
      return;
    }
    canvas.addEventListener("mouseenter", () => {
      numberInput.value = 1;
    });
    canvas.addEventListener("mouseleave", () => {
      numberInput.value = 0;
    });
  }
});