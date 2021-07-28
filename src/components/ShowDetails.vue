<template>
  <div class="show-details">
    <b-container fluid="sm">
      <div v-if="showDetails">
        <b-card>
          <div v-if="isImageFound">
            <b-jumbotron :header="showDetails.name">
              <b-row>
                <b-col cols="2">
                  <b-card
                    :img-src="showDetails.image && showDetails.image.medium"
                    img-alt="Card image"
                    img-left
                    tag="article"
                    style="max-width: 70rem"
                    class="mb-2"
                  >
                  </b-card>
                </b-col>
                <b-col cols="8">
                  <div class="top-list">
                    <ul style="list-style-type: none">
                      <p v-html="showDetails.summary">
                        {{ showDetails.summary }}
                      </p>
                      <li>
                        <b>Network : </b>
                        {{
                          showDetails.network &&
                          showDetails.network.country.name
                        }}
                      </li>
                      <li>
                        <b>Schedule: </b>
                        {{
                          showDetails.schedule &&
                          showDetails.schedule.time != null
                            ? showDetails.schedule.time
                            : ""
                        }}:
                        {{
                          showDetails.schedule &&
                          showDetails.schedule.days != null
                            ? showDetails.schedule.days
                            : ""
                        }}
                      </li>
                      <li><b>Status : </b>{{ showDetails.status }}</li>
                      <li><b>Show type : </b>{{ showDetails.type }}</li>
                      <li>
                        <b>Genre : </b
                        >{{ showDetails.genres && showDetails.genres[0] }}
                      </li>
                      <li>
                        <b> Official Site : </b>
                        <a :href="showDetails.officialSite">{{
                          showDetails.officialSite != null
                            ? showDetails.officialSite
                            : "NA"
                        }}</a>
                      </li>
                    </ul>
                  </div>
                </b-col>
              </b-row>
              <b-button variant="primary" to="/">Back</b-button>
            </b-jumbotron>
          </div>
          <div v-else>
            <b-jumbotron :header="showDetails.name">
              <b-row>
                <b-col cols="2">
                  <b-card
                    img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFjEKcbXDrazxVKhWU5x9Mk1ISG0ZfP_3OAQp_tskiq7l7w7BrYVW3qOqGxZGSHhRBjDY&usqp=CAU"
                    img-alt="Card image"
                    img-left
                    tag="article"
                    style="max-width: 70rem"
                    class="mb-2"
                  >
                  </b-card>
                </b-col>
                <b-col cols="8">
                  <div class="top-list">
                    <ul style="list-style-type: none">
                      <p v-html="showDetails.summary">
                        {{ showDetails.summary }}
                      </p>
                      <li>
                        <b>Network : </b>
                        {{
                          showDetails.network &&
                          showDetails.network.country.name
                        }}
                      </li>
                      <li>
                        <b>Schedule: </b>
                        {{
                          showDetails.schedule &&
                          showDetails.schedule.time != null
                            ? showDetails.schedule.time
                            : ""
                        }}:
                        {{
                          showDetails.schedule &&
                          showDetails.schedule.days != null
                            ? showDetails.schedule.days
                            : ""
                        }}
                      </li>
                      <li><b>Status : </b>{{ showDetails.status }}</li>
                      <li><b>Show type : </b>{{ showDetails.type }}</li>
                      <li>
                        <b>Genre : </b
                        >{{ showDetails.genres && showDetails.genres[0] }}
                      </li>
                      <li>
                        <b> Official Site : </b>
                        <a :href="showDetails.officialSite">{{
                          showDetails.officialSite != null
                            ? showDetails.officialSite
                            : "NA"
                        }}</a>
                      </li>
                    </ul>
                  </div>
                </b-col>
              </b-row>
              <b-button variant="primary" to="/">Back</b-button>
            </b-jumbotron>
          </div>
        </b-card>
      </div>
      <div v-else>
        <div>
          <b-spinner variant="secondary" label="Spinning"></b-spinner><br />
          <b>Please Wait</b>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ShowDetails",
  data() {
    return {
      isLoading: false,
      showDetailsData: null,
      isImageFound: true,
    };
  },

  computed: {
    ...mapState(["showDetails"]),
  },

  created() {
    this.getShowDetailsById(this.$route.params.id);
    this.showDetailsData = this.showDetails;
  },

  methods: {
    async getShowDetailsById(id) {
      this.isLoading = true;

      try {
        await this.$store.dispatch("getShowDetailsById", id);
        if (!this.showDetails.image) {
          this.isImageFound = false;
        } else {
          this.isImageFound = true;
        }
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

.center {
  margin-left: auto;
  text-align: center;
}

.card {
  margin: auto;
  height: 100%;
}
.card-body {
  padding: 0.25rem;
}

.div.top-list {
  text-align: center;
}
ul {
  display: inline-block;
  text-align: left;
}
</style>
