function changeEclipse(id)
{	
	//turn on
	if(document.getElementById(id).getAttribute('src') == "./assets/images/Ellipse_1_1.png"){
		document.getElementById(id).setAttribute('src', "./assets/images/Ellipse_1.png");
		
		if(id == "Ellipse-1" || id == "Ellipse-1-1")
			toggleTrainingData(id);
		if(id == "Ellipse-1-2" || id == "Ellipse-1-3")
			toggleProcessing(id);
	}
	//turn off    
	else 
	    document.getElementById(id).setAttribute('src', "./assets/images/Ellipse_1_1.png");
	
}

function toggleTrainingData(id)
{
	//toggle keplar
	if(id == "Ellipse-1"){
		if(document.getElementById("Ellipse-1-1").getAttribute('src') == "./assets/images/Ellipse_1.png")
		document.getElementById("Ellipse-1-1").setAttribute('src', "./assets/images/Ellipse_1_1.png");
	}
	
	//toggle keplar
	else{
		if(document.getElementById("Ellipse-1").getAttribute('src') == "./assets/images/Ellipse_1.png"){
			document.getElementById("Ellipse-1").setAttribute('src', "./assets/images/Ellipse_1_1.png");
		}
	}
}

function toggleProcessing(id)
{
	//toggle lightkurve
	if(id == "Ellipse-1-2"){
		if(document.getElementById("Ellipse-1-3").getAttribute('src') == "./assets/images/Ellipse_1.png")
		document.getElementById("Ellipse-1-3").setAttribute('src', "./assets/images/Ellipse_1_1.png");
	}
	
	//toggle tsfresh
	else if(id == "Ellipse-1-3"){
		if(document.getElementById("Ellipse-1-2").getAttribute('src') == "./assets/images/Ellipse_1.png"){
			document.getElementById("Ellipse-1-2").setAttribute('src', "./assets/images/Ellipse_1_1.png");
		}
	}
}