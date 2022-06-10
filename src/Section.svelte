<script>
  export let sectionName;
  export let sectionItems;
  import { theme } from "./stores";
</script>

<section>
  <p style="color: {$theme.header};">{sectionName}</p>
  <ul>
    {#each sectionItems as item}
      <li>
        <a style="color: {$theme.text};" href={item.href}> {item.name}</a>
        <span style="color: {$theme.secondaryText};">{item.date}</span>
      </li>
    {/each}
  </ul>
</section>

<style>
  a {
    color: black;
    line-height: 24px;
  }
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
