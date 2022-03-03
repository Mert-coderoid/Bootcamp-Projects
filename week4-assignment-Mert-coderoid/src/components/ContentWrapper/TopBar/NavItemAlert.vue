<template>
    <!-- Nav Item - Alerts -->
    <li class="nav-item dropdown no-arrow mx-1">
        <a
            class="nav-link dropdown-toggle"
            href="#"
            id="alertsDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
        >
            <i class="fas fa-bell fa-fw"></i>
            <!-- Counter - Alerts -->
            <span class="badge badge-danger badge-counter">3+</span>
        </a>
        
        <!-- Dropdown - Alerts -->
        <DropdownAlerts></DropdownAlerts>
    </li>
</template>

<script>
import DropdownAlerts from "./NavItemAlert/DropdownAlerts.vue";

export default {
    name: "NavItemAlert",
    components: {
        "DropdownAlerts": DropdownAlerts,
    }
}
</script>