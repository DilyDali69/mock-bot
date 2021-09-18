const inputEl = document.querySelector("#input");
const outputEl = document.querySelector("#output");
const emotesEl = document.querySelector("#emotes");
const submitBtn = document.querySelector("#submit");
const copyBtn = document.querySelector("#copy");

const mockBot = (sentence, emote) => {
  const emotes = emote.split(",").map((i) => i.trim());
  console.log(emotes);
  const array = [...sentence]
    .map((lt) =>
      Math.floor(Math.random() * 2) % 2 === 0
        ? lt.toLowerCase()
        : lt.toUpperCase()
    )
    .join("")
    .split(" ")
    .map((i) => i.trim());

  for (let i = 0; i < Math.floor(array.length / 3); i++) {
    array.splice(
      Math.floor(Math.random() * array.length - 1),
      0,
      emotes[Math.floor(Math.random() * emotes.length)]
    );
  }

  return array.join(" ");
};

function generateText() {
  const text = mockBot(inputEl.value, emotesEl.value);
  outputEl.value = text;
}

function copyText() {
  if (!outputEl.value) {
    alert("Nothing to copy!");
    return;
  }
  outputEl.select();
  outputEl.setSelectionRange(0, 99999); /* For mobile devices */
  navigator.clipboard.writeText(outputEl.value);
}

submitBtn.addEventListener("click", generateText);
copyBtn.addEventListener("click", copyText);
