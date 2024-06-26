<template>
<div class="nav-item">
    <a class="nav-link" :class="{ active: open }" href="#" @click.prevent="toggle()">{{ props.menuItem.name }}</a>
    <nav v-if="open" class="nav flex-column ms-3">
        <a v-for="(item, key) of props.menuItem.subMenuItems" class="nav-link" href="#" :key="key" @click="route(item.route)">{{ item.name }}</a>
    </nav>
</div>    
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import { MenuItem } from "../../types/MenuItem";
import { useRouter } from "vue-router";

const props = defineProps<{
    menuItem : MenuItem;
}>();

const open : Ref<boolean> = ref(false);
const router = useRouter();

function toggle() {
    open.value = open.value ? false : true;
}

function route(path : string) {
    router.push({path : path});
}

</script>

<style scoped>
.nav-link {
    color: #000;
    cursor: pointer;
}

.nav-link.active {
    font-weight: bold;
    color: #007bff;
}

.nav-item .nav {
    margin-left: 1rem;
}
</style>