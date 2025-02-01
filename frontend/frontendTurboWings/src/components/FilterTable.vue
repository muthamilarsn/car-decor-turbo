<template>
    <v-card class="filter-card" elevation="10">
        <div class="filter-header">
            <h2>Shop by Vehicle</h2>
        </div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="4">
                    <v-select label="Year" :items="years" class="custom-select"></v-select>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-select label="Make" :items="makes" class="custom-select"></v-select>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-select label="Model" :items="models" class="custom-select"></v-select>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-btn class="go-btn" @click="goToResults">GO</v-btn>
            </v-row>
        </v-container>
    </v-card>
</template>

<script setup>
import { ref } from "vue";

const years = ref(["2024", "2023", "2022", "2021"]);
const makes = ref(["Toyota", "Ford", "Honda", "BMW"]);
const models = ref(["Camry", "Mustang", "Civic", "X5"]);

const goToResults = () => {
    console.log("Navigating to results...");
};
</script>

<style scoped>
.filter-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
}

.filter-card:hover {
    transform: scale(1.03);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.filter-header h2 {
    font-size: 1.8rem;
    font-weight: bold;
    color: #fff;
    text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.5);
}

.custom-select {
    background: rgba(255, 255, 255, 0.2) !important;
    border-radius: 10px;
    color: white !important;
}

.go-btn {
    /* background: linear-gradient(135deg, #ff7e5f, #feb47b); */
    background: linear-gradient(45deg, orange, #ff8c00);
    box-shadow: 0px 5px 15px rgba(255, 126, 95, 0.5);
    color: white;
    padding: 12px 30px;
    font-weight: bold;
    border-radius: 30px;
    transition: all 0.3s;
}

.go-btn:hover {
    /* background: linear-gradient(135deg, #feb47b, #ff7e5f); */
    background: linear-gradient(45deg, #ff8c00, orange);
    box-shadow: 0px 5px 15px rgba(255, 126, 95, 0.5);
}
</style>