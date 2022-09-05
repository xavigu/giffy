# How to deploy in github-pages

After deploying the project in the repository, the steps to be followed are as follows:

1. Install the [`gh-pages`](https://github.com/tschaub/gh-pages) npm package and designate it as a development dependency.

    ```shell
    $ npm install gh-pages --save-dev
    ```

2. Add a `homepage` property in this format\*: `https://{username}.github.io/{repo-name}`

    > \* For a [project site](https://pages.github.com/#project-site), that's the format. For a [user site](https://pages.github.com/#user-site), the format is: `https://{username}.github.io`. You can read more about the `homepage` property in the ["GitHub Pages" section](https://create-react-app.dev/docs/deployment/#github-pages) of the `create-react-app` documentation.

    ```diff
    {
      "name": "my-app",
      "version": "0.1.0",
    + "homepage": "https://gitname.github.io/react-gh-pages",
      "private": true,
    ```
At this point, the React app's `package.json` file includes a property named `homepage`.

3. Add deployment scripts to the `package.json` file

 Add a `predeploy` property and a `deploy` property to the `scripts` object:

    ```diff
    "scripts": {
    +   "predeploy": "npm run build",
    +   "deploy": "gh-pages -d build",
        "start": "react-scripts start",
        "build": "react-scripts build",
    ```

At this point, the  React app's `package.json` file includes deployment scripts.

4. Deploy the React app to GitHub Pages

    ```shell
    $ npm run deploy
    ```

    > That will cause the `predeploy` and `deploy` scripts defined in `package.json` to run.

5. You need add a theme in the section Settings -> Pages in project´s repository (any theme if you dont add a default theme will not be deployed).
  
   Remember select the branch gh-pages to deploy
