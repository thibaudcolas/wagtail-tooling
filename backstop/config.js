require('dotenv').config();

const path = require('path');

const viewports = require('./viewports');
const scenarios = require('./scenarios');

if (!process.env.WAGTAIL_SESSIONID) {
    throw new ReferenceError(
        'Environment variable WAGTAIL_SESSIONID is not defined.',
    );
}

const FILTER = null; // /.*title=.*/;

module.exports = {
    debug: false,
    debugWindow: false,
    id: 'bakerydemo_master',
    viewports: viewports,
    scenarios: FILTER
        ? scenarios.filter(s => s.label.match(FILTER))
        : scenarios,
    paths: {
        bitmaps_reference: path.join(__dirname, 'data', 'bitmaps_reference'),
        bitmaps_test: path.join(__dirname, 'data', 'bitmaps_test'),
        engine_scripts: path.join(__dirname, 'scripts'),
        html_report: path.join(__dirname, 'data', 'html_report'),
        ci_report: path.join(__dirname, 'data', 'ci_report'),
    },
    engine: 'chrome',
    report: ['CI'],
    engineFlags: [],
    asyncCaptureLimit: 5,
    asyncCompareLimit: 50,
};
