<template>
    <!-- Nav Item - Messages -->
    <li class="nav-item dropdown no-arrow mx-1">
        <a
            class="nav-link dropdown-toggle"
            href="#"
            id="messagesDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
        >
            <i class="fas fa-envelope fa-fw"></i>
            <!-- Counter - Messages -->
            <span class="badge badge-danger badge-counter">7</span>
        </a>
        
        <!-- Dropdown - Messages -->
        <DropdownMessages></DropdownMessages>
    </li>
</template>

<script>
import DropdownMessages from "./NavItemMessges/DropdownMessages.vue"
export default {
    name: "NavItemMessages",
    components: {
        "DropdownMessages": DropdownMessages
    }
}
</script>