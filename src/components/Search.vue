<template>
  <div>
    <div v-if="!isLoading">
      <div v-if="shows">
        <b-container>
          <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="4" align-h="center">
            <b-col id="my-col" v-for="show in shows" :key="show.id">
              <Showcard :show ="show" ></Showcard>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div v-else style="margin-top: 5px">
        <h4>No Show Found, <sub>Please try with another show</sub></h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Showcard from "@/components/Showcard.vue";
export default {
  name: "Search",

  components: {
    Showcard,
  },

  data() {
    return {
      isLoading: false,
      error: null,
      shows: [],
    };
  },

  computed: {
    ...mapState(["searchResults"]),
  },

created(){
 this.getSearchResults(this.$route.params.searchInput);
},
  

  methods: {
    async getSearchResults(searchInput) {
      if (searchInput.trim() !== "") {
        this.isLoading = true;
        try {
         
          await this.$store.dispatch("getSearchResults", searchInput);
        } catch (error) {
          this.error = error.message;
        }
        this.shows = this.searchResults;
        this.isLoading = false;
        this.searchInput = "";
      }
    },
  },
};
</script>

<style scoped>
.search {
  min-height: calc(100% - 125px);
  background-color: #e9ecef;
  /* text-align: center; */
}

#my-col {
  margin-bottom: 10px;
  margin-top: 10px;
}

input[type="text"] {
  width: 40%;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  background-color: white;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 5px 20px 5px 40px;
}

#searchBtn {
  background-color: rgb(221, 25, 25);
  border: none;
  color: white;
  border-radius: 4px;
  margin: 0px;
  padding: 6px 10px;
}
</style>
