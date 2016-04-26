var main = angular.module("KSApp", ['ngMaterial']);
main.controller("search_app", function($scope){
	$scope.options = {
	  "5th Grade Band": "BAND5",
	  "6th Grade Band": "BAND6",
	  "6th Grade Chorus": "CHOR6",
	  "Academic Workshop": "AWKS",
	  "Advanced Band": "BANDA",
	  "Advanced Choir": "CHORA",
	  "Algebra 8": "ALGE8",
	  "All Classes": "",
	  "Architecture 8": "ARCH8",
	  "Art 5, Art 6, Art 7, Art 8": "ART",
	  "Coding 7": "CODE7",
	  "Commencement Band": "BANDC",
	  "Core 6 - Karlin": "CORE6-KAR",
	  "Core 6 - Ms. Bridges": "CORE6-BRI",
	  "Core 6 - Wells": "CORE6-WEL",
	  "Drama 7": "DRAM7",
	  "ELA/History Core 5 - Torrano": "ELAH5-TOR",
	  "ELA/History Core 5 - Hagan": "ELAH5-HAG",
	  "ELA/History Core 5 - Jelen": "ELAH5-JEL",
	  "ELA/History Core 5 - Stephens": "ELAH5-STE",
	  "English Language Development": "ELD",
	  "Enterprise 7": "ENTR7",
	  "Expressions 3D 7": "EX3D7",
	  "Expressions 5": "EXPR5",
	  "Expressions 6 - Goetz": "EXPR6-GOE",
	  "Expressions 6 - Karlin": "EXPR6-KAR",
	  "Expressions 6 - Osterman": "EXPR6-OST",
	  "Expressions 6 - Wells": "EXPR6-WEL",
	  "Expressions 8": "EXPR8",
	  "Extended Math": "MATHX",
	  "Extended Reading": "READX",
	  "Film Making": "FILM78",
	  "History 6 - Goetz": "HIST6-GOE",
	  "History 7 - Mr. Palmer": "HIST7-PAL",
	  "History 7 - Ms. Ward": "HIST7-WAR",
	  "History 8 - Mr. Palmer": "HIST8-PAL",
	  "History 8 - Ms. Ward": "HIST8-WAR",
	  "Jazz Big Band": "BANDB",
	  "Jazz Combo": "JAZZC",
	  "Journalism 8": "JOUR8",
	  "Kent Learning Center": "LRNC",
	  "Kent Makers 6": "MAKR6",
	  "Kent Makers 8": "MAKR8",
	  "Language Arts 6 - Goetz": "ELA6-GOE",
	  "Language Arts 7 - Maltzman": "ELA7-MAL",
	  "Language Arts 7 - Moretti": "ELA7-MOR",
	  "Language Arts 8 - Anderson": "ELA8-AND",
	  "Language Arts 8 - Gavin": "ELA8-GAV",
	  "Life Skills": "LIFE",
	  "Math 7+ - Lentini": "PALG7",
	  "Math/Science Core 5 - Bridgman": "MSCI5-BRI",
	  "Math/Science Core 5 - Chusid": "MSCI5-CHU",
	  "Math/Science Core 5 - Gallagher": "MSCI5-GAL",
	  "Mathematics 6 - Klima": "MATH6-KLI",
	  "Mathematics 6 - Lentini": "MATH6-LEN",
	  "Mathematics 7 - Widelock": "MATH7-WID",
	  "Mathematics 7- Klima": "MATH7-KLI",
	  "Mathematics 8 - Hettleman": "MATH8-HET",
	  "Mathematics 8 - Widelock": "MATH8-WID",
	  "PE 5": "PE5",
	  "PE 6": "PE6",
	  "PE 7": "PE7",
	  "PE 8": "PE8",
	  "Poetry 8": "POET8",
	  "Robotics 5": "ROBT5",
	  "Rock Band": "ROCKB",
	  "Science 6": "SCI6",
	  "Science 7": "SCI7",
	  "Science 8": "SCI8",
	  "Spanish A": "SPANA",
	  "Spanish B": "SPANB",
	  "Woodworking 5": "WOOD5",
	  "Woodworking 8": "WOOD8"
	};
	$scope.optionsArray = [];
	Object.keys($scope.options).forEach(function(i){
		$scope.optionsArray.push({display: i, value: $scope.options[i]});
	});
	$scope.applicationName = "KentSearch";
	$scope.inputPlaceholder = "Class ID";
	$scope.selectPlaceholder = "Select a Class";
	$scope.inputNotFound = "That class cannot be found.";
	$scope.aboutPage = "http://broaderator.com/projects/kentSearch/about.html"
	$scope.handler = function(selectValue){
		window.open("http://edlinesites.net/pages/Kent_Middle_School/Classes/" + selectValue);
	};
});