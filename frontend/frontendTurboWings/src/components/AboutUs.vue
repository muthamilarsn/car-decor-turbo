<template>
    <v-container fluid :class="{ expanded }">
        <v-card class="about-us-card" flat>
            <div class="overlay"></div>
            <v-container class="about-us-content">
                <h2 class="about-us-title">Why Shop with <span class="highlight">Turbo Wings</span>?</h2>
                <div v-if="!expanded" class="about-us-text" v-html="truncatedText"></div>
                <div v-else class="about-us-text" v-html="highlightedText"></div>
                <v-btn class="custom-button" @click="expanded = !expanded">
                    {{ expanded ? 'View Less' : 'View More' }}
                    <v-icon>{{ expanded ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-container>
        </v-card>
    </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';

const expanded = ref(false);

const fullText = [
    `Turbo Wings is dedicated to providing you the best possible experience when shopping for automotive parts. 
  Want to protect your car with the best <span class='product-highlight'>all-weather floor mats</span>? Need advice on which <span class='product-highlight'>exhaust system</span> to purchase? 
  Having trouble deciding on whether to get a <span class='product-highlight'>folding</span> or a <span class='product-highlight'>roll-up tonneau cover</span>? Just contact us, and our team of car lovers will happily assist you.<br><br>`,
    `We have partnered with all the top manufacturers such as Magnaflow, Pendaliner, Flowmaster, Bak Industries, WeatherTech, EBC Brakes, Megan Racing, Fox Shocks, 3D Maxpider, and many more to bring you top quality products at the lowest prices on the market. 
  We're a no-nonsense site that passes exclusive deals and discounts directly to you! <br><br>
  Our work doesn't end after you place your order. Our team will work hard to make sure the product you purchased will fit your exact vehicle specifications and that you receive the product in a timely manner. 
  Looking for new <span class='product-highlight'>auto floor mats</span> or the best <span class='product-highlight'>lift kit brands</span>? Look no further. With Turbo Wings, you can expect a superior, 1-on-1 customer service experience tailored to YOU.`
];

const truncatedText = computed(() => `<p>${fullText[0].substring(0, 200)}...</p>`);
const highlightedText = computed(() => fullText.map(paragraph => `<p>${paragraph}</p>`).join(''));
</script>

<style scoped>
.about-us-card {
    background: url('/images/aboutUs.jpeg') center/cover no-repeat;
}

.about-us-card::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
}

.about-us-content {
    position: relative;
    z-index: 2;
    text-align: left;
    color: white;
    padding: 20px;
    max-width: 900px;
}

.about-us-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
    border-bottom: 4px solid rgba(255, 165, 0);
}

.about-us-title .highlight {
    color: orange;
    font-weight: bold;
}

.about-us-text {
    font-size: 1.2rem;
    opacity: 0.9;
    color: rgba(255, 255, 255, 0.9);
    padding: 20px 5px;
    text-align: left;
}

.product-highlight {
    color: orange;
    font-weight: bold;
}

.custom-button {
    background: linear-gradient(135deg, orange, darkorange);
    color: white;
    border-radius: 25px;
    padding: 10px 20px;
    transition: all 0.3s ease;
}

.custom-button:hover {
    background: linear-gradient(135deg, darkorange, orangered);
    transform: scale(1.05);
}
</style>