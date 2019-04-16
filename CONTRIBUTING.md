# Contributing

1. Check out the [issues](https://github.com/articulate/orson/issues)
1. [Fork](https://guides.github.com/activities/forking/) this repository
1. [Clone](https://help.github.com/articles/cloning-a-repository/) your fork
1. Add the upstream project (this one) as a git remote:
    ```
    $ git remote add upstream git@github.com:articulate/orson.git
    $ git fetch upstream
    $ git rebase upstream/master
    ```
1. Check out a feature branch
    ```
    $ git checkout -b my-feature
    ```
1. Make your changes
1. Add storybook examples (see `stories/` folder) and test by running
   `$ yarn storybook` and navigating to http://localhost:6006. To view a static
   version of this output (not on a local server), run `$ yarn storybook:build`
   and then `$ open storybook-static/index.html`
1. Run `$ yarn lint --fix` to fix up any linter issues
1. Don't forget to make sure `$ yarn build` works! Check your build output in
   your package's `dist/` folder to make sure it is transpiling correctly
1. Push your branch to your GitHub repo
    ```
    $ git push origin my-feature
    ```
1. Create a [pull request](https://help.github.com/articles/about-pull-requests/)
   from your branch to this repo's `master` branch
1. When all is merged, pull down the upstream changes to your master
    ```
    $ git fetch upstream
    $ git rebase upstream/master
    ```
1. Delete your feature branch (locally and then on GitHub)
    ```
    $ git branch -D my-feature
    $ git push origin :my-feature
    ```
