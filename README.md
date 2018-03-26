# UI Tests for nudj

## Running tests

1. Clone repository
2. `cd` into local folder
3. `npm install`
4. Run `testcafe -s website/screenshots chrome::headless website/tests.js`

**Runs testcafe in headless chrome & saves screenshots to folder*

### Options for running tests

`testcafe [options] <browser-list-comma-separated> <file>`

For more details see [testcafe docs](https://devexpress.github.io/testcafe/documentation/getting-started/).

## Experimental Docker based approach

1. Make sure `web` is running
1. Run `docker run -v $(pwd)/website:/tests -it --link web-dev:target testcafe/testcafe -s tests/screenshots 'firefox' ./tests/tests.js`
