const units = [
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
    dialogue: [['What is it?', 'Что это?'], ['Is it a robot? No, it isn’t.', 'Это робот? Нет.'], ['Is it a scooter? Yes, it is.', 'Это самокат? Да.']],
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

// Core vocabulary from the Macmillan Level 1 wordlist.
const core = [
  [["balloon","воздушный шар","🎈"],["one","один","1️⃣"],["two","два","2️⃣"],["three","три","3️⃣"],["four","четыре","4️⃣"],["five","пять","5️⃣"],["six","шесть","6️⃣"],["seven","семь","7️⃣"],["eight","восемь","8️⃣"],["nine","девять","9️⃣"],["ten","десять","🔟"],["red","красный","🔴"],["blue","синий","🔵"],["yellow","жёлтый","🟡"],["green","зелёный","🟢"],["brown","коричневый","🟤"],["orange","оранжевый","🟠"],["pink","розовый","🩷"],["purple","фиолетовый","🟣"],["black","чёрный","⚫"],["white","белый","⚪"]],
  [["book","книга","📘"],["pen","ручка","🖊️"],["rubber","ластик","🧽"],["pencil","карандаш","✏️"],["ruler","линейка","📏"],["crayon","мелок","🖍️"],["sharpener","точилка","🔪"],["computer","компьютер","🖥️"],["school bag","школьный рюкзак","🎒"],["pencil case","пенал","👝"]],
  [["ball","мяч","⚽"],["train","поезд","🚂"],["car","машинка","🚗"],["doll","кукла","🪆"],["kite","воздушный змей","🪁"],["robot","робот","🤖"],["scooter","самокат","🛴"],["teddy","плюшевый мишка","🧸"],["dinosaur","динозавр","🦕"],["computer game","компьютерная игра","🎮"]],
  [["head","голова","🙂"],["legs","ноги","🦵"],["feet","ступни","🦶"],["toes","пальцы ног","👣"],["arms","руки","💪"],["ears","уши","👂"],["mouth","рот","👄"],["eyes","глаза","👀"],["nose","нос","👃"],["fingers","пальцы рук","✋"]],
  [["eggs","яйца","🥚"],["meat","мясо","🥩"],["fish","рыба","🐟"],["chips","картошка фри","🍟"],["rice","рис","🍚"],["fruit","фрукты","🍎"],["cake","торт","🎂"],["salad","салат","🥗"],["chicken","куриное мясо","🍗"],["ice cream","мороженое","🍦"]],
  [["cat","кошка","🐈"],["cow","корова","🐄"],["bird","птица","🐦"],["frog","лягушка","🐸"],["goat","коза","🐐"],["horse","лошадь","🐎"],["sheep","овца","🐑"],["duck","утка","🦆"],["mouse","мышь","🐁"],["chicken","курица","🐔"]],
  [["swing","качели","🛝"],["slide","горка","🛝"],["seesaw","качели-балансир","⚖️"],["roundabout","карусель","🎠"],["climbing frame","лазалка","🪜"],["grass","трава","🌱"],["flower","цветок","🌼"],["tree","дерево","🌳"],["bush","куст","🌿"],["rock","камень","🪨"]],
  [["zoo","зоопарк","🦒"],["sweetshop","кондитерская","🍬"],["café","кафе","☕"],["toyshop","магазин игрушек","🧸"],["bookshop","книжный магазин","📚"],["hospital","больница","🏥"],["restaurant","ресторан","🍽️"],["cinema","кинотеатр","🎬"],["swimming pool","бассейн","🏊"],["supermarket","супермаркет","🛒"]],
  [["sweater","свитер","🧶"],["shoes","туфли","👞"],["T-shirt","футболка","👕"],["skirt","юбка","👗"],["sun hat","панама от солнца","👒"],["trainers","кроссовки","👟"],["shirt","рубашка","🎽"],["swimsuit","купальник","🩱"],["shorts","шорты","🩳"],["trousers","брюки","👖"]],
  [["get up","вставать с кровати","⏰"],["wash my face","умывать лицо","🧼"],["brush my teeth","чистить зубы","🪥"],["comb my hair","причёсываться","🪮"],["have a shower","принимать душ","🚿"],["get dressed","одеваться","👕"],["make my bed","заправлять кровать","🛏️"],["go to school","идти в школу","🏫"],["go to bed","ложиться спать","🌙"],["sleep","спать","😴"]]
];

const numbers = {eleven: '11', twelve: '12', twenty: '20'};
const photos = {
  pencil: 'g-l9/img/pencil.png', pen: 'g-l9/img/pen.png', ruler: 'g-l9/img/ruler.png',
  bread: '/gmf2/home/u2-l1/img/bread.jpg', cheese: '/gmf3/home/u4-l1/img/cheese.jpg',
  apple: '/gmf3/home/u4-l5/img/fd_apples.jpg',
  'ice cream': '/gmf3/home/u4-l5/img/fd_icecream.jpg',
  horse: '/gmf2/home/u4-l4/img/ph_horse.jpg',
  shorts: '/gmf2/home/u4-l4/img/ph_shorts.jpg',
  swimming: '/gmf2/home/u1-l1/img/swimming.png',
  rubber: 'g-l10/img/eraser.png', sharpener: 'g-l10/img/sharpener.png',
  'pencil case': 'g-l9/img/pencilcase.png', robot: '../phonics/pics/w_toy.jpg',
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

const bookPages = [4, 8, 18, 28, 40, 50, 60, 72, 82, 92];

const starterExtra = [
  [['hello','привет','👋'], ['goodbye','до свидания','🙋']],
  [['circle','круг','⚪'], ['square','квадрат','🟥'], ['triangle','треугольник','🔺'], ['rectangle','прямоугольник','▰']],
  [['Monday','понедельник','1️⃣'], ['Tuesday','вторник','2️⃣'], ['Wednesday','среда','3️⃣'], ['Thursday','четверг','4️⃣'], ['Friday','пятница','5️⃣'], ['Saturday','суббота','6️⃣'], ['Sunday','воскресенье','7️⃣']]
];

const secondVocabulary = [
  [['desk','парта','🪑'],['shelf','полка','📚'],['chair','стул','🪑'],['box','коробка','📦'],['in','в','📥'],['on','на','⬆️'],['under','под','⬇️']],
  [['big','большой','🐘'],['small','маленький','🐭'],['fast','быстрый','🏎️'],['slow','медленный','🐌'],['new','новый','✨'],['old','старый','⌛']],
  [['long hair','длинные волосы','👩'],['short hair','короткие волосы','👦'],['curly hair','кудрявые волосы','👩‍🦱'],['straight hair','прямые волосы','👩‍🦰'],['blue eyes','голубые глаза','🔵'],['brown eyes','карие глаза','🟤']],
  [['apple','яблоко','🍎'],['banana','банан','🍌'],['pear','груша','🍐'],['orange','апельсин','🍊'],['grapes','виноград','🍇'],['strawberry','клубника','🍓']],
  [['run','бегать','🏃'],['jump','прыгать','🤾'],['swim','плавать','🏊'],['fly','летать','🕊️'],['climb','лазать','🧗'],['walk','ходить','🚶']],
  [['in','в','📥'],['on','на','⬆️'],['under','под','⬇️'],['behind','за','↩️'],['next to','рядом','↔️'],['in front of','перед','➡️']],
  [['car','машина','🚗'],['bus','автобус','🚌'],['bike','велосипед','🚲'],['train','поезд','🚂'],['eleven','одиннадцать','🔢'],['twelve','двенадцать','🔢'],['twenty','двадцать','🔢']],
  [['riding a horse','едет верхом','🏇'],['walking','идёт пешком','🚶'],['swimming','плывёт','🏊'],['fishing','ловит рыбу','🎣'],['climbing','карабкается','🧗'],['running','бежит','🏃']],
  [['have breakfast','завтракать','🥣'],['have lunch','обедать','🥪'],['have dinner','ужинать','🍽️'],['in the morning','утром','🌅'],['in the afternoon','днём','☀️'],['in the evening','вечером','🌇']]
];

// The reading activities below use original short texts for the home version.
const extension = [
  ['Where’s my pencil?', 'A tidy classroom', 'Put it on the shelf', 'School assemblies', 'r', ['red','ruler','rabbit'],
    ['Ada cannot find her ruler.', 'It is under her book.', 'She puts her ruler in her school bag.'],
    'Где лежала линейка?', ['Под книгой','В пенале','На полке'], 'Сделай плакат для класса: нарисуй, где лежат карандаш, книга и линейка. Подпиши картинки.'],
  ['Is it a robot?', 'A present for Sam', 'My favourite toy', 'Birthday parties', 's', ['six','snake','scooter'],
    ['Sam opens a blue box.', 'There is a robot inside.', 'The robot is small and fast.'],
    'Что Сэм нашёл в коробке?', ['Робота','Самокат','Динозавра'], 'Сделай открытку: напиши пожелание на английском и нарисуй подарок.'],
  ['I’ve got big eyes', 'Circus day', 'She’s got long hair', 'Circus Day', 'h', ['hat','head','happy'],
    ['Mia puts on a red nose.', 'Her friend has got curly hair.', 'They wave their arms in the circus.'],
    'Что Мия надела?', ['Красный нос','Жёлтую шляпу','Синие очки'], 'Придумай рифмовку с движениями для трёх частей тела и покажи её дома.'],
  ['Do you like fish?', 'Lunch for two', 'Do you like fruit?', 'An English breakfast', 'j', ['jam','juice','jelly'],
    ['Alex has rice and chicken for lunch.', 'Mia has salad and an apple.', 'They both like ice cream.'],
    'Что любят оба ребёнка?', ['Мороженое','Рис','Салат'], 'Напиши своё меню из трёх блюд. Спроси у кого-нибудь, какие из них нравятся.'],
  ['Can you see a cow?', 'A visitor on the farm', 'Birds can fly', 'Urban farms', 'sh', ['sheep','shop','shoes'],
    ['A duck swims in the pond.', 'A goat climbs on a rock.', 'A small mouse runs under the gate.'],
    'Кто плавает в пруду?', ['Утка','Коза','Мышь'], 'Составь загадку о животном: скажи, что оно умеет, а собеседник пусть угадает.'],
  ['Where’s Mia?', 'Hide and seek', 'They’re behind the tree', 'Parks in Britain', 'w', ['walk','window','water'],
    ['Max is on the swing.', 'Mia is behind a tree.', 'Their friends are next to the slide.'],
    'Где Мия?', ['За деревом','На качелях','Рядом с горкой'], 'Нарисуй безопасную площадку. Покажи другу, где нельзя стоять, когда кто-то качается.'],
  ['There’s a zoo', 'A map for Leo', 'How many buses?', 'Cycling in Britain', 'z', ['zoo','zebra','zip'],
    ['Leo looks at a town map.', 'There is a bookshop next to the cinema.', 'There are two buses near the supermarket.'],
    'Что находится рядом с кинотеатром?', ['Книжный магазин','Больница','Зоопарк'], 'Нарисуй маршрут до трёх мест на карте города и опиши их по-английски.'],
  ['What are you wearing?', 'A morning at camp', 'What’s she doing?', 'Camping in the garden', 'v', ['van','vet','vest'],
    ['Mia is wearing a sun hat and shorts.', 'She is riding a horse.', 'Max is wearing trainers. He is walking to the lake.'],
    'Что делает Мия?', ['Едет верхом','Плывёт','Идёт к озеру'], 'Напиши маленькую открытку из похода: что на тебе и чем ты занимаешься.'],
  ['I get up every day', 'Mia’s busy morning', 'Dinner in the evening', 'The Tooth Fairy', 'th', ['three','thin','bath'],
    ['Mia gets up early.', 'She brushes her teeth and makes her bed.', 'Then she goes to school.'],
    'Куда Мия идёт после утренних дел?', ['В школу','В парк','В магазин'], 'Напиши три строки о своём дне: утром, днём и вечером.']
];

const cultureReadings = [
  ['In some schools in Britain, classes meet in a hall.', 'They listen to school news or sing together.'],
  ['At some birthday parties in Britain, children play party games.', 'The birthday child may blow out candles on a cake.'],
  ['Circus performers practise to keep their balance.', 'They use their arms and legs to move safely.'],
  ['A cooked English breakfast can have eggs, beans and toast.', 'Breakfast is usually the first meal of the day.'],
  ['Some cities have farms that people can visit.', 'Visitors may see goats, sheep and chickens.'],
  ['Some parks in Britain have swings and slides.', 'Wait until the person in front of you has left the slide.'],
  ['Some towns in Britain have routes for cyclists.', 'Look and listen before you cross a road.'],
  ['You can camp in a garden as well as at a campsite.', 'At night, a torch helps you find your way.'],
  ['In one tradition, a child puts a lost tooth under a pillow.', 'In the story, the Tooth Fairy comes during the night.']
];

const publisher = 'https://www.macmillaneducationeverywhere.com/';
const audioSamples = 'https://www.macmillanenglish.com/us/catalogue/courses/young-learners/give-me-five/levels-samples-5';
const unit2Sample = 'https://www.macmillan.pl/data/products/levels/materials/1597276456_GM5_Basics_1_TB_Unit_2.pdf';
const wellDoneAudio = 'https://www.macmillanenglish.com/api/fileadmin/user_upload/Catalogue/Samples/Give_Me_Five/Give%20Me%20Five%20Level%201%20Well%20Done%20Song%281%29.mp3';
const trackNotes = {1:'CD 1 · трек 10 (песня), 12 (чант)', 2:'CD 1 · трек 28 (песня), 30 (чант)'};

function vocabularyQuestions(words) {
  return words.map(([english, russian], index) => {
    const distractors = [words[(index + 1) % words.length][0], words[(index + 2) % words.length][0]];
    distractors.splice(index % 3, 0, english);
    return ['Как сказать «' + russian + '»?', distractors, index % 3];
  });
}

const lessonGroups = units.map((unit, index) => {
  const page = bookPages[index];
  const common = {...unit, unit: index};
  const item = (number, title, topic, words, type, offset, extra = {}) => ({
    ...common, id: number === 1 ? unit.id : unit.id + '-' + number, number, title, topic, words, type,
    page: typeof offset === 'number' ? page + offset : offset, ...extra
  });
  if (!index) return [
    item(1, unit.title, 'Приветствие и цвета', [core[0][0], ...core[0].slice(11), ...starterExtra[0]], 'starter', 0),
    item(2, 'Count and find', 'Числа от 1 до 10 и фигуры', [...core[0].slice(1,11), ...starterExtra[1]], 'starter', 1, {
      dialogue:[['How many circles?', 'Сколько кругов?'], ['Three circles.', 'Три круга.']],
      questions:vocabularyQuestions(starterExtra[1]), speak:'Нарисуй кружки и треугольники. Сосчитай их по-английски.'
    }),
    item(3, 'What day is it today?', 'Дни недели', starterExtra[2], 'starter', '6–7', {
      dialogue:[['What day is it today?', 'Какой сегодня день?'], ['It’s Monday.', 'Сегодня понедельник.']],
      questions:vocabularyQuestions(starterExtra[2].slice(0,4)), speak:'Назови сегодняшний и завтрашний день по-английски.'
    })
  ];
  const [grammarTitle, storyTitle, extensionTitle, culture, sound, phonics, story, question, options, task] = extension[index-1];
  const keyWords = core[index];
  const extraWords = secondVocabulary[index-1];
  const review = [...keyWords, ...extraWords.filter(([word]) => !keyWords.some(([known]) => known === word))];
  return [
    item(1, unit.title, '10 слов · чант · песня · игры', keyWords, 'vocabulary', 0),
    item(2, grammarTitle, 'Диалог · вопросы и ответы', keyWords, 'grammar', 1),
    item(3, storyTitle, 'Короткая история · чтение · порядок событий', keyWords, 'story', (page+2) + '–' + (page+3), {
      story, questions:[[question,options,0]], speak:'Перескажи историю по трём подсказкам. Затем прочитай её вслух по ролям.'
    }),
    item(4, extensionTitle, 'Новые слова · фразы · говорение', extraWords, 'extension', (page+4) + '–' + (page+5), {
      questions:vocabularyQuestions(extraWords), speak:task
    }),
    item(5, culture + ' · /' + sound + '/', 'Культура · звуки · творческое задание', phonics.map(word => [word, '', '']), 'phonics', (page+6) + '–' + (page+7), {
      story:cultureReadings[index-1], speak:task
    }),
    item(6, 'Review · Well done!', 'Повторение · письмо · самооценка', review, 'review', (page+8) + '–' + (page+9), {
      questions:[...unit.questions,...vocabularyQuestions(extraWords.slice(0,3))]
    }),
    item('test', 'Unit ' + index + ' Test', 'Аудирование · лексика · письмо с автопроверкой', review, 'test', (page+8) + '–' + (page+9), {
      questions:[...unit.questions,...vocabularyQuestions(keyWords.slice(0,6))]
    })
  ];
});
const lessons = lessonGroups.flat();
