function formValidCheck(form, fieldNum) {}

$(document).ready(function() {
    // setTab(3);
});

$(document).ready(function() {

    let categoryDropdown = document.getElementById("category");
    let CategoryList = [{
            name: "All Categories",
            value: "1",
            selected: true
        },
        {
            name: "Crowdfunding",
            value: "2"
        },
        {
            name: "Social Giving",
            value: "3"
        },
        {
            name: "Promotions",
            value: "4"
        },
        {
            name: "Social change",
            value: "5"
        },
    ];

    $.each(CategoryList, function(key, entry) {
        let optionName = CategoryList[key].name;
        let optionValue = CategoryList[key].value;
        let el = document.createElement("option");
        el.textContent = optionName;
        el.value = optionValue;
        CategoryList[key].selected && (el.selected = CategoryList[key].selected);
        categoryDropdown.appendChild(el);
    });
    $('#category').selectize();

    let sortByDropdown = document.getElementById("sortBy");
    let sortByList = [{
            name: "Relevance",
            value: "1",
            selected: true
        },
        {
            name: "Newly Launched",
            value: "2"
        },
        {
            name: "Popular",
            value: "3"
        },
        {
            name: "Nearly Funded",
            value: "4"
        }
    ];

    $.each(sortByList, function(key, entry) {
        let optionName = sortByList[key].name;
        let optionValue = sortByList[key].value;
        let el = document.createElement("option");
        el.textContent = optionName;
        el.value = optionValue;
        if (sortByList[key].selected) {
            el.selected = sortByList[key].selected;
        }
        sortByDropdown.appendChild(el);
    });
    $('#sortBy').selectize();

    $('.my-nav>li').click(function(e) {
        $('.my-nav>li.active').removeClass('active');
        $(this).addClass('active');
        $('.my-nav>li.active')
    });

    $('.featrd-projectslider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        centerMode: true,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.modal-tstimonial').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        cssEase: 'linear'
    });
    // tab script
    $('ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });
});