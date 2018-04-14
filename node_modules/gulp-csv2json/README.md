# gulp-csv2json

[![Build Status](https://travis-ci.org/DataGarage/gulp-csv2json.png?branch=master)](https://travis-ci.org/DataGarage/gulp-csv2json)

gulp plugin convert csv to json

## Install

Install with [npm](https://npmjs.org/package/gulp-csv2json)

```
npm install --save-dev gulp-csv2json
```


## Example

```js
var gulp = require('gulp');
var csv2json = require('gulp-csv2json');
var rename = require('gulp-rename');

gulp.task('default', function () {

var csvParseOptions = {}; //based on options specified here : http://csv.adaltas.com/parse/

	gulp.src('src/**/*.csv')
		.pipe(csv2json(csvParseOptions))
		.pipe(rename({extname: '.json'}))
		.pipe(gulp.dest('dist'));
});
```


## API

### csv2json(option)


## License

MIT [@chilijung](http://github.com/chilijung)
