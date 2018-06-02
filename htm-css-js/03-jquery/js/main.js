
// <=> $(document).ready()
// $(function(){
// 	//
// });



// // // on click
// $('p').on('click', function(){
// 	$(this).hide();
// });



	// default hidden
	$('#p-ctnt').hide();

	// enter -> show
	$('#p-lbl').mouseenter(() => $('#p-ctnt').show());
	// leave -> hide
	$('#p-lbl').mouseleave(() => $('#p-ctnt').hide());

	$('p').on('click', () => $(this).hide());

	var cpt = 0;

	$('#msg').on({
		mouseenter: function(){
			cpt++;
			$(this).html('happened: ' + cpt + ' times');
		},
		mouseleave: function(){
			cpt++;
			$(this).html('happened: ' + cpt + ' times');
		},
	});


	cptCl = 0;
	// $('h1').css('font-size', '100px');
	var clToAdd;
	$('#click0').on('click', function(){
		if(cptCl > 11) {
			cptCl = 0;
		} else {
			cptCl++;
		}
		clToAdd = 'cl-' + cptCl;
		lastCl = cptCl-1;
		lastCl = 'cl-' + lastCl;
		$('h1').removeClass(lastCl);
		$('h1').addClass(clToAdd);
	});

$('#login').on('keyup', function(){
	if($(this).val().length >= 7) {
		setValid($(this));
	} else {
		setNonValid($(this));
	}
});
$('#pass, #pass-bis').on('keyup', function(){
	if($(this).val().length >= 8 && $('#pass').val() == $('#pass-bis').val()) {
		setValid($('#pass'));
		setValid($('#pass-bis'));
	} else {
		setNonValid($(this));
	}
});

function setValid(elem) {
	elem.removeClass('non-valid');
	elem.addClass('valid');
}

function setNonValid(elem) {
	elem.removeClass('valid');
	elem.addClass('non-valid');
}
