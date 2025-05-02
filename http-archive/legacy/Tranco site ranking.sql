SELECT date, domain, rank FROM `tranco.daily.daily` WHERE domain in (
  'angular.dev',
'astro.build',
'djangoproject.com',
'drupal.org',
'expressjs.com',
'fastapi.tiangolo.com',
'fastify.io',
'flask.palletsprojects.com',
'htmx.org',
'laravel.com',
'nextjs.org',
'nuxt.com',
'phoenixframework.org',
'react.dev',
'strapi.io',
'svelte.dev',
'symfony.com',
'rubyonrails.org',
'vuejs.org',
'wordpress.org',
'wagtail.org') and
(
date="2019-07-16" or
date="2019-07-30" or
date="2019-08-13" or
date="2019-08-27" or
date="2019-09-10" or
date="2019-09-24" or
date="2019-10-08" or
date="2019-10-22" or
date="2019-11-05" or
date="2019-11-19" or
date="2019-12-03" or
date="2019-12-17" or
date="2019-12-31" or
date="2020-01-14" or
date="2020-01-28" or
date="2020-02-11" or
date="2020-02-25" or
date="2020-03-10" or
date="2020-03-24" or
date="2020-04-07" or
date="2020-04-21" or
date="2020-05-05" or
date="2020-05-19" or
date="2020-06-02" or
date="2020-06-16" or
date="2020-06-30" or
date="2020-07-14" or
date="2020-07-28" or
date="2020-08-11" or
date="2020-08-25" or
date="2020-09-08" or
date="2020-09-22" or
date="2020-10-06" or
date="2020-10-20" or
date="2020-11-03" or
date="2020-11-17" or
date="2020-12-01" or
date="2020-12-15" or
date="2020-12-29" or
date="2021-01-12" or
date="2021-01-26" or
date="2021-02-09" or
date="2021-02-23" or
date="2021-03-09" or
date="2021-03-23" or
date="2021-04-06" or
date="2021-04-20" or
date="2021-05-04" or
date="2021-05-18" or
date="2021-06-01" or
date="2021-06-15" or
date="2021-06-29" or
date="2021-07-13" or
date="2021-07-27" or
date="2021-08-10" or
date="2021-08-24" or
date="2021-09-07" or
date="2021-09-21" or
date="2021-10-05" or
date="2021-10-19" or
date="2021-11-02" or
date="2021-11-16" or
date="2021-11-30" or
date="2021-12-14" or
date="2021-12-28" or
date="2022-01-11" or
date="2022-01-25" or
date="2022-02-08" or
date="2022-02-22" or
date="2022-03-08" or
date="2022-03-22" or
date="2022-04-05" or
date="2022-04-19" or
date="2022-05-03" or
date="2022-05-17" or
date="2022-05-31" or
date="2022-06-14" or
date="2022-06-28" or
date="2022-07-12" or
date="2022-07-26" or
date="2022-08-09" or
date="2022-08-23" or
date="2022-09-06" or
date="2022-09-20" or
date="2022-10-04" or
date="2022-10-18" or
date="2022-11-01" or
date="2022-11-15" or
date="2022-11-29" or
date="2022-12-13" or
date="2022-12-27" or
date="2023-01-10" or
date="2023-01-24" or
date="2023-02-07" or
date="2023-02-21" or
date="2023-03-07" or
date="2023-03-21" or
date="2023-04-04" or
date="2023-04-18" or
date="2023-05-02" or
date="2023-05-16" or
date="2023-05-30" or
date="2023-06-13" or
date="2023-06-27" or
date="2023-07-11" or
date="2023-07-25" or
date="2023-08-08" or
date="2023-08-22" or
date="2023-09-05" or
date="2023-09-19" or
date="2023-10-03" or
date="2023-10-17" or
date="2023-10-31" or
date="2023-11-14" or
date="2023-11-28" or
date="2023-12-12" or
date="2023-12-26" or
date="2024-01-09" or
date="2024-01-23" or
date="2024-02-06" or
date="2024-02-20" or
date="2024-03-05" or
date="2024-03-19" or
date="2024-04-02" or
date="2024-04-16" or
date="2024-04-30" or
date="2024-05-14" or
date="2024-05-28" or
date="2024-06-11" or
date="2024-06-25" or
date="2024-07-09" or
date="2024-07-23" or
date="2024-08-08" or
date="2024-08-22" or
date="2024-09-05" or
date="2024-09-19"

)
 order by date desc, domain
 LIMIT 100000
