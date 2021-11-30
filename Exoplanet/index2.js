function changeEclipse(id)
{
	if(document.getElementById(id).getAttribute('src') == "./assets/images/Ellipse_1_1.png")
	    document.getElementById(id).setAttribute('src', "./assets/images/Ellipse_1.png");
	else 
	    document.getElementById(id).setAttribute('src', "./assets/images/Ellipse_1_1.png");
}