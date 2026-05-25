const words = [
  ["안녕하세요", "annyeonghaseyo", "你好；您好", "问候", "안녕하세요, 만나서 반가워요.", "你好，很高兴见到你。"],
  ["감사합니다", "gamsahamnida", "谢谢", "问候", "도와주셔서 감사합니다.", "谢谢您帮助我。"],
  ["죄송합니다", "joesonghamnida", "对不起；抱歉", "问候", "늦어서 죄송합니다.", "对不起，我迟到了。"],
  ["네", "ne", "是；好的", "生活", "네, 알겠습니다.", "好的，我知道了。"],
  ["아니요", "aniyo", "不是；不用", "生活", "아니요, 괜찮아요.", "不用，没关系。"],
  ["괜찮아요", "gwaenchanayo", "没关系；还可以", "生活", "저는 괜찮아요.", "我没关系。"],
  ["저", "jeo", "我；本人", "生活", "저는 중국 사람이에요.", "我是中国人。"],
  ["이름", "ireum", "名字", "生活", "이름이 뭐예요?", "你叫什么名字？"],
  ["친구", "chingu", "朋友", "生活", "제 친구는 한국어를 배워요.", "我的朋友在学韩语。"],
  ["집", "jip", "家；房子", "生活", "저는 집에 가요.", "我回家。"],
  ["학교", "hakgyo", "学校", "学习", "학교에서 한국어를 공부해요.", "我在学校学习韩语。"],
  ["학생", "haksaeng", "学生", "学习", "저는 학생이에요.", "我是学生。"],
  ["공부", "gongbu", "学习", "学习", "오늘 한국어 공부를 해요.", "今天学习韩语。"],
  ["한국어", "hangugeo", "韩语", "学习", "한국어를 배우고 있어요.", "我正在学习韩语。"],
  ["책", "chaek", "书", "学习", "이 책은 재미있어요.", "这本书很有意思。"],
  ["선생님", "seonsaengnim", "老师", "学习", "선생님께 질문해요.", "向老师提问。"],
  ["질문", "jilmun", "问题；提问", "学习", "질문이 있어요.", "我有一个问题。"],
  ["물", "mul", "水", "餐饮", "물 한 잔 주세요.", "请给我一杯水。"],
  ["밥", "bap", "饭；米饭", "餐饮", "밥을 먹었어요?", "你吃饭了吗？"],
  ["커피", "keopi", "咖啡", "餐饮", "아이스 커피 주세요.", "请给我冰咖啡。"],
  ["맛있어요", "masisseoyo", "好吃", "餐饮", "이 음식은 정말 맛있어요.", "这个食物真的很好吃。"],
  ["주세요", "juseyo", "请给我", "餐饮", "김밥 하나 주세요.", "请给我一个紫菜包饭。"],
  ["얼마예요", "eolmayeyo", "多少钱", "生活", "이거 얼마예요?", "这个多少钱？"],
  ["화장실", "hwajangsil", "洗手间", "生活", "화장실이 어디예요?", "洗手间在哪里？"],
  ["어디", "eodi", "哪里", "交通", "지하철역이 어디예요?", "地铁站在哪里？"],
  ["지하철", "jihacheol", "地铁", "交通", "저는 지하철을 타요.", "我坐地铁。"],
  ["버스", "beoseu", "公交车", "交通", "버스가 곧 와요.", "公交车马上来。"],
  ["택시", "taeksi", "出租车", "交通", "택시를 불러 주세요.", "请帮我叫出租车。"],
  ["공항", "gonghang", "机场", "交通", "공항에 가고 싶어요.", "我想去机场。"],
  ["오늘", "oneul", "今天", "生活", "오늘 날씨가 좋아요.", "今天天气很好。"],
  ["내일", "naeil", "明天", "生活", "내일 만나요.", "明天见。"],
  ["좋아요", "joayo", "好；喜欢", "生活", "한국 음악이 좋아요.", "我喜欢韩国音乐。"],
  ["몰라요", "mollayo", "不知道", "学习", "아직 잘 몰라요.", "我还不太知道。"],
  ["가요", "gayo", "去；走", "交通", "저는 학교에 가요.", "我去学校。"],
  ["먹어요", "meogeoyo", "吃", "餐饮", "저는 밥을 먹어요.", "我吃饭。"],
  ["마셔요", "masyeoyo", "喝", "餐饮", "물을 마셔요.", "喝水。"],
].map(([korean, roman, meaning, category, exampleKo, exampleZh]) => ({
  korean,
  roman,
  meaning,
  category,
  exampleKo,
  exampleZh,
}));

const phraseTranslations = [
  ["안녕하세요", "你好；您好", "안녕하세요, 만나서 반가워요.", "你好，很高兴见到你。"],
  ["감사합니다", "谢谢", "도와주셔서 감사합니다.", "谢谢您帮助我。"],
  ["죄송합니다", "对不起；抱歉", "늦어서 죄송합니다.", "对不起，我迟到了。"],
  ["화장실이 어디예요", "洗手间在哪里？", "화장실이 어디예요?", "洗手间在哪里？"],
  ["지하철역이 어디예요", "地铁站在哪里？", "지하철역이 어디예요?", "地铁站在哪里？"],
  ["물 한 잔 주세요", "请给我一杯水。", "물 한 잔 주세요.", "请给我一杯水。"],
  ["아이스 커피 주세요", "请给我冰咖啡。", "아이스 커피 주세요.", "请给我冰咖啡。"],
  ["이거 얼마예요", "这个多少钱？", "이거 얼마예요?", "这个多少钱？"],
  ["이름이 뭐예요", "你叫什么名字？", "이름이 뭐예요?", "你叫什么名字？"],
  ["저는 학생이에요", "我是学生。", "저는 학생이에요.", "我是学生。"],
  ["저는 중국 사람이에요", "我是中国人。", "저는 중국 사람이에요.", "我是中国人。"],
  ["한국어를 배우고 있어요", "我正在学习韩语。", "한국어를 배우고 있어요.", "我正在学习韩语。"],
  ["오늘 날씨가 좋아요", "今天天气很好。", "오늘 날씨가 좋아요.", "今天天气很好。"],
  ["내일 만나요", "明天见。", "내일 만나요.", "明天见。"],
  ["공항에 가고 싶어요", "我想去机场。", "공항에 가고 싶어요.", "我想去机场。"],
  ["택시를 불러 주세요", "请帮我叫出租车。", "택시를 불러 주세요.", "请帮我叫出租车。"],
];

const extraTokens = [
  ["한", "han", "一；一个"],
  ["잔", "jan", "杯"],
  ["이거", "igeo", "这个"],
  ["뭐", "mwo", "什么"],
  ["날씨", "nalssi", "天气"],
  ["음식", "eumsik", "食物"],
  ["정말", "jeongmal", "真的；非常"],
  ["아직", "ajik", "还；尚且"],
  ["잘", "jal", "好好地；很"],
  ["곧", "got", "马上；很快"],
  ["와요", "wayo", "来"],
  ["타요", "tayo", "乘坐"],
  ["불러", "bulleo", "叫；呼叫"],
  ["싶어요", "sipeoyo", "想要"],
  ["사람", "saram", "人"],
  ["중국", "jungguk", "中国"],
  ["음악", "eumak", "音乐"],
  ["재미있어요", "jaemiisseoyo", "有趣"],
  ["배워요", "baewoyo", "学习"],
  ["배우고", "baeugo", "正在学"],
  ["있어요", "isseoyo", "有；在"],
].map(([korean, roman, meaning]) => ({ korean, roman, meaning }));

const lexicon = [...words, ...extraTokens];
const particles = ["은", "는", "이", "가", "을", "를", "에", "에서", "께", "도", "와", "과", "으로", "로"];

const state = {
  category: "全部",
  query: "",
  saved: new Set(JSON.parse(localStorage.getItem("koreanSavedWords") || "[]")),
};

const wordGrid = document.querySelector("#wordGrid");
const template = document.querySelector("#wordCardTemplate");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");
const currentHint = document.querySelector("#currentHint");
const savedWords = document.querySelector("#savedWords");
const voiceStatus = document.querySelector("#voiceStatus");
const translateInput = document.querySelector("#translateInput");
const translationResult = document.querySelector("#translationResult");

let koreanVoice = null;

function normalize(text) {
  return text.toLowerCase().trim();
}

function normalizeKorean(text) {
  return text.replace(/[?.!,。！？\s]+/g, " ").trim();
}

function stripParticle(token) {
  for (const particle of particles.sort((a, b) => b.length - a.length)) {
    if (token.endsWith(particle) && token.length > particle.length + 1) {
      return token.slice(0, -particle.length);
    }
  }
  return token;
}

function findEntry(token) {
  const clean = stripParticle(token);
  return lexicon.find((entry) => entry.korean === token || entry.korean === clean);
}

function detectVoice() {
  const voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
  koreanVoice = voices.find((voice) => voice.lang.toLowerCase().startsWith("ko"));
  if (!window.speechSynthesis) {
    voiceStatus.textContent = "当前浏览器不支持语音播放";
  } else if (koreanVoice) {
    voiceStatus.textContent = `韩语语音：${koreanVoice.name}`;
  } else {
    voiceStatus.textContent = "未检测到韩语语音，将使用默认语音";
  }
}

function speak(text) {
  if (!text.trim()) return;
  if (!window.speechSynthesis) {
    alert("当前浏览器不支持语音播放。");
    return;
  }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ko-KR";
  utterance.rate = 0.82;
  utterance.pitch = 1;
  if (koreanVoice) utterance.voice = koreanVoice;
  speechSynthesis.speak(utterance);
}

function translateKorean(text) {
  const raw = text.trim();
  const normalized = normalizeKorean(raw);
  if (!normalized) return null;

  const exactPhrase = phraseTranslations.find(([phrase]) => normalizeKorean(phrase) === normalized);
  const exactWord = words.find((word) => word.korean === normalized);
  const tokens = normalized.split(/\s+/).filter(Boolean);
  const tokenMatches = tokens.map((token) => ({
    token,
    entry: findEntry(token),
  }));

  if (exactPhrase) {
    return {
      type: "exact",
      source: raw,
      translation: exactPhrase[1],
      confidence: "已匹配常用句",
      exampleKo: exactPhrase[2],
      exampleZh: exactPhrase[3],
      tokens: tokenMatches,
    };
  }

  if (exactWord) {
    return {
      type: "word",
      source: raw,
      translation: exactWord.meaning,
      confidence: "已匹配词典词条",
      exampleKo: exactWord.exampleKo,
      exampleZh: exactWord.exampleZh,
      tokens: [{ token: normalized, entry: exactWord }],
    };
  }

  const known = tokenMatches.filter((item) => item.entry);
  const unknown = tokenMatches.filter((item) => !item.entry);
  const translation = known.length
    ? known.map((item) => item.entry.meaning.split("；")[0]).join(" / ")
    : "暂未找到完整翻译";
  const exampleSource = known.find((item) => item.entry?.exampleKo);

  return {
    type: known.length ? "partial" : "unknown",
    source: raw,
    translation,
    confidence: known.length
      ? `识别出 ${known.length} 个词，${unknown.length} 个词需要补充`
      : "内置词库还没有收录这句话",
    exampleKo: exampleSource?.entry.exampleKo || "안녕하세요, 만나서 반가워요.",
    exampleZh: exampleSource?.entry.exampleZh || "你好，很高兴见到你。",
    tokens: tokenMatches,
  };
}

function renderTranslation() {
  const result = translateKorean(translateInput.value);
  if (!result) {
    translationResult.innerHTML = `<div class="empty-state">输入韩语后点击“翻译”，这里会显示中文意思、逐词拆解和例句。</div>`;
    return;
  }

  const tokenHtml = result.tokens.length
    ? result.tokens
        .map((item) => {
          const meaning = item.entry ? `${item.entry.meaning} · ${item.entry.roman || ""}` : "未收录";
          return `<span class="token ${item.entry ? "" : "unknown-token"}"><strong>${item.token}</strong><small>${meaning}</small></span>`;
        })
        .join("")
    : `<span class="token unknown-token"><strong>${result.source}</strong><small>未拆分</small></span>`;

  translationResult.innerHTML = `
    <div class="translation-card">
      <div class="translation-head">
        <span>${result.confidence}</span>
        <button class="icon-button" type="button" data-speak-result aria-label="朗读翻译原文">🔊</button>
      </div>
      <p class="translation-source">${result.source}</p>
      <h3>${result.translation}</h3>
      <div class="token-list">${tokenHtml}</div>
      <div class="matched-example">
        <div>
          <strong>例句</strong>
          <p class="example-ko">${result.exampleKo}</p>
          <p class="example-zh">${result.exampleZh}</p>
        </div>
        <button class="icon-button" type="button" data-speak-example aria-label="朗读例句">🔊</button>
      </div>
    </div>
  `;

  translationResult.querySelector("[data-speak-result]").addEventListener("click", () => speak(result.source));
  translationResult.querySelector("[data-speak-example]").addEventListener("click", () => speak(result.exampleKo));
}

function filteredWords() {
  const query = normalize(state.query);
  return words.filter((word) => {
    const categoryMatch = state.category === "全部" || word.category === state.category;
    const searchable = normalize([
      word.korean,
      word.roman,
      word.meaning,
      word.category,
      word.exampleKo,
      word.exampleZh,
    ].join(" "));
    return categoryMatch && (!query || searchable.includes(query));
  });
}

function renderWords() {
  const list = filteredWords();
  wordGrid.innerHTML = "";
  resultCount.textContent = `${list.length} 个词条`;
  currentHint.textContent = state.category === "全部" ? "全部分类" : `${state.category}分类`;

  if (!list.length) {
    wordGrid.innerHTML = `<div class="empty-state">没有找到匹配的词条，试试中文、韩文或罗马音。</div>`;
    return;
  }

  list.forEach((word) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.querySelector(".tag").textContent = word.category;
    card.querySelector("h3").textContent = word.korean;
    card.querySelector(".roman").textContent = word.roman;
    card.querySelector(".meaning").textContent = word.meaning;
    card.querySelector(".example-ko").textContent = word.exampleKo;
    card.querySelector(".example-zh").textContent = word.exampleZh;

    const saveButton = card.querySelector(".save-button");
    saveButton.classList.toggle("saved", state.saved.has(word.korean));
    saveButton.textContent = state.saved.has(word.korean) ? "★" : "☆";
    saveButton.addEventListener("click", () => toggleSaved(word.korean));
    card.querySelector(".speak-word").addEventListener("click", () => speak(word.korean));
    card.querySelector(".speak-example").addEventListener("click", () => speak(word.exampleKo));
    wordGrid.append(card);
  });
}

function renderSaved() {
  const savedList = words.filter((word) => state.saved.has(word.korean));
  savedWords.innerHTML = "";
  if (!savedList.length) {
    savedWords.className = "saved-empty";
    savedWords.textContent = "点词卡右上角加入复习";
    return;
  }

  savedWords.className = "";
  savedList.forEach((word) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "saved-chip";
    chip.innerHTML = `<strong>${word.korean}</strong><span>${word.meaning}</span>`;
    chip.addEventListener("click", () => speak(word.korean));
    savedWords.append(chip);
  });
}

function toggleSaved(korean) {
  if (state.saved.has(korean)) state.saved.delete(korean);
  else state.saved.add(korean);
  localStorage.setItem("koreanSavedWords", JSON.stringify([...state.saved]));
  renderWords();
  renderSaved();
}

document.querySelector("#translateButton").addEventListener("click", renderTranslation);
document.querySelector("#speakInputButton").addEventListener("click", () => speak(translateInput.value));
document.querySelector("#clearTranslateButton").addEventListener("click", () => {
  translateInput.value = "";
  renderTranslation();
  translateInput.focus();
});
translateInput.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") renderTranslation();
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderWords();
});

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.category = button.dataset.category;
    renderWords();
  });
});

document.querySelector("#clearSaved").addEventListener("click", () => {
  state.saved.clear();
  localStorage.removeItem("koreanSavedWords");
  renderWords();
  renderSaved();
});

if ("speechSynthesis" in window) {
  speechSynthesis.addEventListener("voiceschanged", detectVoice);
  detectVoice();
} else {
  voiceStatus.textContent = "当前浏览器不支持语音播放";
}

renderWords();
renderSaved();
