function formValidCheck(form, fieldNum) {}

$(document).ready(function () {

    let categoryDropdown = document.getElementById("category");
    let CategoryList = [{
            name: "One",
            value: "1"
        },
        {
            name: "Two",
            value: "2"
        },
        {
            name: "Three",
            value: "3"
        },
        {
            name: "Four",
            value: "4"
        },
        {
            name: "Five",
            value: "5"
        },
    ];

    $.each(CategoryList, function (key, entry) {
        let optionName = CategoryList[key].name;
        let optionValue = CategoryList[key].value;
        let el = document.createElement("option");
        el.textContent = optionName;
        el.value = optionValue;
        categoryDropdown.appendChild(el);
    });
    $('#category').selectize();

    let sortByDropdown = document.getElementById("sortBy");
    let sortByList = [{
            name: "Relevance",
            value: "1"
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
            name: "Nearly Founded",
            value: "4"
        }
    ];

    $.each(sortByList, function (key, entry) {
        let optionName = sortByList[key].name;
        let optionValue = sortByList[key].value;
        let el = document.createElement("option");
        el.textContent = optionName;
        el.value = optionValue;
        sortByDropdown.appendChild(el);
    });
    $('#sortBy').selectize();

    $('.my-nav>li').click(function (e) {
        $('.my-nav>li.active').removeClass('active');
        $(this).addClass('active');
        $('.my-nav>li.active')
    });
});