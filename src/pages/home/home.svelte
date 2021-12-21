<script>
  import { t } from "svelte-i18n";
  import SvelteMarkdown from 'svelte-markdown';
  import Contacts from '../../components/shared/contacts.svelte';
  import PortfolioGallery from '../../components/shared/portfolio-gallery.svelte';
  import dreamer from '../../assets/dreamer.svg';
  import iconSvelte from '../../assets/icons/logo-svelte.svg';

  const skills = [
    {name: 'Sass', icon: 'sass'},
    {name: 'JavaScript', icon: 'javascript'},
    {name: 'React', icon: 'react'},
    {name: 'Angular', icon: 'angular'},
    {name: 'Svelte', icon: 'svelte'}
  ]
</script>

<style lang="scss">
  @import './home.scss';
</style>

<header class="e-home__header">
  <div class="e-home__avatar"><img alt={$t('home.avatar')} src='https://live.staticflickr.com/65535/51349705852_7df4bd604b_o.jpg' /></div>
  <p class="e-home__p1">{$t('home.header1')}</p>
  <h1 class="e-home__name">Melissa Fernandes</h1>
  <p class="e-home__p2">{$t('home.header2')}</p>
  <Contacts class="e-home__contacts" />
</header>

<main class="c-main">
  <section class="c-section">
    <h2>{$t('home.title1')}</h2>
    <div class="e-home__about">
      <div class="e-home__about--img"><img alt="" src={dreamer} /></div>
      <div class="e-home__about--text"><SvelteMarkdown source={$t('home.bio')} /></div>
    </div>
  </section>
  <section class="c-section">
    <h2>{$t('home.title2')}</h2>
    <div class="e-home__skills">
      {#each skills as {name, icon} }
        {#if icon === 'svelte'}
          <div class="e-home__skills--container">
            <div class="e-home__skills--icon"><ion-icon src={iconSvelte}></ion-icon></div>
            <h3>{name}</h3>
          </div>
        {:else}
          <div class="e-home__skills--container">
            <div class="e-home__skills--icon"><ion-icon name={`logo-${icon}`}></ion-icon></div>
            <h3>{name}</h3>
          </div>
        {/if}
      {/each}
    </div>
  </section>
  <section class="c-section">
    <h2>{$t('home.title3')}</h2>
    <PortfolioGallery limit={5} />
  </section>
</main>