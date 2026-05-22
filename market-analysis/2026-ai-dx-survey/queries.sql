-- How often do you use AI tools when working on Wagtail projects? (Single select)
SELECT
    CASE WHEN "How often do you use AI tools when working on Wagtail projects?" IS NULL OR "How often do you use AI tools when working on Wagtail projects?" = '' THEN 'No answer' ELSE "How often do you use AI tools when working on Wagtail projects?" END AS answer,
    COUNT(*) AS count,
    ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM survey_responses), 1) AS percentage
FROM survey_responses
GROUP BY 1
ORDER BY count DESC;

-- How would you describe your level of experience with AI-assisted development? (Single select)
SELECT
    CASE WHEN "How would you describe your level of experience with AI-assisted development?" IS NULL OR "How would you describe your level of experience with AI-assisted development?" = '' THEN 'No answer' ELSE "How would you describe your level of experience with AI-assisted development?" END AS answer,
    COUNT(*) AS count,
    ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM survey_responses), 1) AS percentage
FROM survey_responses
GROUP BY 1
ORDER BY count DESC;

-- How well does current AI tooling work on Wagtail projects? (Single select)
SELECT
    CASE WHEN "How well does current AI tooling work on Wagtail projects?" IS NULL OR "How well does current AI tooling work on Wagtail projects?" = '' THEN 'No answer' ELSE "How well does current AI tooling work on Wagtail projects?" END AS answer,
    COUNT(*) AS count,
    ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM survey_responses), 1) AS percentage
FROM survey_responses
GROUP BY 1
ORDER BY count DESC;

-- What kinds of AI tools do you use on projects? (Multi select)
WITH raw AS (
    SELECT UNNEST(string_split("What kinds of AI tools do you use on projects?", ',')) AS answer
    FROM survey_responses
    WHERE "What kinds of AI tools do you use on projects?" IS NOT NULL AND "What kinds of AI tools do you use on projects?" != ''
),
total AS (
    SELECT COUNT(*) AS total FROM survey_responses WHERE "What kinds of AI tools do you use on projects?" IS NOT NULL AND "What kinds of AI tools do you use on projects?" != ''
)
SELECT
    TRIM(answer) AS answer,
    COUNT(*) AS count,
    ROUND(COUNT(*) * 100.0 / MAX(total.total), 1) AS percentage
FROM raw, total
GROUP BY 1
ORDER BY count DESC;

-- Do you use some of our existing efforts with AI in Wagtail? (Multi select)
WITH raw AS (
    SELECT UNNEST(string_split("Do you use some of our existing efforts with AI in Wagtail?", ',')) AS answer
    FROM survey_responses
    WHERE "Do you use some of our existing efforts with AI in Wagtail?" IS NOT NULL AND "Do you use some of our existing efforts with AI in Wagtail?" != ''
)
SELECT
    TRIM(answer) AS answer,
    COUNT(*) AS count,
    ROUND(COUNT(*) * 100.0 / 48.0, 1) AS percentage
FROM raw
GROUP BY 1
ORDER BY count DESC;

-- How we can use your information (Multi select)
WITH raw AS (
    SELECT UNNEST(string_split("How we can use your information", ',')) AS answer
    FROM survey_responses
    WHERE "How we can use your information" IS NOT NULL AND "How we can use your information" != ''
),
total AS (
    SELECT COUNT(*) AS total FROM survey_responses WHERE "How we can use your information" IS NOT NULL AND "How we can use your information" != ''
)
SELECT
    TRIM(answer) AS answer,
    COUNT(*) AS count,
    ROUND(COUNT(*) * 100.0 / MAX(total.total), 1) AS percentage
FROM raw, total
GROUP BY 1
ORDER BY count DESC;

-- How systematically do you use AI tools for the following tasks? (Matrix)
SELECT
    subtask,
    answer,
    COUNT(*) AS count,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(PARTITION BY subtask), 1) AS percentage
FROM (
    SELECT 'Requirements gathering' AS subtask, "How systematically do you use AI tools for the following tasks? Requirements gathering" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Architecture design' AS subtask, "How systematically do you use AI tools for the following tasks? Architecture design" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Drafting acceptance criteria' AS subtask, "How systematically do you use AI tools for the following tasks? Drafting acceptance criteria" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Data modelling' AS subtask, "How systematically do you use AI tools for the following tasks? Data modelling" AS answer FROM survey_responses
    UNION ALL
    SELECT 'API design' AS subtask, "How systematically do you use AI tools for the following tasks? API design" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Code generation' AS subtask, "How systematically do you use AI tools for the following tasks? Code generation" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Code review' AS subtask, "How systematically do you use AI tools for the following tasks? Code review" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Refactoring' AS subtask, "How systematically do you use AI tools for the following tasks? Refactoring" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Test generation' AS subtask, "How systematically do you use AI tools for the following tasks? Test generation" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Documentation' AS subtask, "How systematically do you use AI tools for the following tasks? Documentation" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Debugging and troubleshooting' AS subtask, "How systematically do you use AI tools for the following tasks? Debugging and troubleshooting" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Accessibility checking' AS subtask, "How systematically do you use AI tools for the following tasks? Accessibility checking" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Performance optimisation' AS subtask, "How systematically do you use AI tools for the following tasks? Performance optimisation" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Security review' AS subtask, "How systematically do you use AI tools for the following tasks? Security review" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Documentation generation' AS subtask, "How systematically do you use AI tools for the following tasks? Documentation generation" AS answer FROM survey_responses
) AS unpivoted
WHERE answer IS NOT NULL AND answer != ''
GROUP BY subtask, answer
ORDER BY subtask, count DESC;

-- For which Wagtail-related tasks do you regularly use AI assistance? (Matrix)
SELECT
    subtask,
    answer,
    COUNT(*) AS count,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(PARTITION BY subtask), 1) AS percentage
FROM (
    SELECT 'Generating page types or other models' AS subtask, "For which Wagtail-related tasks do you regularly use AI assistance? Generating page types or other models" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Generating StreamField block definitions' AS subtask, "For which Wagtail-related tasks do you regularly use AI assistance? Generating StreamField block definitions" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Wiring site data to Django templates' AS subtask, "For which Wagtail-related tasks do you regularly use AI assistance? Wiring site data to Django templates" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Wagtail/Django upgrades and migrations' AS subtask, "For which Wagtail-related tasks do you regularly use AI assistance? Wagtail/Django upgrades and migrations" AS answer FROM survey_responses
    UNION ALL
    SELECT 'CMS customizations (hooks, ViewSets, etc)' AS subtask, "For which Wagtail-related tasks do you regularly use AI assistance? CMS customizations (hooks, ViewSets, etc)" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Wagtail API integrations' AS subtask, "For which Wagtail-related tasks do you regularly use AI assistance? Wagtail API integrations" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Content migration scripts' AS subtask, "For which Wagtail-related tasks do you regularly use AI assistance? Content migration scripts" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Debugging Wagtail-specific issues' AS subtask, "For which Wagtail-related tasks do you regularly use AI assistance? Debugging Wagtail-specific issues" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Exploring documentation or source code' AS subtask, "For which Wagtail-related tasks do you regularly use AI assistance? Exploring documentation or source code" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Front-end development' AS subtask, "For which Wagtail-related tasks do you regularly use AI assistance? Front-end development" AS answer FROM survey_responses
) AS unpivoted
WHERE answer IS NOT NULL AND answer != ''
GROUP BY subtask, answer
ORDER BY subtask, count DESC;

-- Please rate the importance of the following considerations for your team around AI adoption (Matrix)
SELECT
    subtask,
    answer,
    COUNT(*) AS count,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(PARTITION BY subtask), 1) AS percentage
FROM (
    SELECT 'Intellectual property, copyright, licensing' AS subtask, "Please rate the importance of the following considerations for your team around AI adoption Intellectual property, copyright, licensing" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Legal liability / compliance' AS subtask, "Please rate the importance of the following considerations for your team around AI adoption Legal liability / compliance" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Ethics and bias' AS subtask, "Please rate the importance of the following considerations for your team around AI adoption Ethics and bias" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Environmental impact' AS subtask, "Please rate the importance of the following considerations for your team around AI adoption Environmental impact" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Broader societal impact' AS subtask, "Please rate the importance of the following considerations for your team around AI adoption Broader societal impact" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Cost and commercial viability' AS subtask, "Please rate the importance of the following considerations for your team around AI adoption Cost and commercial viability" AS answer FROM survey_responses
    UNION ALL
    SELECT 'None of these' AS subtask, "Please rate the importance of the following considerations for your team around AI adoption None of these" AS answer FROM survey_responses
) AS unpivoted
WHERE answer IS NOT NULL AND answer != ''
GROUP BY subtask, answer
ORDER BY subtask, count DESC;

-- Please rate which possible improvements you think would be most helpful for AI-assisted development (Matrix)
SELECT
    subtask,
    answer,
    COUNT(*) AS count,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(PARTITION BY subtask), 1) AS percentage
FROM (
    SELECT 'Better documentation of Wagtail capabilities' AS subtask, "Please rate which possible improvements you think would be most helpful for AI-assisted development Better documentation of Wagtail capabilities" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Better documentation of Django capabilities on Wagtail projects' AS subtask, "Please rate which possible improvements you think would be most helpful for AI-assisted development Better documentation of Django capabilities on Wagtail projects" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Better tutorial/cookbook-style content' AS subtask, "Please rate which possible improvements you think would be most helpful for AI-assisted development Better tutorial/cookbook-style content" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Better inline code documentation in Wagtail''s source' AS subtask, "Please rate which possible improvements you think would be most helpful for AI-assisted development Better inline code documentation in Wagtail's source" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Type hints for Python code' AS subtask, "Please rate which possible improvements you think would be most helpful for AI-assisted development Type hints for Python code" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Machine-readable API references and code examples' AS subtask, "Please rate which possible improvements you think would be most helpful for AI-assisted development Machine-readable API references and code examples" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Opinionated starter kits / project templates' AS subtask, "Please rate which possible improvements you think would be most helpful for AI-assisted development Opinionated starter kits / project templates" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Official Wagtail rules / prompts / skills for AI assistants' AS subtask, "Please rate which possible improvements you think would be most helpful for AI-assisted development Official Wagtail rules / prompts / skills for AI assistants" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Official CLI for common tasks (scaffolding, upgrades)' AS subtask, "Please rate which possible improvements you think would be most helpful for AI-assisted development Official CLI for common tasks (scaffolding, upgrades)" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Official write API for programmatic content creation' AS subtask, "Please rate which possible improvements you think would be most helpful for AI-assisted development Official write API for programmatic content creation" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Official wagtail.org MCP server for documentation and QA' AS subtask, "Please rate which possible improvements you think would be most helpful for AI-assisted development Official wagtail.org MCP server for documentation and QA" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Official project-integrated MCP server for automation' AS subtask, "Please rate which possible improvements you think would be most helpful for AI-assisted development Official project-integrated MCP server for automation" AS answer FROM survey_responses
) AS unpivoted
WHERE answer IS NOT NULL AND answer != ''
GROUP BY subtask, answer
ORDER BY subtask, count DESC;

-- Please rate which content management features you think would be most helpful for CMS users working with AI (Matrix)
SELECT
    subtask,
    answer,
    COUNT(*) AS count,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(PARTITION BY subtask), 1) AS percentage
FROM (
    SELECT 'Natural language search' AS subtask, "Please rate which content management features you think would be most helpful for CMS users working with AI Natural language search" AS answer FROM survey_responses
    UNION ALL
    SELECT 'First draft writing assistance' AS subtask, "Please rate which content management features you think would be most helpful for CMS users working with AI First draft writing assistance" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Editorial assistance (feedback, rewriting)' AS subtask, "Please rate which content management features you think would be most helpful for CMS users working with AI Editorial assistance (feedback, rewriting)" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Automated translations' AS subtask, "Please rate which content management features you think would be most helpful for CMS users working with AI Automated translations" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Automated content personalization' AS subtask, "Please rate which content management features you think would be most helpful for CMS users working with AI Automated content personalization" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Structured data / metadata generation' AS subtask, "Please rate which content management features you think would be most helpful for CMS users working with AI Structured data / metadata generation" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Image alt text generation' AS subtask, "Please rate which content management features you think would be most helpful for CMS users working with AI Image alt text generation" AS answer FROM survey_responses
    UNION ALL
    SELECT 'Connector with existing AI agents and tools' AS subtask, "Please rate which content management features you think would be most helpful for CMS users working with AI Connector with existing AI agents and tools" AS answer FROM survey_responses
) AS unpivoted
WHERE answer IS NOT NULL AND answer != ''
GROUP BY subtask, answer
ORDER BY subtask, count DESC;

-- Score For which Wagtail-related tasks do you regularly use AI assistance Matrix
-- Values are 0-4 with optional suffixes like "0 (never)", "4 (always)"
-- We extract the leading number and sum across all responses.
WITH unpivoted AS (
    SELECT 'Generating page types or other models' AS subtask, TRY_CAST(regexp_extract("For which Wagtail-related tasks do you regularly use AI assistance? Generating page types or other models", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Generating StreamField block definitions' AS subtask, TRY_CAST(regexp_extract("For which Wagtail-related tasks do you regularly use AI assistance? Generating StreamField block definitions", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Wiring site data to Django templates' AS subtask, TRY_CAST(regexp_extract("For which Wagtail-related tasks do you regularly use AI assistance? Wiring site data to Django templates", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Wagtail/Django upgrades and migrations' AS subtask, TRY_CAST(regexp_extract("For which Wagtail-related tasks do you regularly use AI assistance? Wagtail/Django upgrades and migrations", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'CMS customizations (hooks, ViewSets, etc)' AS subtask, TRY_CAST(regexp_extract("For which Wagtail-related tasks do you regularly use AI assistance? CMS customizations (hooks, ViewSets, etc)", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Wagtail API integrations' AS subtask, TRY_CAST(regexp_extract("For which Wagtail-related tasks do you regularly use AI assistance? Wagtail API integrations", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Content migration scripts' AS subtask, TRY_CAST(regexp_extract("For which Wagtail-related tasks do you regularly use AI assistance? Content migration scripts", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Debugging Wagtail-specific issues' AS subtask, TRY_CAST(regexp_extract("For which Wagtail-related tasks do you regularly use AI assistance? Debugging Wagtail-specific issues", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Exploring documentation or source code' AS subtask, TRY_CAST(regexp_extract("For which Wagtail-related tasks do you regularly use AI assistance? Exploring documentation or source code", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Front-end development' AS subtask, TRY_CAST(regexp_extract("For which Wagtail-related tasks do you regularly use AI assistance? Front-end development", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
)
SELECT
    subtask,
    SUM(score) AS total_score,
    COUNT(score) AS responses,
    ROUND(AVG(score), 2) AS avg_score
FROM unpivoted
WHERE score IS NOT NULL
GROUP BY subtask
ORDER BY total_score DESC;

-- Score: How systematically do you use AI tools for the following tasks Matrix
WITH unpivoted AS (
    SELECT 'Requirements gathering' AS subtask, TRY_CAST(regexp_extract("How systematically do you use AI tools for the following tasks? Requirements gathering", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Architecture design' AS subtask, TRY_CAST(regexp_extract("How systematically do you use AI tools for the following tasks? Architecture design", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Drafting acceptance criteria' AS subtask, TRY_CAST(regexp_extract("How systematically do you use AI tools for the following tasks? Drafting acceptance criteria", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Data modelling' AS subtask, TRY_CAST(regexp_extract("How systematically do you use AI tools for the following tasks? Data modelling", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'API design' AS subtask, TRY_CAST(regexp_extract("How systematically do you use AI tools for the following tasks? API design", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Code generation' AS subtask, TRY_CAST(regexp_extract("How systematically do you use AI tools for the following tasks? Code generation", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Code review' AS subtask, TRY_CAST(regexp_extract("How systematically do you use AI tools for the following tasks? Code review", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Refactoring' AS subtask, TRY_CAST(regexp_extract("How systematically do you use AI tools for the following tasks? Refactoring", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Test generation' AS subtask, TRY_CAST(regexp_extract("How systematically do you use AI tools for the following tasks? Test generation", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Documentation' AS subtask, TRY_CAST(regexp_extract("How systematically do you use AI tools for the following tasks? Documentation", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Debugging and troubleshooting' AS subtask, TRY_CAST(regexp_extract("How systematically do you use AI tools for the following tasks? Debugging and troubleshooting", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Accessibility checking' AS subtask, TRY_CAST(regexp_extract("How systematically do you use AI tools for the following tasks? Accessibility checking", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Performance optimisation' AS subtask, TRY_CAST(regexp_extract("How systematically do you use AI tools for the following tasks? Performance optimisation", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Security review' AS subtask, TRY_CAST(regexp_extract("How systematically do you use AI tools for the following tasks? Security review", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Documentation generation' AS subtask, TRY_CAST(regexp_extract("How systematically do you use AI tools for the following tasks? Documentation generation", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
)
SELECT
    subtask,
    SUM(score) AS total_score,
    COUNT(score) AS responses,
    ROUND(AVG(score), 2) AS avg_score
FROM unpivoted
WHERE score IS NOT NULL
GROUP BY subtask
ORDER BY total_score DESC;

-- Score: Please rate the importance of the following considerations for your team around AI adoption Matrix
WITH unpivoted AS (
    SELECT 'Intellectual property, copyright, licensing' AS subtask, TRY_CAST(regexp_extract("Please rate the importance of the following considerations for your team around AI adoption Intellectual property, copyright, licensing", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Legal liability / compliance' AS subtask, TRY_CAST(regexp_extract("Please rate the importance of the following considerations for your team around AI adoption Legal liability / compliance", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Ethics and bias' AS subtask, TRY_CAST(regexp_extract("Please rate the importance of the following considerations for your team around AI adoption Ethics and bias", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Environmental impact' AS subtask, TRY_CAST(regexp_extract("Please rate the importance of the following considerations for your team around AI adoption Environmental impact", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Broader societal impact' AS subtask, TRY_CAST(regexp_extract("Please rate the importance of the following considerations for your team around AI adoption Broader societal impact", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Cost and commercial viability' AS subtask, TRY_CAST(regexp_extract("Please rate the importance of the following considerations for your team around AI adoption Cost and commercial viability", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'None of these' AS subtask, TRY_CAST(regexp_extract("Please rate the importance of the following considerations for your team around AI adoption None of these", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
)
SELECT
    subtask,
    SUM(score) AS total_score,
    COUNT(score) AS responses,
    ROUND(AVG(score), 2) AS avg_score
FROM unpivoted
WHERE score IS NOT NULL
GROUP BY subtask
ORDER BY total_score DESC;

-- Score: Please rate which content management features you think would be most helpful for CMS users working with AI Matrix
WITH unpivoted AS (
    SELECT 'Natural language search' AS subtask, TRY_CAST(regexp_extract("Please rate which content management features you think would be most helpful for CMS users working with AI Natural language search", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'First draft writing assistance' AS subtask, TRY_CAST(regexp_extract("Please rate which content management features you think would be most helpful for CMS users working with AI First draft writing assistance", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Editorial assistance (feedback, rewriting)' AS subtask, TRY_CAST(regexp_extract("Please rate which content management features you think would be most helpful for CMS users working with AI Editorial assistance (feedback, rewriting)", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Automated translations' AS subtask, TRY_CAST(regexp_extract("Please rate which content management features you think would be most helpful for CMS users working with AI Automated translations", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Automated content personalization' AS subtask, TRY_CAST(regexp_extract("Please rate which content management features you think would be most helpful for CMS users working with AI Automated content personalization", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Structured data / metadata generation' AS subtask, TRY_CAST(regexp_extract("Please rate which content management features you think would be most helpful for CMS users working with AI Structured data / metadata generation", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Image alt text generation' AS subtask, TRY_CAST(regexp_extract("Please rate which content management features you think would be most helpful for CMS users working with AI Image alt text generation", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Connector with existing AI agents and tools' AS subtask, TRY_CAST(regexp_extract("Please rate which content management features you think would be most helpful for CMS users working with AI Connector with existing AI agents and tools", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
)
SELECT
    subtask,
    SUM(score) AS total_score,
    COUNT(score) AS responses,
    ROUND(AVG(score), 2) AS avg_score
FROM unpivoted
WHERE score IS NOT NULL
GROUP BY subtask
ORDER BY total_score DESC;

-- Score: Please rate which possible improvements you think would be most helpful for AI-assisted development Matrix
WITH unpivoted AS (
    SELECT 'Better documentation of Wagtail capabilities' AS subtask, TRY_CAST(regexp_extract("Please rate which possible improvements you think would be most helpful for AI-assisted development Better documentation of Wagtail capabilities", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Better documentation of Django capabilities on Wagtail projects' AS subtask, TRY_CAST(regexp_extract("Please rate which possible improvements you think would be most helpful for AI-assisted development Better documentation of Django capabilities on Wagtail projects", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Better tutorial/cookbook-style content' AS subtask, TRY_CAST(regexp_extract("Please rate which possible improvements you think would be most helpful for AI-assisted development Better tutorial/cookbook-style content", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Better inline code documentation in Wagtail''s source' AS subtask, TRY_CAST(regexp_extract("Please rate which possible improvements you think would be most helpful for AI-assisted development Better inline code documentation in Wagtail's source", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Type hints for Python code' AS subtask, TRY_CAST(regexp_extract("Please rate which possible improvements you think would be most helpful for AI-assisted development Type hints for Python code", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Machine-readable API references and code examples' AS subtask, TRY_CAST(regexp_extract("Please rate which possible improvements you think would be most helpful for AI-assisted development Machine-readable API references and code examples", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Opinionated starter kits / project templates' AS subtask, TRY_CAST(regexp_extract("Please rate which possible improvements you think would be most helpful for AI-assisted development Opinionated starter kits / project templates", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Official Wagtail rules / prompts / skills for AI assistants' AS subtask, TRY_CAST(regexp_extract("Please rate which possible improvements you think would be most helpful for AI-assisted development Official Wagtail rules / prompts / skills for AI assistants", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Official CLI for common tasks (scaffolding, upgrades)' AS subtask, TRY_CAST(regexp_extract("Please rate which possible improvements you think would be most helpful for AI-assisted development Official CLI for common tasks (scaffolding, upgrades)", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Official write API for programmatic content creation' AS subtask, TRY_CAST(regexp_extract("Please rate which possible improvements you think would be most helpful for AI-assisted development Official write API for programmatic content creation", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Official wagtail.org MCP server for documentation and QA' AS subtask, TRY_CAST(regexp_extract("Please rate which possible improvements you think would be most helpful for AI-assisted development Official wagtail.org MCP server for documentation and QA", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
    UNION ALL
    SELECT 'Official project-integrated MCP server for automation' AS subtask, TRY_CAST(regexp_extract("Please rate which possible improvements you think would be most helpful for AI-assisted development Official project-integrated MCP server for automation", '(\d+)', 1) AS INTEGER) AS score FROM survey_responses
)
SELECT
    subtask,
    SUM(score) AS total_score,
    COUNT(score) AS responses,
    ROUND(AVG(score), 2) AS avg_score
FROM unpivoted
WHERE score IS NOT NULL
GROUP BY subtask
ORDER BY total_score DESC;
