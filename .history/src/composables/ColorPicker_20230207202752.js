import { ref } from "vue";

export default function ColorPicker() {
  const colors = ["green", "red", "blue", "purple"];
  let message = ref("pick a color...");

  const matchColor = (value) => {
    // do a random color based on the array index;
    const randomColor = Math.floor(Math.random() * colors.length);

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
