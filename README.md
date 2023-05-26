##### Setup Guide
Make sure that you have python and node installed.
There are also several python libraries that you will need to install.
When you run the application it will throw an error if some of the libraries are missing.

# Run Client:
- NB! do this in the client folder
- `npm install`
- `npm run dev`


# To get vscode to not care about @apply:
- Go to `settings.json` (shift+cmd+p -> settings.json):
- add: `"svelte.plugin.css.diagnostics.enable": false`
- restart svelte language-server (shift+cmd+p -> svelte)


# Nice VSCode-Extentions for development
- Tailwind CSS IntelliSense
- Svelte for VS Code


# GIT note
- `git add .`
- `git commit -m 'text'`
- `git pull`
- `git push`


# Note for adding items in .gitignore
- `git rm -r --cached .`
- `git add .`

# Resetting the branch-list in vscode
- `git -p fetch`

# Build & serve docker file
- build docker file using `docker build . -t svelte-docker`
- serve file using `docker run --rm --name=svelte-docker -p 5000:80 svelte-docker`

# If stopping docker container asks for permission

- use `sudo aa-remove-unknown`