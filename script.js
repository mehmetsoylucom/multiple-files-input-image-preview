$(document).ready(function () {
    var inputLocalFont = document.getElementById("images");
    inputLocalFont.addEventListener("change", previewImages, false); //bind the function to the input

    function previewImages() {
        var fileList = this.files;
        var anyWindow = window.URL || window.webkitURL;

        $('#previewDiv').empty();
        $('#counterNumberSpan').text(fileList.length);
        $('#counterDiv').append(' file added');

        for (var i = 0; i < fileList.length; i++) {
            var objectUrl = anyWindow.createObjectURL(fileList[i]);

            $('#previewDiv').append(
                '<div class="col-md-1">' +
                '<div style="min-height:100px;">' +
                    '<img style="max-height:90px" class="img-responsive" src="' + objectUrl + '" />' +
                '</div>' +
                '</div>'
            );

            window.URL.revokeObjectURL(fileList[i]);
        }
    }

    $('#addImageLabel').click(function () {
        $('#images').trigger('click');
    });

    $('#previewDiv > div > a').click(function () {
        for (var i = 0; i < fileList.length; i++) {
            var objectUrl = anyWindow.createObjectURL(fileList[i]);
            window.URL.revokeObjectURL(fileList[i]);
        }

        var total = $('#counterNumberSpan').text();
        $(this).parent().remove();
        $('#counterNumberSpan').text(total - 1);
    });
});