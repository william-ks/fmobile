<template>
  <section class="loginPage">
    <UContainer>
      <UCard>
        <div class="box">
          <div class="logo">
            <NuxtImg src="/lovo_navBar.png" />
          </div>
          <ClientOnly>
            <Vueform class="form">
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
            <UButton to="/portal/home">Entrar</UButton>
          </ClientOnly>
        </div>
      </UCard>
    </UContainer>
  </section>
</template>

<script setup>
import Card from "~/components/ui/Card/Card";

const router = useRouter();

const enterprises = ref([
  {
    value: 1,
    label: "SL Soluções",
  },
]);

useHead({
  title: "Login",
});

// const publicUrl = useRuntimeConfig().public.baseURL;

// const login = async (FormData, form$) => {
//   try {
//     await fetch(`${publicUrl.value}/login`, {
//       method: "POST",
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: {
//         email: form$.data.email,
//         senha: form$.data.password,
//         empresaId: form$.data.select,
//       },
//     });

//     router.push("/portal/home");
//   } catch (e) {
//     console.log(e);
//     console.log("Error ao fazer login!");
//   }
// };

// const getEnterprises = async () => {
//   try {
//     const { data, error } = await useFetch(`${publicUrl}/empresas-select`, {
//       method: "GET",
//       credentials: "include",
//     });

//     if (error.value) {
//       throw new Error(error.value);
//     }

//     data.value.forEach((el) => {
//       enterprises.value.push({
//         value: el.id,
//         label: el.nome,
//       });
//     });
//   } catch (e) {
//     console.log(e);
//     console.log("Error ao buscar empresas!");
//   }
// };
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
