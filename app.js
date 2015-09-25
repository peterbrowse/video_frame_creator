/*
var ffmpeg = require('ffmpeg');
	
var options = {
	frame_rate: 24,
	size: '280x?'
};

try {
	var process = new ffmpeg(__dirname + '/render/85.mov');
	process.then(function(video) {
		video.fnExtractFrameToJPG(__dirname + '/results/', options, function(error, files) {

			if(!error)
				console.log('Frames: ' + files);

		});
	}, function(err) {
		console.log('- Error: ' + err);
	});
} catch (e) {
	console.log('line 19: ' + e.code);
	console.log('line 20: ' + e.msg);
}
*/

var gulp 	= require('gulp'),
	gulpif 	= require('gulp-if'),
	sprity 	= require('sprity'),
	gutil 	= require('gulp-util');;
	
gulp.task('sprites', function () {
  return sprity.src({
    src: './render/napoleon_dynamite/*.*',
    orientation: 'horizontal',
    margin: 0,
    name: 'napoleon_dynamite' 
  })
  .pipe(gulpif('*.png', gulp.dest('./results/'), gulp.dest('./css/')))
  .on('end', function(){ gutil.log('Done!') })
  .on('error', function(err) { gutil.log(err)})
});

