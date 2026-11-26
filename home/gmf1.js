const title = document.querySelector('#title');
const intro = document.querySelector('#intro');
const content = document.querySelector('#content');
const back = document.querySelector('#back');
const requestedLesson = new URLSearchParams(location.search).get('lesson');
const lesson = lessons.find(item => item.id === requestedLesson);

function make(tag, value, className) {
  const element = document.createElement(tag);
  if (value) element.textContent = value;
  if (className) element.className = className;
  return element;
}

function lessonUrl(id) {
  return '?lesson=' + encodeURIComponent(id);
}

function renderCatalog() {
  if (requestedLesson !== null) {
    intro.textContent = 'Урок по этой ссылке не найден. Выбери урок из списка.';
  }
  const list = make('nav', '', 'catalog');
  list.setAttribute('aria-label', 'Уроки Give Me Five! 1');
  lessons.forEach((item, index) => {
    const link = make('a', '', 'unit');
    link.href = lessonUrl(item.id);
    const description = make('span');
    const name = make('span', item.title, 'unit-title');
    name.lang = 'en';
    description.append(name, make('span', item.topic, 'unit-topic'));
    const arrow = make('span', '→');
    arrow.setAttribute('aria-hidden', 'true');
    link.append(make('span', index === 0 ? 'Starter' : 'Unit ' + index, 'unit-label'), description, arrow);
    list.append(link);
  });
  content.append(list);
}

const soundStatus = make('p');
soundStatus.setAttribute('role', 'status');

function audioCard([english, russian]) {
  const word = make('span', english);
  word.lang = 'en';
  const translation = make('small', russian);
  if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
    const text = make('div');
    text.append(word, translation);
    soundStatus.textContent = 'Озвучка недоступна в этом браузере. Прочитай слова вслух.';
    return text;
  }
  const button = make('button');
  button.type = 'button';
  button.append('🔊 ', word, translation);
  button.addEventListener('click', () => {
    speechSynthesis.cancel();
    soundStatus.textContent = '';
    const voice = new SpeechSynthesisUtterance(english);
    voice.lang = 'en-GB';
    voice.rate = 0.82;
    voice.voice = speechSynthesis.getVoices().find(item => item.lang === 'en-GB')
      || speechSynthesis.getVoices().find(item => item.lang.startsWith('en-'))
      || null;
    voice.onerror = event => {
      if (event.error !== 'canceled' && event.error !== 'interrupted') {
        soundStatus.textContent = 'Не удалось включить озвучку. Прочитай фразу вслух.';
      }
    };
    speechSynthesis.speak(voice);
  });
  return button;
}

function practiceSection(label) {
  const section = make('section', '', 'card');
  section.append(make('h2', label));
  content.append(section);
  return section;
}

function questionCard([prompt, choices, correctIndex], onAnswer) {
  const field = make('fieldset', '', 'question');
  const options = make('div', '', 'choices');
  const feedback = make('p', '', 'feedback');
  feedback.setAttribute('role', 'status');
  choices.forEach((choice, index) => {
    const button = make('button', choice);
    button.type = 'button';
    button.lang = /^[A-Za-z]/.test(choice) ? 'en' : 'ru';
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => {
      for (const option of options.children) option.setAttribute('aria-pressed', String(option === button));
      const correct = index === correctIndex;
      feedback.textContent = correct ? 'Верно!' : 'Попробуй ещё раз.';
      feedback.className = 'feedback ' + (correct ? 'correct' : 'retry');
      onAnswer(correct);
    });
    options.append(button);
  });
  field.append(make('legend', prompt), options, feedback);
  return field;
}

function renderLesson(item) {
  back.href = './';
  back.textContent = '← Все уроки GMF1';
  title.textContent = item.title;
  title.lang = 'en';
  document.title = item.title + ' · Give Me Five! 1';
  intro.textContent = item.topic + ' · 15–20 минут';

  const words = make('div', '', 'words');
  words.append(...item.words.map(audioCard));
  practiceSection('1. Послушай и повтори').append(
    make('p', 'Послушай каждое слово и повтори его два раза.'), words
  );

  const dialogue = make('div', '', 'dialogue');
  dialogue.append(...item.dialogue.map(audioCard));
  practiceSection('2. Потренируй фразы').append(
    make('p', 'Послушай фразы и прочитай их вслух. Затем попробуй произнести их, не глядя на текст.'),
    dialogue, soundStatus
  );

  const quiz = practiceSection('3. Проверь себя');
  const quizResult = make('p');
  quizResult.setAttribute('role', 'status');
  const results = item.questions.map(() => false);
  item.questions.forEach((question, index) => {
    quiz.append(questionCard(question, correct => {
      results[index] = correct;
      quizResult.textContent = results.every(Boolean) ? 'Все ответы верны. Переходи к устному заданию!' : '';
    }));
  });
  quiz.append(quizResult);

  const oral = practiceSection('4. Скажи сам');
  const completed = make('button', 'Я сделал устное задание', 'primary');
  completed.type = 'button';
  const status = make('p', '', 'feedback correct');
  status.setAttribute('role', 'status');
  completed.addEventListener('click', () => {
    status.textContent = results.every(Boolean)
      ? 'Отлично! Ты закончил урок.'
      : 'Устное задание готово. Чтобы закончить урок, ответь верно на все вопросы выше.';
  });
  quiz.addEventListener('click', () => {
    if (status.textContent) {
      status.textContent = results.every(Boolean)
        ? 'Отлично! Ты закончил урок.'
        : 'Устное задание готово. Чтобы закончить урок, ответь верно на все вопросы выше.';
    }
  });
  oral.append(make('p', item.speak), completed, status);
  const next = lessons[lessons.indexOf(item) + 1];
  const nextLink = make('a', next ? 'Следующий урок →' : 'К списку уроков →');
  nextLink.href = next ? lessonUrl(next.id) : './';
  content.append(nextLink);
}

if (lesson) renderLesson(lesson);
else renderCatalog();
