<template>
  <div class="footer">
    <footer>
      <div>© 2021 Copyright:<a href="#">tv-show-app.com</a></div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  background-color: #23180d;
  height: 80px;
  color: #fff;
}

footer {
  padding-top: 10px;
}

a {
  color: #fff;
  margin: 4px;
}
a:hover {
  color: #b2b5b8;
  text-decoration: none;
}
</style>
