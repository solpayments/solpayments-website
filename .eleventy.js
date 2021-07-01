const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter('dateShort', date => {
        return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_SHORT);
    });

    eleventyConfig.addFilter('dateReadable', date => {
        return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
    });

    // set copy asset folder to dist
    eleventyConfig.addPassthroughCopy('assets');

    // set input and output folder
    return {
        dir: { input: 'src', output: 'dist' },
        dataTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk'
    };
}