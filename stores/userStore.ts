import { defineStore } from "pinia";

export const useUserStore = defineStore("useUserStore", () => {
  const user = ref({});
  const publicUrl = useRuntimeConfig().public.baseURL;

  const login = async (form: ILoginForm) => {
    try {
      const response = await $fetch(`${publicUrl}/login`, {
        method: "POST",
        credentials: "include",
        body: {
          ...form,
        },
      });

      console.log(response);
    } catch (e) {
      console.log(e);
      console.log("Error ao fazer login!");
    }
  };

  return {
    user,
    login,
  };
});

interface ILoginForm {
  email: string;
  password: string;
  empresaId: number;
}
