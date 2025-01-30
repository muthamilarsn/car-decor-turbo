<template>
  <v-app>
    <v-app-bar app flat color="background" class="custom-app-bar">
      <div class="app-bar-content">
        <!-- Section 1: Logo -->
        <div class="section-left">
          <img :src="logoSrc" alt="Logo" class="logo" />
        </div>

        <!-- Section 2: Search Bar -->
        <div class="section-center">
          <SearchBar />
        </div>

        <!-- Section 3: Theme Toggle and Cart -->
        <div class="section-right">
          <v-btn icon @click="toggleTheme">
            <v-icon>{{ isDarkTheme ? 'mdi-moon-waxing-crescent' : 'mdi-white-balance-sunny' }}</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-cart-outline</v-icon>
          </v-btn>
        </div>
      </div>
    </v-app-bar>

    <v-container fluid class="hero-section">
      <v-card flat class="hero-card">
        <!-- Dark overlay -->
        <div class="overlay"></div>
        <v-container class="hero-content">
          <!-- Tabs Section -->
          <v-tabs v-model="selectedTab" class="tabs-section">
            <v-tab value="featured">Performance</v-tab>
            <v-tab value="new-arrivals">Exterior</v-tab>
            <v-tab value="best-sellers">Interior</v-tab>
            <v-tab value="lighting">Lighting</v-tab>
            <v-tab value="audio-electronics">Audio & Electronics</v-tab>
            <v-tab value="wheels-tires">Wheels & Tires</v-tab>
            <v-tab value="others">Others</v-tab>
          </v-tabs>

          <v-row>
            <!-- First Column: Welcome Text -->
            <v-col cols="12" md="6" class="text-column">
              <h1 class="hero-title">Welcome to Turbo Wings</h1>
              <p class="hero-subtitle">Find the best car decor items here!</p>
            </v-col>

            <!-- Second Column: Filter Table Component -->
            <v-col cols="12" md="6">
              <FilterTable />
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { useTheme } from "vuetify";
import SearchBar from "@/components/SearchBar.vue";
import FilterTable from "@/components/FilterTable.vue";

export default defineComponent({
  components: {
    SearchBar,
    FilterTable,
  },
  setup() {
    const theme = useTheme();
    const isDarkTheme = ref(theme.global.name.value === "dark");

    const toggleTheme = () => {
      isDarkTheme.value = !isDarkTheme.value;
      theme.global.name.value = isDarkTheme.value ? "dark" : "light";
    };

    const logoSrc = computed(() =>
      isDarkTheme.value ? "/images/turbo_wings_logo_white.png" : "/images/turbo_wings_logo_black.png"
    );

    onMounted(() => {
      isDarkTheme.value = theme.global.name.value === "dark";
    });

    const selectedTab = ref("featured");

    return {
      isDarkTheme,
      toggleTheme,
      logoSrc,
      selectedTab,
    };
  },
});
</script>

<style scoped>
/* App Bar */
.custom-app-bar {
  height: 100px;
  padding: 0 16px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  justify-content: center;
}

.app-bar-content {
  display: flex;
  width: 100%;
}

/* Logo */
.logo {
  max-height: 135px;
  margin-bottom: 5px;
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
  gap: 16px;
}

/* Tabs Section */
.tabs-section {
  background: var(--v-background-base);
  padding-top: 8px;
}

/* Hero Section */
.hero-section {
  position: relative;
  width: 100%;
  height: 500px;
  /* Adjusted height */
  overflow: hidden;
  margin-top: 10px;
}

.hero-card {
  width: 100%;
  height: 100%;
  background: url('/images/yellowCarBg.jpg') center/cover no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

/* Dark overlay */
.hero-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

/* Hero Content */
.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 40px;
}

/* Left Column: Hero Text */
.hero-text {
  color: white;
  text-align: left;
  padding-left: 20px;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

/* Right Column: Placeholder Table */
.hero-table {
  display: flex;
  align-items: center;
  justify-content: center;
}

.table-placeholder {
  width: 100%;
  height: 150px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  color: white;
  font-weight: bold;
}
</style>