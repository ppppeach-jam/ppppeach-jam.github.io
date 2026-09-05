// テーマ切替: 保存された選択 > OS設定 の順で初期化（head内で実行しちらつき防止）
(function () {
  var saved = localStorage.getItem('theme');
  var theme = saved || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
})();

function updateThemeIcons() {
  var dark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.querySelectorAll('.theme-toggle i').forEach(function (i) {
    i.className = dark ? 'fas fa-sun' : 'fas fa-moon';
  });
}

function toggleTheme() {
  var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcons();
}

document.addEventListener('DOMContentLoaded', updateThemeIcons);
