<template>
    <!-- Nav Item - Search Dropdown (Visible Only XS) -->
    <li class="nav-item dropdown no-arrow d-sm-none">
        <a
            class="nav-link dropdown-toggle"
            href="#"
            id="searchDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
        >
            <i class="fas fa-search fa-fw"></i>
        </a>

        <!-- Dropdown - Messages -->
        <SearchDropdownMessages></SearchDropdownMessages>
    </li>
</template>


<script>
    import SearchDropdownMessages from "./SearchDropdown/SearchDropdownMessages.vue";
    
    export default {
        name: "SearchDropdown",
        components: {
            "SearchDropdownMessages": SearchDropdownMessages,
        }
    }
</script>