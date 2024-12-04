 $(document).ready(function() {
          

          $('#quotes-loader').show()

          $.ajax({
            url: 'https://smileschool-api.hbtn.info/quotes',
            method: 'GET',
          }).done(function(data) {
            $('.quotes-carousel').empty();

            data.forEach((quote, index) => {
                let activeClass = index === 0 ? ' active ' : '';

                $('.quotes-carousel').append(
                    `
                        <div class="carousel-item ${activeClass}">
                            <div class="row mx-auto align-items-center">
                                <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                                 <img src="${quote.pic_url}" class="d-block align-self-center" alt="Person"/>
                                </div>
                                <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                                    <div class="quote-text">
                                        <p class="text-white">${quote.text}</p>
                                        <h4 class="text-white font-weight-bold">${quote.name}</h4>
                                        <span class="text-white">${quote.title}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                );
            });
          });
          $('.quotes-carousel').slick({
                infinite: true,
                autoScroll: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow_white_left.png" alt="Previous" /></button>',
                nextArrow: '<button type="button" class="slick-next"><img src="images/arrow_white_right.png" alt="Next" /></button>',
                responsive: [{
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }]
              });

              $('.loader').hide();

        $('#tut-loader').show();

        $.ajax({
            url: 'https://smileschool-api.hbtn.info/popular-tutorials',
            method: 'GET',
        }).done(function(data) {
            $('tut-carousel').empty();

            let $current;
            data.forEach((video, index) => {
                if (index % 4 === 0) {
                    $current = $('<div>', { class: 'carousel-item' });
                    if (index === 0) {
                        $current.addClass('active');
                    }
                    $current.append('<div class="row no-gutters"></div>');
                    $('.tut-carousel').append($current);
            }
                let $card = $(
                    `
                        <div class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
                            <div class="card">
                                <img src="${video.thumb_url}" class="card-img-top" alt="Thumbnail">
                                <div class="card-img-overlay text-center">
                                    <img src="images/play.png" alt="Play button" width="64px" class="align-self-center play-overlay">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold">${video.title}</h5>
                                    <p class="card-text text-muted">${video[` subtitle `]}</p>
                                    <div class="creator d-flex align-items-center">
                                        <img src="${video.author_pic_url}" alt="Creator" class="rounded circle"
                                        <h6 class="pl-3 m-0 main-color">${video.author}</h6>
                                    </div>
                                    <div class="info pt-3 d-flex justify-content-between">
                                        <div class="rating"> 
                                            ${Array.from({ length: 5}, (_, i) => i < video.star ? '<img src="images/star_on.png" alt="star on" width="15px">' : '<img src="images/star_off.png" alt="star off" width="15px"').join('')}
                                            </div>
                                            <span class="main-color">${video.duration}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    `
                );
                $current.find('row').append($card);
            });
        });
 });