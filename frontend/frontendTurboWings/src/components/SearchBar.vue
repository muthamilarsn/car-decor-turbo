<template>
    <v-card class="mx-auto" color="secondary" rounded="lg">
        <v-card-text>
            <v-text-field 
                v-model="searchQuery" 
                placeholder="Search entire store here" 
                density="compact" 
                
                clear-icon="mdi-close" 
                
                variant="solo"
                hide-details
                single-line
                :style="{ width: '500px'}"
                @keyup.enter="onSearch">
                <template v-slot:append-inner>
                    <v-icon v-if="!searchQuery" class="mdi-magnify">mdi-magnify</v-icon>
                    <v-icon v-if="searchQuery" class="mdi-close" @click="clearSearchQuery">mdi-close</v-icon>
                </template>
            </v-text-field>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "SearchBar",
    setup() {
        const searchQuery = ref("");

        const onSearch = () => {
            if (searchQuery.value) {
                console.log("Search Query: ", searchQuery.value);
            }
        };

        const clearSearchQuery = () => {
            searchQuery.value = "";
        };

        return {
            searchQuery,
            onSearch,
            clearSearchQuery,
        };
    },
});
</script>

<style scoped></style>