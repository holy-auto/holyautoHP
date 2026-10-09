/* =========================================================
   外部リンク設定
   実際のURLに書き換えてください（空文字のままなら "#" のまま）。
   HTML 側は data-link="book" などの属性でここを参照します。
   ========================================================= */
const LINKS = {
  book: "",      // Square 予約ページ（BOOK NOW）
  line: "",      // 公式LINE 友だち追加 URL（LINE QUOTE / LINEで無料相談）
  x: "",         // X（旧Twitter）
  instagram: "", // Instagram
  mitsumoa: "",  // ミツモア 口コミページ
};

document.querySelectorAll("[data-link]").forEach((el) => {
  const url = LINKS[el.dataset.link];
  if (!url) return;
  el.href = url;
  el.target = "_blank";
  el.rel = "noopener";
});

/* ハンバーガーメニュー */
const drawer = document.getElementById("drawer");
const openBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".drawer__close");

function setDrawer(open) {
  drawer.classList.toggle("is-open", open);
  drawer.setAttribute("aria-hidden", String(!open));
  openBtn.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
}

openBtn.addEventListener("click", () => setDrawer(true));
closeBtn.addEventListener("click", () => setDrawer(false));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setDrawer(false);
});
