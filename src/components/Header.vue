<template>
  <div class="header">
    <b-navbar toggleable="md" type="dark" fixed="top" id="Header">
      <div class="row mx-md-n5">
        <div class="col px-md-3">
          <img alt="Vue logo" src="../assets/tvm-header-logo.png" />
        </div>
        <div class="col px-md-2">
          <router-link to="/">Dashboard</router-link>
        </div>
      </div>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav class="app-navs">
        <b-navbar-nav>
          <b-col cols="8">
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <form @submit.prevent>
                  <b-row>
                    <b-col cols="10">
                      <b-form-input
                        size="sm"
                        placeholder="Search"
                        v-model="searchInput"
                      ></b-form-input>
                    </b-col>
                    <b-col cols="2">
                      <b-button
                        size="sm"
                        id="searchShows"
                        class="my-2 my-sm-0"
                        type="submit"
                        variant="success"
                        @click="searchQuery(searchInput)"
                        >Search</b-button
                      >
                    </b-col>
                  </b-row>
                </form>
              </b-nav-form>
            </b-navbar-nav>
          </b-col>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    
  </div>
  
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchInput: null,
    };
  },

  methods: {
    searchQuery(searchInput) {
      this.$router && this.$router.push({ name: "Search", params: { searchInput } }).catch(err => {
       if (err.name != "NavigationDuplicated") {
              throw err;
       }
      });
      this.searchInput = "";
    },
  },
};
</script>

<style scoped>
#Header {
  position: relative;
  background-color: #23180d;
  margin-bottom: 25px;
}
.px-md-2 {
  padding-top: 2rem;
}

.app-navs {
  justify-content: flex-end;
}

.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.mt-n1 {
  margin-top: -0.25rem !important;
}

a {
  color: #5c6268;
  margin: 4px;
}
a:hover {
  color: #b2b5b8;
  text-decoration: none;
}
.router-link-exact-active {
  color: #ffffff;
}
#brand {
  color: rgb(173, 169, 169);
}
</style>
