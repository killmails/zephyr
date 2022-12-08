<template>

  <v-responsive aspect-ratio="16 / 9" height="600">

    <div class="d-flex fill-height justify-center align-center">

      <h1 class="text-h1 me-16">
        <zphr />
      </h1>

      <v-timeline line-inset="20" side="end" truncate-line="both">

        <v-timeline-item dot-color="primary">
          <div class="text-h4">Explore</div>
          <p>
            Discover, hack and loot exploration sites.
          </p>
        </v-timeline-item>

        <v-timeline-item dot-color="secondary">
          <div class="text-h4">Track</div>
          <p>
            Easily keep record of signatures and spoils.
          </p>
        </v-timeline-item>

        <v-timeline-item dot-color="success">
          <div class="text-h4">Visualize</div>
          <p>
            Detailed information about your journey!
          </p>
        </v-timeline-item>

      </v-timeline>

    </div>

  </v-responsive>

</template>

<script lang="ts" setup>
import Zphr from '@/components/Zphr.vue'

</script>
