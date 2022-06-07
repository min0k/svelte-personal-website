<script>
  import ColorIcons from "./ColorIcons.svelte";
  import Section from "./Section.svelte";
  import { projects } from "./data/projects";
  import { misc } from "./data/misc";
  import About from "./About.svelte";
  import Footer from "./Footer.svelte";
  import { theme } from "./stores";
</script>

<div class="pageContainer" style="background-color: {$theme.background};">
  <main>
    <ColorIcons />
    <Section sectionName="projects" sectionItems={projects} />
    <Section sectionName="misc" sectionItems={misc} />
    <About />
    <Footer />
  </main>
</div>

<style>
  .pageContainer {
    height: 100vh;
  }
  main {
    padding: 94px 24px;
    max-width: 590px;
    margin: 0 auto;
  }
</style>
