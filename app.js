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

var nsg = require('node-sprite-generator');
 
nsg({
    src: [
        'render/wiggle_dancer/*.jpg'
    ],
    spritePath: 'results/wiggle_dancer.png',
    layout: 'horizontal',
}, function (err) {
	if(err) {console.log(err)}
    console.log('Sprite generated!');
});
