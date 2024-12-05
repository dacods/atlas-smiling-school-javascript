document.addEventListener("DOMContentLoaded", () => {
    const url = "https://smileschool-api.hbtn.info/quotes";
    const carouselInner = document.querySelector(".carousel-inner");
    const loader = document.querySelector(".loader");

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((quotes) => {
            loader.remove();

            quotes.forEach((quote, index) => {
                const carouselItem = document.createElement("div");
                carouselItem.className = `carousel-item ${index === 0 ? "active" : ""}`;

                carouselItem.innerHTML = 
                `
                    <div class="row mx-auto align-items-center">
                        <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                            <img src="${quote.pic_url}" class="d-block align-self-center rounded-circle" alt="Profile picture of ${quote.name}"/>
                        </div>
                        <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                            <div class="quote-text">
                                <p class="text-white">${quote.text}</p>
                                <h4 class="text-white font-weight-bold">${quote.name}</h4>
                                <span class="text-white">${quote.title}</span>
                            </div>
                        </div>
                    </div>
                `;
            carouselInner.appendChild(carouselItem);
            });
        })
});

document.addEventListener("DOMContentLoaded", () => {
    const url = "https://smileschool-api.hbtn.info/popular-tutorials";
    const carouselInner = document.querySelector("#carouselExampleControls2 .carousel-inner");
    const loader = document.querySelector(".loader");

    fetch(url)
        .then((response) => response.json())
        .then((tutorials) => {
            loader.remove();

            tutorials.forEach((video, index) => {
                const cardHTML = `
                    <div class="carousel-item ${index === 0 ? "active" : ""}">
                        <div class="card">
                            <img src="${video.thumb_url}" class="card-img-top" alt="${video.title} thumbnail" />
                            <div class="card-img-overlay text-center">
                                <img src="images/play.png" alt="Play" width="64px" height="64px" class="play-overlay mx-auto" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">${video.title}</h5>
                                <p class="card-text text-muted">${video["sub-title"]}</p>
                                <div class="creator d-flex align-items-center">
                                    <img src="${video.author_pic_url}" alt="${video.author}'s profile" width="30px" class="rounded-circle" />
                                    <h6 class="pl-3 m-0 main-color">${video.author}</h6>
                                </div>
                                <div class="info pt-3 d-flex justify-content-between">
                                    <div class="rating">
                                        ${Array.from({ length: 5 }, (_, i) => i < video.star ? 
                                        '<img src="images/star_on.png" alt="star on" width="15px" class="mr-1">' : 
                                        '<img src="images/star_off.png" alt="star off" width="15px" class="mr-1">'
                                        ).join('')}
                                    </div>
                                    <span class="main-color">${video.duration}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                carouselInner.innerHTML += cardHTML;
            });

            $('#carouselExampleControls2 .carousel-inner').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                prevArrow: '.tut-left',
                nextArrow: '.tut-right',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            });
        })
});

document.addEventListener("DOMContentLoaded", () => {
    const url = "https://smileschool-api.hbtn.info/latest-videos";
    const carouselInner = document.querySelector("#carouselExampleControls3 .carousel-inner");
    const loader = document.querySelector(".loader");

    fetch(url)
        .then((response) => response.json())
        .then((tutorials) => {
            loader.remove();

            tutorials.forEach((latest, index) => {
                const cardHTML = `
                    <div class="carousel-item ${index === 0 ? "active" : ""}">
                        <div class="card">
                            <img src="${latest.thumb_url}" class="card-img-top" alt="${latest.title} thumbnail" />
                            <div class="card-img-overlay text-center">
                                <img src="images/play.png" alt="Play" width="64px" height="64px" class="play-overlay mx-auto" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">${latest.title}</h5>
                                <p class="card-text text-muted">${latest["sub-title"]}</p>
                                <div class="creator d-flex align-items-center">
                                    <img src="${latest.author_pic_url}" alt="${latest.author}'s profile" width="30px" class="rounded-circle" />
                                    <h6 class="pl-3 m-0 main-color">${latest.author}</h6>
                                </div>
                                <div class="info pt-3 d-flex justify-content-between">
                                    <div class="rating">
                                        ${Array.from({ length: 5 }, (_, i) => i < latest.star ? 
                                        '<img src="images/star_on.png" alt="star on" width="15px" class="mr-1">' : 
                                        '<img src="images/star_off.png" alt="star off" width="15px" class="mr-1">'
                                        ).join('')}
                                    </div>
                                    <span class="main-color">${latest.duration}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                carouselInner.innerHTML += cardHTML;
            });

            $('#carouselExampleControls3 .carousel-inner').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                prevArrow: '.latest-left',
                nextArrow: '.latest-right',
                arrow: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            });
        })
});

$(document).ready(function() {
    $.get('https://smileschool-api.hbtn.info/quotes', function(data) {
      $('.loader').hide();
      let quotesHtml = '';

      data.forEach(quote, index => {
        quotesHtml += `
          <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <div class="row">
              <div class="col-sm-3 text-center">
                <img class="rounded-circle" src="${quote.pic_url}" width="150" height="150" alt="${quote.name}">
              </div>
              <div class="col-sm-8 ml-3">
                <p>${quote.text}</p>
                <p><span class="font-weight-bold">${quote.name}</span><br>
                <span class="font-italic">${quote.title}</span></p>
              </div>
            </div>
          </div>`;
      });

      $('.carousel-inner').html(quotesHtml)
    });
  });