
$(function() {

	const $form = $("form");
	$form.validate({
		rules: {

		},

		messages: {

		},

		submitHandler: function() {
			$status.text("Loading hard...").fadeIn(1000);
			$.ajax({
				type: "POST",
				url: "",
				data: $form.serializeArray(),
				dataType: json
			})
				.done(function(data, textStatus, jqXHR) {
					$status.text("Thanks, submit successfully");
				})
				.fail(function(jqXHR, textStatus, errorThrown) {
					$status.text("Sorry, there's a error");
				});

			return false;
		}
	});

	const $submit = $(".submit");
	$submit.on("mousedown", function() {
			$submit.css("background", "#fff");
		}).on("mouseup mouseout", function() {
			$submit.css("background", "#eee");
		});

});
