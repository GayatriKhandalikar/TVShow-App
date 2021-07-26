<template>
  <div class="page-not-found">
    <div class="error-msg">
      <h1>404!</h1>
      <h2>Page Not Found</h2>
      <div>
        <b>The resource requested could not be foundon this server!!!</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style scoped>
.page-not-found {
  min-height: calc(100% - 125px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e9ecef;
}
.error-msg {
  margin: auto;
  padding: 10px;
  border-radius: 3px 3px 3px 3px;
  width: 50%;
}
</style>
