<template>
  <div>
    <h1>Home View</h1>
    <p>Count: {{ getCount }}</p>
    <!-- <p>Double Count: {{ counter.doubleCount }}</p> -->
    <div class="space-x-3">
      <button @click="increment()">Increment</button>
      <button @click="randomizeCounter()">randomizeCounter</button>
      <button @click="doubleCount()">doubleCount</button>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "@/stores/counter";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Counter",
  // props: {},
  computed: {
    ...mapState(useCounterStore, ["getCount"]),
  },
  methods: {
    // gives access to this.increment() inside the component
    // same as calling from store.increment()
    ...mapActions(useCounterStore, [
      "increment",
      "randomizeCounter",
      "doubleCount",
    ]),
    // same as above but registers it as this.myOwnName()
    // ...mapActions(useCounterStore, { myOwnName: "increment" }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
