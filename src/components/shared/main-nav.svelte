<script>
  import { onMount, onDestroy } from "svelte";
	import { Link } from "svelte-navigator";
  import { locale, t } from "svelte-i18n";
  import { useLocation } from "svelte-navigator";

  let status = 'closed';
  let theme = 'light';
  let userLocale, pt;

  const location = useLocation();
  const pages = ['bio','portfolio'];
  const body = document.querySelector('body');
  const storageTheme = localStorage.getItem('theme');

  onMount(() => {
    locale.subscribe((x) => userLocale = x);
    pt = userLocale.includes('pt');

    if (storageTheme === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches && storageTheme !== "light") {
      setTheme('dark');
    }

    window.addEventListener("resize", windowResize);
  })

  onDestroy(() => {
    window.removeEventListener("resize", windowResize);
  })

  function windowResize(){
    if(window.innerWidth > 1023){
      if(status === 'opened'){closeMenu()}
    }
  };

  function openMenu() {
    body.classList.add('u-menu-opened');
    status = 'opened';
    console.log(status)
  }

  function closeMenu() {
    body.classList.remove('u-menu-opened');
    status = 'closed';
  }

  function setTheme(mode) {
    theme = mode;
    body.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
  }

  function themeHandler() {
    if (theme === 'light') {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }

  function languageHandler() {
    if (pt) {
      locale.set('en');
      localStorage.setItem('language', 'en');
      pt = false;
    }
    else {
      locale.set('pt');
      localStorage.setItem('language', 'pt');
      pt = true;
    }
  }
</script>
<style global lang="scss">
  @import './main-nav.scss';
</style>

<nav class="e-mainnav">
  <button class="u-mobile-only e-mainnav__button e-mainnav__button--menu" on:click={() => openMenu()}>
    <ion-icon name='menu-outline' class="u-position-center"></ion-icon>
  </button>
  <div class="e-mainnav__logo"><Link to="/" class="e-mainnav__link">[Melissa Fernandes]</Link></div>
  <ul class="e-mainnav__pagelist" data-menu={status}>
    <button class="u-mobile-only e-mainnav__pagelist--close" on:click={() => closeMenu()}><ion-icon name='close'></ion-icon></button>
    {#each pages as page}
      <li><Link to={`/${page}`} class={`e-mainnav__item ${$location.pathname === `/${page}` ? 'e-mainnav__item--selected' : ''}`}  on:click={() => {if(window.innerWidth < 1024){closeMenu()}}}>{page}</Link></li>
    {/each}
  </ul>
  <button class="u-margin-left--auto-mobile e-mainnav__button" on:click={() => languageHandler()}>
    <span class="u-position-center" title={$t('base.language')}>{pt ? 'EN' : 'PT'}</span>
  </button>
  <button class="e-mainnav__button e-mainnav__button--theme" on:click={() => themeHandler()} aria-hidden>
    <ion-icon name={theme === 'light' ? 'moon' : 'sunny'} class="u-position-center"></ion-icon>
  </button>
</nav>