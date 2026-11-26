const lessons = [
  {
    id: 'starter', title: 'Hello, friends!', topic: 'Приветствие, цвета и числа',
    words: [['hello','привет'], ['goodbye','до свидания'], ['one','один'], ['two','два'], ['three','три'], ['red','красный'], ['blue','синий'], ['green','зелёный']],
    dialogue: [['What’s your name?', 'Как тебя зовут?'], ['I’m Max.', 'Я Макс.'], ['Goodbye, Max!', 'До свидания, Макс!']],
    questions: [['Как поздороваться?', ['Goodbye!', 'Hello!', 'Three!'], 1], ['Как сказать «три»?', ['Three', 'Two', 'One'], 0], ['Как ответить на “What’s your name?”', ['It’s green.', 'Goodbye!', 'I’m Mia.'], 2]],
    speak: 'Поздоровайся и назови своё имя. Найди дома красный и синий предметы и назови цвета по-английски.'
  },
  {
    id: 'unit-1', title: 'Ready for school!', topic: 'Школьные принадлежности и предлоги',
    words: [['pencil','карандаш'], ['pen','ручка'], ['book','книга'], ['ruler','линейка'], ['bag','сумка'], ['in','внутри'], ['on','на'], ['under','под']],
    dialogue: [['Where’s my pencil?', 'Где мой карандаш?'], ['It’s under the book.', 'Он под книгой.'], ['Put the ruler in the bag.', 'Положи линейку в сумку.']],
    questions: [['Как сказать «линейка»?', ['Book', 'Bag', 'Ruler'], 2], ['Как сказать «под книгой»?', ['Under the book', 'On the book', 'In the book'], 0], ['Карандаш в сумке. Что ты скажешь?', ['It’s on the bag.', 'It’s in the bag.', 'It’s under the bag.'], 1]],
    speak: 'Положи карандаш сначала на книгу, потом под книгу. Каждый раз спроси “Where’s my pencil?” и ответь.'
  },
  {
    id: 'unit-2', title: 'Happy birthday!', topic: 'Игрушки и любимая игрушка',
    words: [['ball','мяч'], ['bike','велосипед'], ['doll','кукла'], ['kite','воздушный змей'], ['teddy bear','плюшевый мишка'], ['train','поезд']],
    dialogue: [['Is it a kite?', 'Это воздушный змей?'], ['No, it isn’t. It’s a ball.', 'Нет. Это мяч.'], ['My favourite toy is a ball.', 'Моя любимая игрушка — мяч.']],
    questions: [['Как сказать «воздушный змей»?', ['Kite', 'Bike', 'Doll'], 0], ['Перед тобой мяч. “Is it a bike?”', ['Yes, it is.', 'No, it isn’t.', 'I’m seven.'], 1], ['Как сказать «Моя любимая игрушка — поезд»?', ['Is it a train?', 'It’s a bike.', 'My favourite toy is a train.'], 2]],
    speak: 'Спрячь игрушку за спиной. Пусть кто-нибудь угадает её вопросом “Is it a …?” Ответь и назови свою любимую игрушку.'
  },
  {
    id: 'unit-3', title: 'At the circus', topic: 'Части тела и описание внешности',
    words: [['nose','нос'], ['eyes','глаза'], ['ears','уши'], ['hair','волосы'], ['hands','кисти рук'], ['feet','ступни'], ['long','длинный'], ['short','короткий']],
    dialogue: [['I’ve got a red nose.', 'У меня красный нос.'], ['I’ve got big ears.', 'У меня большие уши.'], ['She’s got long hair.', 'У неё длинные волосы.']],
    questions: [['Как сказать «уши»?', ['Eyes', 'Ears', 'Hands'], 1], ['Что значит “long hair”?', ['Короткие волосы', 'Большие глаза', 'Длинные волосы'], 2], ['Как сказать «У меня большие глаза»?', ['I’ve got big eyes.', 'She’s got big eyes.', 'I’ve got big ears.'], 0]],
    speak: 'Нарисуй смешного клоуна. Представь, что ты этот клоун, и скажи две фразы о себе с “I’ve got …”.'
  },
  {
    id: 'unit-4', title: 'Fantastic food!', topic: 'Еда и вкусы',
    words: [['chicken','курица'], ['bread','хлеб'], ['cheese','сыр'], ['grapes','виноград'], ['apple','яблоко'], ['ice cream','мороженое']],
    dialogue: [['I like cheese.', 'Я люблю сыр.'], ['I don’t like grapes.', 'Я не люблю виноград.'], ['Do you like ice cream? Yes, I do!', 'Ты любишь мороженое? Да!']],
    questions: [['Как сказать «виноград»?', ['Bread', 'Cheese', 'Grapes'], 2], ['Как сказать «Я не люблю сыр»?', ['I don’t like cheese.', 'I like cheese.', 'Do you like cheese?'], 0], ['Как ответить «да» на “Do you like apples?”', ['Yes, it is.', 'Yes, I do.', 'No, I don’t.'], 1]],
    speak: 'Выбери один продукт, который любишь, и один, который не любишь. Расскажи о них. Спроси кого-нибудь “Do you like …?”'
  },
  {
    id: 'unit-5', title: 'Fun on the farm', topic: 'Ферма, животные и действия',
    words: [['cow','корова'], ['duck','утка'], ['sheep','овца'], ['horse','лошадь'], ['run','бегать'], ['swim','плавать'], ['fly','летать'], ['climb','лазать']],
    dialogue: [['Can you see a cow?', 'Ты видишь корову?'], ['Yes, I can.', 'Да, вижу.'], ['Ducks can swim. Horses can’t fly.', 'Утки умеют плавать. Лошади не умеют летать.']],
    questions: [['Как сказать «овца»?', ['Sheep', 'Horse', 'Cow'], 0], ['Что умеют делать утки?', ['Ducks can’t swim.', 'Ducks can climb trees.', 'Ducks can swim.'], 2], ['Как ответить «нет» на “Can you see a horse?”', ['No, it isn’t.', 'No, I can’t.', 'Yes, I can.'], 1]],
    speak: 'Изобрази животное с фермы. Назови его и скажи, что оно умеет и чего не умеет, используя “can” и “can’t”.'
  },
  {
    id: 'unit-6', title: 'A day in the park', topic: 'Парк и расположение предметов',
    words: [['swing','качели'], ['slide','горка'], ['tree','дерево'], ['bench','скамейка'], ['behind','позади'], ['next to','рядом с'], ['in front of','перед']],
    dialogue: [['Where’s Mia?', 'Где Мия?'], ['She’s on the swing.', 'Она на качелях.'], ['Where are Max and Sam? They’re behind the tree.', 'Где Макс и Сэм? Они за деревом.']],
    questions: [['Что значит “behind the tree”?', ['На дереве', 'За деревом', 'Перед деревом'], 1], ['Как сказать «горка»?', ['Swing', 'Tree', 'Slide'], 2], ['Что подходит к вопросу “Where are Max and Sam?”', ['They’re next to the bench.', 'She’s on the slide.', 'It’s a tree.'], 0]],
    speak: 'Нарисуй дерево, горку и двух детей. Попроси кого-нибудь спросить “Where are they?” Расскажи, где дети.'
  },
  {
    id: 'unit-7', title: 'Let’s explore my town!', topic: 'Город, транспорт и числа',
    words: [['zoo','зоопарк'], ['park','парк'], ['shop','магазин'], ['bus','автобус'], ['car','машина'], ['eleven','одиннадцать'], ['twelve','двенадцать'], ['twenty','двадцать']],
    dialogue: [['There’s a zoo.', 'Здесь есть зоопарк.'], ['There are two buses.', 'Здесь два автобуса.'], ['How many cars are there? There are eleven cars.', 'Сколько машин? Одиннадцать.']],
    questions: [['Как сказать «двенадцать»?', ['Twenty', 'Eleven', 'Twelve'], 2], ['Как сказать «Здесь два магазина»?', ['There are two shops.', 'There’s a shop.', 'There are two parks.'], 0], ['Что значит “How many cars are there?”', ['Где машины?', 'Сколько машин?', 'Это машина?'], 1]],
    speak: 'Нарисуй улицу с одним магазином и двумя автобусами. Опиши её с “There’s …” и “There are …”.'
  },
  {
    id: 'unit-8', title: 'Camping fun!', topic: 'Одежда и действия на природе',
    words: [['T-shirt','футболка'], ['shorts','шорты'], ['hat','шляпа'], ['boots','ботинки'], ['riding a horse','скачет на лошади'], ['walking','идёт пешком'], ['swimming','плывёт']],
    dialogue: [['What are you wearing?', 'Во что ты одет?'], ['I’m wearing a T-shirt and shorts.', 'На мне футболка и шорты.'], ['What’s she doing? She’s riding a horse.', 'Что она делает? Она едет верхом.']],
    questions: [['Как спросить, во что человек одет?', ['What are you wearing?', 'What’s your name?', 'Where’s my hat?'], 0], ['Что значит “I’m wearing boots”?', ['На мне шорты.', 'На мне ботинки.', 'Я иду пешком.'], 1], ['Девочка плывёт. Что ты скажешь?', ['She’s wearing shorts.', 'She’s walking.', 'She’s swimming.'], 2]],
    speak: 'Назови два предмета одежды, которые сейчас на тебе. Потом представь друга в походе и скажи, что он сейчас делает.'
  },
  {
    id: 'unit-9', title: 'Day and night', topic: 'Распорядок дня и приёмы пищи',
    words: [['get up','вставать'], ['wash my face','умываться'], ['have breakfast','завтракать'], ['have lunch','обедать'], ['have dinner','ужинать'], ['go to bed','ложиться спать'], ['in the morning','утром'], ['in the evening','вечером']],
    dialogue: [['I wash my face every day.', 'Я умываюсь каждый день.'], ['I have breakfast in the morning.', 'Я завтракаю утром.'], ['I have dinner in the evening.', 'Я ужинаю вечером.']],
    questions: [['Как сказать «ложиться спать»?', ['Get up', 'Go to bed', 'Have lunch'], 1], ['Как сказать «Я завтракаю утром»?', ['I have breakfast in the morning.', 'I have dinner in the evening.', 'I have breakfast in the evening.'], 0], ['Что значит “every day”?', ['Сегодня', 'Утром', 'Каждый день'], 2]],
    speak: 'Нарисуй три момента своего дня. Покажи рисунки по порядку и скажи по-английски, что ты делаешь.'
  }
];

const visuals = {
  starter: ['👋','🙋','1️⃣','2️⃣','3️⃣','🔴','🔵','🟢'],
  'unit-1': ['✏️','🖊️','📘','📏','🎒','📥','⬆️','⬇️'],
  'unit-2': ['⚽','🚲','🪆','🪁','🧸','🚂'],
  'unit-3': ['👃','👀','👂','💇','🙌','🦶','📏','🤏'],
  'unit-4': ['🍗','🍞','🧀','🍇','🍎','🍦'],
  'unit-5': ['🐄','🦆','🐑','🐎','🏃','🏊','🕊️','🧗'],
  'unit-6': ['🛝','🛝','🌳','🪑','↩️','↔️','➡️'],
  'unit-7': ['🦒','🏞️','🏪','🚌','🚗','🔢','🔢','🔢'],
  'unit-8': ['👕','🩳','👒','🥾','🏇','🚶','🏊'],
  'unit-9': ['⏰','🧼','🥣','🥪','🍽️','🛏️','🌅','🌇']
};

const numbers = {eleven: '11', twelve: '12', twenty: '20'};
const photos = {
  pencil: 'g-l9/img/pencil.png', pen: 'g-l9/img/pen.png', ruler: 'g-l9/img/ruler.png',
  bread: '/gmf2/home/u2-l1/img/bread.jpg', cheese: '/gmf3/home/u4-l1/img/cheese.jpg',
  apple: '/gmf3/home/u4-l5/img/fd_apples.jpg',
  'ice cream': '/gmf3/home/u4-l5/img/fd_icecream.jpg',
  horse: '/gmf2/home/u4-l4/img/ph_horse.jpg',
  shorts: '/gmf2/home/u4-l4/img/ph_shorts.jpg',
  swimming: '/gmf2/home/u1-l1/img/swimming.png',
  book: '../phonics/pics/w_book.jpg', bike: '../phonics/pics/w_bike.jpg',
  kite: '../phonics/pics/w_kite.jpg', train: '../phonics/pics/w_train.jpg',
  nose: '../phonics/pics/w_nose.jpg', feet: '../phonics/pics/w_feet.jpg',
  cow: '../phonics/pics/w_cow.jpg', sheep: '../phonics/pics/w_sheep.jpg',
  slide: '../phonics/pics/w_slide.jpg', tree: '../phonics/pics/w_tree.jpg',
  park: '../phonics/pics/w_park.jpg', shop: '../phonics/pics/w_shop.jpg',
  bus: '../phonics/pics/w_bus.jpg', car: '../phonics/pics/w_car.jpg',
  hat: '../phonics/pics/w_hat.jpg', boots: '../phonics/pics/w_boot.jpg',
  zoo: '../phonics/pics/w_zoo.jpg', 'go to bed': '../phonics/pics/w_bed.jpg',
  walking: '../phonics/pics/w_walk.jpg', red: '../phonics/pics/w_red.jpg',
  blue: '../phonics/pics/w_blue.jpg', green: '../phonics/pics/w_green.jpg',
  run: '/gmf2/home/u4-l4/img/k_run.jpg',
  climb: '/gmf2/home/u4-l4/img/k_climb.jpg',
  'have breakfast': '/gmf3/home/u4-test/img/t4_breakfast.jpg'
};

const songLines = [
  ['Hello, hello! My name is Sam.', 'Red and blue and green.', 'One, two, three. Count with me!', 'Goodbye, goodbye, my friend!'],
  ['Pencil, pencil, where are you?', 'On the book? Under the book?', 'Pencil, pencil, I can see.', 'In my bag! Here you are!'],
  ['A bike and a train, a kite and a ball.', 'Is it a doll? Is it a bear?', 'My favourite toy is a teddy bear.', 'Happy birthday, my friend!'],
  ['Touch your nose and touch your ears.', 'Open your eyes and clap your hands.', 'I’ve got big eyes and a little nose.', 'Now stand up and touch your toes!'],
  ['I like cheese and I like bread.', 'Do you like grapes? Yes, I do!', 'An apple for me, ice cream for you.', 'Do you like apples? Yes, I do!'],
  ['Can you see a duck? Yes, I can.', 'Ducks can swim and horses can run.', 'Can you see a sheep? Yes, I can.', 'Here on the farm we have some fun!'],
  ['Where are you? Where are you?', 'I’m on the swing, here in the park.', 'Behind the tree, by the slide.', 'Come and find me where I hide!'],
  ['There’s a zoo. There’s a shop.', 'There are two buses at the stop.', 'How many cars can you see?', 'One, two, three. Count with me!'],
  ['What are you wearing today?', 'I’m wearing boots and a hat.', 'What are you doing today?', 'I’m walking, walking all the way!'],
  ['I get up in the morning.', 'I have lunch in the day.', 'I have dinner in the evening.', 'Then I go to bed. Hooray!']
];

const bookPages = [4, 8, 18, 28, 40, 50, 60, 72, 82, 92];
