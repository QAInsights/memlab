const scenario = {
  url: () => 'https://academy.qainsights.com/courses', // baseline page
  action: async (page) => {
    await page.click('a[href="/about"]'); // target page
  },
  back: async (page) => {
    await page.click('a[href="/courses"]'); // final page
  },
}

module.exports = scenario;
