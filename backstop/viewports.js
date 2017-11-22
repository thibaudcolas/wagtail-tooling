const getViewport = (width, height) => ({
    label: `${width}x${height}`,
    width,
    height,
});

const viewports = [
    // getViewport(320, 480),
    // getViewport(768, 1024),
    getViewport(1024, 768),
    // Maximum width of the Wagtail admin.
    // getViewport(1440, 900),
];

module.exports = viewports;
