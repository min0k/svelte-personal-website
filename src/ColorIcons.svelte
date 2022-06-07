<script>
  import { theme } from "./stores";
  import { themes } from "./data/themes";
</script>

<svg on:click={() => theme.setTheme(themes.default)} width="24" height="24">
  <rect width="24" height="24" fill="#AB7C94" />
  Sorry, your browser does not support inline SVG.
</svg>
<svg on:click={() => theme.setTheme(themes.pastel)} width="24" height="24">
  <rect width="24" height="24" fill="#AE5911" />
  Sorry, your browser does not support inline SVG.
</svg>
<svg width="24" height="24">
  <rect width="24" height="24" fill="#DB7C94" />
  Sorry, your browser does not support inline SVG.
</svg>
<svg width="24" height="24">
  <rect width="24" height="24" fill="#CCB994" />
  Sorry, your browser does not support inline SVG.
</svg>

<style>
  svg {
    padding-right: 4px;
  }
</style>
