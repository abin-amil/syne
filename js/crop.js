$(document).ready(function () {
    // Start upload preview image
    $(".gambar").attr("src", "https://user.gadjian.com/static/images/personnel_boy.png");
    var $uploadCrop,
        tempFilename,
        rawImg,
        imageId;
    var outputImgId = "";
    let coverPhotoCropping = false;
    let profilePicCropping = false;
    function readFile(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.upload-demo').addClass('ready');
                $('#cropImagePop').modal('show');
                rawImg = e.target.result;
            }
            reader.readAsDataURL(input.files[0]);
        }
        else {
            swal("Sorry - you're browser doesn't support the FileReader API");
        }
    }

    function setImageChangeData(data) {
        imageId = $(data).data('id');
        tempFilename = $(data).val();
        $('#cancelCropBtn').data('id', imageId);
        readFile(data);
    }

    function setProfilePhotoCropping() {
        coverPhotoCropping = false;
        profilePicCropping = true;
    }

    function setCoverPhotoCropping() {
        coverPhotoCropping = true;
        profilePicCropping = false;
    }

    function initializeCoppie(width,height) {
        $('#upload-demo').croppie('destroy');
        $uploadCrop = $('#upload-demo').croppie({
            viewport: {
                width: width,
                height: height,
            },
            enforceBoundary: false,
            enableExif: true
        });
    }
    $('#cropImagePop').on('shown.bs.modal', function () {
        // alert('Shown pop');
        $uploadCrop.croppie('bind', {
            url: rawImg
        }).then(function () {
            console.log('jQuery bind complete');
        });
    });

    $('.item-img').on('change', function () {
        outputImgId = "item-img-output" // this is the crop test element
        setProfilePhotoCropping();
        initializeCoppie(200);
        setImageChangeData(this);
    });

    $('.item-cover-img').on('change', function () {
        outputImgId = "coverPhoto";
        setCoverPhotoCropping();
        initializeCoppie(300, 100);
        setImageChangeData(this);
    });

    $('.item-user-img').on('change', function () {
        outputImgId = "user-img";
        setProfilePhotoCropping();
        initializeCoppie(200, 200);
        setImageChangeData(this);
    });
    $('#cropImageBtn').on('click', function (ev) {
        let size = { width: 200, height: 200 }; // default size
        if (coverPhotoCropping) {
            size = { width: 800, height: 170 }
        }
        $uploadCrop.croppie('result', {
            type: 'base64',
            format: 'jpeg',
            size: size
        }).then(function (resp) {
            $('#' + outputImgId).attr('src', resp);
            $('#cropImagePop').modal('hide');
        });
    });
    // End upload preview image

});

