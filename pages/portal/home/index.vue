<template>
  <section class="page">
    <div class="center">
      <h2 class="title">Olá {{ user.name || "Usuario" }}</h2>
      <UButton @click="getData">Get Data</UButton>
    </div>
  </section>
</template>

<script setup>
const user = ref({
  name: "",
});

const publicUrl = "http://localhost:59031/dev_sl-x";

definePageMeta({
  pageTransition: {
    name: "rotate",
  },
});

const getData = async () => {
  try {
    const response = await $fetch(
      `http://localhost:59031/dev_sl-x/session-info`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    console.log(response);
    if (response.usuario) {
      user.value.name = response.usuario.nome;
    }
  } catch (e) {
    console.log(e);
    console.log("error");
  }
};

onMounted(() => {
  getData();
});
</script>

<style scoped></style>
