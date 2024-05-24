const btn = document.getElementById("btn");

const cont = document.getElementById("maincont");

getNotes().forEach((note) => {
  const noteEl = createEle(note.id, note.content);
  cont.insertBefore(noteEl, btn);
});

btn.addEventListener("click", addNote);

function createEle(id, content) {
  const textarea = document.createElement("textarea");
  textarea.placeholder = "Note";
  textarea.value = content;

  textarea.addEventListener("dblclick", () => {
    const warning = confirm("Do you want to delete this note?");
    if (warning) {
      deleteNote(id, textarea);
    }
  });
  textarea.addEventListener("input", () => {
    updateNote(id, textarea.value);
  });
  return textarea;
}

function addNote() {
  const notes = getNotes();
  const noteObj = {
    id: Math.floor(Math.random() * 1000000),
    content: "",
  };
  const noteEl = createEle(noteObj.id, noteObj.content);
  cont.insertBefore(noteEl, btn);
  notes.push(noteObj);

  saveNots(notes);
}

function updateNote(id, textarea) {
  const notes = getNotes();
  const target = notes.filter((note) => note.id == id)[0];
  target.content = textarea;
  saveNots(notes);
}

function deleteNote(id, textarea) {
  const notes = getNotes().filter((note) => note.id != id);
  saveNots(notes);
  cont.removeChild(textarea);
}

function saveNots(notes) {
  localStorage.setItem("note-app", JSON.stringify(notes));
}

function getNotes() {
  return JSON.parse(localStorage.getItem("note-app") || "[]");
}
