module.exports = {
    reactStrictMode: true,
    target: "serverless",
    images: {
        disableStaticImages: true,
        loader: "imgix",
        path: "",
    },
};
