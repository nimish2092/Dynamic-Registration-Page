$(document).ready(function(){

	$('input').focus(function(){
		$(this).next().slideDown();
	}).blur(function(){
		$(this).next().slideUp();
	});

	$('#pass').focus(function(){
		$('.pwd-help').slideDown();
	}).blur(function(){
		$('.pwd-help').slideUp();
	});
/*-----------------------------PASSWORD BOX CHECKS-----------------------------*/
	$('#pass').keyup(function(e){

		var len = $('#pass').val().length;
		var count = 0;

		if(/\d/g.test(this.value)){
			$('#num-present').addClass('correct');
			$('#num-present-img').attr('src','assets/images/tick.png');
			count++;
			$('#pro').attr('value',count);
		}else{
			$('#num-present').removeClass('correct');
			$('#num-present-img').attr('src','assets/images/cross.png');
			/*count--;
			$('#pro').attr('value',count);*/
		}

		if(/[!@#$%^*?]/g.test(this.value)){
			$('#special-present').addClass('correct');
			$('#special-present-img').attr('src','assets/images/tick.png');
			count++;
			$('#pro').attr('value',count);
		}else{
			$('#special-present').removeClass('correct');
			$('#special-present-img').attr('src','assets/images/cross.png');
			/*count--;
			$('#pro').attr('value',count);*/
		}

		if(/(\W*\w){4,}/g.test(this.value)){
			$('#alpha').addClass('correct');
			$('#alpha-img').attr('src','assets/images/tick.png');
			count++;
			$('#pro').attr('value',count);
		}else{
			$('#alpha').removeClass('correct');
			$('#alpha-img').attr('src','assets/images/cross.png');
			/*count--;
			$('#pro').attr('value',count);*/
		}

		if(/\s/g.test(this.value)){
			$('#no-spaces').addClass('wrong');
			$('#no-spaces-img').attr('src','assets/images/cross.png');
			count--;
			$('#pro').attr('value',count);
		}else{
			$('#no-spaces').removeClass('wrong');
			$('#no-spaces-img').attr('src','assets/images/tick.png');
		}

		if( len >= 7 && len <= 20){
			$('#length').addClass('correct');
			$('#length-img').attr('src','assets/images/tick.png');
			count++;
			$('#pro').attr('value',count);
		}else{
			$('#length').removeClass('correct');
			$('#length-img').attr('src','assets/images/cross.png');
		}
	});

/*------------------------VERIFY PASSWORD-------------------------------------------*/

	$('#vpass').keyup(function(){
		var match = $('#pass').val() == $('#vpass').val();
		console.log(match);
		if(match == true){
			console.log("in loop");
			$('#vp').css('color','#13ad51');
			$(this).css('border','1px solid #13ad51');
		}
		else{
			console.log("in else loop");
			$('#vp').css('color','#ff3162');
			$(this).css('border','1px solid #ff3162');
		}
	});

/*-----------------------EMAIL CHECK-----------------------------------------------*/

	$('#email').blur(function(){
		if(/^\S+@\S+\.\S+$/.test(this.value)){
			$(this).css('border','1px solid #13ad51');
		}
		else{
			$(this).css('border','1px solid #ff3162');
		}
	});

/*----------------------------VERIFY EMAIL----------------------------------------*/

	$('#vemail').blur(function(){
		var ematch = $('#email').val() == $('#vemail').val();
		if(ematch == true){
			console.log("in loop");
			$(this).css('border','1px solid #13ad51');
		}
		else{
			console.log("in else loop");
			$(this).css('border','1px solid #ff3162');
		}
	});

/*------------------------------MOBILE NUMBER-------------------------------------*/

	$('#mob').keypress(function(e){
		if(e.which < 48 || e.which > 57){
			console.log("in if loop");
			e.preventDefault();
		}

	});

	$('#mob').keyup(function(){
		if($(this).val().length == 10){
			$(this).css('border','1px solid #13ad51');
		}else{
			$(this).css('border','1px solid #ff3162');
		}

	});

/*-------------------------Storing values locally-------------------------------*/

	$('button').click(function(){
		localStorage['userid'] = $('#uid').val();
		localStorage['password'] = $('#pass').val();
		localStorage['email'] = $('#email').val();
		localStorage['security_q1'] = $('#sq1').val();
		localStorage['security_a1'] = $('#sa1').val();
		localStorage['security_q2'] = $('#sq2').val();
		localStorage['security_a2'] = $('#sa2').val();
		localStorage['mobile'] = $('#mob').val();
		localStorage['address'] = $('#add').val();
		localStorage['comments'] = $('#com').val();
	});

	
});