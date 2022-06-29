<template>
  <div
    class="block rounded-lg shadow-lg bg-white grid h-screen place-items-center"
  >
    <form>
      <div class="form-group mb-6">
        <input
          type="tel"
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleInput7"
          placeholder="Phone Number"
          v-model="phone"
        />
      </div>
      <div class="form-group mb-6">
        <textarea
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlTextarea13"
          rows="3"
          placeholder="Message"
          v-model="message"
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        @click="onSubmit"
      >
        Send
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "MessageForm",
  data() {
    return {
      phone: "",
      message: "",
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log("on Submit");
      console.log(this.phone);
      console.log(this.message);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
