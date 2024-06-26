<template>
    <div class="vertical-menu">
      <nav class="nav flex-column">
        <ActionMenuItem v-for="(item, key) of props.menuItems" :menuItem="item" :key="key"></ActionMenuItem>
      </nav>
    </div>
  </template>
  
<script setup lang="ts">
import ActionMenuItem from "./ActionMenuItem.vue";
import { MenuItem } from "../../types/MenuItem";

const props = defineProps<{
  menuItems : MenuItem[];
}>();

</script>
  
  <style scoped>
  .vertical-menu {
    background-color: rgb(216, 253, 253);
  }
  </style>