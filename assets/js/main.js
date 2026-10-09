/* =========================================================
   外部リンク設定
   実際のURLに書き換えてください（空文字のままなら "#" のまま）。
   HTML 側は data-link="book" などの属性でここを参照します。
   ========================================================= */
const LINKS = {
  book: "",      // Square 予約ページ
  line: "",      // 公式LINE 友だち追加 URL
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
const openBtn = document.querySelector(".menu-btn");
const closeBtn = drawer.querySelector(".drawer__close");

function setDrawer(open) {
  drawer.classList.toggle("is-open", open);
  drawer.setAttribute("aria-hidden", String(!open));
  openBtn.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
  if (open) closeBtn.focus();
}

openBtn.addEventListener("click", () => setDrawer(true));
closeBtn.addEventListener("click", () => setDrawer(false));
drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setDrawer(false)));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && drawer.classList.contains("is-open")) {
    setDrawer(false);
    openBtn.focus();
  }
});

/* コピーライト年 */
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
