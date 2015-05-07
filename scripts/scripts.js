jQuery(document).ready(function() {

			//--wow init-->
            new WOW().init();

            //--owl carousel init-->
          
            $(".owl-carousel").owlCarousel({
            	items:4
            });
            
            //!--smooth scroll init-->
            smoothScroll.init();
            
            //<!--text in canvas 1 -->
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");

            ctx.font = "20px Lato";
            ctx.fillStyle = "#506A85";
            ctx.fillText("Grand Motel gets an identity brushup", 20, 50);
            ctx.font = "15px Lato";
            ctx.fillStyle = "#506A85";
            ctx.fillText("Identity", 170, 75);
            
            //<!--text in canvas 2 -->
           
            var c = document.getElementById("myCanvas2");
            var ctx = c.getContext("2d");

            ctx.font = "20px Lato";
            ctx.fillStyle = "#506A85";
            ctx.fillText("Fresh branding for a creative startup", 23, 50);
            ctx.font = "15px Lato";
            ctx.fillStyle = "#506A85";
            ctx.fillText("Identity", 170, 75);

            //<!--countTo init---------------------------------------->
                // custom formatting example
                $('#earth').data('countToOptions', {
                    formatter: function(value, options) {
                        return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                    }
                });

                // custom callback when counting completes
                $('#countdown').data('countToOptions', {
                    onComplete: function(value) {
                        $(this).text('BLAST OFF!').addClass('red');
                    }
                });

                // another custom callback for counting to infinity
                $('#infinity').data('countToOptions', {
                    onComplete: function(value) {
                        count.call(this, {
                            from: value,
                            to: value + 1
                        });
                    }
                });

                // start all the timers
                $('.timer').each(count);

                // restart a timer when a button is clicked
                $('.restart').click(function(event) {
                    event.preventDefault();
                    var target = $(this).data('target');
                    count.call($(target));
                });

                function count(options) {
                    var $this = $(this);
                    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                    $this.countTo(options);
                }
           
});
