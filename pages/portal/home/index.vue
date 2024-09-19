<template>
  <section class="page">
    <div class="center">
      <h2 class="title">Olá {{ user.name || "Usuario" }}</h2>
      <NuxtLink to="/"><v-btn> Index page </v-btn></NuxtLink>
    </div>
  </section>
</template>

<script setup>
const user = ref({
  name: "",
});

const publicUrl = useState("publicUrl");

definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})

const getData = async () => {
  try {
    const { data, error } = await useFetch(`${publicUrl.value}/session-info`, {
      method: "GET",
      headers: {
        credentials: "include",
      },
    });

    if (data.value) {
      const response = await JSON.parse(data.value);
      user.value.name = response.usuario.nome;
    }

    if (error.value) {
      throw error.value;
    }
  } catch (e) {
    console.log(e);
    console.log("error");
  }
};
</script>

<style scoped></style>
