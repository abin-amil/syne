const projectTypes = {
    CROWDFUNDING: 'Crowdfunding',
    SOCIALGIVING: 'Social Giving',
    PROMOTIONS: 'Promotions',
    SOCIALCHANGE: 'Social Change'
}


$(document).ready(function () {
    // category dropdown setting
    let categoryDropdown = document.getElementById("category");
    let CategoryList = [
        { name: "One", value: "1" },
        { name: "Two", value: "2" },
        { name: "Three", value: "3" },
        { name: "Four", value: "4" },
        { name: "Five", value: "5" },
    ]

    $.each(CategoryList, function (key, entry) {
        let optionName = CategoryList[key].name;
        let optionValue = CategoryList[key].value;
        let el = document.createElement("option");
        el.textContent = optionName;
        el.value = optionValue;
        categoryDropdown.appendChild(el);
    });
    $('#category').selectize();

    // country list setting
    let countryDropdown = document.getElementById("selectCountry");
    let CountryList = [
        { name: 'Afghanistan', code: 'AF' },
        { name: 'Åland Islands', code: 'AX' },
        { name: 'Albania', code: 'AL' },
        { name: 'Algeria', code: 'DZ' },
        { name: 'American Samoa', code: 'AS' },
        { name: 'India', code: 'IND' }
    ]

    $.each(CountryList, function (key, entry) {
        let optionName = CountryList[key].name;
        let optionValue = CountryList[key].code;
        let el = document.createElement("option");
        el.textContent = optionName;
        el.value = optionValue;
        countryDropdown.appendChild(el);
    });
    $('#selectCountry').selectize();

    // city list setting
    let cityDropdown = document.getElementById("selectCity");
    let CityList = [
        { "country": "AD", "name": "Sant Julià de Lòria" },
        { "country": "AD", "name": "Pas de la Casa" },
        { "country": "AD", "name": "Ordino" },
        { "country": "AD", "name": "les Escaldes" },
        { "country": "AD", "name": "la Massana" },
    ]

    $.each(CityList, function (key, entry) {
        let optionName = CityList[key].name;
        let optionValue = CityList[key].name;
        let el = document.createElement("option");
        el.textContent = optionName;
        el.value = optionValue;
        cityDropdown.appendChild(el);
    });
    $('#selectCity').selectize();
});

// Date picker actions
$('#startDatepicker').datepicker({
    uiLibrary: 'bootstrap4'
});
$('#endDatepicker').datepicker({
    uiLibrary: 'bootstrap4'
});

var projectDetails = {};
Dropzone.options.projectIcon = {
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 2, // MB,
    addRemoveLinks: true,
    maxFiles: 1,
    maxfilesexceeded: function (file) {
        this.removeAllFiles();
        this.addFile(file);
    },
    removedfile: function (file) {
        document.getElementById("projectIconDefault").classList.add('d-flex');
        var _ref;
        return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
    },
    init: function () {
        this.on("addedfile", function (file) {
            var reader = new FileReader();
            reader.onload = function (event) {
                // event.target.result contains base64 encoded image
                projectDetails.projectIcon = event.target.result;
                document.getElementById("projectIconDefault").classList.remove('d-flex');
                document.getElementById("projectIconDefault").style.display = "none";
                document.getElementsByClassName("dz-preview")[0].classList.add("top-padding")
            };
            reader.readAsDataURL(file);
        });

        this.on('error', function (file, errorMessage) {
            if (file.accepted) {
                var mypreview = document.getElementsByClassName('dz-error');
                mypreview = mypreview[mypreview.length - 1];
                mypreview.classList.toggle('dz-error');
                mypreview.classList.toggle('dz-success');
            }
        });
    }
};

projectDetails.projectMorePhotos = [];
Dropzone.options.projectMorePhotos = {
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 2, // MB,
    addRemoveLinks: true,
    removedfile: function (file) {
        if (projectDetails.projectMorePhotos.length == 1) {
            document.getElementById("projectIconDefault1").classList.add('d-flex');
        }
        // remove the file from the projectMorePhotos details.
        projectDetails.projectMorePhotos = projectDetails.projectMorePhotos.filter(x => { return x.name !== file.name });
        var _ref;
        return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
    },
    init: function () {
        this.on("addedfile", function (file) {
            projectDetails.projectMorePhotos[projectDetails.projectMorePhotos.length] = {
                name: file.name,
                data: ""
            };
            var reader = new FileReader();
            reader.onload = function (event) {
                // event.target.result contains base64 encoded image
                projectDetails.projectMorePhotos[projectDetails.projectMorePhotos.length - 1].data = event.target.result;
                document.getElementById("projectIconDefault1").classList.remove('d-flex');
                document.getElementById("projectIconDefault1").style.display = "none";
            };
            reader.readAsDataURL(file);
        });

        this.on('error', function (file, errorMessage) {
            if (file.accepted) {
                var mypreview = document.getElementsByClassName('dz-error');
                mypreview = mypreview[mypreview.length - 1];
                mypreview.classList.toggle('dz-error');
                mypreview.classList.toggle('dz-success');
            }
        });
    }
};

// add hyphen to project url when a space is given
function addHyphen(element) {
    let ele = document.getElementById(element.id);
    ele = ele.value.split('--').join('-');    // Remove dash (-) if mistakenly entered.
    let finalVal = ele.toLowerCase().replace(/ /g, '-');
    document.getElementById(element.id).value = finalVal;
}

var prevId;
var prevRadioId;
var projectCategory;
function projectTypeClick(id, type) {
    switch (type) {
        case projectTypes.CROWDFUNDING:
            projectCategory = projectTypes.CROWDFUNDING;
            break;
        case projectTypes.PROMOTIONS:
            projectCategory = projectTypes.PROMOTIONS;
            break;
        case projectTypes.SOCIALCHANGE:
            projectCategory = projectTypes.SOCIALCHANGE;
            break;
        case projectTypes.SOCIALGIVING:
            projectCategory = projectTypes.SOCIALGIVING;
            break;
    }
    var x = document.getElementById(id).querySelectorAll(".radio-button-default");
    if (prevId !== id) {
        document.getElementById(x[0].id).classList.remove('radio-button-default');
        document.getElementById(x[0].id).classList.add('radio-button-on-click');

        document.getElementById(id).classList.remove('projectCard');
        document.getElementById(id).classList.add('projectCardActive');

        document.getElementById(id + '_img').classList.remove(id + '_img')
        document.getElementById(id + '_img').classList.add(id + '_img_hover_on_click');
        document.getElementById(id + '_img').classList.remove(id + '_img');

        if (prevId) {
            document.getElementById(prevRadioId).classList.remove('radio-button-on-click');
            document.getElementById(prevRadioId).classList.add('radio-button-default');

            document.getElementById(prevId).classList.remove('projectCardActive');
            document.getElementById(prevId).classList.add('projectCard');

            document.getElementById(prevId + '_img').classList.remove(prevId + '_img_hover_on_click');
            document.getElementById(prevId + '_img').classList.add(prevId + '_img');
        }
    }
    prevRadioId = x[0].id;
    prevId = id;
    document.getElementById("proceed1").disabled = false;
}

function proceed(i) {
    document.getElementById("startProject" + i).style.display = "none";
    if (i < 6) {
        document.getElementById("startProject" + (i + 1)).style.display = "block";
    }

    var progress = i * 20;
    document.getElementById("progressbar").style.width = progress + "%";


    var category = $("#category").change(function () {
        var category = $('option:selected', this).text();
        document.getElementById("proceed2").disabled = false;
    });

    switch (i) {
        case 1:
            projectDetails.type = projectCategory;
            break;
        case 2:
            projectDetails.category = category[0].value;
            break;
        case 3:
            let thirdformValues = {};
            $.each($('#thirdRegForm').serializeArray(), function (i, field) {
                thirdformValues[field.name] = field.value;
            });

            projectDetails.Title = thirdformValues.title;
            projectDetails.Url = thirdformValues.projectUrl;
            projectDetails.Comment = thirdformValues.comment;
            break;
        case 4:
            let fourthformValues = {};
            $.each($('#fourthRegForm').serializeArray(), function (i, field) {
                fourthformValues[field.name] = field.value;
            });
            projectDetails.selectedCountry = fourthformValues.selectCountry;
            projectDetails.selectedCity = fourthformValues.selectCity;
            projectDetails.startDate = fourthformValues.startDate;
            projectDetails.endDate = fourthformValues.endDate;
            projectDetails.targetSupport = fourthformValues.targetSupport;
            break;
        case 5:
            break;
        case 6:
            let sixthformValues = {};
            $.each($('#sixthRegForm').serializeArray(), function (i, field) {
                sixthformValues[field.name] = field.value;
            });
            projectDetails.projectExplanation = sixthformValues.projectExplanation;
            window.location.href = "./home.html";
            break;
        default:
            break;
    }
}

function formValidCheck(formId, formNum) {
    let formValues = {};
    let invalid = false;
    $.each($(formId).serializeArray(), function (i, field) {
        if (field.value === "") {
            invalid = true;
        }
    });
    if (!invalid) {
        document.getElementById("proceed" + formNum).disabled = false;
    } else {
        document.getElementById("proceed" + formNum).disabled = true;
    }
}