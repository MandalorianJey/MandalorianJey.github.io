$(document).ready(() => {
    $('#wrap-head>a').click(function () {
        $('#active').attr('id', '');
        $(this).attr('id', 'active');
    })
})