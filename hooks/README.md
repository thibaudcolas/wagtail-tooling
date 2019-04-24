# Git hooks for Wagtail

[Git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) are scripts that Git executes before or after events such as: commit, push, and receive.

For Wagtail development, here are hooks that make it easier to check code without having to run full test suites or CI builds manually.

## `pre-commit`

The `pre-commit` hook is one of the most useful hooks. It can be used to validate code before making a local commit, similarly to how CI can be used to validate code before it gets merged into a release branch.

To install it,

```sh
# From your local development copy of Wagtail,
curl https://raw.githubusercontent.com/thibaudcolas/wagtail-tooling/master/hooks/pre-commit > .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit
```

Then, the hook will be executed whenever committing code. To bypass the hook for a given commit, use the `--no-verify` flag:

```sh
git commit -m 'Add something without running the tests and linting' --no-verify
```

Included in this hook:

- [x] Python linting via `flake8`
- [x] HTML linting via `jinjalint`
- [x] SCSS linting via `stylelint`
- [x] JavaScript linting via `eslint`
- [x] JavaScript unit tests with coverage
- [ ] Python unit tests (really slow)
- [x] Client-side code build
- [x] Documentation build
