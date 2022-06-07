<script>
  export let sectionName;
  export let sectionItems;
  import { theme } from "./stores";
</script>

<section>
  <p style="color: {$theme.header};">{sectionName}</p>
  <ul>
    {#each sectionItems as item}
      <li style="color: {$theme.text};">
        {item.name}
        <span style="color: {$theme.secondaryText};">{item.date}</span>
      </li>
    {/each}
  </ul>
</section>

<style>
  p {
    font-weight: bold;
  }
  ul {
    padding: 0;
  }
  span {
    float: right;
  }
</style>
