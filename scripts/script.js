
$(function() {

	$(".submit").on("submit", function(event) {
		event.preventDefault();
	});
	$(".submit").on("click", addMarker);

	const $form = $("form");
	$form.validate({
		rules: {
			latitude: {
				range: [-90, 90]
			},
			longitude: {
				range: [-180, 180]
			}
		},

		messages: {
			latitude: {
				required: "Please provide valid latitude"
			},
			longitude: {
				required: "Please provide valid longitude"
			}
		},

		submitHandler: function() {
			console.log("Where's this location?")
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
		const latLng = { lat: 30.2741, lng: 120.1551 };
		map = new google.maps.Map($(".map")[0], {
			center: latLng,
			zoom: 10
		});

		let marker = new google.maps.Marker({
			position: latLng,
			draggable: true,
			map: map,
			title: "Wonderful"
		});
	}

	function addMarker(event) {
		const lat = $(".latitude").val();
		const lng = $(".longitude").val();
		const messages = $(".messages").val();
		const location = new google.maps.LatLng(lat, lng);
		const marker = new google.maps.Marker({
			position: location,
			draggable: true,
			map: map,
			title: messages,
			animation: google.maps.Animation.DROP
		});
	}
