<script>
  import { onDestroy, onMount } from "svelte";
  import GalleryItem from "./gallery-item.svelte";
  import { useLocation } from "svelte-navigator";
  import { t } from "svelte-i18n";
  import SvelteMarkdown from 'svelte-markdown';
  import { errorState, loadingState, portfolioQuery } from '../../state/store';
  import { fetchData } from '../../firebase';
  import timeManagement from '../../assets/time_management.svg';
  import serverDown from '../../assets/server_down.svg';
  
  export let limit;

  const location = useLocation();
  let unsubscribe;
  let gallery = [];
  
  onMount(() => {
    unsubscribe = portfolioQuery.subscribe((x) => {
      if (x.length < 1) {
        fetchData();
      }
      
      gallery = x;

      if (limit) {
        while (x.length > limit) {
          gallery.shift();
        }
      }
    });
  })
  onDestroy(() => {
    unsubscribe();
  })
</script>
<style lang="scss">
  .e-portfolio-gallery {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    :global(p) {
      width: 100%;
      text-align: center;
      margin-top: 10px;
    }

    &__status {
      max-width: 350px;
      padding: 20px 0;

      img {
        width: 100%;
        pointer-events: none;
        user-select: none;
      }
      h3 {
        margin-top: 10px;
        font-size: 24px;
        font-weight: 500;
        text-align: center;
      }

      p {
        text-align: center;
        margin-top: 5px;
      }
    }
  }
</style>

<div class="e-portfolio-gallery">
  {#if $loadingState}
    <div class='e-portfolio-gallery__status'>
      <img alt={$t('base.loading')} src={timeManagement} />
      <h3>{$t('base.loading')}</h3>
    </div>
  {:else if $errorState}
    <div class='e-portfolio-gallery__status'>
      <img alt={$t('base.error')} src={serverDown} />
      <h3>{$t('base.error')}</h3>
      <p>{$t('base.try')}</p>
    </div>
  {:else if gallery.length > 0 && !$loadingState}
    {#each gallery as {title, img, icon, build, code, live}}
      <GalleryItem title={title} img={img} icon={icon} build={build} code={code} live={live} />
    {/each}
  {/if}
  {#if $location.pathname === '/'}
    <SvelteMarkdown source={$t('home.portfolio')} />
  {/if}
</div>