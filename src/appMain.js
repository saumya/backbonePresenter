requirejs.config({
	//To get timely, correct error triggers in IE, force a define/shim exports check.
    enforceDefine: true,
	// 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.8.3.min")
    paths: {
        // Core Libraries
        "jquery": "../assets/js/jquery-1.9.0",
        "underscore": "../assets/js/underscore-1.4.4",
        "backbone": "../assets/js/backbone-0.9.10"
    },
    // Sets the configuration for your third party scripts that are not AMD compatible
    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
        	exports: '_'
        },
        'backbone': {
            deps: ['jquery','underscore'],
            exports: 'Backbone'
        }
    }// end Shim Configuration
});


define(
    ['jquery','underscore','backbone'],
    
    function (jQueryLocal,underscoreLocal,backboneLocal) {
    	/*
        console.log('local', jQueryLocal);
        console.log('local', underscoreLocal);
        console.log('local', backboneLocal);
        console.log('global', $);
        console.log('global', _);
        console.log('global', Backbone);
        */
       	/*
       	console.log(jQueryLocal('#container'));
       	console.log(underscoreLocal('#container'));
       	*/
       	console.log('Application initalisation');
       	//finally the call to the application initialisation
       	require(['modules/dirtyModule','modules/appEntryModule'],function(DirtyModule,ApplicationEntry){
			console.log('Entry to the application Entry code');
			//We are not doing anything specifically here as a space for flexibility
		});
    }
);