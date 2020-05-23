$(document).ready(function () {
    // Start upload preview image
    $(".gambar").attr("src", "https://user.gadjian.com/static/images/personnel_boy.png");
    var $uploadCrop,
        tempFilename,
        rawImg,
        imageId;
    var outputImgId = "";
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

    $uploadCrop = $('#upload-demo').croppie({
        viewport: {
            width: 200,
            height: 200,
        },
        enforceBoundary: false,
        enableExif: true
    });
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
        setImageChangeData(this);
    });

    $('.item-cover-img').on('change', function () {
        outputImgId = "coverPhoto";
        setImageChangeData(this);
    });

    $('.item-user-img').on('change', function () {
        outputImgId = "user-img";
        setImageChangeData(this);
    });
    $('#cropImageBtn').on('click', function (ev) {
        $uploadCrop.croppie('result', {
            type: 'base64',
            format: 'jpeg',
            size: { width: 200, height: 200 }
        }).then(function (resp) {
            $('#' + outputImgId).attr('src', resp);
            $('#cropImagePop').modal('hide');
        });
    });
    // End upload preview image

});

