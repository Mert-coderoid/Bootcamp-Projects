<template>
    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <!-- Sidebar - Brand -->
        <SideBarBrand></SideBarBrand>

        <!-- Divider -->
        <hr class="sidebar-divider my-0" />

        <!-- Nav Item - Dashboard -->
        <SideBarNavItemDashboard></SideBarNavItemDashboard>

        <!-- Divider -->
        <hr class="sidebar-divider" />

        <!-- Heading -->
        <SideBarNavItemHeading></SideBarNavItemHeading>

        <!-- Nav Item - Pages Collapse Menu -->
        <SideBarNavItemPages></SideBarNavItemPages>

        <!-- Nav Item - Utilities Collapse Menu -->
        <SideBarNavItemUtilities></SideBarNavItemUtilities>

        <!-- Divider -->
        <hr class="sidebar-divider" />

        <!-- Heading -->
        <SideBarNavItemHeading></SideBarNavItemHeading>

        <!-- Nav Item - Pages Collapse Menu -->
        <SideBarNavItemPagesActive></SideBarNavItemPagesActive>

        <!-- Nav Item - Charts -->
        <SideBarNavItemCharts></SideBarNavItemCharts>

        <!-- Nav Item - Tables -->
        <SideBarNavItemTables></SideBarNavItemTables>

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block" />

        <!-- Sidebar Toggler (Sidebar) -->
        <SideBarToggler></SideBarToggler>
    </ul>
    <!-- End of Sidebar -->
</template>

<script>
import SideBarBrand from "./SideBar/SideBarBrand.vue";
import SideBarNavItemHeading from "./SideBar/SideBarNavItemHeading.vue";
import SideBarNavItemTables from "./SideBar/SideBarNavItemTables.vue";
import SideBarNavItemPages from "./SideBar/SideBarNavItemPages.vue";
import SideBarNavItemPagesActive from "./SideBar/SideBarNavItemPagesActive.vue";
import SideBarNavItemUtilities from "./SideBar/SideBarNavItemUtilities.vue";
import SideBarNavItemCharts from "./SideBar/SideBarNavItemCharts.vue";
import SideBarToggler from "./SideBar/SideBarToggler.vue";
import SideBarNavItemDashboard from "./SideBar/SideBarNavItemDashboard.vue";

export default {
    name: "SideBar",
    props: {
        // define props(attributes) here!
    },
    components: { 
        SideBarBrand, 
        SideBarNavItemHeading, 
        SideBarNavItemTables,
        SideBarToggler,
        SideBarNavItemPages,
        SideBarNavItemPagesActive,
        SideBarNavItemUtilities,
        SideBarNavItemCharts,
        SideBarNavItemDashboard,
        }
}

</script>