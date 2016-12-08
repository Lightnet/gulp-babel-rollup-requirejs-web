
Simple gulp rollupjs and requirejs auto build for browser javascript.

Note it will requirejs to work in web browser. The main.js file src and main.js lib are different but similar. It is the main entry point for javascript.

Installing npm packages:

npm install -D (install dev packages)
npm install -g gulp (install global for run command)

There are two build one is default:

Command Line:

rollup -c

Run config file in rollup.config.js.

gulp

Run auto build script in gulpfile.js config.

It will export all to dist folder and as well host 127.0.0.1:80.
