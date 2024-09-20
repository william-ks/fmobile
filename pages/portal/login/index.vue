<template>
  <section class="loginPage">
    <UContainer>
      <UCard>
        <div class="box">
          <div class="logo">
            <NuxtImg src="/lovo_navBar.png" />
          </div>
          <ClientOnly>
            <Vueform v-model="form">
              <TextElement
                label="E-mail:"
                name="email"
                inputType="email"
                placeholder="email@exemplo.com"
              />
              <TextElement
                label="Senha:"
                name="password"
                inputType="password"
                placeholder="**********"
              />
              <SelectElement
                label="Empresa"
                name="select"
                placeholder="Selecione uma empresa"
                :items="enterprises"
              />
            </Vueform>
            <UButton class="mt-5" @click="login">Entrar</UButton>
          </ClientOnly>
        </div>
      </UCard>
    </UContainer>
  </section>
</template>

<script setup>
import Card from "~/components/ui/Card/Card";

const router = useRouter();

const form = ref({});

const enterprises = ref([]);

useHead({
  title: "Login",
});

const publicUrl = "http://localhost:59031/dev_sl-x";

const login = async (FormData, form$) => {
  try {
    const response = await $fetch(`${publicUrl}/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        email: form.value.email,
        senha: form.value.password,
        empresaId: form.value.select,
      },
    });
    console.log(response);
    if (response.redirect) {
      router.push("/portal/home");
    }
  } catch (e) {
    console.log(e);
    console.log("Error ao fazer login!");
  }
};

const getEnterprises = async () => {
  try {
    const { data, error } = await useFetch(`${publicUrl}/empresas-select`, {
      method: "GET",
      credentials: "include",
    });

    if (error.value) {
      throw new Error(error.value);
    }

    data.value.forEach((el) => {
      enterprises.value.push({
        value: el.id,
        label: el.nome,
      });
    });
  } catch (e) {
    console.log(e);
    console.log("Error ao buscar empresas!");
  }
};

onMounted(() => {
  getEnterprises();
});
</script>

<style scoped>
.loginPage {
  width: 100%;
  position: absolute;
  top: 45%;
  transform: translateY(-45%);
}

.center {
  height: calc(100vh - 54px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.form {
  width: 100%;
  margin-bottom: 10px;
}

.logo {
  max-width: 120px;
  max-height: 120px;
  background-color: white;
  border-radius: 200px;
  overflow: hidden;
  padding: 6px;
  box-shadow: 0 5px 10px hsl(var(--shadow));
}
</style>
