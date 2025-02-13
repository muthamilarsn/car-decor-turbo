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
        <!-- <div class="overlay"></div> -->
        <v-container class="hero-content">
          <!-- Tabs Section -->
          <v-tabs v-model="selectedTab" class="tabs-section" align-tabs="center">
            <v-tab
              v-for="tab in tabs"
              :key="tab.value"
              :value="tab.value"
              class="custom-tab"
              :class="{ 'active-tab': selectedTab === tab.value }"
            >
              {{ tab.label }}
            </v-tab>
          </v-tabs>

          <v-row class="hero-content-row">
            <!-- First Column: Welcome Text -->
            <v-col cols="12" md="6" class="text-column">
              <h1 class="hero-title">Welcome to <span class="highlight-text">Turbo Wings</span></h1>
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
    <!-- Category Grid Component -->
    <CategoryGridAutoParts />

    <!-- About Us Component -->
    <AboutUs />

    <!-- Category Grid Component -->
    <CategoryGridFeatured />

    <!-- Footer Section -->
    <FooterView />
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { useTheme } from "vuetify";
import SearchBar from "@/components/SearchBar.vue";
import FilterTable from "@/components/FilterTable.vue";
import CategoryGridAutoParts from "@/components/CategoryGridAutoParts.vue";
import CategoryGridFeatured from "@/components/CategoryGridFeatured.vue";
import AboutUs from "@/components/AboutUs.vue";
import FooterView from "./FooterView.vue";

export default defineComponent({
  components: {
    SearchBar,
    FilterTable,
    CategoryGridAutoParts,
    CategoryGridFeatured,
    AboutUs,
    FooterView,
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

    const tabs = [
      { label: "Performance", value: "performance" },
      { label: "Exterior", value: "exterior" },
      { label: "Interior", value: "interior" },
      { label: "Lighting", value: "lighting" },
      { label: "Audio & Electronics", value: "audio-electronics" },
      { label: "Wheels & Tires", value: "wheels-tires" },
      { label: "Others", value: "others" },
    ];

    return {
      isDarkTheme,
      toggleTheme,
      logoSrc,
      selectedTab,
      tabs,
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
  padding-top: 7px;
  border-bottom: 4px solid rgba(255, 165, 0);
}

.custom-tab {
  text-transform: none;
  /* font-weight: bold; */
  color: white;
  padding: 12px 16px;
  transition: all 0.3s ease-in-out;
  font-size: medium;
}

.custom-tab:hover {
  color: orange;
}

.active-tab {
  color: white !important;
  background: linear-gradient(45deg, orange, #ff8c00);
  border-radius: 10px;
  padding: 12px 20px;
  box-shadow: 0 4px 10px rgba(255, 140, 0, 0.5);
  font-size: large;
  font-weight: bold;
  /* text-transform: uppercase; */
}

/* Hero Section */
.hero-section {
  position: relative;
  width: 100%;
  height: 500px;
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
  color: white;
}

.hero-title .highlight-text {
  color: orange;
  font-weight: bold;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  color: rgba(255, 255, 255, 0.8);
}

/* Right Column: Placeholder Table */
.hero-table {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Spacing between the two columns */
.hero-content-row {
  margin-top: 30px;
}

/* FilterTable adjustments */
.hero-content-row .v-col {
  padding: 20px;
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