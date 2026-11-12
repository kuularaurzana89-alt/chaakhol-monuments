// Координаты намеренно оставлены заглушками (0, 0).
// Замените lat и lng каждого объекта на реальные координаты в десятичных градусах.
// Например: lat: 51.4, lng: 92.8
const monuments = [
  {
    id: "sume",
    title: "Буддийская ниша Суме",
    lat: 51.616587, lng: 92.428196,
    photo: "images/sume.jpg",
    description: "В скале на высоте четырёх метров выбита ниша размером с небольшой шкаф — метр в высоту, шестьдесят сантиметров в ширину. Внутри на сером камне вырезаны Будда, два бодхисаттвы и два стража по сторонам. Учёные датируют её XIII веком, юаньским периодом. В 1717 году русские казаки, первыми добравшиеся до ниши, нашли внутри луки, стрелы, ячмень и полоски синей бумаги, исписанные золотыми и серебряными знаками. Позже выяснилось — это тибетские молитвы. Через четыре года другой казак доносил воеводе, что «болван сидящий» над дверями сколот с камня и увезён. С 1960-х ниша оказалась в зоне затопления Саяно-Шушенской ГЭС. Большую часть года её нет — она под водой. Увидеть оригинал можно только весной, когда сбрасывают воду. В 2012 году рядом, на незатопляемом склоне горы, установили точную копию и освятили её."
  },
  {
    id: "mugur-sargol",
    title: "Петроглифы Мугур-Саргола",
    lat: 514207, lng: 921722,
    photo: "images/mugur-sargol.jpg",
    description: "На скалах у Енисея, между устьями Чаа-Холя и Хемчика, выбито около трёхсот личин-масок — больше, чем где-либо ещё в верховьях Енисея. Это не просто лица: у многих есть рога, антенны, грибообразные шляпы. Рядом — колесницы, быки, олени, изображения раскрытой ладони в натуральную величину. Учёные считают, что здесь могло быть святилище, где проводили обряды посвящения юношей. При строительстве ГЭС часть скал ушла под воду, но пятьдесят каменных плит с рисунками успели выпилить и вывезти в Кызыл — бурили отверстия в тридцатиградусный мороз и отрывали пятитонные глыбы от горы. Часть петроглифов осталась на месте и доступна до сих пор, но добраться туда непросто — урочище труднодоступное и малопосещаемое."
  },
  {
    id: "bosh-dag-petroglyphs",
    title: "Петроглифы Бош-Даг",
    lat: 51.8844, lng: 94.3222,
    photo: "images/bosh-dag-petroglyphs.jpg",
    description: "На левом берегу реки Чаа-Холь, примерно в 70 метрах от берега, на вертикальной скальной плоскости, обращённой на юго-восток, выбита группа наскальных изображений. Они выделяются среди петроглифов долины Чаа-Холь крупными размерами и высоким мастерством исполнения. Площадь памятника около 9 метров в длину, изображения разделены скальными трещинами на три группы. Слева два всадника: один на коне, другой на верблюде, за ними следует пеший человек. В центре тамгообразный знак. Справа сцена охоты: два оленя длиной почти метр стремительно бегут, за ними верхом на коне преследует охотник с луком. Между фигурами оленей древний художник поместил рыбу, что напоминает аналогичную сцену с рыбой среди бегущих зверей на скалах Алды-Мозага. На основании стилистического анализа эти петроглифы датируются третьей четвертью I тысячелетия нашей эры."
  },
  {
    id: "bosh-dag-kurgan",
    title: "Курган Бош-Даг",
    lat: 50.9017, lng: 90.1233,
    photo: "images/bosh-dag-kurgan.jpg",
    description: "В 6 километрах к северо-востоку от посёлка Новый Чаа-Холь, у горы Бош-Даг, в 1964 году экспедиция под руководством Монгуша Хамыевича Маннай-оола раскопала девять курганов. Курган № 3 оказался уникальным: его надмогильная насыпь имеет размеры 13,0 × 12,8 метра и высоту 0,75 метра, в центре установлен крупный ромбовидный камень, под насыпью обнаружено восемь погребений (семь неповреждённых и одно разрушенное), расположенных двумя рядами. Все погребённые лежали вытянуто на правом боку, ноги слегка согнуты, головой на запад-северо-запад, руки вытянуты вдоль тела. При погребённых не было обнаружено никаких погребальных предметов: ни керамики, ни украшений, ни оружия. Эта «пустота» сама по себе стала загадкой."
  },
  {
    id: "ala-tey",
    title: "Могильник Ала-Тей (эпоха хунну)",
    lat: 51.536655, lng: 92.177730,
    photo: "images/ala-tey.jpg",
    description: "Одиноко стоящая гора в поле, вокруг неё — курганы разных эпох. Обнаружили случайно: археологи увидели лежащую на песке плиту, металлоискатель показал, что под ней что-то есть. Оказалось — ящик с погребённой женщиной и большой бронзовой пряжкой на поясе. Дальше исследование выявило около 120 нетронутых мужских и женских погребений. В женских могилах много украшений, хуннские пряжки из бронзы, камня и кости с изображениями яков, верблюдов, драконов, инкрустацией из коралла, сердолика и бирюзы. Встречаются редкие пряжки из гагата — каменного угля. Некоторые сосуды находили в маленьких каменных ящиках со следами копоти: предполагают, что на похоронах или поминках в них наливали масло, вставляли фитиль и поджигали прямо над могилой. Подобных артефактов, установленных над захоронениями, археологи прежде не встречали. Могильник находится в зоне затопления Саяно-Шушенской ГЭС, его спасают в ходе ежегодных экспедиций под руководством Марины Евгеньевны Килуновской."
  },
  {
    id: "terezin",
    title: "Могильник Терезин (эпоха хунну)",
    lat: 51,57, lng: 92,43,
    photo: "images/terezin.jpg",
    description: "Находится на высоком песчаном берегу реки Чаа-Холь. Обнаружили благодаря тому, что берег сильно осыпался из-за прибойной волны — обнажились погребения. В одном из них нашли бронзовую пряжку, которая позволила идентифицировать хунну. На сегодняшний день здесь исследовано около пятидесяти неграбленых могил. Захоронения отличаются от Ала-Тея — вероятно, это представители другого рода или семьи. Хунну, по словам Марины Евгеньевны, «предпочитали хоронить мертвых только в песке». Памятник разрушается из-за абразии берега, спасательные работы ведёт та же Тувинская археологическая экспедиция ИИМК РАН."
  },
  {
    id: "yttyg-attyg-tey-1",
    title: "Могильник Ыттыг-Аттыг-Тей 1",
    lat: 0, lng: 0,
    photo: "images/yttyg-attyg-tey-1.jpg",
    description: "Позднескифский коллективный могильник в срубе, датируемый V–II веками до нашей эры. Сруб выполнял функцию семейной усыпальницы, куда подхоранивали людей нескольких поколений, но использовался крайне мало: в одном из срубов (объект 4-2) обнаружили останки только трёх человек, уложенных на бок с согнутыми ногами. Вещей «в дорогу» дали немного: несколько пряжек, костяную пронизку из рога марала, деревянный сосуд и один комплект керамики на троих. Археологи предполагают, что захоронение было бедным: зажиточным скифам могли «выдавать» по два горшка на человека. Раскопки проходили в ограниченные сроки: весной уровень воды в Саяно-Шушенском водохранилище понижается, дно обнажается, летом территория вновь уходит под воду. Работами руководила начальник Тувинской археологической экспедиции ИИМК РАН Марина Евгеньевна Килуновская."
  },
  {
    id: "yttyg-attyg-tey-2",
    title: "Могильник Ыттыг-Аттыг-Тей 2",
    lat: 0, lng: 0,
    photo: "images/yttyg-attyg-tey-2.jpg",
    description: "В 2026 году здесь изучили два захоронения позднескифского времени: в склепе (объект 2) и в срубе (объект 7). В одном склепе были захоронены двое взрослых мужчин и мальчик-подросток. Только последний сохранился в ненарушенном состоянии, при нём обнаружили женский поясной набор: аргиллитовые пронизки, раковины каури, бусы, клыки кабарги, бронзовую пятикольчатую пряжку. В другом срубе находились останки как минимум троих детей, примерно 1 года, 4–5 лет и 11–13 лет. У одного ребёнка в черепе было пробитое отверстие, у другого — следы посмертной трепанации. У стенки сруба лежал относительно полный скелет женщины около 40 лет, рядом с которым находился керамический сосуд и кости жертвенного барана. Археологи интерпретируют эти находки как свидетельство сложных процессов конца скифской эпохи: местное население, вероятно, испытывало давление со стороны пришлых групп, возможно хунну."
  },
  {
    id: "yttyg-attyg-tey-4",
    title: "Могильник Ыттыг-Аттыг-Тей 4",
    lat: 0, lng: 0,
    photo: "images/yttyg-attyg-tey-4.jpg",
    description: "В 2026 году здесь раскопали курган эпохи раннего Средневековья, который можно связать с племенами кыргызов, практиковавшими трупосожжение на стороне. В основании кургана находилась платформа из плотно уложенных камней, окружённая крупными обломками скал, с кольцом-крепидой из вертикально установленных камней и входом с восточной стороны. Среди камней обнаружили многочисленные обожжённые предметы, в том числе уникальный набор железных изделий: сковороду, ложку и нож, соединённые цепочкой. Также нашли крупные стеклянные и каменные бусы разных цветов и железные пряжки с растительным орнаментом."
  }
];

const DEFAULT_CENTER = [51.5, 92.5]; // ориентировочный центр района; уточните при необходимости
const DEFAULT_ZOOM = 9;

const map = L.map("map", {
  zoomControl: false,
  scrollWheelZoom: true
}).setView(DEFAULT_CENTER, DEFAULT_ZOOM);

L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
  maxZoom: 19,
  attribution: "Sources: Esri, Maxar, Earthstar Geographics, and the GIS User Community"
}).addTo(map);
// Географические названия и границы поверх спутниковых снимков
L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}", {
  maxZoom: 19,
  attribution: "Labels &copy; Esri"
}).addTo(map);
L.control.zoom({ position: "bottomright" }).addTo(map);

// API плагина leaflet.fullscreen: L.control.fullscreen()
if (L.control.fullscreen) {
  L.control.fullscreen({
    position: "bottomright",
    title: "На весь экран",
    titleCancel: "Выйти из полноэкранного режима"
  }).addTo(map);
}

const markerById = new Map();
const validCoordinates = monument =>
  Number.isFinite(monument.lat) &&
  Number.isFinite(monument.lng) &&
  !(monument.lat === 0 && monument.lng === 0);

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}

const uploadedPhotos = new Map();

function popupHtml(monument) {
  const title = escapeHtml(monument.title);
  const description = escapeHtml(monument.description);
  const photos = uploadedPhotos.get(monument.id) || [];
  const allPhotos = [...(monument.photo ? [monument.photo] : []), ...photos.map(p => p.public_url)];
  const gallery = allPhotos.length
    ? `<div class="popup-gallery">${allPhotos.map((src, i) =>
        `<img src="${escapeHtml(src)}" alt="${title}, фото ${i + 1}" loading="lazy">`
      ).join("")}</div>`
    : `<div class="photo-placeholder">Фотографии пока не добавлены</div>`;
  return `
    <article class="popup-card">
      ${gallery}
      <div class="popup-kicker">Памятник Чаа-Хольского кожууна</div>
      <h3>${title}</h3>
      <p>${description}</p>
    </article>`;
}

monuments.forEach((monument, index) => {
  if (!validCoordinates(monument)) return;

  const icon = L.divIcon({
    className: "",
    html: `<div class="custom-marker"><span>${index + 1}</span></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -27]
  });

  const marker = L.marker([monument.lat, monument.lng], { icon })
    .addTo(map)
    .bindPopup(popupHtml(monument), { maxWidth: 340, closeButton: true });

  markerById.set(monument.id, marker);
});

// Список остаётся доступным и до того, как координаты будут внесены.
const list = document.getElementById("monument-list");
monuments.forEach((monument, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "monument-item";
  const hasCoordinates = validCoordinates(monument);
  button.innerHTML = `
    <span class="item-number">${String(index + 1).padStart(2, "0")}</span>
    <span>
      <span class="item-title">${escapeHtml(monument.title)}</span>
      <span class="item-status">${hasCoordinates ? "Открыть на карте" : "Ожидает координат"}</span>
    </span>`;
  button.addEventListener("click", () => {
    const marker = markerById.get(monument.id);
    if (!marker) {
      alert("Для этого памятника пока не указаны координаты. Добавьте lat и lng в map.js.");
      return;
    }
    map.setView(marker.getLatLng(), 15, { animate: true });
    marker.openPopup();
    window.location.hash = monument.id;
  });
  list.appendChild(button);
});

document.getElementById("monument-count").textContent = monuments.length;

// Deep-link: index.html#sume
function openMonumentFromHash() {
  const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  if (!id) return;

  const monument = monuments.find(item => item.id === id);
  if (!monument) return;

  const marker = markerById.get(id);
  if (!marker) {
    console.info(`Памятник "${id}" найден, но его координаты пока не заполнены.`);
    return;
  }

  map.setView(marker.getLatLng(), 15);
  marker.openPopup();
}

openMonumentFromHash();
window.addEventListener("hashchange", openMonumentFromHash);


// Общая фотогалерея Supabase. Настройки хранятся в supabase-config.js.
const supabaseReady =
  typeof window.supabase !== "undefined" &&
  window.SUPABASE_CONFIG &&
  window.SUPABASE_CONFIG.url &&
  window.SUPABASE_CONFIG.anonKey &&
  !window.SUPABASE_CONFIG.url.includes("YOUR_");

let supabaseClient = null;
if (supabaseReady) {
  supabaseClient = window.supabase.createClient(
    window.SUPABASE_CONFIG.url,
    window.SUPABASE_CONFIG.anonKey
  );
}

const adminToggle = document.getElementById("admin-toggle");
const adminPanel = document.getElementById("admin-panel");
const adminForm = document.getElementById("admin-form");
const adminStatus = document.getElementById("admin-status");
const loginForm = document.getElementById("admin-login-form");
const logoutButton = document.getElementById("admin-logout");
const photoMonumentSelect = document.getElementById("photo-monument");

function setAdminStatus(message, isError = false) {
  if (!adminStatus) return;
  adminStatus.textContent = message;
  adminStatus.classList.toggle("error", isError);
}

function refreshOpenPopup(monumentId) {
  const monument = monuments.find(item => item.id === monumentId);
  const marker = markerById.get(monumentId);
  if (monument && marker && marker.isPopupOpen()) marker.setPopupContent(popupHtml(monument));
}

async function loadSharedPhotos() {
  if (!supabaseClient) return;
  const { data, error } = await supabaseClient
    .from("monument_photos")
    .select("id, monument_id, public_url, uploaded_at")
    .order("uploaded_at", { ascending: false });

  if (error) {
    console.warn("Не удалось загрузить фотографии:", error.message);
    return;
  }
  uploadedPhotos.clear();
  for (const photo of (data || [])) {
    const current = uploadedPhotos.get(photo.monument_id) || [];
    current.push(photo);
    uploadedPhotos.set(photo.monument_id, current);
  }
  monuments.forEach(monument => refreshOpenPopup(monument.id));
}

function updateAdminView(session) {
  const signedIn = Boolean(session);
  if (adminForm) adminForm.hidden = !signedIn;
  if (loginForm) loginForm.hidden = signedIn;
  if (logoutButton) logoutButton.hidden = !signedIn;

  if (!supabaseClient) {
    setAdminStatus("Сначала настройте Supabase по инструкции в README.");
  } else if (signedIn) {
    setAdminStatus("Вы вошли как администратор. Можно добавлять фотографии.");
  } else {
    setAdminStatus("Войдите в учётную запись администратора, чтобы загружать фотографии.");
  }
}

if (photoMonumentSelect) {
  monuments.forEach(monument => {
    const option = document.createElement("option");
    option.value = monument.id;
    option.textContent = monument.title;
    photoMonumentSelect.appendChild(option);
  });
}

if (adminToggle && adminPanel) {
  adminToggle.addEventListener("click", () => { adminPanel.hidden = !adminPanel.hidden; });
}

if (supabaseClient) {
  supabaseClient.auth.getSession().then(({ data }) => updateAdminView(data.session));
  supabaseClient.auth.onAuthStateChange((_event, session) => updateAdminView(session));
  loadSharedPhotos();
} else {
  updateAdminView(null);
}

if (loginForm) {
  loginForm.addEventListener("submit", async event => {
    event.preventDefault();
    if (!supabaseClient) return setAdminStatus("Supabase ещё не настроен.", true);
    const email = document.getElementById("admin-email").value.trim();
    const password = document.getElementById("admin-password").value;
    setAdminStatus("Выполняется вход…");
    const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
  console.error("Ошибка входа:", error);
  setAdminStatus("Ошибка входа: " + error.message, true);
  return;
}});
}

if (logoutButton) {
  logoutButton.addEventListener("click", async () => {
    if (supabaseClient) await supabaseClient.auth.signOut();
  });
}

if (adminForm) {
  adminForm.addEventListener("submit", async event => {
    event.preventDefault();
    if (!supabaseClient) return setAdminStatus("Supabase ещё не настроен.", true);

    const fileInput = document.getElementById("photo-file");
    const monumentId = photoMonumentSelect.value;
    const file = fileInput.files && fileInput.files[0];

    if (!file || !monumentId) return setAdminStatus("Выберите памятник и фотографию.", true);
    if (!file.type.startsWith("image/")) return setAdminStatus("Можно загружать только изображения.", true);
    if (file.size > 5 * 1024 * 1024) return setAdminStatus("Максимальный размер — 5 МБ.", true);

    const safeName = file.name.toLowerCase().replace(/[^a-z0-9._-]+/g, "-");
    const path = `${monumentId}/${Date.now()}-${safeName}`;
    setAdminStatus("Загружаю фотографию…");

    const { error: uploadError } = await supabaseClient.storage
      .from("monument-photos")
      .upload(path, file, { cacheControl: "3600", upsert: false });

    if (uploadError) {
      setAdminStatus("Не удалось загрузить фото. Проверьте настройки Supabase.", true);
      return;
    }

    const { data: publicData } = supabaseClient.storage
      .from("monument-photos").getPublicUrl(path);

    const { error: insertError } = await supabaseClient
      .from("monument_photos")
      .insert({ monument_id: monumentId, file_path: path, public_url: publicData.publicUrl });

    if (insertError) {
      setAdminStatus("Файл загружен, но запись в фотогалерее не сохранилась. Проверьте SQL-настройки.", true);
      return;
    }

    fileInput.value = "";
    await loadSharedPhotos();
    setAdminStatus("Фотография добавлена. Её увидят все посетители сайта.");
  });
}
