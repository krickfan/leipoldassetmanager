<template>
<div class="user-profile">
    <img src="../assets/userprofile.jpeg" alt="Profilbild" class="profile-image"/>
    <div class="profile-info">
        <div>Hanna Schmidt</div>
    </div>
</div>
</template>

<style scoped>
.user-profile {
  display: flex;
  align-items: center;
  background-color: azure;
  max-width: auto;
  padding: 1rem;
}

.profile-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
}

.profile-info h2 {
  margin: 0;
}
</style>