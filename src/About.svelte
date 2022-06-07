<script>
  import SocialIcons from "./SocialIcons.svelte";
  import { theme } from "./stores";
</script>

<section>
  <p style="color: {$theme.header};" class="title">about</p>
  <p style="color: {$theme.text};">
    web dev intern at vizio, former infosec analyst at adaptive biotechnologies
  </p>
  <SocialIcons />
</section>

<style>
  .title {
    font-weight: bold;
  }
</style>
