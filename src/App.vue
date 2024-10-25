<script setup>
import MedlinkCommunity from './components/Medlink Community/MedlinkCommunity.vue';
import Header from "./components/Header/Header.vue";
import starImg from "./assets/images/access-resources.png"
import connectPeers from "./assets/images/connect-with-peers.png"
import attendEvents from "./assets/images/attend-events.png"
import SliderItem01 from './components/sliders/01_slider/SliderItem01.vue';
import Slider01 from './components/sliders/01_slider/Slider01.vue';

const slides = [
    { image: connectPeers, title: 'Attend Events', description: 'Participate in our engaging webinars and events to stay informed about the latest developments in healthcare.' },
    { image: starImg, title: 'Access Resources', description: 'Discover a comprehensive range of educational materials tailored to meet your healthcare needs. From detailed articles and guides to interactive tools and videos, our resources are designed to empower you with the knowledge necessary to make informed decisions about your health. ' },
    { image: attendEvents, title: 'Connect with Peers', description: 'Join our vibrant community to engage in meaningful discussions and share your personal experiences with both patients and healthcare professionals. This platform provides a safe space for you to connect with others who understand your journey, offering support and encouragement along the way.' },
    { image: attendEvents, title: 'Attend Events', description: 'Participate in our engaging webinars and events to stay informed about the latest developments in healthcare.' },
    { image: connectPeers, title: 'Attend Events', description: 'Participate in our engaging webinars and events to stay informed about the latest developments in healthcare.' },
    { image: starImg, title: 'Attend Events', description: 'Participate in our engaging webinars and events to stay informed about the latest developments in healthcare.' },
    { image: attendEvents, title: 'Attend Events', description: 'Participate in our engaging webinars and events to stay informed about the latest developments in healthcare.' },
];
</script>

<template>
    <Header />
    <MedlinkCommunity />
    <Slider01 :slides="slides">
        <template v-slot:slide="{ slide }">
            <SliderItem01 :imageSrc="slide.image" :title="slide.title" :description="slide.description" />
        </template>
    </Slider01>
</template>

<style scoped></style>
