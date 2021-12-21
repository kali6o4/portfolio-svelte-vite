<script>
  import { t } from "svelte-i18n";
  import SvelteMarkdown from 'svelte-markdown';
  import moonlight from '../../assets/moonlight.svg';
</script>
<style lang="scss">
  .e-bio-container {
    max-width: 800px;
    margin: auto;
    text-align: justify;

    img {
      width: 100%;
    }

    :global(p) {
      margin-top: 10px;
    }
  }
</style>

<h1 class="c-h1">{$t('bio.title')}</h1>
<main class="c-main">
  <section class="c-section">
    <div class="e-bio-container">
      <img alt={$t('bio.alt')} src={moonlight} />
      <SvelteMarkdown source={$t('bio.text')} />
    </div>
  </section>
</main>