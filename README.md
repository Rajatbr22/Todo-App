# **Todo App**

### Setup instruction

1. Clone the project

```
    https://github.com/RajatBramhankar/Todo-App
```

Explain

2. Move into the directory

```
    cd lms-frontend-hn
```

Explain

3. install dependencies

```
    npm i
```

Explain

4. run the server

```
    npm run dev
```

Explain

### Setup instructions for tailwind

[Tail wind official instruction doc](https://tailwindcss.com/docs/installation)

1. Install tailwindcss

```
    npm install -D tailwindcss postcss autoprefixer
```

Explain

2. Create tailwind config file

```
    npx tailwindcss init
```

Explain

3. Add file extensions to tailwind config file in the contents property

```
    "./src/**/*.{html,js,jsx,ts,tsx}", "./index.html",

```

Explain

4. Add the tailwind directives at the top of the `index.css` file

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

Explain

5. Add the following details in the plugin property of tainwind config

```
    [require("daisyui"), require("@tailwindcss/line-clamp")]
```


### Configure auto import sort esline

1. Install simple import sore

```
    npm i -D eslint-plugin-simple-import-sort
```

Explain

2. Add rule in `.eslint.cjs`

```
    'simple-import-sort/imports': 'error'
```

Explain

3. add simple-import sort plugin in `.eslint.cjs`

```
    plugins: [..., 'simple-import-sort']
```

Explain

4. To enable auto import sort on file save in vscode
   * Open `settings.json`
   * add the following config

```
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
```
