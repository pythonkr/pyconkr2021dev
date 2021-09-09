module.exports = {
    reactStrictMode: true,
    target: "serverless",
    trailingSlash: true,
    images: {
        disableStaticImages: true,
        loader: "imgix",
        path: "",
    },
};
