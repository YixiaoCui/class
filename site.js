(() => {
  const body = document.body;
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  const menuButton = document.querySelector('.menu-button');
  const themeButton = document.querySelector('.theme-button');
  const panel = document.querySelector('.search-panel');
  const searchInput = document.querySelector('#site-search');
  const results = document.querySelector('.search-results');
  const searchable = [...document.querySelectorAll('.course-nav a, .lesson-card')];

  const closeMenu = () => {
    body.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    if (overlay) overlay.hidden = true;
  };

  menuButton?.addEventListener('click', () => {
    const open = !body.classList.contains('menu-open');
    body.classList.toggle('menu-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    if (overlay) overlay.hidden = !open;
  });
  overlay?.addEventListener('click', closeMenu);

  const savedTheme = localStorage.getItem('course-theme');
  if (savedTheme === 'dark') body.classList.add('dark');
  themeButton?.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('course-theme', body.classList.contains('dark') ? 'dark' : 'light');
  });

  const openSearch = () => {
    panel.hidden = false;
    requestAnimationFrame(() => panel.classList.add('visible'));
    searchInput?.focus();
  };
  const closeSearch = () => {
    panel.classList.remove('visible');
    setTimeout(() => { panel.hidden = true; }, 160);
  };
  document.querySelector('.search-button')?.addEventListener('click', openSearch);
  document.querySelector('.search-close')?.addEventListener('click', closeSearch);
  panel?.addEventListener('click', (event) => { if (event.target === panel) closeSearch(); });

  searchInput?.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    results.innerHTML = '';
    if (!query) {
      results.innerHTML = '<p class="search-empty">输入关键词，搜索当前课程目录。</p>';
      return;
    }
    const matches = searchable.filter((item, index, list) =>
      item.textContent.toLowerCase().includes(query) && list.findIndex(x => x.href === item.href) === index
    ).slice(0, 8);
    results.innerHTML = matches.length
      ? matches.map(item => `<a href="${item.href}">${item.textContent.trim()}<span>→</span></a>`).join('')
      : '<p class="search-empty">没有找到匹配内容。</p>';
  });

  document.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault(); openSearch();
    }
    if (event.key === 'Escape') { closeSearch(); closeMenu(); }
  });
})();

