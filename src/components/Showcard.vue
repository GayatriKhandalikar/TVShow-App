<template>
<div>
  <div class="show-card">
    <div v-if="show">
      <b-card
      :title="show.name"
    :img-src="show.image && show.image.medium"
    img-alt="No Image Available"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
     
    >
     <b-card-text><b>Rating</b> : {{show.rating && show.rating.average != null ? show.rating && show.rating.average : 'NA'}}</b-card-text>

      <b-button variant="primary" id="getShowDetailsBtn" @click="getShowDetails(show.id)"
        >Show Details</b-button
      >
    </b-card>
    </div>
    <div v-else>
      <div>
        <b-spinner variant="secondary" label="Spinning"></b-spinner><br>
        <b>Please Wait</b>
      </div>
    </div>

    
  </div>
</div>
</template>

<script>
export default {

  name: 'Showcard',
  props: {
    show: {}
  },

  methods: {
    getShowDetails(id) {
 
     this.$router.push({ name: 'ShowDetails', params: { id } });
    },
  },
};
</script>

<style>
.show-card {
  min-height: 100%;
}
.card {
  margin: auto;
  height: 100%;
}
.card-body {
  padding: 0.25rem;
}

/* .image-cursor{
    cursor: pointer;
} */
</style>