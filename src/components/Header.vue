<template>
  <div class="header">
    <b-navbar toggleable="md" type="dark" fixed="top" id="Header">
      <img alt="Vue logo" src="../assets/tvm-header-logo.png" />
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav class="app-navs">
        <b-navbar-nav>
          <b-row>
            <b-col>
              <router-link id="dashboardroute" to="/">Dashboard</router-link>
              <!-- <router-link id="aboutroute" to="/about">About</router-link> -->
            </b-col>
            <b-col>
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
          </b-row>
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
      
      this.$router && this.$router.push({ name: "Search", params: { searchInput } });
     // this.searchInput = "";
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

.app-navs {
  justify-content: center;
}

.navbar-nav {
  display: inline;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
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
  color: rgb(221, 25, 25);
}
</style>
