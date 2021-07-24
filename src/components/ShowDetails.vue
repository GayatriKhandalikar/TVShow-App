<template>
  <div class="show-details">
    <b-container fluid="sm">
      <div v-if="showDetails">
        <b-card>
          <b-jumbotron :header="showDetails.name" align-left>
            <p v-html="showDetails.summary">
              {{showDetails.summary }}
            </p>
            <b-row>
              <b-col cols="2">
                <b-card   
                  :img-src="showDetails.image && showDetails.image.medium"
                  img-alt="Card image"
                  img-left
                  tag="article"
                  style="max-width: 20rem"
                  class="mb-2"
                >
                </b-card>
              </b-col>
              <b-col cols="8">
                <ul style="list-style-type: none">
                  <li>
                    <b>Network : </b> {{ showDetails.network && showDetails.network.country.name }}
                  </li>
                  <li>
                    <b>Schedule: </b> {{showDetails.schedule && showDetails.schedule.time }}:
                    {{showDetails.schedule && showDetails.schedule.days }}
                  </li>
                  <li><b>Status : </b>{{ showDetails.status }}</li>
                  <li><b>Show type : </b>{{ showDetails.type }}</li>
                  <li><b>Genre : </b>{{ showDetails.genres[0] }}</li>
                  <li>
                    <b> Official Site : </b>
                    <a :href="showDetails.officialSite">{{
                      showDetails.officialSite != null
                        ? showDetails.officialSite
                        : "NA"
                    }}</a>
                  </li>
                </ul>
              </b-col>
            </b-row>
            <b-button variant="primary" to="/">Back</b-button>
          </b-jumbotron>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name:"ShowDetails",
  data() {
    return {
      isLoading: false,
      showDetailsData:null
    };
  },

  computed: {
    ...mapState(["showDetails"]),
   
  },

  created() {
    this.getShowDetailsById(this.$route.params.id);
    this.showDetailsData=this.showDetails
   
  },

  methods: {
    async getShowDetailsById(id) {
      this.isLoading = true;
      
      try {
        await this.$store.dispatch("getShowDetailsById", id);
      } catch (error) {
        this.error = error.message;
      }

      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.show-details {
  min-height: 100%;
}
.card {
  margin: auto;
  height: 100%;
}
.card-body {
  padding: 0.25rem;
}
#top-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
