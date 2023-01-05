<template>
  <main>
    <h2>Page not found</h2>
    <router-link to="/">Go to homepage</router-link>
  </main>
</template>

<style scoped lang="scss">
main {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  a {
    border: 2px solid var(--color4);
    border-radius: 999px;
    padding: 0.2rem 1rem;
    width: fit-content;

    &:hover {
      background-color: var(--color4);
    }
  }
}
</style>
