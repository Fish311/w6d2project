let i;
for (i = 0; i < 16; i++) {
    $('#container').append('<div class="box"><div>');
}
$('#container').on('click', '.box', function() {
    $(this).toggleClass('boxChange');
});