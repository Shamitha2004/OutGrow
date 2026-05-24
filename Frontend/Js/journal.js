function saveJournal(){

  const input =
    document.getElementById("journalInput");

  const entries =
    document.getElementById("entries");

  const div = document.createElement("div");

  div.style.marginTop = "20px";

  div.style.padding = "20px";

  div.style.background = "#334155";

  div.style.borderRadius = "10px";

  div.innerText = input.value;

  entries.prepend(div);

  input.value = "";

}