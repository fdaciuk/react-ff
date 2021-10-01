# How to contribute to this project

# Contributing

- Fork it!
- Create a remote link with main repository: `git remote add upstream git@github.com:fdaciuk/react-ff.git`;
- Update your local repository: `git fetch upstream`;
- Create your feature branch based on `main`: `git checkout -b my-new-feature`;

## Running

Install local modules:

```console
yarn
```

Then, you can start the webserver with the following command:

```console
yarn dev
```

When you're ready, continue with next steps:

- Make sure the code has no lint or type errors;
- If some error is displayed, execute `yarn lint:fix` to fix it;
- Add your changes: `git add .`;
- Commit your changes: `git commit -m 'Add some feature'`;
- Push to the branch: `git push origin my-new-feature`;
- Submit a pull request for `main` branch, and summon `@fdaciuk` :D

## Tips

- Send only one feature for Pull Request;
- Send small Pull Requests.

## Build steps

> If you are sending a pull request, you shouldn't run this commands.

With the latest code version on `main` branch, execute the following steps:

On `main` branch, just run this command:

```console
npm version <version>
```

When `<version>` may be `patch`, `minor` ou `major`.

Send tags and commit to `main` branch:

```console
git push origin main
```

Then, create a new release from GitHub.

And done ;)
