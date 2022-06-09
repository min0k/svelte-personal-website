<script>
  import { theme } from "./stores";
  import { themes } from "./data/themes";
</script>

<div>
  <p
    class={$theme.name === "default" && "selected"}
    on:click={() => theme.setTheme(themes.default)}
  >
    &#123; default &#125;
  </p>
  <p
    class={$theme.name === "darkmode" && "selected"}
    on:click={() => theme.setTheme(themes.darkmode)}
  >
    &#123; darkmode &#125;
  </p>
  <p
    class={$theme.name === "aoba" && "selected"}
    on:click={() => theme.setTheme(themes.aoba)}
  >
    &#123; aoba &#125;
  </p>
  <p
    class={$theme.name === "mino" && "selected"}
    on:click={() => theme.setTheme(themes.mino)}
  >
    &#123; mino's choice &#125;
  </p>
</div>

<style>
  div {
    display: flex;
  }
  p {
    padding-right: 8px;
    cursor: pointer;
    color: #9997;
  }
  .selected {
    font-weight: bold;
  }
  p:hover {
    text-decoration: underline;
  }
</style>
