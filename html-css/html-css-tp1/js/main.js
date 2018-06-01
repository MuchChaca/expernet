
var progress = getProgress();

var temp = null;

$(document).ready(function(){
	$('#fm-size-disp').html($('#fm-size').val());
});

$(document).on('change', '#fm-size', function(){
	$('#fm-size-disp').html($('#fm-size').val());
});

$(document).on('focus', 'input', function(){
	temp = $(this).val();
});

$(document).on('blur', 'input', function(){
	if ($(this).val() != temp) {
		if($(this).val().length > 0 ){
			setProgress(getProgress()+10);
		} else {
			setProgress(getProgress()-10);
		}
	}
	temp = null;
});

function setProgress(val) {
	$('progress').val();
}

function getProgress() {
	return $('progress').val();
}