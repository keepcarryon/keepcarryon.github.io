(function() {
	var contactFrom = $("#contactForm");
	contactFrom.submit(function(e){
		
		var first_name = $("input[name='first_name']").val();
		var email = $("input[name='email']").val();
		var message = $("input[name='message']").val();
		
		$.post("/hello/myStation/insertContactInfo",contactFrom.serialize(),function(data){
			data = JSON.parse(data);
			if(data.success){
				alert(data.info)
				contactFrom[0].reset();
			}else{
				//e.preventDefault();
				alert(data.info.name+data.info.data)
			}			
		});
		return false;
	});
})();