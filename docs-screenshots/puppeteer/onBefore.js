module.exports = async (page, scenario, vp) => {
  await require("./loadCookies")(page, scenario);

  if (scenario.emulateVisionDeficiency) {
    await page.emulateVisionDeficiency(scenario.emulateVisionDeficiency);
  }

  if (scenario.emulateMediaFeatures) {
    const client = await page.target().createCDPSession();
    await client.send("Emulation.setEmulatedMedia", {
      features: scenario.emulateMediaFeatures,
    });
  }
};
