/* global page */
const { toHaveNoViolations } = require("jest-axe");
const AxeReports = require("axe-reports");

// const scenarios = require('../backstop/scenarios');

expect.extend(toHaveNoViolations);

const views = [
  "/",
  "/404",
  "/styleguide/",
  "/pages/preview",
  "/pages/",
  "/pages/search/?q=bread",
  "/pages/60/",

  "/pages/60/?ordering=ord",
  "/pages/60/edit/",
  // '/pages/60/revisions/',
  // '/pages/60/unpublish/',
  // '/pages/60/delete/',
  // '/pages/60/copy/',
  // '/pages/60/add_subpage/',

  // '/pages/add/base/homepage/60/',
  // '/pages/69/move/60/',
  "/base/people/",
  "/base/people/edit/1/",
  "/base/people/delete/1/",
  "/base/people/create/",
  "/images/",

  "/images/?q=bread",
  "/images/?collection_id=2",
  "/images/47/",
  "/images/47/delete/",
  "/images/add/",
  "/documents/",
  "/documents/?collection_id=2",

  "/documents/multiple/add/",
  "/snippets/",
  "/snippets/base/people/",
  "/snippets/base/people/1/",
  "/snippets/base/people/1/delete/",
  "/snippets/base/people/add/",
  "/forms/",
  "/forms/submissions/69/",
  "/users/",
  "/users/3/",
  "/users/add/",
  "/groups/",
  "/groups/?q=edi",
  "/groups/1/",
  "/groups/1/delete/",
  "/groups/new/",
  "/sites/",
  "/sites/2/",
  "/sites/2/delete/",
  "/sites/new/",
  "/collections/",
  "/collections/2/",
  "/collections/2/delete/",
  "/collections/add/",
  "/redirects/",
  "/redirects/?q=test",
  "/redirects/add/",
  "/searchpicks/",
  "/searchpicks/?q=test",
  "/searchpicks/add/",
  "/account/",
  "/account/change_password/",
  "/account/notification_preferences/",
  "/account/language_preferences/",
  "/forms/submissions/69/?date_from=2017-01-01&date_to=2050-01-01&action=filter",
  "/users/?q=admin",
  "/password_reset/",
];

describe("Accessibility", () => {
  beforeAll(async () => {
    // await page.setCookie({
    //     domain: 'localhost',
    //     path: '/',
    //     name: 'sessionid',
    //     value: 'grdhyy5v829zi6h8hdyoib3cfb8fm18d',
    //     expirationDate: 1798790400,
    //     hostOnly: false,
    //     httpOnly: false,
    //     secure: false,
    //     session: false,
    //     sameSite: 'no_restriction',
    // });
    // await page.goto('http://localhost:8000/admin');
    // await page.addScriptTag({ path: require.resolve('axe-core') });
  });

  views.forEach((path) => {
    it(path, async () => {
      console.log(path);
      jest.setTimeout(20000);

      // page = await browser.newPage();
      await page.setCookie({
        domain: "localhost",
        path: "/",
        name: "sessionid",
        value: "grdhyy5v829zi6h8hdyoib3cfb8fm18d",
        expirationDate: 1798790400,
        hostOnly: false,
        httpOnly: false,
        secure: false,
        session: false,
        sameSite: "no_restriction",
      });
      await page.goto(`http://localhost:8000/admin${path}`);
      await page.addScriptTag({ path: require.resolve("axe-core") });

      const result = await page.evaluate(
        () =>
          new Promise((resolve) => {
            window.axe.run((err, results) => {
              if (err) throw err;
              resolve(results);
            });
          }),
      );
      AxeReports.processResults(
        result,
        "csv",
        `accessibility/${path.replace(/\//g, "-")}`,
        true,
      );
      expect(result).toHaveNoViolations();
    });
  });

  // test.each`
  // id | path
  // ${1} | ${'/'}
  // ${2} | ${'/404'}
  // ${3} | ${'/styleguide/'}
  // ${4} | ${'/pages/preview'}
  // ${5} | ${'/pages/'}
  // ${6} | ${'/pages/search/?q=bread'}
  // ${8} | ${'/pages/60/'}
  // ${9} | ${'/pages/60/?ordering=ord'}
  // ${10} | ${'/pages/60/edit/'}
  // ${11} | ${'/pages/60/revisions/'}
  // ${12} | ${'/pages/60/unpublish/'}
  // ${13} | ${'/pages/60/delete/'}
  // ${14} | ${'/pages/60/copy/'}
  // ${15} | ${'/pages/60/add_subpage/'}
  // ${16} | ${'/pages/add/base/homepage/60/'}
  // ${17} | ${'/pages/69/move/60/'}
  // ${18} | ${'/base/people/'}
  // ${19} | ${'/base/people/edit/1/'}
  // ${20} | ${'/base/people/delete/1/'}
  // ${21} | ${'/base/people/create/'}
  // ${22} | ${'/images/'}
  // ${23} | ${'/images/?q=bread'}
  // ${24} | ${'/images/?collection_id=2'}
  // ${25} | ${'/images/47/'}
  // ${26} | ${'/images/47/delete/'}
  // ${27} | ${'/images/add/'}
  // ${28} | ${'/documents/'}
  // ${29} | ${'/documents/?collection_id=2'}
  // ${30} | ${'/documents/multiple/add/'}
  // ${31} | ${'/snippets/'}
  // ${32} | ${'/snippets/base/people/'}
  // ${33} | ${'/snippets/base/people/1/'}
  // ${34} | ${'/snippets/base/people/1/delete/'}
  // ${35} | ${'/snippets/base/people/add/'}
  // ${36} | ${'/forms/'}
  // ${37} | ${'/forms/submissions/69/'}
  // ${38} | ${'/users/'}
  // ${39} | ${'/users/3/'}
  // ${40} | ${'/users/add/'}
  // ${41} | ${'/groups/'}
  // ${42} | ${'/groups/?q=edi'}
  // ${43} | ${'/groups/1/'}
  // ${44} | ${'/groups/1/delete/'}
  // ${45} | ${'/groups/new/'}
  // ${46} | ${'/sites/'}
  // ${47} | ${'/sites/2/'}
  // ${48} | ${'/sites/2/delete/'}
  // ${49} | ${'/sites/new/'}
  // ${50} | ${'/collections/'}
  // ${51} | ${'/collections/2/'}
  // ${52} | ${'/collections/2/delete/'}
  // ${53} | ${'/collections/add/'}
  // ${54} | ${'/redirects/'}
  // ${55} | ${'/redirects/?q=test'}
  // ${56} | ${'/redirects/add/'}
  // ${57} | ${'/searchpicks/'}
  // ${58} | ${'/searchpicks/?q=test'}
  // ${59} | ${'/searchpicks/add/'}
  // ${60} | ${'/account/'}
  // ${61} | ${'/account/change_password/'}
  // ${62} | ${'/account/notification_preferences/'}
  // ${63} | ${'/account/language_preferences/'}
  // ${64} | ${'/forms/submissions/69/?date_from=2017-01-01&date_to=2050-01-01&action=filter'}
  // ${65} | ${'/users/?q=admin'}
  // ${66} | ${'/password_reset/'}
  // `('a11y', async ({ path }) => {
  //     console.log(path);
  //     jest.setTimeout(20000);

  //     await page.setCookie({
  //         domain: 'localhost',
  //         path: '/',
  //         name: 'sessionid',
  //         value: 'grdhyy5v829zi6h8hdyoib3cfb8fm18d',
  //         expirationDate: 1798790400,
  //         hostOnly: false,
  //         httpOnly: false,
  //         secure: false,
  //         session: false,
  //         sameSite: 'no_restriction',
  //     });
  //     await page.goto(`http://localhost:8000/admin${path}`);
  //     await page.addScriptTag({ path: require.resolve('axe-core') });

  //     const result = await page.evaluate(
  //         () =>
  //             new Promise(resolve => {
  //                 window.axe.run((err, results) => {
  //                     if (err) throw err;
  //                     resolve(results);
  //                 });
  //             }),
  //     );

  //     AxeReports.processResults(
  //         result,
  //         'csv',
  //         `accessibility/${path.replace(/\//g, '')}`,
  //         true,
  //     );
  //     expect(result).toHaveNoViolations();
  // });
});
