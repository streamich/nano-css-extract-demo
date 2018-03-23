# `extract` Addon Demo

Extracts [`nano-css`](https://github.com/streamich/nano-css) styles into an external style sheet.

## How-to

Run these commands to execute demo.

```shell
npm install
node extract.js
```


## Usage

Its a three step process.


### Step 1: Add `extract` addon

Create file that will do the extraction, say `extract.js`, import your instance of `nano-css`
and add `extact` addon.

```js
const nano = require('./src/nano').nano;

require('nano-css/addon/extract').addon(nano);
```


### Step 2: Generate CSS

Evaluate all modules from which you want to extract CSS. Your modules should not have side-effects
for this step to work correctly.

```js
require('./src/components/Button');
require('./src/components/Form');
// ...
// ...
```


### Step 3: Save your CSS

All CSS that was possible to extract will now be available in `nano.raw` property.
You can save it to file on the next tick.

```js
process.nextTick(() => {
  console.log('CSS', nano.raw);
  fs.writeFileSync('./my-styles.css', nano.raw);
});
```
