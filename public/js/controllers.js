var fotomapController = angular.module('fotomapController', []);

fotomapController.controller('FotomapController', ['$scope', '$http', function($scope, $http) {
	var radius;
	$scope.lat = 0;
	$scope.lng = 0;

	$scope.slider_visible_bar = {
        value: 500,
        options: {
        	ceil: 3000,
            floor: 0,
            showSelectionBar: true
        }
    };

	$scope.map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 40.7903,
			lng: -73.9597
		},
		zoom: 10,
		mapTypeControl: false,
		streetViewControl: false
	});

	google.maps.event.addListener($scope.map, 'click', function(event) {
		placeMarker(event.latLng);
		getPhotos(event.latLng);
		$scope.$apply();
	});

	function placeMarker(location) {
		
		var loc = {};
		$scope.lat = location.lat().toFixed(10);
		$scope.lng = location.lng().toFixed(10);

		loc['lat'] = $scope.lat;
		loc['lng'] = $scope.lng;

		if (radius) {
			radius.setCenter(new google.maps.LatLng(loc.lat, loc.lng));
			radius.setRadius(parseFloat($scope.slider_visible_bar.value));
		} else {
			radius = new google.maps.Circle({
				strokeColor: '#FF0000',
				strokeOpacity: 0.8,
				strokeWeight: 1,
				fillColor: '#FF0000',
				fillOpacity: 0.35,
				map: $scope.map,
				center: new google.maps.LatLng(loc.lat, loc.lng),
				radius: parseFloat($scope.slider_visible_bar.value)
			});
		}

		$scope.$apply();
	};

	function getPhotos(location) {

		var lat = location.lat().toFixed(10);
		var lng = location.lng().toFixed(10);

		$http.get('/photos', {
			params: {
				lat: lat,
				lng: lng,
				rad: $scope.slider_visible_bar.value
			}
		}).success(function(result) {
			$scope.photos = result.data;
		});
	}

}])