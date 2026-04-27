/* ============ КАТАЛОГ: КУРС → СЕМЕСТР → ПРЕДМЕТЫ ============ */
/* Для каждого предмета можно указать quizId, который ссылается на набор вопросов в QUIZZES */

const CATALOG = {
  "1 курс": {
    "1 семестр": [
      { name: "Линейная Алгебра, Calculus (Практика)", teacher: "Ахат Азаматов", phone: "+998 97 333 84 69", quizId: "y1s1_linear_algebra_calculus_practice" },
      { name: "Calculus (Теория)", teacher: "Обит", phone: "", quizId: "y1s1_calculus_theory" },
      { name: "Философия", teacher: "Ольга Ивановна", phone: "+998 90 989 92 02", quizId: "y1s1_philosophy" },
      { name: "История", teacher: "Гулчехра Абдурахмоновна", phone: "+998 90 930 47 70", quizId: "y1s1_history" },
      { name: "Программирование (1 семестр)", teacher: "Anvar Abbasovich", phone: "+998 90 977 00 05", quizId: "y1s1_programming_1" },
      { name: "Физика (1 семестр)", teacher: "Axmedjonov Nodirbek", phone: "+998 99 554 84 40 (@Nodirbek8440)", quizId: "y1s1_physics_1" },
    ],
    "2 семестр": [
      { name: "Программирование (2 семестр)", teacher: "Anvar Abbasovich", phone: "+998 90 977 00 05", quizId: "y1s2_programming_2" },
      { name: "Английский язык", teacher: "Dilnoza Xalikova", phone: "+998 94 071 22 01", quizId: "y1s2_english" },
      { name: "Узбекский язык", teacher: "Nazokat Jurayeva", phone: "+998 97 133 66 75", quizId: "y1s2_uzbek" },
      { name: "Дифференциальные уравнения", teacher: "Гулнора Ғойибназарова", phone: "", quizId: "y1s2_differential_equations" },
      { name: "Религоведение", teacher: "Зарина Абдуазимова", phone: "+998 90 960 32 70", quizId: "y1s2_religious_studies" },
      { name: "Физика (2 семестр)", teacher: "Axmedjonov Nodirbek", phone: "+998 99 554 84 40 (@Nodirbek8440)", quizId: "y1s2_physics_2" },
    ],
  },
  "2 курс": {
    "3 семестр": [
      { name: "Структуры данных и алгоритмы", teacher: "Жалолидин", phone: "+998 99 850 15 51 (@Ijaloliddin)", quizId: "y2s1_dsa" },
      { name: "Базы данных", teacher: "Хуршида Бахриева", phone: "(@Adisha422)", quizId: "y2s1_databases" },
      { name: "Организация компьютера", teacher: "Хуршида Бахриева", phone: "(@Adisha422)", quizId: "y2s1_computer_organization" },
      { name: "Электроника и схемотехника", teacher: "Жасур Джалилов", phone: "+998 90 190 27 23 (@Dj2723)", quizId: "y2s1_electronics_circuitry" },
      { name: "Кибербезопасность", teacher: "Даулетмурат Жаксимов", phone: "+998 93 552 86 22 (@jaksimovich)", quizId: "y2s1_cybersecurity" },
    ],
    "4 семестр": [
      { name: "Структуры данных и алгоритмы", teacher: "Жалолидин", phone: "+998 99 850 15 51 (@Ijaloliddin)", quizId: "y2s2_dsa" },
      { name: "Компьютерные сети", teacher: "Хуршида Бахриева", phone: "(@Adisha422)", quizId: "y2s2_computer_networks" },
      { name: "Web-программирование", teacher: "Хуршида Бахриева", phone: "(@Adisha422)", quizId: "y2s2_web_programming" },
      { name: "Введение в программную инженерию", teacher: "Мухаммадали Бахромов", phone: "(@bahramovBME)", quizId: "y2s2_software_engineering_intro" },
      { name: "Вероятность и статистика", teacher: "Рахим Шамсиев", phone: "(@Rahim1961)", quizId: "y2s2_probability_statistics" },
    ],
  },
  "3 курс": {
    "5 семестр": [
      { name: "QA-тестирования", teacher: "Аскар Мукимов", phone: "(@Marquicks)", quizId: "y3s1_qa_testing" },
      { name: "Операционные системы", teacher: "Хуршида Бахриева", phone: "+998 90 926 92 92 +998 99 055 31 31 +998 90 809 19 85 (@Adisha422)", quizId: "y3s1_operating_systems" },
      { name: "Создания программы на С++", teacher: "Аскар Мукимов", phone: "(@Marquicks)", quizId: "y3s1_cplusplus_app_dev" },
      { name: "Создание web-приложения", teacher: "Мухаммадали Бахромов", phone: "(@bahramovBME)", quizId: "y3s1_web_app_creation" },
      { name: "Виды программирования и парадигмы", teacher: "Мухаммадали Бахромов", phone: "(@bahramovBME)", quizId: "y3s1_programming_paradigms" },
    ],
    "6 семестр": [
      { name: "Обеспечение качества программного обеспечения", teacher: "Хуршида Бахриева", phone: " +998 90 926 92 92 +998 99 055 31 31 +998 90 809 19 85(@Adisha422)", quizId: "y2s2_software_quality_assurance" },
      { name: "Cистематический анализ", teacher: "Хуршида Бахриева", phone: " +998 90 926 92 92 +998 99 055 31 31 +998 90 809 19 85(@Adisha422)", quizId: "y2s1_system_analysis" },
      { name: "Интеллектуальные средства обработки данных", teacher: "Хуршида Бахриева", phone: " +998 90 926 92 92 +998 99 055 31 31 +998 90 809 19 85(@Adisha422)", quizId: "y3s1_intelligent_data_processing" },
      { name: "Разработка мобильных приложений (Практика)", teacher: "Аскар Мукимов", phone: "(@Marquicks)", quizId: "" },
      { name: "Разработка мобильных приложений (Лекция)", teacher: "Anvar Abbasovich", phone: "+998 90 977 00 05", quizId: "" },
    ],
  },
};

/************* РЕЕСТР ТЕСТОВ *************/
const QUIZZES = (() => {
  const bank = (typeof window !== 'undefined' && window.quizSets) ? window.quizSets : {};
  // legacy aliases на старый question.js
  if (!bank.calculusTheory && typeof quiz !== 'undefined') {
    bank.calculusTheory = Array.isArray(quiz) ? quiz : [];
  }
  if (!bank.y1s1_calculus_theory && typeof quiz !== 'undefined') {
    bank.y1s1_calculus_theory = Array.isArray(quiz) ? quiz : [];
  }
  return bank;
})();

/************* ЭЛЕМЕНТЫ ЭКРАНОВ *************/
const scrLogin  = document.getElementById('screen-login');
const scrYears  = document.getElementById('screen-years');
const scrSems   = document.getElementById('screen-sems');
const scrSubj   = document.getElementById('screen-subjects');
const scrHome   = document.getElementById('screen-home');
const scrQuiz   = document.getElementById('screen-quiz');
const scrRes    = document.getElementById('screen-result');
const scrAdmin  = document.getElementById('screen-admin');

/* 👇 ДОБАВЬ ЭТО */
const scrSchedule   = document.getElementById('screen-schedule');
const scheduleTable = document.getElementById('schedule-table');

function show(el){
  /* 👇 ДОБАВЬ scrSchedule в список */
  [scrLogin,scrYears,scrSems,scrSubj,scrHome,scrQuiz,scrRes,scrAdmin,scrSchedule]
    .forEach(s=>s?.classList.add('hide'));
  el?.classList.remove('hide');
}

/************* ХЛЕБНЫЕ КРОШКИ *************/
const crumbsSems = document.getElementById('crumbs-sems');
const crumbsSubj = document.getElementById('crumbs-subj');
const crumbsHome = document.getElementById('crumbs-home');

/************* ТОПБАР *************/
const userbox = document.getElementById('userbox');
const userLabel = document.getElementById('user-label');
const btnAdmin = document.getElementById('btn-admin');

/************* АУТЕНТИФИКАЦИЯ (localStorage) *************/
const LS_PREFIX  = 'QUIZ_APP_V1';
const LS_USERS   = `${LS_PREFIX}:USERS`;
const LS_SESSION = `${LS_PREFIX}:SESSION`;

function seedDefaultUsers(){
  try{
    if (!localStorage.getItem(LS_USERS)){
      const defaults = [
        { username:'admin',   password:'admin123', role:'admin' },

        // 15 userov (password = username)
        { username:'azizbek', password:'azizbek', role:'user' },
        { username:'sabit',   password:'sabit',   role:'user' },
        { username:'joxongir',password:'joxongir',role:'user' },
        { username:'shahzod', password:'shahzod', role:'user' },
        { username:'yusuf',   password:'yusuf',   role:'user' },
        { username:'shohruh', password:'shohruh', role:'user' },
        { username:'azamat1', password:'azamat1', role:'user' },
        { username:'dilibek', password:'dilibek', role:'user' },
        { username:'javoh',   password:'javoh',   role:'user' },
        { username:'bekzod',  password:'bekzod',  role:'user' },
        { username:'abu',     password:'abu',     role:'user' },
        { username:'bekhruz', password:'bekhruz', role:'user' },
        { username:'aziz',    password:'aziz',    role:'user' },
        { username:'rinat',   password:'rinat',   role:'user' },
        { username:'azamat2', password:'azamat2', role:'user' },
      ];
      localStorage.setItem(LS_USERS, JSON.stringify(defaults));
    }
  }catch(e){ console.error('seedDefaultUsers error', e); }
}
function getUsers(){
  try{ return JSON.parse(localStorage.getItem(LS_USERS)) || []; }catch{ return []; }
}
function setUsers(arr){
  localStorage.setItem(LS_USERS, JSON.stringify(Array.isArray(arr)?arr:[]));
}
function setSession(obj){
  localStorage.setItem(LS_SESSION, JSON.stringify(obj || null));
}
function getSession(){
  try{ return JSON.parse(localStorage.getItem(LS_SESSION)) || null; }catch{ return null; }
}
function clearSession(){ localStorage.removeItem(LS_SESSION); }

function norm(s){ return (s||'').trim().toLowerCase(); }

function login(){
  const u = document.getElementById('login-username')?.value ?? '';
  const p = document.getElementById('login-password')?.value ?? '';
  const err = document.getElementById('login-error'); if (err) err.textContent='';

  const users = getUsers();
  const found = users.find(x => norm(x.username) === norm(u) && x.password === p.trim());

  if (!found){
    if (err) err.textContent='Неверный логин или пароль';
    return;
  }
  setSession({username:found.username, role:found.role});
  afterLogin();
}

function afterLogin(){
  const sess = getSession();
  if (!sess){ show(scrLogin); return; }
  if (userLabel) userLabel.textContent = `${sess.username} (${sess.role})`;
  userbox?.classList.remove('hide');
  if (btnAdmin) btnAdmin.style.display = (sess.role==='admin') ? 'inline-flex' : 'none';
  renderYears();
  show(scrYears);
}

function logout(){
  clearSession();
  userbox?.classList.add('hide');
  const u = document.getElementById('login-username');
  const p = document.getElementById('login-password');
  if (u) u.value=''; if (p) p.value='';
  show(scrLogin);
}

/************* АДМИН ПАНЕЛЬ *************/
const usersTable = document.getElementById('users-table');
const adminMsg = document.getElementById('admin-msg');

function openAdmin(){
  const sess = getSession();
  if (!sess || sess.role!=='admin'){ alert('Доступ только администратору.'); return; }
  renderUsersTable();
  show(scrAdmin);
}
function closeAdmin(){
  renderYears();
  show(scrYears);
}
function renderUsersTable(){
  const users = getUsers();
  if (!usersTable) return;
  usersTable.innerHTML = '';
  const head = document.createElement('div');
  head.className='thead';
  head.innerHTML = `
    <div class="cell">Логин</div>
    <div class="cell">Роль</div>
    <div class="cell">Пароль</div>
    <div class="cell">Действия</div>
    <div class="cell"> </div>
  `;
  usersTable.appendChild(head);

  users.forEach((u)=>{
    const row=document.createElement('div');
    row.className='row';
    row.innerHTML = `
      <div class="cell"><strong>${u.username}</strong></div>
      <div class="cell">${u.role}</div>
      <div class="cell"><code>${u.password}</code></div>
      <div class="cell">
        <button class="btn ghost sm" onclick="adminMakeAdmin('${u.username}')">Сделать admin</button>
        <button class="btn ghost sm" onclick="adminMakeUser('${u.username}')">Сделать user</button>
      </div>
      <div class="cell">
        <button class="btn sm" onclick="adminResetPassword('${u.username}')">Сброс пароля</button>
        <button class="btn sm" style="background:#ef4444" onclick="adminDeleteUser('${u.username}')">Удалить</button>
      </div>
    `;
    usersTable.appendChild(row);
  });
}
function adminAddUser(){
  const username = document.getElementById('new-username')?.value.trim();
  const password = document.getElementById('new-password')?.value ?? '';
  const role = document.getElementById('new-role')?.value ?? 'user';
  if (adminMsg) adminMsg.textContent='';

  if (!username || !password){ if (adminMsg) adminMsg.textContent='Заполни логин и пароль.'; return; }
  const users = getUsers();
  if (users.find(u=>norm(u.username)===norm(username))){ if (adminMsg) adminMsg.textContent='Такой логин уже существует.'; return; }
  users.push({username, password, role});
  setUsers(users);
  const nu = document.getElementById('new-username');
  const np = document.getElementById('new-password');
  if (nu) nu.value=''; if (np) np.value='';
  renderUsersTable();
  if (adminMsg) adminMsg.textContent='Пользователь добавлен.';
}
function adminDeleteUser(username){
  const sess = getSession();
  if (sess && norm(sess.username)===norm(username)){ alert('Нельзя удалить себя во время сессии. Выйди и удаляй.'); return; }
  const users = getUsers().filter(u=>norm(u.username)!==norm(username));
  setUsers(users);
  renderUsersTable();
}
function adminResetPassword(username){
  const newp = prompt(`Новый пароль для ${username}:`, '123456');
  if (newp===null) return;
  const users = getUsers();
  const u = users.find(x=>norm(x.username)===norm(username));
  if (u){ u.password = newp; setUsers(users); renderUsersTable(); }
}
function adminMakeAdmin(username){
  const users = getUsers(); const u=users.find(x=>norm(x.username)===norm(username));
  if (u){ u.role='admin'; setUsers(users); renderUsersTable(); }
}
function adminMakeUser(username){
  const users = getUsers(); const u=users.find(x=>norm(x.username)===norm(username));
  if (u){ u.role='user'; setUsers(users); renderUsersTable(); }
}
function adminResetDefaults(){
  if (!confirm('Сбросить пользователей к дефолту? (оставит admin/admin123 и 15 юзеров)')) return;
  localStorage.removeItem(LS_USERS);
  seedDefaultUsers();
  renderUsersTable();
  alert('Список пользователей перезаписан дефолтным набором.');
}

/************* НАВИГАЦИЯ КУРС→СЕМЕСТР→ПРЕДМЕТ *************/
const yearsList = document.getElementById('years-list');
let state = { year:null, sem:null, subject:null, quizId:null };

function renderYears(){
  if (!yearsList) return;
  yearsList.innerHTML = '';
  Object.keys(CATALOG).forEach(year=>{
    const card=document.createElement('div');
    card.className='card';
    card.innerHTML=`<h4>${year}</h4><small>${Object.keys(CATALOG[year]).length} семестра(ов)</small>`;
    card.onclick=()=>selectYear(year);
    yearsList.appendChild(card);
  });
}
function selectYear(year){
  state = {year, sem:null, subject:null, quizId:null};
  const semsList = document.getElementById('sems-list');
  if (!semsList) return;
  semsList.innerHTML='';
  Object.keys(CATALOG[year]).forEach(sem=>{
    const card=document.createElement('div');
    card.className='card';
    card.innerHTML=`<h4>${sem}</h4><small>${CATALOG[year][sem].length} предмет(ов)</small>`;
    card.onclick=()=>selectSem(sem);
    semsList.appendChild(card);
  });
  if (crumbsSems) crumbsSems.textContent = `${year}`;
  show(scrSems);
}
function goBackToYears(){ show(scrYears); }

const subjectsList = document.getElementById('subjects-list');
function selectSem(sem){
  state.sem = sem; state.subject=null; state.quizId=null;
  if (!subjectsList) return;
  subjectsList.innerHTML='';
  CATALOG[state.year][state.sem].forEach((s,idx)=>{
    const hasQuiz = !!s.quizId && !!QUIZZES[s.quizId] && Array.isArray(QUIZZES[s.quizId]);
    const count = hasQuiz ? QUIZZES[s.quizId].length : 0;
    const card=document.createElement('div');
    card.className='card';
    card.innerHTML=`
      <h4>${idx+1}. ${s.name}</h4>
      ${s.teacher ? `<small>Преподаватель: ${s.teacher}${s.phone?` — ${s.phone}`:''}</small>`:''}
      <div style="margin-top:8px"><small>${hasQuiz?`Вопросов: ${count}`:`Тест пока не добавлен`}</small></div>
    `;
    card.onclick=()=>openSubject(s);
    subjectsList.appendChild(card);
  });
  if (crumbsSubj) crumbsSubj.textContent = `${state.year} › ${state.sem}`;
  show(scrSubj);
}
function goBackToSems(){ selectYear(state.year); }

function goBackToSubjects(){ show(scrSubj); }

const homeTitle = document.getElementById('home-title');
const homeTotal = document.querySelector('#screen-home .total-question');
const subjectMeta = document.getElementById('subject-meta');

function openSubject(s){
  state.subject = s.name;
  state.quizId  = s.quizId || null;
  if (crumbsHome) crumbsHome.textContent = `${state.year} › ${state.sem} › ${state.subject}`;
  if (homeTitle) homeTitle.textContent = state.subject;
  const hasQuiz = !!state.quizId && !!QUIZZES[state.quizId] && Array.isArray(QUIZZES[state.quizId]);
  const total = hasQuiz ? QUIZZES[state.quizId].length : 0;
  if (homeTotal) homeTotal.textContent = total;
  if (subjectMeta) subjectMeta.textContent = s.teacher ? `Преподаватель: ${s.teacher}${s.phone?` — ${s.phone}`:''}` : '';
  show(scrHome);
}

/************* ВИКТОРИНА *************/
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");

/* 👇 КНОПКА NEXT (нужен id="btn-next" в HTML) */
const btnNext = document.getElementById('btn-next');

/* 👇 ФЛАГ: ответил ли на текущий вопрос */
let answeredCurrent = false;

let questionLimit = 0;
let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;

function setNextEnabled(on){
  if (!btnNext) return;
  btnNext.disabled = !on;
  btnNext.classList.toggle('disabled', !on);
}

function normalizeOption(opt){
  if (typeof opt === 'string') return { text: opt, img: null };
  if (opt && typeof opt === 'object') {
    return { text: opt.text ?? '', img: opt.img ?? null };
  }
  return { text: String(opt ?? ''), img: null };
}

function setAvailableQuestions() {
  availableQuestions = [];
  const src = (state.quizId && Array.isArray(QUIZZES[state.quizId])) ? QUIZZES[state.quizId] : [];
  questionLimit = src.length;
  for (let i = 0; i < questionLimit; i++) availableQuestions.push(src[i]);
}

function getNewQuestion() {
  if (!questionText || !optionContainer || !answersIndicatorContainer) return;
  if (questionCounter >= questionLimit) { quizOver(); return; }

  // 👇 На новом вопросе Next блокируем
  answeredCurrent = false;
  setNextEnabled(false);

  questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + questionLimit;

  const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  currentQuestion = questionIndex;

  questionText.innerHTML = '';
  const questionTextElement = document.createElement('div');
  questionTextElement.innerHTML = currentQuestion.q || '';
  questionText.appendChild(questionTextElement);

  if (currentQuestion.img) {
    const img=document.createElement('img');
    img.src=currentQuestion.img;
    img.alt='question image';
    questionText.appendChild(img);
  }

  const idx = availableQuestions.indexOf(questionIndex);
  if (idx >= 0) availableQuestions.splice(idx,1);

  const rawOptions = Array.isArray(currentQuestion.options) ? currentQuestion.options : [];
  const options = rawOptions.map(normalizeOption);

  availableOptions = [];
  const optionLen = options.length;
  for (let i = 0; i < optionLen; i++) availableOptions.push(i);

  optionContainer.innerHTML='';
  let delay=0.12;
  for (let i = 0; i < optionLen; i++){
    const optIndex = availableOptions[Math.floor(Math.random()*availableOptions.length)];
    const idx2 = availableOptions.indexOf(optIndex);
    availableOptions.splice(idx2,1);

    const option = document.createElement('div');
    option.className='option';
    option.id = optIndex;
    option.style.animationDelay = delay+'s';
    delay += 0.12;

    option.innerHTML = options[optIndex].text || '';

    if (options[optIndex].img){
      const im = document.createElement('img');
      im.src = options[optIndex].img;
      im.alt = 'option image';
      option.appendChild(im);
    }

    option.onclick = ()=>getResult(option);
    optionContainer.appendChild(option);
  }

  questionCounter++;
}

function getResult(el){
  const id = parseInt(el.id,10);

  if (id === currentQuestion.answer){
    el.classList.add('correct'); updateAnswerIndicator('correct'); correctAnswers++;
  } else {
    el.classList.add('wrong'); updateAnswerIndicator('wrong');
    const optionLen = optionContainer.children.length;
    for (let i=0;i<optionLen;i++){
      if (parseInt(optionContainer.children[i].id,10)===currentQuestion.answer) {
        optionContainer.children[i].classList.add('correct');
      }
    }
  }

  attempt++;
  unclickableOptions();

  if (currentQuestion.solutionImg){
    const im=document.createElement('img');
    im.src=currentQuestion.solutionImg;
    im.classList.add('solution-image');
    im.alt='solution';
    optionContainer.appendChild(im);
  }

  // 👇 После выбора ответа Next разрешаем
  answeredCurrent = true;
  setNextEnabled(true);
}

function unclickableOptions(){
  const optionLen=optionContainer.children.length;
  for (let i=0;i<optionLen;i++) optionContainer.children[i].classList.add('already-answered');
}

function answersIndicator(){
  answersIndicatorContainer.innerHTML='';
  for (let i=0;i<questionLimit;i++){
    const dot=document.createElement('div');
    answersIndicatorContainer.appendChild(dot);
  }
}

function updateAnswerIndicator(t){
  const idx = Math.max(0, questionCounter-1);
  const dot = answersIndicatorContainer.children[idx];
  if (dot) dot.classList.add(t);
}

function next(){
  // 👇 Запрет, если не выбран вариант
  if (!answeredCurrent) return;

  if (questionCounter>=questionLimit) quizOver();
  else getNewQuestion();
}

function quizOver(){
  show(scrRes); quizResult();
}

function quizResult(){
  const el = scrRes;
  if (!el) return;
  el.querySelector('.total-question').innerHTML = questionLimit;
  el.querySelector('.total-attempt').innerHTML = attempt;
  el.querySelector('.total-correct').innerHTML = correctAnswers;
  el.querySelector('.total-wrong').innerHTML = Math.max(0, attempt - correctAnswers);
  const percentage = questionLimit ? (correctAnswers / questionLimit) * 100 : 0;
  el.querySelector('.percentage').innerHTML = percentage.toFixed(2) + "%";
  el.querySelector('.total-score').innerHTML = `${correctAnswers} / ${questionLimit}`;
}

function resetQuiz(){
  questionCounter=0; correctAnswers=0; attempt=0; availableQuestions=[]; availableOptions=[];
  answeredCurrent = false;
  setNextEnabled(false);
}

function startQuiz(){
  if (!state.quizId || !QUIZZES[state.quizId] || !Array.isArray(QUIZZES[state.quizId]) || QUIZZES[state.quizId].length===0){
    alert("Для этого предмета тест ещё не добавлен."); return;
  }
  resetQuiz(); setAvailableQuestions(); answersIndicator(); show(scrQuiz); getNewQuestion();
}

function tryAgainQuiz(){ resetQuiz(); setAvailableQuestions(); answersIndicator(); show(scrQuiz); getNewQuestion(); }
function goToHome(){ show(scrHome); }

/************* ИНИЦИАЛИЗАЦИЯ *************/
window.addEventListener('load', ()=>{
  seedDefaultUsers();
  const sess=getSession();
  if (sess){
    if (userLabel) userLabel.textContent=`${sess.username} (${sess.role})`;
    userbox?.classList.remove('hide');
    if (btnAdmin) btnAdmin.style.display=(sess.role==='admin')?'inline-flex':'none';
    afterLogin();
  } else {
    show(scrLogin);
  }
});

/************* РАСПИСАНИЕ (DI-R-23-1) *************/
const SCHEDULE = {
  "DI-R-23-1": {
    daysOrder: ["Dushanba","Seshanba","Chorshanba","Payshanba","Juma"],
    slots: [
      { time:"13:30–14:50" },
      { time:"15:00–16:20" },
      { time:"16:30–17:50" },
    ],
    byDay: {
      Dushanba: [
        { subj:"Operatsion tizimlar (M)", teacher:"Bahriyeva Xurshida", room:"313" },
        { subj:"Veb ilovalarni ishlab chiqish (M)", teacher:"Bahramov Muhammadali", room:"313" },
        { subj:"", teacher:"", room:"" },
      ],
      Seshanba: [
        { subj:"Dasturlash uslublari va paradigmalari (M)", teacher:"Bahramov Muhammadali", room:"313" },
        { subj:"Dasturiy ta'minotni testlash (A)", teacher:"Bahramov Muhammadali", room:"P-2" },
        { subj:"Veb ilovalarni ishlab chiqish (A)", teacher:"Bahramov Muhammadali", room:"P-2" },
      ],
      Chorshanba: [
        { subj:"Dasturlash uslublari va paradigmalari (A)", teacher:"Bahramov Muhammadali", room:"312" },
        { subj:"Dasturiy ta'minotni testlash (M)", teacher:"Muqimov Askar", room:"313" },
        { subj:"C++ tilida ilova yaratish (M)", teacher:"Muqimov Askar", room:"313" },
      ],
      Payshanba: [
        { subj:"C++ tilida ilova yaratish (M)", teacher:"Muqimov Askar", room:"312" },
        { subj:"C++ tilida ilova yaratish (M)", teacher:"Muqimov Askar", room:"313" },
        { subj:"", teacher:"", room:"" },
      ],
      Juma: [
        { subj:"Operatsion tizimlar (M)", teacher:"Bahriyeva Xurshida", room:"313" },
        { subj:"Dasturiy ta'minotni testlash (A)", teacher:"Bahramov Muhammadali", room:"P-2" },
        { subj:"Operatsion tizimlar (A)", teacher:"Bahriyeva Xurshida", room:"312" },
      ],
    }
  }
};

function openSchedule(){
  renderSchedule();
  show(scrSchedule);
}
function closeSchedule(){
  show(scrYears);
}
function renderSchedule(){
  const sel = document.getElementById('schedule-group');
  const group = sel ? sel.value : "DI-R-23-1";
  const data = SCHEDULE[group];
  if (!data){ scheduleTable.innerHTML = '<p class="muted">Нет данных</p>'; return; }

  const head = `<div class="thead" style="display:flex;">
    <div class="cell" style="min-width:120px;border:1px solid #ddd;padding:6px;font-weight:600;background:#f7f7f7;">kun / vaqt</div>
    ${data.slots.map(s=>`<div class="cell" style="flex:1;border:1px solid #ddd;padding:6px;font-weight:600;background:#f7f7f7;">${s.time}</div>`).join('')}
  </div>`;

  const rows = data.daysOrder.map(day=>{
    const lessons = data.byDay[day]||[];
    const cells = lessons.map(l=>{
      if(!l.subj) return `<div class="cell" style="flex:1;border:1px solid #ddd;padding:6px;color:#777;">—</div>`;
      return `<div class="cell" style="flex:1;border:1px solid #ddd;padding:6px;">
        <strong>${l.subj}</strong>
        <div class="muted" style="color:#666">${l.teacher||''}</div>
        <div class="muted" style="color:#666">${l.room? 'aud: '+l.room : ''}</div>
      </div>`;
    }).join('');
    return `<div class="row" style="display:flex;">
      <div class="cell" style="min-width:120px;border:1px solid #ddd;padding:6px;font-weight:600;">${day}</div>
      ${cells}
    </div>`;
  }).join('');

  scheduleTable.innerHTML = head + rows;
}
