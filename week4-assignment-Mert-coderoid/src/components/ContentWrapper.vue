<template>
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
            
            <!-- Topbar -->
            <TopBar></TopBar>


            <!-- Begin Page Content -->
            <BeginPageContent></BeginPageContent>

            
        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <FooterContent></FooterContent>

    </div>
    <!-- End of Content Wrapper -->
</template>

<script>
import FooterContent from './ContentWrapper/FooterContent.vue';
import TopBar from "./ContentWrapper/TopBar.vue";
import BeginPageContent from "./ContentWrapper/BeginPageContent.vue";

export default {
    name: "ContentWrapper",

    components: {
        'FooterContent': FooterContent,
        "TopBar": TopBar,
        "BeginPageContent": BeginPageContent,
    }
}

</script>