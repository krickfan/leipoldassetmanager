<template>
<MainMenu></MainMenu>
<div class="row">
    <div class="col-2">
        <UserProfile></UserProfile>
        <ActionMenu :menuItems="menuItems"></ActionMenu>
    </div>
    <div class="col">
        <div style="flex : 1">
        <router-view v-slot="{ Component }">
            <component :is="Component"></component>
        </router-view>
    </div>
    </div>
</div>    
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import { MenuItem } from "../types/MenuItem";
import MainMenu from "../components/MainMenu.vue";
import ActionMenu from "../components/actionmenu/ActionMenu.vue";
import UserProfile from "../components/UserProfile.vue";

const menuItems : Ref<MenuItem[]> = ref([
    {name : "Asset-Management", subMenuItems : [{name : "Asset-Kategorie", route : "/assetcategory"}, {name : "Asset-Menü 2", route : "/assetmenu2"}]},
    {name : "Menü 2", subMenuItems : [{name : "Sub-Menü a", route : "/submenua"}, {name : "Sub-Menü b", route : "/submenub"}]},
    {name : "Menü 3", subMenuItems : [{name : "Sub-Menü c", route : "/submenuc"}, {name : "Sub-Menü d", route : "/submenud"}]}

])
</script>

<style scoped>
</style>