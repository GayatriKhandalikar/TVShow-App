<template>
  <div class="Dashboard">
    <div v-if="!isLoading">
      <div v-if="!isLoading">
        <div v-if="tvShows">
          <b-container>
            <div v-for="shows in tvShows" :key="shows.key">
              <h1 class="heading">{{ shows[0] }}</h1>

              <b-container>
                <b-row
                  cols="1"
                  cols-sm="2"
                  cols-md="3"
                  cols-lg="4"
                  align-h="center"
                >
                  <b-col
                    id="my-col"
                    v-for="show in shows[1]"
                    :key="show.id"
                  >
                    <Showcard :show="show"></Showcard>
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </b-container>
        </div>
        <div v-else style="margin-top: 5px">
          <h4>No Show Found, <sub>Please try with another show</sub></h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Showcard from "@/components/Showcard.vue";

export default {
  name: "Dashboard",


  components: {
    Showcard,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },

  computed: {
    ...mapState(["tvShows"]),
  },
  created() {
    this.getShow();
  },

  methods: {
    async getShow() {
      this.isLoading = true;
     

      try {
        await this.$store.dispatch("getShow");
     
      } catch (error) {
        this.error = error.message;
      }
      this.isLoading = false;
    },
  },
};
</script>

<style>
.card {
  margin: auto;
  height: 80%;
}
#my-col {
  margin-bottom: 10px;
  margin-top: 10px;
}
.card-body {
  padding: 0.25rem;
}
.heading {
  text-align: left;
  padding-left: 12px;
  border-bottom: 0.25rem;
}

/* .image-cursor{
    cursor: pointer;
} */
</style>
