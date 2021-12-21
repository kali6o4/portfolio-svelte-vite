<style lang="scss">
  @import '../../style/variables.scss';

  .e-main-footer {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: auto;
    padding: 20px;
    background: var(--module);
    border-radius: 20px 20px 0 0;

    & a{
      color: $text;

      &:hover {
        color: $link;
      }
    }

    &__mel {
      font-size: 16px;
      font-weight: 400;
    }
  }

  @media (min-width: 769px) {
    .e-main-footer {
      justify-content: space-between;
    }
  }

  @media (max-width: 768px) {
    .e-main-footer {
      flex-direction: column;
    }
  }
</style>

<script>
  import Contacts from './contacts.svelte';
</script>

<footer class="e-main-footer">
  <h6 class="e-main-footer__mel"><a href="/">[Melissa Fernandes]</a></h6>
  <Contacts class="e-main-footer__contacts" link="e-main-footer__contacts--link" />
</footer>