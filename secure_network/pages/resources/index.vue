<template>
    <div class="container">
        <main-section
            :buttons="main_section.buttons"
            :img="main_section.img"
            :title="main_section.title"
            :subtitle="main_section.subtitle"
            :wrapper="wrapper"
        />
        <timeline-section :wrapper="wrapper" :years="years" />
    </div>
</template>

<script>
import MainSection from '~/components/sections/MainSection.vue'
import TimelineSection from '~/components/sections/TimelineSection.vue'

export default {
    components: {
        MainSection,
        TimelineSection,
    },
    layout: 'default',
    async asyncData({ $axios }) {},
    data() {
        return {
            wrapper: 'resources',
            main_section: {
                title: 'All Updates\nYear By Year',
                buttons: [
                    {
                        class: 'primary',
                        text: 'Tbd',
                        path: '/',
                    },
                    {
                        class: 'secondary',
                        text: 'Tbd',
                        path: '/',
                    },
                ],
                img: '/images/covers/resources.svg',
            },
            years: [
                {
                    year: '2020',
                    newsCount: 3,
                    researchCount: 1,
                    path: '/resources/2020',
                },
                {
                    year: '2019',
                    newsCount: 2,
                    researchCount: 2,
                    path: '/resources/2019',
                },
                {
                    year: '2018',
                    newsCount: 0,
                    researchCount: 3,
                    path: '/resources/2018',
                },
                {
                    year: '2017',
                    newsCount: 3,
                    researchCount: 4,
                    path: '/resources/2017',
                },
                {
                    year: '2016',
                    newsCount: 3,
                    researchCount: 4,
                    path: '/resources/2016',
                },
                {
                    year: '2015',
                    newsCount: 1,
                    researchCount: 1,
                    path: '/resources/2015',
                },
            ],
        }
    },
}
</script>

<style></style>
