<template>
  <div>
    <div class="show-card">
      <div v-if="show">
        <div v-if="imageFlag">
          <b-card
            :title="show.name"
            :img-src="show.image && show.image.medium"
            img-alt="No_image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text
              ><b>Rating</b> :
              {{
                show.rating && show.rating.average != null
                  ? show.rating && show.rating.average
                  : "NA"
              }}</b-card-text
            >

            <b-button
              variant="primary"
              id="getShowDetailsBtn"
              @click="getShowDetails(show.id)"
              >Show Details</b-button
            >
          </b-card>
        </div>
        <div  v-if="!imageFlag">
          <b-card
            :title="show.name"
            img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFjEKcbXDrazxVKhWU5x9Mk1ISG0ZfP_3OAQp_tskiq7l7w7BrYVW3qOqGxZGSHhRBjDY&usqp=CAU"
            img-top
            tag="article"
            style="max-width: 70rem"
          >
            <b-card-text
              ><b>Rating</b> :
              {{
                show.rating && show.rating.average != null
                  ? show.rating && show.rating.average
                  : "NA"
              }}</b-card-text
            >

            <b-button
              variant="primary"
              id="getShowDetailsBtn"
              @click="getShowDetails(show.id)"
              >Show Details</b-button
            >
          </b-card>
        </div>
      </div>
      <div v-else>
        <div>
          <b-spinner variant="secondary" label="Spinning"></b-spinner><br />
          <b>Please Wait</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Showcard",
  data() {
    return {
      imageFlag: false,
      image: {},
    };
  },
  created() {
    this.getImage();
  },

  props: {
    show: {},
  },

  methods: {
    getShowDetails(id) {
      this.$router.push({ name: "ShowDetails", params: { id } });
    },
    getImage() {
      this.image = this.show.image;
      if (this.image) {
        this.imageFlag = true;
      }
    },
  },
};
</script>

<style>
.show-card {
  min-height: 80%;
}
.card {
  margin: auto;
  height: 80%;
}
.card-body {
  padding: 0.25rem;
}
</style>