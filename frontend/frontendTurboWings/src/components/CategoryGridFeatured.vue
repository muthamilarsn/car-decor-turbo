<template>
    <v-container>
        <v-card class="mx-auto pa-6" color="accent" rounded="lg">
            <h2 class="section-title">Featured Categories</h2>
            <v-row justify="center">
                <v-col v-for="(category, index) in categories" :key="index" cols="12" sm="6" md="4" lg="3">
                    <v-card color="accent" class="category-card" flat>
                        <v-img :src="category.image" color="surface" class="category-image"></v-img>
                        <v-card-title class="category-title">{{ category.title }}</v-card-title>
                        <v-card-actions>
                            <v-btn variant="text" border class="text-none explore-btn" prepend-icon="mdi-arrow-right">
                                Explore
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Category {
    title: string;
    image: string;
}

const categories = ref<Category[]>([
    { title: "Performance Parts", image: "/images/category/performanceParts.png" },
    { title: "Exterior Accessories", image: "/images/category/exteriorAccessories.png" },
    { title: "Interior Accessories", image: "/images/category/interiorAccessories.png" },
    { title: "Wheels & Tires", image: "/images/category/wheelsBlackcar1.png" },
    { title: "Audio & Electronics", image: "/images/category/audioSet.png" },
    { title: "Tools & Garage", image: "/images/category/garageTools.png" },
    { title: "Lighting", image: "/images/category/carLighting.png" },
    { title: "Specialty Parts", image: "/images/category/missing-image.png" },
]);
</script>

<style scoped>
.section-title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    color: var(--v-theme-on-background);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    border-bottom: 4px solid rgba(255, 165, 0);
}

.category-card {
    text-align: center;
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
}

.category-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 165, 0, 0.5);
}

.category-image {
    width: 100%;
    height: 160px;
    /* background: white; */
}

.category-title {
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 10px;
}

.explore-btn {
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   border-radius: 0 0 12px 12px;
   border-color: var(--v-theme-on-background);
   text-transform: none;
}
</style>
