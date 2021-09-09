module.exports = {
    reactStrictMode: true,
    target: "serverless",
    exportTrailingSlash: true,
    images: {
        disableStaticImages: true,
        loader: "imgix",
        path: "",
    },
};
