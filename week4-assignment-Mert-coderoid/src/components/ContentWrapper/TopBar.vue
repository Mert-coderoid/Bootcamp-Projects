<template>
    <!-- Topbar -->
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        
        <!-- Sidebar Toggle (Topbar) -->
        <SideBarToggleTopbar></SideBarToggleTopbar>

        <!-- Topbar Search -->
        <top-search></top-search>

        <!-- Topbar Navbar -->
        <ul class="navbar-nav ml-auto">
            <!-- Nav Item - Search Dropdown (Visible Only XS) -->
            <SearchDropdown></SearchDropdown>

            <!-- Nav Item - Alerts -->
            <NavItemAlert></NavItemAlert>

            <!-- Nav Item - Messages -->
            <NavItemMessages></NavItemMessages>

            <div class="topbar-divider d-none d-sm-block"></div>

            <!-- Nav Item - User Information -->
            <NavItemUserInfo></NavItemUserInfo>
        </ul>
    </nav>
    <!-- End of Topbar -->
</template>


<script>
import TopSearch from "./TopBar/TopSearch.vue";
import SearchDropdown from "./TopBar/SearchDropdown.vue";
import NavItemAlert from "./TopBar/NavItemAlert.vue";
import NavItemMessages from "./TopBar/NavItemMessages.vue";
import NavItemUserInfo from "./TopBar/NavItemUserInfo.vue";
import SideBarToggleTopbar from "./TopBar/SideBarToggleTopbar.vue";

export default {
    name: "TopBar",
    components: {
        "TopSearch": TopSearch,
        "SearchDropdown": SearchDropdown,
        "NavItemAlert": NavItemAlert,
        "NavItemMessages": NavItemMessages,
        "NavItemUserInfo": NavItemUserInfo,
        "SideBarToggleTopbar": SideBarToggleTopbar,
    }
}

</script>