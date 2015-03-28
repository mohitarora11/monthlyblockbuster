$(function(){
	$('body').search();
	$(document).on('click','.sharebutton',function(e){
		e.preventDefault();
		k = "/";
		a= window.top.location.pathname.split('/');
		for(i=0;i<a.length-1;i++){		
			if(a[i]!==""){
			 k = k+a[i]+'/';
			}
		}		
		FB.ui({
			method: 'feed',
			name: $(this).parent().find('.nm').text(),
			picture: window.top.location.origin+k+'images/logo.png',
			link: window.location.href,
			caption: $(this).parent().find('.cat a').text(),
			description: 'Get a complimentary couple movie voucher worth Rs. 1,000/- when you spend Rs. 1,000 or more at listed merchants in any 4 out of 5 categories in a month.',
			message: ''
		});
	});
});