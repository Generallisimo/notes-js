const notesEl = document.querySelector('.notes');
const addBtn = document.querySelector('.note-add')

function createNote(title, text) {
  const noteEl = document.createElement('div');
  noteEl.classList.add('note');
//   прописываем наши заметки див вставкой тайтл и текста где одни видно а другие нет для измены
  noteEl.innerHTML = `
    <div class="note-header">
      <p id="note-title">${title}</p>
      <textarea id="note-title-input" class="hidden">${title}</textarea>
      <div>
        <button class="note-edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="note-delete"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
    <p id="note-text">${text}</p>
    <textarea id="note-textarea" class="hidden">${text}</textarea>
    `
    //   создаем кнопки обращаемся не к DOM а к дереву которе создаем
    const editBtn = noteEl.querySelector('.note-edit');
    const deleteBtn = noteEl.querySelector('.note-delete');
    // обращаемся к id чтобы менять стили
    const titleEl = noteEl.querySelector('#note-title');
    const textEl = noteEl.querySelector('#note-text');
    // для того чтобы показать скрывающие textarea (они нужны для правильного изминения текста в форме)
    const titleInputEl = noteEl.querySelector('#note-title-input');
    const textInputEl = noteEl.querySelector('#note-textarea');
    //   пишем фун для кнопок(обработчики)
    // изминение то есть добавим стили
    editBtn.addEventListener('click', (e) => {
        // toggle - позволяет добавлять если есть и убирать если нет 
        titleEl.classList.toggle('hidden');
        textEl.classList.toggle('hidden');
        // добавляем
        titleInputEl.classList.toggle('hidden');
        textInputEl.classList.toggle('hidden');
      });
    // удаление
    deleteBtn.addEventListener('click', (e) => {
        noteEl.remove();
    });
    // делаем 2 обработчика для получение данных и чтобы они переносили значание в p из textarea
    titleInputEl.addEventListener('input', (e) => {
        // target - обращается к titleInputEl так как мы пишем инпут обработчик на этот элемент но меняем с инером в titleEl
        titleEl.innerText = e.target.value;
      });
    
      textInputEl.addEventListener('input', (e) => {
        textEl.innerText = e.target.value;
      });
    return noteEl;
}
// создаем кнопку для того чтобы сделать новый див с заметками
addBtn.addEventListener('click', (e) => {
    // создаем значения для заметок
    const el = createNote("Заголовок", "Ваш текст");
    notesEl.appendChild(el);
})