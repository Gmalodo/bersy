import {defineConfig} from "@udixio/ui-react";

export default defineConfig({
    sourceColor: "#6d34e3",
    fontStyles: {
        // display: {
        //     large: {
        //         fontFamily: 'display',
        //     },
        //     medium: {
        //         fontFamily: 'display',
        //     },
        //     small: {
        //         fontFamily: 'display',
        //     },
        // },
        // headline: {
        //     large: {
        //         fontWeight: 600,
        //     },
        //     medium: {
        //         fontWeight: 600,
        //     },
        //     small: {
        //         fontWeight: 600,
        //     },
        // },
        // title: {
        //     large: {
        //         fontWeight: 500,
        //     },
        //     medium: {
        //         fontWeight: 500,
        //     },
        //     small: {
        //         fontWeight: 500,
        //     },
        // },
        body: {
            large: {
                // fontSize: 1.125,
            },
            medium: {
                // fontSize: 1,
                lineHeight: 1.25,
            },
            small: {
                // fontSize: 0.875,
                lineHeight: 1.125,
            },
        },
    },
    fontFamily: {
        expressive: ['Roboto', 'sans-serif'],
        neutral: ['Roboto', 'sans-serif'],
    },
    responsiveBreakPoints: {
        sm: 1.125,
    },
})