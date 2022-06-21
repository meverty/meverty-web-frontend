<template>
  <div class="container bg-light mt-5 p-5 round">
    <p class="h1">Impression Dashboard</p>
    <p class="lead">
      메타버스에서 발생한 Impression들을 실시간으로 확인할 수 있는
      Dashboard입니다.
    </p>

    <table class="table mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Impression</th>
          <th scope="col">Interaction</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, i) in datas" :key="i">
          <th scope="row">{{ data.id }}</th>
          <td>{{ data.name }}</td>
          <td>{{ data.impression }}</td>
          <td>{{ data.interaction }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ImpressionView",
  data() {
    return {
      datas: [],
    };
  },

  created() {
    setInterval(() => {
      console.log('aa')
      axios
      .get("https://api.meverty.com/dashboard/statistics")
      .then((response) => {
        this.datas = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    }, 1000)
  },
};
</script>

<style>
.round {
  border-radius: 10px;
}
</style>