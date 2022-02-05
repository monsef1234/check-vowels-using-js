const btn = document.getElementById("btn");
const text = document.getElementById("text");
btn.addEventListener("click", (eo) => {
  const regVowels = /[aeiou]/g;
  const lowerCase = text.value.toLowerCase();
  console.log(lowerCase);
  if (lowerCase == "") {
    alert("write somthing");
  }
  if (lowerCase.match(regVowels) && lowerCase != "") {
    alert(`There is ${lowerCase.match(regVowels).length} Vowle(s)`);
  }
  if (!lowerCase.match(regVowels) && lowerCase != "") {
    alert("nothing");
  }
});
