<template>
  <MessageForm />
</template>

<script>
import MessageForm from "./components/MessageForm.vue";

export default {
  name: "App",
  components: {
    MessageForm,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
