<script>
	import { Router, Route } from "svelte-navigator";
	import MainNav from "./components/shared/main-nav.svelte";
	import MainFooter from "./components/shared/main-footer.svelte";
  import Home from "./pages/home/home.svelte";
	import Bio from "./pages/bio/bio.svelte";
	import Portfolio from "./pages/portfolio/portfolio.svelte";
	import NotFound from "./pages/404/not-found.svelte";
	import Redirect from "./components/redirect.svelte";

  document.title = 'Pretty Alright Tattoos - prettyalrighttattoos';
</script>

<style global lang="scss">
  @import './app.scss';
</style>

<Router primary={false}>
	<MainNav />
	
	<Route path="/"><Home /></Route>
	<Route path="/bio"><Bio /></Route>
	<Route path="/portfolio"><Portfolio /></Route>
	<Route path="/404"><NotFound /></Route>
	<Route path="*"><Redirect to="/404" /></Route>

	<MainFooter />
</Router>

