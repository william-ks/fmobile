<template>
  <NuxtLayout>
    <NuxtPage :transition="{ name: 'rotate', mode: 'out-in' }" />
  </NuxtLayout>

  <UNotifications />
</template>

<script setup>
import { App } from "@capacitor/app";

function isMobile() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

const mobile = useState("isMobile", () => isMobile());

if (mobile.value) {
  App.addListener("backButton", (info) => {
    if (info.canGoBack) {
      window.history.back();
    } else {
      App.exitApp();
    }
  });
} else {
  console.log("Você está em um dispositivo desktop.");
}

const appConfig = useAppConfig();
const colorPrimary = localStorage.getItem("nuxt-ui-primary");
const colorGray = localStorage.getItem("nuxt-ui-gray");

if (colorPrimary) {
  appConfig.ui.primary = colorPrimary;
} else {
  localStorage.setItem("nuxt-ui-primary", appConfig.ui.primary);
}
if (colorGray) {
  console.log('test');
  appConfig.ui.gray = colorGray;
} else {
  localStorage.setItem("nuxt-ui-gray", appConfig.ui.gray);
}
</script>

<style>
/* animation FADE IN & FADE OUT  */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/* animation rotate */
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}

/* slide-left & slide-right */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>
