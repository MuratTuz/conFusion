
    $(document).ready(function(){
    $("#mycarousel").carousel( { interval: 1500 } );
    $("#carousel-button").click(function(){
        if ($("#carousel-button").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carousel-button").removeClass('btn-outline-danger');
            $("#carousel-button").addClass('btn-outline-success');
            $("#carousel-button").children("span").removeClass('fa-pause');
            $("#carousel-button").children("span").addClass('fa-play');
        }
        else {
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").removeClass('btn-outline-success');
            $("#carousel-button").addClass('btn-outline-danger');
            $("#carousel-button").children("span").removeClass('fa-play');
            $("#carousel-button").children("span").addClass('fa-pause');                    
        }
    });
    });
  
    /*    Scripts are disabled for the assignments

    <script>
        $(document).ready(function(){
            $("#mycarousel").carousel( { interval: 2000 } );
            $("#carousel-pause").click(function(){
                $("#mycarousel").carousel('pause');
            });
            $("#carousel-play").click(function(){
                $("#mycarousel").carousel('cycle');
            });
        });
    </script>
     
    <script>
        $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
        $('.carousel').carousel({
            interval: 2000
            })
            });
    </script>
 

    <script>
    $('#mycarousel').on('slide.bs.carousel', function(){
        $('h3').html('HELLO WORLD');
    });
    </script>
    */