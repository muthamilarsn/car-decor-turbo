<template>
    <v-container class="category-grid">
        <v-card class="mx-auto pa-6" color="accent" rounded="lg">
            <h2 class="section-title">Auto Parts & Accessories
                <!-- <span class="shop-all">SHOP ALL ></span> -->
            </h2>
            <v-row justify="center">
                <v-col v-for="category in categories" :key="category.title" cols="12" sm="6" md="4" lg="3">
                    <v-card class="category-card" flat elevation="8">
                        <v-img :src="category.image" class="category-image" contain></v-img>
                        <v-card-text>
                            <p class="category-title" :class="{ 'highlighted': category.highlighted }">{{ category.title
                                }}
                            </p>
                        </v-card-text>
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
            { title: "Performance Chips", image: "/images/category/service.jpg" },
            { title: "Tonneau Covers", image: "/images/category/service.jpg" },
            { title: "Running Boards & Nerf Bars", image: "/images/category/service.jpg" },
            { title: "Suspension Systems", image: "/images/category/service.jpg", highlighted: true },
            { title: "Roof Racks", image: "/images/category/service.jpg" },
            { title: "Bug Deflectors", image: "/images/category/service.jpg" },
            { title: "Trailer Hitches", image: "/images/category/service.jpg" },
            { title: "Headlights", image: "/images/category/headLights.jpg" }
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
.category-grid {
    padding: 20px;
    /* background-color: var(--v-theme-background); */
}

.category-card {
    border-radius: 10px;
    /* overflow: hidden;
    transition: box-shadow 0.3s ease-in-out, border 0.3s ease-in-out; */
    /* background: var(--v-theme-surface); */
    /* color: var(--v-theme-on-surface); */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border: 2px solid transparent;
}

.category-card:hover {
    border-color: orange;
    box-shadow: 0 4px 12px rgba(255, 140, 0, 0.4);
}

.category-image {
    height: 150px;
    object-fit: cover;
}

.category-title {
    font-weight: bold;
    text-align: center;
    padding: 12px;
    transition: color 0.3s ease-in-out;
}

.category-card:hover .category-title {
    color: orange;
}
</style>