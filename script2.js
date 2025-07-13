let allVideos = [
  {
    id: "nhhsmV03knU",
    title: "split() Fonksiyonu - 1 Dakikada Python",
    description: "split() fonksiyonu, bir string'i boşluk veya belirli bir ayıraca göre parçalara ayırır.",
    code: "text = \"Merhaba dünya\"\nkelimeler = text.split()\nprint(kelimeler)  # ['Merhaba', 'dünya']"
  },
  {
    id: "yWpR63iUcMI",
    title: "join() Fonksiyonu - Listeyi Stringe Çevir",
    description: "join() fonksiyonu, bir listeyi belirli bir ayırıcı ile birleştirerek string oluşturur.",
    code: "kelimeler = ['Python', 'çok', 'güçlü']\ncumle = ' '.join(kelimeler)\nprint(cumle)  # Python çok güçlü"
  }
];

function loadVideo(videoId, description, code, element) {
  const videoFrame = document.getElementById("videoFrame");
  const videoDescription = document.getElementById("videoDescription");
  const videoCode = document.getElementById("videoCode");
  videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
  videoDescription.textContent = description;
  videoCode.textContent = code;
  document.querySelectorAll('#videoList a').forEach(a => a.classList.remove('active'));
  if (element) element.classList.add('active');
}

function renderVideos(videos) {
  const videoList = document.getElementById("videoList");
  videoList.innerHTML = '';
  videos.forEach((video, index) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = video.title;
    a.href = "#";
    a.onclick = function () {
      loadVideo(video.id, video.description, video.code, a);
      return false;
    };
    li.appendChild(a);
    videoList.appendChild(li);

    if (index === 0) loadVideo(video.id, video.description, video.code, a);
  });
}

function filterVideos(term) {
  const filtered = allVideos.filter(v => v.title.toLowerCase().includes(term.toLowerCase()));
  renderVideos(filtered);
}

function copyCode() {
  const code = document.getElementById("videoCode").textContent;
  navigator.clipboard.writeText(code).then(() => {
    alert("Kod kopyalandı!");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("searchInput").addEventListener("input", (e) => {
    filterVideos(e.target.value);
  });

  renderVideos(allVideos);
});
