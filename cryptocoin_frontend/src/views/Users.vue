<template>
  <v-container grid-list-xl>
      <v-layout row wrap>
          <v-flex xs6>
              <SignUp></SignUp>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import SignUp from "@/components/SignUp"

export default {
    components: {
        SignUp,
        
    }
}
</script>

<style>

</style>