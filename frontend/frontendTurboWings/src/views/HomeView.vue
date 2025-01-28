<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar app flat color="background" class="custom-app-bar">
      <!-- Section 1: Logo and Title -->
      <div class="flex items-center section-left">
        <img src="/images/logo.jpeg" alt="Logo" class="logo" />
        <span class="app-title">Turbo Wings</span>
      </div>

      <!-- Section 2: Search Bar -->
      <div class="section-center">
        <SearchBar />
      </div>

      <!-- Section 3: Theme Toggle and Cart -->
      <div class="flex items-center gap-4 section-right">
        <v-btn icon @click="toggleTheme">
          <v-icon>{{ isDarkTheme ? 'mdi-moon-waxing-crescent' : 'mdi-white-balance-sunny' }}</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <!-- Main Content -->
    <!-- <v-main>
      <router-view></router-view>
    </v-main> -->
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useTheme } from "vuetify";
import SearchBar from "@/components/SearchBar.vue";

export default defineComponent({
  components: {
    SearchBar,
  },
  setup() {
    const theme = useTheme();
    const isDarkTheme = ref(theme.global.name.value === "dark");

    // Toggle Theme
    const toggleTheme = () => {
      isDarkTheme.value = !isDarkTheme.value;
      theme.global.name.value = isDarkTheme.value ? "dark" : "light";
    };

    onMounted(() => {
      isDarkTheme.value = theme.global.name.value === "dark";
    });

    return {
      isDarkTheme,
      toggleTheme,
    };
  },
});
</script>

<style scoped>
/* App Bar Styling */
.custom-app-bar {
  padding: 0 16px;
  background: var(--v-background-base);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

/* Logo & Title */
.logo {
  max-height: 55px;
  border-radius: 5px;
}

.app-title {
  font-size: 1.4rem;
  font-weight: bold;
  margin-left: 10px;
}

.section-left,
.section-center,
.section-right {
  display: flex;
  align-items: center;
}

.section-center {
  flex-grow: 1;
  justify-content: center;
}

.section-right {
  /* gap: 16px; */
}
</style>