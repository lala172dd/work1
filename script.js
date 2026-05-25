const words = [
  {
    korean: "안녕하세요",
    roman: "annyeonghaseyo",
    meaning: "你好；您好",
    category: "问候",
    exampleKo: "안녕하세요, 만나서 반가워요.",
    exampleZh: "你好，很高兴见到你。",
  },
  {
    korean: "감사합니다",
    roman: "gamsahamnida",
    meaning: "谢谢",
    category: "问候",
    exampleKo: "도와주셔서 감사합니다.",
    exampleZh: "谢谢您帮助我。",
  },
  {
    korean: "죄송합니다",
    roman: "joesonghamnida",
    meaning: "对不起；抱歉",
    category: "问候",
    exampleKo: "늦어서 죄송합니다.",
    exampleZh: "对不起，我迟到了。",
  },
  {
    korean: "네",
    roman: "ne",
    meaning: "是；好的",
    category: "生活",
    exampleKo: "네, 알겠습니다.",
    exampleZh: "好的，我知道了。",
  },
  {
    korean: "아니요",
    roman: "aniyo",
    meaning: "不是；不用",
    category: "生活",
    exampleKo: "아니요, 괜찮아요.",
    exampleZh: "不用，没关系。",
  },
  {
    korean: "괜찮아요",
    roman: "gwaenchanayo",
    meaning: "没关系；还可以",
    category: "生活",
    exampleKo: "저는 괜찮아요.",
    exampleZh: "我没关系。",
  },
  {
    korean: "이름",
    roman: "ireum",
    meaning: "名字",
    category: "生活",
    exampleKo: "이름이 뭐예요?",
    exampleZh: "你叫什么名字？",
  },
  {
    korean: "친구",
    roman: "chingu",
    meaning: "朋友",
    category: "生活",
    exampleKo: "제 친구는 한국어를 배워요.",
    exampleZh: "我的朋友在学韩语。",
  },
  {
    korean: "집",
    roman: "jip",
    meaning: "家；房子",
    category: "生活",
    exampleKo: "저는 집에 가요.",
    exampleZh: "我回家。",
  },
  {
    korean: "학교",
    roman: "hakgyo",
    meaning: "学校",
    category: "学习",
    exampleKo: "학교에서 한국어를 공부해요.",
    exampleZh: "我在学校学习韩语。",
  },
  {
    korean: "공부",
    roman: "gongbu",
    meaning: "学习",
    category: "学习",
    exampleKo: "오늘 한국어 공부를 해요.",
    exampleZh: "今天学习韩语。",
  },
  {
    korean: "책",
    roman: "chaek",
    meaning: "书",
    category: "学习",
    exampleKo: "이 책은 재미있어요.",
    exampleZh: "这本书很有意思。",
  },
  {
    korean: "선생님",
    roman: "seonsaengnim",
    meaning: "老师",
    category: "学习",
    exampleKo: "선생님께 질문해요.",
    exampleZh: "向老师提问。",
  },
  {
    korean: "질문",
    roman: "jilmun",
    meaning: "问题；提问",
    category: "学习",
    exampleKo: "질문이 있어요.",
    exampleZh: "我有一个问题。",
  },
  {
    korean: "물",
    roman: "mul",
    meaning: "水",
    category: "餐饮",
    exampleKo: "물 한 잔 주세요.",
    exampleZh: "请给我一杯水。",
  },
  {
    korean: "밥",
    roman: "bap",
    meaning: "饭；米饭",
    category: "餐饮",
    exampleKo: "밥을 먹었어요?",
    exampleZh: "你吃饭了吗？",
  },
  {
    korean: "커피",
    roman: "keopi",
    meaning: "咖啡",
    category: "餐饮",
    exampleKo: "아이스 커피 주세요.",
    exampleZh: "请给我冰咖啡。",
  },
  {
    korean: "맛있어요",
    roman: "masisseoyo",
    meaning: "好吃",
    category: "餐饮",
    exampleKo: "이 음식은 정말 맛있어요.",
    exampleZh: "这个食物真的很好吃。",
  },
  {
    korean: "주세요",
    roman: "juseyo",
    meaning: "请给我",
    category: "餐饮",
    exampleKo: "김밥 하나 주세요.",
    exampleZh: "请给我一个紫菜包饭。",
  },
  {
    korean: "얼마예요",
    roman: "eolmayeyo",
    meaning: "多少钱",
    category: "生活",
    exampleKo: "이거 얼마예요?",
    exampleZh: "这个多少钱？",
  },
  {
    korean: "화장실",
    roman: "hwajangsil",
    meaning: "洗手间",
    category: "生活",
    exampleKo: "화장실이 어디예요?",
    exampleZh: "洗手间在哪里？",
  },
  {
    korean: "어디",
    roman: "eodi",
    meaning: "哪里",
    category: "交通",
    exampleKo: "지하철역이 어디예요?",
    exampleZh: "地铁站在哪里？",
  },
  {
    korean: "지하철",
    roman: "jihacheol",
    meaning: "地铁",
    category: "交通",
    exampleKo: "저는 지하철을 타요.",
    exampleZh: "我坐地铁。",
  },
  {
    korean: "버스",
    roman: "beoseu",
    meaning: "公交车",
    category: "交通",
    exampleKo: "버스가 곧 와요.",
    exampleZh: "公交车马上来。",
  },
  {
    korean: "택시",
    roman: "taeksi",
    meaning: "出租车",
    category: "交通",
    exampleKo: "택시를 불러 주세요.",
    exampleZh: "请帮我叫出租车。",
  },
  {
    korean: "공항",
    roman: "gonghang",
    meaning: "机场",
    category: "交通",
    exampleKo: "공항에 가고 싶어요.",
    exampleZh: "我想去机场。",
  },
  {
    korean: "오늘",
    roman: "oneul",
    meaning: "今天",
    category: "生活",
    exampleKo: "오늘 날씨가 좋아요.",
    exampleZh: "今天天气很好。",
  },
  {
    korean: "내일",
    roman: "naeil",
    meaning: "明天",
    category: "生活",
    exampleKo: "내일 만나요.",
    exampleZh: "明天见。",
  },
  {
    korean: "좋아요",
    roman: "joayo",
    meaning: "好；喜欢",
    category: "生活",
    exampleKo: "한국 음악이 좋아요.",
    exampleZh: "我喜欢韩国音乐。",
  },
  {
    korean: "몰라요",
    roman: "mollayo",
    meaning: "不知道",
    category: "学习",
    exampleKo: "아직 잘 몰라요.",
    exampleZh: "我还不太知道。",
  },
];

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

let koreanVoice = null;

function normalize(text) {
  return text.toLowerCase().trim();
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
  if (!window.speechSynthesis) {
    alert("当前浏览器不支持语音播放。");
    return;
  }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ko-KR";
  utterance.rate = 0.82;
  utterance.pitch = 1;
  if (koreanVoice) {
    utterance.voice = koreanVoice;
  }
  speechSynthesis.speak(utterance);
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
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "没有找到匹配的词条，试试中文、韩文或罗马音。";
    wordGrid.append(empty);
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
  if (state.saved.has(korean)) {
    state.saved.delete(korean);
  } else {
    state.saved.add(korean);
  }
  localStorage.setItem("koreanSavedWords", JSON.stringify([...state.saved]));
  renderWords();
  renderSaved();
}

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
