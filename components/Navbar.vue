<template>
  <aside>
    <header class="py-[0.95rem] border-b-[1px] border-primary-300">
      <h3 class="text-2xl"><span class="text-primary-400">Dash</span>board</h3>
    </header>
    <div class="links">
      <ul class="links_list">
        <li class="border-b-[1px] border-primary-300">
          <div>
            Contratos
            <ul class="subLinks">
              <li>Dashboard</li>
              <li>Tabela</li>
              <li>Relátorios</li>
            </ul>
          </div>
        </li>
        <li class="border-b-[1px] border-primary-300">
          <div>
            Contratos
            <ul class="subLinks">
              <li>Dashboard</li>
              <li>Tabela</li>
              <li>Relátorios</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup></script>

<style scoped>
aside {
  width: clamp(200px, 100%, 270px);
  height: calc(100vh - 55px);
  /* box-shadow: 5px 0 10px hsl(var(--shadow)); */
  background-color: hsl(var(--card-bg));
}

aside header {
  text-align: center;
}

.links {
  width: 100%;
  height: fit-content;
}

.links_list {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 1.3rem;
  font-weight: 300;
  cursor: pointer;
}

.links_list > li {
  width: 100%;
  padding: 0;
}

.links_list > li > div {
  padding: 10px;
}

.subLinks {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 15px;
  font-size: 0.9rem;
  cursor: pointer;
}

.subLinks li {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 15px;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 5px;
}
</style>
