<template>
  <div class="dark:bg-gray-950 bg-gray-200">
    <Header />
    <main>
      <slot />
    </main>
    <footer class="footer dark:bg-gray-800 bg-white">
      <div class="center">
        <h2 class="cursor-pointer">
          Desenvolvido Por Will Code Systems | 2024 ®
        </h2>
      </div>
    </footer>
  </div>
</template>

<script setup>
import ToggleTheme from "~/components/ui/ToggleTheme/ToggleTheme.vue";
</script>

<style>
main {
  width: 100%;
  min-height: calc(100vh - 55px - 59px);
}

footer.footer {
  width: 100%;
  padding: 15px 0;
  box-shadow: 0 -5px 10px hsl(var(--shadow));
  text-align: center;
}

footer.footer h2 {
  font-weight: 400;
  color: hsl(var(--foreground));
}
</style>
