<script>
  import { t } from "svelte-i18n";
  export let title, img, icon, build, code, live;
</script>
<style lang="scss">
  @import './gallery-item.scss';
</style>

<article class="e-gallery-item">
  <div class="e-gallery-item__container">
    <img alt={title} src={img} />
    <div class="e-gallery-item__info">
      <div class="e-gallery-item__subinfo">
        <div class="e-gallery-item__icon">
          <ion-icon name={`logo-${icon}`}></ion-icon>
          <div class="e-gallery-item__name">{build}</div>
        </div>
        <div class="e-gallery-item__icon e-gallery-item__icon--code">
          <ion-icon name="code-slash"></ion-icon>
          <div class="e-gallery-item__name">{$t('portfolio.code')}</div>
          <a href={code} class="u-linkfill"></a>
        </div>
        <a href={live} class="u-linkfill"></a>
      </div>
    </div>
    <a href={live} class="u-linkfill"></a>
  </div>
  <a href={live}><h3 class="e-gallery-item__title">{title}</h3></a>
</article>