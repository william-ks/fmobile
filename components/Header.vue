<template>
  <header class="py-3 dark:bg-gray-800 bg-white">
    <UContainer>
      <div class="flex justify-between items-center">
        <UIcon
          class="cursor-pointer text-3xl"
          name="uil:bars"
          @click="addToast"
        />
        <ToggleTheme />
        <Avatar src="https://i.pinimg.com/564x/6b/ec/3d/6bec3df99777ff473fbbc7e5e4d1315d.jpg" />
      </div>
    </UContainer>
  </header>
</template>

<script setup>
import ToggleTheme from "~/components/ui/ToggleTheme/ToggleTheme.vue";
import Avatar from "~/components/ui/Avatar/Avatar.vue";

const toast = useToast();

const addToast = () => {
  toast.add({
    color: "teal",
    title: "Nav bar",
    description: "Opened navbar.",
    timeout: 2000,
  });
};
</script>

<style scoped>
header {
  width: 100%;
  box-shadow: 0 5px 10px hsl(var(--shadow));
  /* background-color: hsl(var(--card-bg)); */
}
</style>
