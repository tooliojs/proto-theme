## Build

Now that all the dependencies are installed, we can continue to 
build a documentation website using @toolio/docs and @toolio/proto-theme.

We're going to use @toolio/docs default options to quickly get our docs up and running.

1. Create a directory named "docs" in the directory root of your project.
```bash
mkdir docs
```

2. Populate the "docs" directory with some `.md` files (your documentation). You can
use [proto-theme's documentation](https://github.com/tooliojs/proto-theme/tree/master/docs) 
as dummy data if you'd like. Your project structure should look similar to this.
```txt
docs/
    docs.md
    go.md
    here.md
    your.md
node_modules/
package.json
package-lock.json
```

3. Create a JavaScript file somewhere in your project directory. Inside that file we'll call the 
docs.build() function to generate our documentation. Here's how.
```js
// yourfile.js
require('@toolio/docs').build('html', {
    theme: 'proto',
    order: [
        'your',
        'docs',
        'go',
        'here
    ]
})
```
The `order` should be an array of markdown file names. It's used to determine the top to bottom rendering
of the documentation menu. Simply pass in the names of your markdown files 
excluding the extension (`.md`), and your docs will be built in that specific order.

4. Finally, run the script you created to generate your docs.
```bash
node yourfile.js
```
If you look in the "docs" direcotry, there should be a newly created directory called `__build__`. Congrats 
on making it this far. 
Your project now has documentation in Markdown and HTML! That's great. But wait, there's more. Check out 
[Markdown](Markdown.html) for details on some features included with this theme.

### Report Issues

If you encountered an error, during the Build process, please submit a 
[Bug Report](https://github.com/tooliojs/proto-theme/issues/new/choose). We
will try our best to fix the issue as quick as possible. On the other hand, 
the project is open source. You always have the option to clone it, and 
try and solve the issue yourself. We really appreciate all the help 
we can get :heart: