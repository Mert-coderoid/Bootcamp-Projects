<template>

  <side-bar></side-bar>

  <content-wrapper></content-wrapper>
  
</template>

<script>
import SideBar from "./components/SideBar.vue";
import ContentWrapper from "./components/ContentWrapper.vue";


export default {
  name: 'App',
  components: {
    SideBar,
    ContentWrapper,
  }
}
</script>