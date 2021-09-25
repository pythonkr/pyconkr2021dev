module.exports = {
    reactStrictMode: true,
    target: "serverless",
    trailingSlash: true,
    images: {
        disableStaticImages: true,
        // loader: "imgix",
        // path: "",
        domains: ['2021.pycon.kr', '2021devdev.pycon.kr', 'localhost']
    },
};
