import { ref } from "vue";

export function ColorPicker() {
  const colors = ["green", "red", "blue", "purple"];
  let message =ref("pick a color...")

  const matchColor = (value) => {
    // do a random color based on the array index;
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    if (colors[randomColor]=== value) {
      message.value = `You win...[]`
    }
  }
}