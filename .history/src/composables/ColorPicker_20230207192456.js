import { ref } from "vue";

export default function ColorPicker() {
  const colors = ["green", "red", "blue", "purple"];
  let message = ref("pick a color...");

  const matchColor = (value) => {
    // do a random color based on the array index;
    let randomColor = colors[Math.floor(Math.random() * 3) + 1];

    if (colors[randomColor] === value) {
      message.value = `You win...[answer: ${colors[randomColor]}]`;
      return;
    }
    message.value = `You lose...[answer: ${colors[randomColor]}]`;
  };
  return {
    colors,
    message,
    matchColor,
  };
}
