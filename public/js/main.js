import updateContent from './update-content.js';

window.onload = async () => {
  const root = document.getElementById('app');

  const routes = [
    { path: '/', name: 'NFCS AE-FUNAI HFC' },
    { path: '/sermons', name: 'Sermons | NFCS AE-FUNAI HFC' },
    { path: '/news', name: 'News | NFCS AE-FUNAI HFC' },
    { path: '/events', name: 'Events | NFCS AE-FUNAI HFC' },
    { path: '/about', name: 'About | NFCS AE-FUNAI HFC' },
    { path: '/contact', name: 'Contact | NFCS AE-FUNAI HFC' }
  ];

  const getContent = async (page) => {
    let content = '';
    try {
      content = await (await fetch(`contents/${page}.html`)).text();
    } catch (error) {
      alert(error.message);
      console.error(error);
    } finally {
      return content;
    }
  };

  const populateContent = async (route) => {
    document.title = route.name;
    let pageName = route.path.substring(1);
    if (!pageName) pageName = 'home';
    const pageContent = await getContent(pageName);
    if (pageContent) root.innerHTML = pageContent;
    updateContent();
  };

  const currentPath = window.location.pathname;
  const route = routes.filter((r) => r.path === currentPath)[0];
  if (route) {
    populateContent(route);
  } else {
    window.location.pathname = '/';
  }

  const navigate = async (e) => {
    $('a.js-fh5co-nav-toggle').removeClass('active');
    $('body').removeClass('overflow offcanvas');
    
    Array.from(document.querySelectorAll('.fh5co-nav ul li.active')).forEach(
      (el) => el.classList.remove('active')
    );
    e.target.parentElement.classList.add('active');

    const route = e.target.attributes[0].value;
    const routeInfo = routes.filter((r) => r.path === route)[0];
    if (!routeInfo) {
      window.location.pathname = '/';
    } else {
      window.history.pushState({}, '', routeInfo.path);
      populateContent(routeInfo);
    }
  };

  Array.from(document.querySelectorAll('[router-link]')).forEach((route) =>
    route.addEventListener('click', navigate, false)
  );
};
