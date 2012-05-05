Modernizr.load([
    {
        load: '//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js',
        complete: function () {
            if ( !window.jQuery ) {
                Modernizr.load('js/vendor/jquery-1.7.2.min.js');
            }
        }
    },
    {
        test: Modernizr.classlist,
        nope: ['js/vendor/classList.min.js'],
        both: ['js/vendor/impress.js', 'js/vendor/highlight.pack.js'],
        complete: function () {
            if ("ontouchstart" in document.documentElement) { 
                document.querySelector(".hint").innerHTML = "<p>Tap on the left or right to navigate</p>";
            }
            $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
            impress().init();
        }
    }
]);