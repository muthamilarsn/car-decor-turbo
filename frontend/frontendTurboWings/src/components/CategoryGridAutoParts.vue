<template>
    <v-container>
        <v-card class="mx-auto pa-6" color="accent" rounded="lg">
            <h2 class="section-title">Auto Parts & Accessories
                <!-- <span class="shop-all">SHOP ALL ></span> -->
            </h2>
            <v-row justify="center">
                <v-col v-for="category in categories" :key="category.title" cols="12" sm="6" md="4" lg="3">
                    <v-card class="category-card" flat>
                        <v-container fluid>
                            <v-row align="center" no-gutters>
                                <v-col cols="6">
                                    <v-img :src="category.image" class="category-image"></v-img>
                                </v-col>
                                <v-col cols="6" class="category-content">
                                    <p class="category-title" :class="{ 'highlighted': category.highlighted }">
                                        {{ category.title }}
                                    </p>
                                    <v-btn prepend-icon="mdi-arrow-right" border class="text-none category-button"
                                        variant="text" @click="$emit('click', category)">
                                        Explore
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        const categories = [
            { title: "Floor Mats", image: "/images/category/mat.png" },
            { title: "Air Intake Systems", image: "/images/category/filters.png" },
            { title: "Exhaust Systems", image: "/images/category/exhaustPipe.png" },
            { title: "Brakes", image: "/images/category/discBrake.png" },
            { title: "Performance Chips", image: "/images/category/performanceChips.png" },
            { title: "Tonneau Covers", image: "/images/category/tonneauCover.png" },
            { title: "Running Boards", image: "/images/category/runningBoards.png" },
            { title: "Suspension Systems", image: "/images/category/brakeSystem.png", highlighted: false },
            { title: "Roof Racks", image: "/images/category/roofRacks.png" },
            { title: "Bug Deflectors", image: "/images/category/carBugDeflectorr.png" },
            { title: "Trailer Hitches", image: "/images/category/trailerHitches.png" },
            { title: "Headlights", image: "/images/category/headlights1.png" }
        ];
        return { categories };
    }
});
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
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 2px solid transparent;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
}

.category-card:hover {
    border-color: orange;
    transform: scale(1.03);
}


.category-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    text-align: left;
}

.category-title {
    font-weight: bold;
    font-size: 1.5rem;
    transition: color 0.3s ease-in-out;
}

.category-card:hover .category-title {
    color: orange;
}

.category-button {
    display: flex;
    align-items: center;
    gap: 6px;
    /* text-transform: uppercase; */
    /* font-weight: bold; */
    /* transition: all 0.3s ease; */
}

.category-button:hover {
    color: orange;
}

.category-image {
    width: 150px;
    height: 120px;
}
</style>