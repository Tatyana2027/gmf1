const content = document.querySelector('#content');
const requested = new URLSearchParams(location.search).get('lesson');
const lesson = lessons.find(item => item.id === requested);
const lessonUrl = item => '?lesson=' + encodeURIComponent(item.id);

function make(tag, text, classes) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (classes) node.className = classes;
  return node;
}

function button(text, classes = 'btn primary', handler) {
  const node = make('button', text, classes);
  node.type = 'button';
  if (handler) node.addEventListener('click', handler);
  return node;
}

function link(text, href, classes) {
  const node = make('a', text, classes);
  node.href = href;
  return node;
}

function brand() {
  const node = link('', './', 'brand');
  node.append(make('b', 'О.К.С.Ф.О.Р.Д'), ' · урок дома');
  return node;
}

function status() {
  const node = make('p', '', 'msg');
  node.setAttribute('role', 'status');
  return node;
}

function copy(url, message, label = 'Скопировать ссылку на урок', classes = 'btn ghost') {
  const node = button(label, classes, async () => {
    try {
      await navigator.clipboard.writeText(new URL(url, location.href).href);
      message.textContent = 'Ссылка скопирована ✓';
    } catch {
      const field = make('input', '', 'field');
      field.readOnly = true;
      field.value = new URL(url, location.href).href;
      field.setAttribute('aria-label', 'Адрес урока');
      message.replaceChildren('Ссылка на урок: ', field);
      field.select();
    }
  });
  node.setAttribute('aria-label', 'Скопировать ссылку на урок');
  return node;
}

function renderCatalog() {
  const header = document.querySelector('header');
  header.replaceChildren(brand(), make('h1', 'Give Me Five! 1'),
    make('p', requested ? 'Урок по этой ссылке не найден. Выбери раздел.' : 'Пропустил урок? Пройди его дома за 15–20 минут.', 'sub'));
  const catalog = make('nav', '', 'catalog');
  catalog.setAttribute('aria-label', 'Уроки Give Me Five! 1');
  lessonGroups.forEach((items, index) => {
    const details = make('details');
    details.id = index ? 'u' + index : 'starter';
    details.open = location.hash === '#' + details.id;
    const summary = make('summary');
    const heading = make('span');
    heading.append(make('span', units[index].title, 'unit-title'),
      make('span', index ? '6 уроков + тест' : '3 урока', 'unit-topic'));
    summary.append(make('span', index ? 'Unit ' + index : 'Starter', 'unit-label'),
      heading, make('span', '⌄', 'arrow'));
    details.append(summary);
    for (const item of items) {
      const row = make('div', '', 'row');
      const card = link('', lessonUrl(item), 'unit');
      const intro = make('span');
      intro.append(make('span', item.title, 'unit-title'),
        make('span', item.topic + ' · стр. ' + item.page, 'unit-topic'));
      card.append(make('span', item.number === 'test' ? 'Тест' : 'L' + item.number, 'unit-label'),
        intro, make('span', '→', 'arrow'));
      const message = status();
      message.classList.add('copy-status');
      row.append(card, copy(lessonUrl(item), message, '🔗', 'btn ghost copy'));
      details.append(row, message);
    }
    catalog.append(details);
  });
  content.append(catalog, make('p', 'Прогресс сохраняется на этом устройстве.', 'foot'));
}

const steps = [
  ['words', 'Слова', 'Нажми на каждую карточку, послушай и повтори слово.'],
  ['listen', 'Послушай и найди', 'Послушай слово, найди подходящую картинку и нажми на неё.'],
  ['chant', 'Чант', 'Слушай и повторяй в ритме. Активная карточка подсвечивается.'],
  ['song', 'Песня', 'Включи полную запись издательства и пой по учебнику.'],
  ['grammar', 'Потренируй фразы', 'Послушай примеры. Затем выбери подходящее слово или фразу.'],
  ['know', 'Знаю / не знаю', 'Посмотри на картинку и назови слово. Открой ответ и отметь, вспомнил ли ты его.'],
  ['memo', 'Мемо', 'Открывай по две карточки. Найди пары «картинка и слово».'],
  ['spell', 'Сложи слово', 'Послушай слово и нажимай на буквы по порядку.'],
  ['write', 'Напиши', 'Посмотри на картинку, впиши английское слово и проверь себя.'],
  ['story', 'Прочитай историю', 'Послушай и прочитай короткий текст для домашней практики.'],
  ['order', 'Что было сначала?', 'Нажимай на события в том порядке, в котором они происходят в истории.'],
  ['phonics', 'Звуки', 'Послушай и прочитай слова. Повтори вслух.'],
  ['book', 'В учебнике', 'Поработай с книгой и тетрадью, затем отметь выполненные задания.']
];
const stepGroups = {
  starter:['words','listen','chant','grammar','memo','spell','book'],
  vocabulary:['words','listen','chant','song','grammar','know','memo','spell','write','book'],
  grammar:['grammar','listen','know','spell','write','book'],
  story:['story','order','grammar','know','spell','book'],
  extension:['words','listen','grammar','know','spell','write','book'],
  phonics:['story','phonics','spell','book'],
  review:['words','listen','grammar','memo','spell','write','song','book'],
  test:['listen','grammar','write']
};
const activeSteps = (stepGroups[lesson?.type] || []).map(key => steps.find(step => step[0] === key));
// The new activities and vocabulary have their own progress records.
const progressKey = lesson && 'gmf1:lessons-v3:' + lesson.id;
let progress = {};
try {
  const stored = JSON.parse(localStorage.getItem(progressKey));
  if (stored && typeof stored === 'object') progress = stored;
} catch {}

function save() {
  try { localStorage.setItem(progressKey, JSON.stringify(progress)); } catch {}
}

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function picture(word, describe = false) {
  const [english, russian, icon = ''] = word;
  const code = Array.from(icon.replace(/\ufe0f/g, ''), char => char.codePointAt(0).toString(16)).join('-');
  if (!code) return make('span', english, 'diagram');
  const cdn = 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/' + code + '.png';
  const numeric = numbers[english];
  const positions = ['behind', 'next to', 'in front of', 'in', 'on', 'under'];
  if (numeric || english === 'swing' || positions.includes(english)) {
    const node = make('span', numeric, 'diagram');
    node.setAttribute('role', 'img');
    node.setAttribute('aria-label', describe ? russian : 'Картинка');
    if (!numeric) {
      const art = make('span', '', 'position-art');
      art.classList.add(english === 'swing' ? 'swing' : 'position-' + positions.indexOf(english));
      art.append(make('i'), make('b'));
      node.append(art);
    }
    return node;
  }
  const img = make('img', '', 'picture');
  img.alt = describe ? russian : '';
  img.loading = 'lazy';
  img.src = (lesson.unit === 1 && english === 'crayon' ? 'g-l9/img/crayons.png' : photos[english]) || cdn;
  img.addEventListener('error', () => {
    if (img.getAttribute('src') !== cdn) {
      img.src = cdn;
      return;
    }
    const fallback = make('span', icon, 'diagram');
    if (describe) fallback.setAttribute('aria-label', russian);
    else fallback.setAttribute('aria-hidden', 'true');
    img.replaceWith(fallback);
  });
  return img;
}

function wordCard(word, showEnglish, showRussian, handler) {
  const card = button('', 'card', handler);
  if (!showEnglish) card.setAttribute('aria-label', word[1]);
  card.append(picture(word, !showEnglish));
  if (showEnglish) {
    const text = make('span', word[0]);
    text.lang = 'en';
    card.append(text);
  }
  if (showRussian) card.append(make('small', word[1]), make('span', '🔊', 'sound-icon'));
  return card;
}

let audioVersion = 0;
let lessonAudio;
let timers = [];
function stopAudio() {
  audioVersion++;
  window.speechSynthesis?.cancel();
  lessonAudio?.pause();
  for (const timer of timers) { clearTimeout(timer); clearInterval(timer); }
  timers = [];
  document.querySelectorAll('.playing').forEach(node => node.classList.remove('playing'));
  return audioVersion;
}

function say(text, message, finished, rate = .84, fallback = '') {
  const unavailable = 'Озвучка недоступна. ' + (fallback || 'Прочитай текст вслух.');
  if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) {
    message.textContent = unavailable;
    finished?.();
    return;
  }
  const current = audioVersion;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-GB';
  utterance.rate = rate;
  utterance.onend = () => { if (current === audioVersion) finished?.(); };
  utterance.onerror = event => {
    if (current !== audioVersion) return;
    if (event.error !== 'canceled' && event.error !== 'interrupted') {
      message.textContent = unavailable;
      finished?.();
    }
  };
  speechSynthesis.speak(utterance);
}

function play(text, message, fallback) {
  stopAudio();
  say(text, message, undefined, .84, fallback);
}

function words(root, done) {
  const heard = new Set(progress.heard || []);
  const grid = make('div', '', 'grid');
  const message = status();
  lesson.words.forEach((word, index) => {
    const card = wordCard(word, true, true, () => {
      play(word[0], message);
      heard.add(index);
      progress.heard = [...heard];
      save();
      card.classList.add('good');
      if (heard.size === lesson.words.length) done();
    });
    if (heard.has(index)) card.classList.add('good');
    grid.append(card);
  });
  root.append(grid, message);
}

function listen(root, done) {
  const queue = shuffle(lesson.words);
  const grid = make('div', '', 'grid four');
  const message = status();
  const count = make('span', 'Верно: 0 / ' + queue.length, 'pill');
  let index = 0;
  let started = false;
  const playWord = button('▶ Играть', undefined, () => {
    started = true;
    message.textContent = '';
    play(queue[index][0], message, 'Найди: ' + queue[index][0]);
    playWord.textContent = '▶ Повторить';
  });
  const options = shuffle(lesson.words);
  options.forEach(word => {
    const card = wordCard(word, false, false, () => {
      if (!started || index === queue.length) return;
      if (word !== queue[index]) {
        message.textContent = 'Попробуй ещё раз.';
        return;
      }
      card.disabled = true;
      card.classList.add('good');
      index++;
      count.textContent = 'Верно: ' + index + ' / ' + queue.length;
      if (index === queue.length) {
        playWord.disabled = true;
        message.textContent = 'Все картинки найдены!';
        done();
      } else {
        message.textContent = 'Верно! Слушай следующее слово.';
        play(queue[index][0], message, 'Найди: ' + queue[index][0]);
      }
    });
    grid.append(card);
  });
  const actions = make('div', '', 'actions');
  actions.append(playWord, count);
  root.append(actions, grid, message);
}

function sequence(root, done) {
  const message = status();
  const grid = make('div', '', 'grid four');
  const cards = lesson.words.map(word => wordCard(word, true, false, () => play(word[0], message)));
  grid.append(...cards);
  const start = button('▶ Слушать и повторять', undefined, () => {
    const token = stopAudio();
    let index = 0;
    function next() {
      if (token !== audioVersion) return;
      if (index) cards[index - 1].classList.remove('playing');
      if (index === cards.length) {
        message.textContent = 'Повтори слова ещё раз самостоятельно.';
        done();
        return;
      }
      cards[index].classList.add('playing');
      say(lesson.words[index++][0], message, () => timers.push(setTimeout(next, 400)));
    }
    next();
  });
  const actions = make('div', '', 'actions');
  actions.append(start, button('Стоп', 'btn ghost', stopAudio));
  root.append(actions, grid, message);
}

function song(root, done) {
  const player = make('audio', '', 'lesson-audio');
  player.controls = true;
  player.preload = 'none';
  player.hidden = lesson.type !== 'review';
  lessonAudio = player;
  const message = status();
  const choose = make('input');
  choose.type = 'file';
  choose.accept = 'audio/*,.mp3,.m4a';
  const label = make('label', 'Выбрать аудиофайл', 'book-task audio-file');
  label.append(choose);
  let localTrack;
  if (lesson.type === 'review') {
    player.src = wellDoneAudio;
    root.append(make('p', 'Well done! · запись Macmillan'));
  } else {
    root.append(make('p', trackNotes[lesson.unit] || 'Pupil’s Book · первое задание на стр. ' + lesson.page));
  }
  const source = link(lesson.unit === 1 || lesson.type === 'review'
    ? 'Официальные аудиоматериалы Macmillan' : 'Открыть учебник в Macmillan Education Everywhere',
    lesson.unit === 1 || lesson.type === 'review' ? audioSamples : publisher, 'btn ghost');
  source.target = '_blank';
  source.rel = 'noopener';
  choose.addEventListener('change', () => {
    const file = choose.files[0];
    if (!file) return;
    if (localTrack) URL.revokeObjectURL(localTrack);
    localTrack = URL.createObjectURL(file);
    player.src = localTrack;
    player.hidden = false;
    message.textContent = 'Файл готов. Нажми Play, чтобы послушать.';
  });
  player.addEventListener('ended', () => {
    message.textContent = 'Запись прослушана до конца.';
    done();
  });
  player.addEventListener('error', () => { message.textContent = 'Запись не открылась. Попробуй другой аудиофайл.'; });
  root.append(source);
  if (lesson.unit === 2 && lesson.type !== 'review') {
    const teacher = link('Открыть образец Unit 2 · стр. 18', unit2Sample, 'btn ghost');
    teacher.target = '_blank';
    teacher.rel = 'noopener';
    root.append(teacher);
  }
  root.append(make('p', 'Если запись уже скачана или есть на диске, выбери её ниже. Файл останется на устройстве.'),
    label, player, button('Я послушал песню в учебнике', 'btn ghost', () => {
      message.textContent = 'Песня отмечена.';
      done();
    }), message);
}

function story(root, done, phonics = false) {
  const message = status();
  const heard = new Set();
  const lines = phonics ? lesson.words.map(([word]) => word) : lesson.story;
  lines.forEach((text, index) => root.append(button('🔊 ' + text, 'line', () => {
    play(text, message);
    heard.add(index);
    if (heard.size === lines.length) done();
  })));
  root.append(message);
}

function order(root, done) {
  const message = status();
  const ordered = make('ol', '', 'ordered-story');
  const choices = make('div');
  let next = 0;
  for (const text of shuffle(lesson.story)) {
    const choice = button(text, 'line', () => {
      if (text !== lesson.story[next]) {
        choice.classList.add('wrong-option');
        message.textContent = 'Это событие было в другом месте. Попробуй ещё раз.';
        return;
      }
      choice.hidden = true;
      ordered.append(make('li', text));
      message.textContent = 'Верно!';
      if (++next === lesson.story.length) done();
    });
    choices.append(choice);
  }
  root.append(ordered, choices, message);
}

function grammar(root, done) {
  const examples = make('div');
  const quiz = make('div');
  const message = status();
  lesson.dialogue.forEach(([english, russian]) => {
    const line = button('🔊 ' + english, 'line', () => play(english, message));
    line.title = russian;
    examples.append(line);
  });
  const correct = new Set();
  lesson.questions.forEach(([prompt, choices, answer], index) => {
    const question = make('div');
    const actions = make('div', '', 'actions');
    question.append(make('p', prompt), actions);
    for (const [i, choice] of choices.entries()) {
      actions.append(button(choice, 'btn ghost', () => {
        if (i !== answer) {
          message.textContent = 'Попробуй ещё раз.';
          return;
        }
        correct.add(index);
        for (const option of actions.children) option.disabled = true;
        message.textContent = 'Верно!';
        if (correct.size === lesson.questions.length) done();
      }));
    }
    quiz.append(question);
  });
  root.append(examples, quiz, message);
}

function know(root, done) {
  const area = make('div', '', 'study');
  const message = status();
  let index = 0;
  let remembered = 0;
  function draw() {
    area.replaceChildren();
    if (index === lesson.words.length) {
      message.textContent = 'Вспомнил: ' + remembered + ' из ' + index + '.';
      done();
      return;
    }
    const word = lesson.words[index];
    area.append(wordCard(word, false, false, () => {
      play(word[0], message);
      const actions = make('div', '', 'actions');
      actions.append(button('Знаю', undefined, () => { remembered++; index++; draw(); }),
        button('Не знаю', 'btn ghost', () => { index++; draw(); }));
      area.replaceChildren(wordCard(word, true, true, () => play(word[0], message)), actions);
    }), make('p', 'Нажми, чтобы открыть ответ.'));
  }
  root.append(button('Начать', undefined, event => { event.currentTarget.hidden = true; draw(); }), area, message);
}

function memo(root, done) {
  const game = make('div', '', 'grid four');
  const selection = shuffle(lesson.words).slice(0, 6);
  const count = make('span', 'Пары: 0 / ' + selection.length, 'pill');
  const message = status();
  let open = [];
  let matches = 0;
  let lock = false;
  const start = button('Играть', undefined, () => {
    start.disabled = true;
    shuffle(selection.flatMap(word => [{word, text: true}, {word, text: false}])).forEach(item => {
      const tile = button('?', 'card', () => {
        if (lock || tile.disabled) return;
        tile.replaceChildren(item.text ? make('span', item.word[0]) : picture(item.word, true));
        tile.disabled = true;
        open.push({item, tile});
        if (open.length !== 2) return;
        if (open[0].item.word === open[1].item.word) {
          for (const entry of open) entry.tile.classList.add('good');
          open = [];
          matches++;
          count.textContent = 'Пары: ' + matches + ' / ' + selection.length;
          if (matches === selection.length) {
            message.textContent = 'Все пары найдены!';
            done();
          }
          return;
        }
        lock = true;
        setTimeout(() => {
          for (const entry of open) {
            entry.tile.textContent = '?';
            entry.tile.disabled = false;
          }
          open = [];
          lock = false;
        }, 750);
      });
      game.append(tile);
    });
  });
  const actions = make('div', '', 'actions');
  actions.append(start, count);
  root.append(actions, game, message);
}

function spell(root, done) {
  const selection = lesson.words;
  const area = make('div', '', 'study');
  const message = status();
  let index = 0;
  function draw() {
    area.replaceChildren();
    if (index === selection.length) {
      message.textContent = 'Все слова собраны!';
      done();
      return;
    }
    const word = selection[index];
    const letters = Array.from(word[0].toLowerCase()).filter(letter => /\p{L}/u.test(letter));
    const masked = position => {
      let letterIndex = 0;
      return Array.from(word[0], letter => /\p{L}/u.test(letter) && letterIndex++ >= position ? '＿' : letter).join('');
    };
    const display = make('p', masked(0), 'pill');
    display.setAttribute('aria-live', 'polite');
    const choices = make('div', '', 'actions');
    let position = 0;
    for (const letter of shuffle(letters)) {
      const tile = button(letter, undefined, () => {
        if (letter !== letters[position]) {
          for (const choice of choices.children) choice.classList.remove('wrong-option');
          tile.classList.add('wrong-option');
          message.textContent = 'Здесь нужна «' + letters[position] + '». Найди эту букву.';
          return;
        }
        for (const choice of choices.children) choice.classList.remove('wrong-option');
        tile.disabled = true;
        position++;
        display.textContent = masked(position);
        message.textContent = 'Верно!';
        if (position === letters.length) {
          index++;
          draw();
        }
      });
      choices.append(tile);
    }
    area.append(wordCard(word, false, false, () => play(word[0], message)), display, choices);
  }
  root.append(button('Начать', undefined, event => { event.currentTarget.hidden = true; draw(); }), area, message);
}

function write(root, done) {
  const grid = make('div', '', 'grid two');
  const message = status();
  const selected = lesson.type === 'vocabulary' ? lesson.words : lesson.words.slice(0, 6);
  const correct = new Set();
  const normalize = text => text.trim().toLowerCase().replace(/\s+/g, ' ');
  for (const word of selected) {
    const card = make('form', '', 'card');
    const input = make('input', '', 'field');
    input.setAttribute('aria-label', 'Английское слово: ' + word[1]);
    input.placeholder = 'Впиши слово';
    input.autocomplete = 'off';
    input.spellcheck = false;
    input.lang = 'en';
    input.required = true;
    const check = make('button', 'Проверить', 'btn primary');
    const feedback = status();
    feedback.id = 'spelling-' + selected.indexOf(word);
    feedback.classList.add('spelling-feedback');
    input.setAttribute('aria-describedby', feedback.id);
    input.addEventListener('input', () => {
      card.classList.remove('bad');
      input.removeAttribute('aria-invalid');
      feedback.replaceChildren();
    });
    card.addEventListener('submit', event => {
      event.preventDefault();
      if (normalize(input.value) !== normalize(word[0])) {
        const typed = normalize(input.value);
        const expected = normalize(word[0]);
        let at = 0;
        while (typed[at] && typed[at] === expected[at]) at++;
        const correction = make('strong', '', 'correction');
        correction.lang = 'en';
        correction.append(expected.slice(0, at), make('mark', expected[at] || ''), expected.slice(at + 1));
        const hint = !expected[at] ? 'Убери лишние буквы. ' : expected[at] === ' ' ? 'Здесь нужен пробел. ' : 'Обрати внимание на выделенную букву. ';
        feedback.replaceChildren(hint, 'Правильно: ', correction, '. Напиши ещё раз.');
        card.classList.add('bad');
        input.setAttribute('aria-invalid', 'true');
        input.focus({preventScroll:true});
        const original = input.value;
        const start = original.length - original.trimStart().length + at;
        input.setSelectionRange(start, start + (typed[at] ? 1 : 0));
        return;
      }
      card.classList.remove('bad');
      card.classList.add('good');
      feedback.textContent = '✓ Верно!';
      input.removeAttribute('aria-invalid');
      input.readOnly = true;
      check.disabled = true;
      correct.add(word);
      message.textContent = 'Верно: ' + correct.size + ' / ' + selected.length;
      if (correct.size === selected.length) done();
    });
    card.append(picture(word, true), input, feedback, check);
    grid.append(card);
  }
  root.append(grid, message);
}

function book(root, done) {
  const checklist = lesson.unit === 2 && lesson.number === 1 ? [
    ['Pupil’s Book · стр. 18, задание 1', 'Послушай песню целиком. Показывай игрушки на картинке и пой.'],
    ['Pupil’s Book · стр. 18, задание 2', 'Прочитай слова, наклей 10 стикеров и повтори чант.'],
    ['Activity Book · стр. 16', 'Найди игрушки и раскрась их по инструкции.'],
    ['Activity Book · стр. 25', 'Выполни задания на написание слов.']
  ] : [
    ['Pupil’s Book · стр. ' + lesson.page, 'Найди на странице знакомые картинки. Покажи их и назови не меньше трёх слов по-английски.'],
    ['В тетради', 'Нарисуй два предмета или действия из урока и подпиши их по-английски.'],
    ['Скажи вслух', lesson.speak]
  ];
  const marked = new Set(progress.bookTasks || []);
  checklist.forEach(([title, instruction], index) => {
    const label = make('label', '', 'book-task');
    const box = make('input');
    box.type = 'checkbox';
    box.checked = marked.has(index);
    box.addEventListener('change', () => {
      if (box.checked) marked.add(index);
      else marked.delete(index);
      progress.bookTasks = [...marked];
      done(marked.size === checklist.length);
    });
    label.append(make('strong', title), make('p', instruction), box, 'Сделано');
    root.append(label);
  });
}

const activities = {words, listen, chant:sequence, song, grammar, know, memo, spell, write, book, story, order, phonics:(root, done) => story(root, done, true)};

function renderLesson() {
  document.body.classList.add('lesson-mode');
  document.title = lesson.title + ' · Give Me Five! 1';
  const top = make('div', '', 'top');
  const dots = make('nav', '', 'dots');
  dots.setAttribute('aria-label', 'Слайды урока');
  top.append(brand(), dots);
  const stack = make('div', '', 'deck');
  const nav = make('nav', '', 'nav');
  nav.setAttribute('aria-label', 'Переход между слайдами');
  const previous = button('← Назад', 'btn ghost', () => show(current - 1));
  const next = button('Дальше →', undefined, () => show(current + 1));
  const count = make('span');
  nav.append(previous, count, next);
  const bubbles = make('div', '', 'bubbles');
  bubbles.setAttribute('aria-hidden', 'true');
  for (const [index, size] of [46, 32, 58, 42, 50].entries()) {
    const bubble = make('i');
    bubble.style.cssText = '--size:' + size + 'px;--left:' + (8 + index * 20) +
      '%;--time:' + (15 + index * 2) + 's;--delay:-' + (index + 2) + 's';
    bubbles.append(bubble);
  }
  content.append(bubbles, top, stack, nav);

  function slide(title, classes, stepNumber) {
    const panel = make('section', '', 'slide ' + classes);
    const inner = make('div', '', 'slide-inner');
    const heading = make(stepNumber ? 'h2' : title === lesson.title ? 'h1' : 'h2');
    heading.tabIndex = -1;
    if (stepNumber) heading.append(make('span', String(stepNumber), 'n'));
    if (title === lesson.title) heading.lang = 'en';
    heading.append(title);
    inner.append(heading);
    panel.append(inner);
    stack.append(panel);
    return {panel, inner, heading};
  }

  const cover = slide(lesson.title, 'cover');
  const owl = make('img');
  owl.src = 'g-l9/img/speaky.png';
  owl.alt = 'Окси';
  cover.inner.prepend(owl);
  const plan = make('div', '', 'plan');
  const coverMessage = status();
  const coverActions = make('div', '', 'actions');
  coverActions.append(button('Начать →', undefined, () => show(1)), copy(lessonUrl(lesson), coverMessage));
  cover.inner.append(make('p', 'Give Me Five! 1 · ' + (lesson.unit ? 'Unit ' + lesson.unit : 'Starter') + ' · ' + (lesson.number === 'test' ? 'Test' : 'Lesson ' + lesson.number), 'sub'),
    make('span', '📖 Pupil’s Book · стр. ' + lesson.page, 'pill'), plan, coverActions, coverMessage);
  const practice = activeSteps.map(([key, title, hint], index) => {
    const item = slide(title, '', index + 1);
    item.inner.append(make('p', hint, 'hint'));
    const planButton = button(title, 'btn ghost', () => show(index + 1));
    plan.append(planButton);
    activities[key](item.inner, (complete = true) => {
      progress[key] = complete;
      save();
      paint();
    });
    return {...item, key, planButton};
  });

  const finish = slide('Урок пройден?', 'finish');
  const stars = make('div', '', 'stars');
  stars.setAttribute('aria-hidden', 'true');
  finish.inner.prepend(stars);
  const required = lesson.type === 'test' ? practice.length : Math.min(5, practice.length);
  const finishHint = make('p', 'Выполни заданий для отметки: ' + required + ' из ' + practice.length + '.');
  const finishMessage = status();
  const progressCount = status();
  const finishActions = make('div', '', 'actions');
  const completeLesson = button('🎉 Я сделал!', undefined, () => {
    if (practice.filter(({key}) => progress[key]).length < required) {
      finishMessage.textContent = 'Сначала выполни необходимое число заданий.';
      return;
    }
    progress.finished = true;
    save();
    completeLesson.disabled = true;
    finishMessage.textContent = '🎉 Молодец! Урок отмечен на этом устройстве.';
  });
  if (progress.finished) {
    finishMessage.textContent = '🎉 Урок уже отмечен на этом устройстве.';
    completeLesson.disabled = true;
  }
  finishActions.append(completeLesson);
  finish.inner.append(progressCount, finishHint, finishActions, finishMessage, link('К списку уроков', './#' + (lesson.unit ? 'u' + lesson.unit : 'starter'), 'btn ghost'));

  const panels = [cover, ...practice, finish];
  let current = 0;
  const indicators = panels.map((item, index) => {
    const dot = button('', 'dot', () => show(index));
    dot.setAttribute('aria-label', item.heading.textContent);
    dots.append(dot);
    return dot;
  });
  function paint() {
    const done = practice.filter(({key}) => progress[key]).length;
    progressCount.textContent = 'Выполнено заданий: ' + done + ' из ' + practice.length;
    stars.replaceChildren(...practice.map(({key}) => make('span', '★', progress[key] ? 'is-done' : '')));
    practice.forEach(({key, panel, heading, planButton}, index) => {
      const complete = Boolean(progress[key]);
      panel.classList.toggle('is-done', complete);
      planButton.classList.toggle('is-done', complete);
      indicators[index + 1].classList.toggle('is-done', complete);
      heading.querySelector('.n').textContent = complete ? '✓' : String(index + 1);
    });
  }

  function show(index, focus = true) {
    if (index < 0 || index >= panels.length) return;
    stopAudio();
    current = index;
    panels.forEach(({panel}, i) => {
      panel.hidden = i !== index;
      indicators[i].classList.toggle('is-current', i === index);
      indicators[i].setAttribute('aria-current', i === index ? 'step' : 'false');
    });
    previous.style.visibility = index === 0 ? 'hidden' : '';
    next.style.visibility = index === panels.length - 1 ? 'hidden' : '';
    count.textContent = index > 0 && index <= practice.length ? index + ' / ' + practice.length : '';
    if (focus) panels[index].heading.focus({preventScroll:true});
  }

  let touch;
  stack.addEventListener('touchstart', event => {
    if (event.touches.length !== 1 || event.target.closest('input')) return;
    const point = event.touches[0];
    touch = {x:point.clientX, y:point.clientY};
  }, {passive:true});
  stack.addEventListener('touchend', event => {
    if (!touch) return;
    const point = event.changedTouches[0];
    const dx = point.clientX - touch.x;
    if (Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(point.clientY - touch.y) * 1.5) show(current + (dx < 0 ? 1 : -1));
    touch = undefined;
  }, {passive:true});
  stack.addEventListener('touchcancel', () => { touch = undefined; }, {passive:true});
  document.addEventListener('keydown', event => {
    if (event.target.closest('input, textarea, select') || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight') show(current + 1);
  });
  paint();
  show(0, false);
}

if (lesson) renderLesson();
else renderCatalog();
