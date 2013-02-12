require.config({
	waitSecond:2,
	paths: {
		jquery: 'jquery/jquery-1.8.3.min',
        'jquery-ui': 'jquery-ui/jquery-ui-1.8.22'
    }
});

require([
		'index/index'
	]
);