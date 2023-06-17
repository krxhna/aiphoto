<template>
  <div class="text-3xl flex justify-center items-center h-screen flex-col">
    <div
      v-if="loading"
      class="h-screen gap-3 w-screen flex-col fixed bg-black text-white flex justify-center items-center"
    >
      <p class="animate-pulse">loading...</p>
      <p class="text-sm">check replciate if it processing</p>
    </div>
    <span v-if="response">
      <img :src="response[0]" alt="" />
      {{ response }}
    </span>
    <input type="text" v-model="prompt" class="border border-black p-3" />

    <button
      class="bg-black text-white text-sm capitalize p-3 m-5"
      @click="getdata()"
    >
      generate
    </button>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";

let response = ref();
let prompt = ref("");
let loading = ref(false);

async function getdata() {
  loading.value = true;
  const { data } = await axios.post("/api/create", {
    input_prompt: prompt.value,
  });
  response.value = data;
  loading.value = false;
}
</script>

<style scoped></style>
