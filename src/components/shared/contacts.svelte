<script>
  export let link;
  const contacts = [
  {
    title: 'Email',
    href: 'mailto:melissafernandes93@yahoo.com.br',
    icon: 'mail'
  },
  {
    title: 'GitHub',
    href: 'https://github.com/mellunar',
    icon: 'logo-github'
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/melissafernandes93/',
    icon: 'logo-linkedin'
  },
]
</script>

<style lang="scss">
  @import '../../style/variables.scss';

  ion-icon {
    pointer-events: none;
  }

  .e-home__contacts {
    font-size: 30px;
    margin-top: 15px;

    a:not(:nth-of-type(1)) {
      margin-left: 25px;
    }
  }
  
  .e-main-footer__contacts--link{
    font-size: 24px;
    color: $text;

    &:hover {
      color: $link;
    }
    &:not(:first-of-type) {
      margin-left: 15px;
    }
  }

  @media (max-width: 1023px){
    .e-main-footer__contacts {
      margin-top: 10px;
    }
  }
</style>

<div class={$$props.class}>
  {#each contacts as {title, href, icon}}
    <a href={href} class={link} title={title}><ion-icon name={icon}></ion-icon></a>
  {/each}
</div>