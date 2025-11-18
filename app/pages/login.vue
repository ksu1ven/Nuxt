<template>
  <div>
    <div>Login page</div>

    <form
      action=""
      @submit.prevent="login"
      class="mb-10 flex w-[500px] flex-col gap-y-4 rounded-xl bg-yellow p-4"
    >
      <input type="text" v-model="email" class="p-3 text-black" />

      <button type="submit" class="rounded--xl bg-green py-3">
        Submit Form
      </button>

      <button type="button" class="rounded--xl bg-red py-3" @click="logout">
        LogOut
      </button>
    </form>

    <pre>
	loggedIn {{ loggedIn }}
  </pre
    >

    <pre>
	session {{ session }}
  </pre
    >

    <pre>user  {{ user }}</pre>
  </div>
</template>

<script setup lang="ts">
const email = ref("");

const {
  loggedIn,
  session,
  user,
  clear,
  fetch: refreshSession,
} = useUserSession();

const login = async () => {
  const response = await $fetch("/api/login", {
    method: "POST",
    body: { email: email.value },
  });
  console.log(response);
  await refreshSession();
};

const logout = async () => {
  const response = await $fetch("/api/logout", {
    method: "POST",
  });
  console.log(response);
  await clear();
};
</script>
