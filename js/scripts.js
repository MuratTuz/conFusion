
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
  
        $(function(){
            $('#reserveModalButton').on('click', function(){
                $('#ReserveModal').modal('toggle');
                });     
                
            $('#loginModalButton').on('click', function(){
               $('#loginModal').modal('toggle');
            });

        });

 
/*
    <script>
    $('#mycarousel').on('slide.bs.carousel', function(){
        $('h3').html('HELLO WORLD');
    });
    </script>
    */