
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

	let map;
	function initMap() {
		map = new google.maps.Map($(".map")[0], {
			center: {lat: 30.2741, lng: 120.1551},
			zoom: 8
		});
	}

