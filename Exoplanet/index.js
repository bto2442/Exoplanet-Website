
tpArray = [0,0,0,0];
modeArray = [0,0,0,0,0];

function changeEclipse(id)
{	
	//turn on
	if(document.getElementById(id).getAttribute('src') == "./assets/images/Ellipse_1_1.png"){
		document.getElementById(id).setAttribute('src', "./assets/images/Ellipse_1.png");

		if(id == "Ellipse-1" || id == "Ellipse-1-1")
		{
			if(id == "Ellipse-1")
				tpArray[0]=1;
			else
				tpArray[1]=1;
			toggleTrainingData(id);
		}
		if(id == "Ellipse-1-2" || id == "Ellipse-1-3")
		{
			if(id == "Ellipse-1-2")
				tpArray[2]=1;
			else
				tpArray[3]=1;
			toggleProcessing(id);
		}
		if(id == "Ellipse-1-4")
			modeArray[0]=1;
		if(id == "Ellipse-1-5")
			modeArray[1]=1;
		if(id == "Ellipse-1-6")
			modeArray[2]=1;
		if(id == "Ellipse-1-7")
			modeArray[3]=1;
		if(id == "Ellipse-1-8")
			modeArray[4]=1;
					
	}
	//turn off    
	else
	{
		if(id == "Ellipse-1")
			tpArray[0]=0;
		if(id == "Ellipse-1-1")
			tpArray[1]=0;
		if(id == "Ellipse-1-2")
			tpArray[2]=0;
		if(id == "Ellipse-1-3")
			tpArray[3]=0;
		if(id == "Ellipse-1-4")
			modeArray[0]=0;
		if(id == "Ellipse-1-5")
			modeArray[1]=0;
		if(id == "Ellipse-1-6")
			modeArray[2]=0;
		if(id == "Ellipse-1-7")
			modeArray[3]=0;
		if(id == "Ellipse-1-8")
			modeArray[4]=0;
	    document.getElementById(id).setAttribute('src', "./assets/images/Ellipse_1_1.png");
	}
	
	toggleLine(tpArray,modeArray);
	//console.log(tpArray);
	//console.log(modeArray);


}


function toggleTrainingData(id)
{
	//toggle keplar
	
	if(id == "Ellipse-1"){
		if(document.getElementById("Ellipse-1-1").getAttribute('src') == "./assets/images/Ellipse_1.png")
		{
			document.getElementById("Ellipse-1-1").setAttribute('src', "./assets/images/Ellipse_1_1.png");
			tpArray[0]=1;
			tpArray[1]=0;
		}
	}
	
	//toggle keplar
	if(id == "Ellipse-1-1"){
		if(document.getElementById("Ellipse-1").getAttribute('src') == "./assets/images/Ellipse_1.png"){
			document.getElementById("Ellipse-1").setAttribute('src', "./assets/images/Ellipse_1_1.png");
			tpArray[0]=0;
			tpArray[1]=1;
		}
	}
}

function toggleProcessing(id)
{
	//toggle lightkurve
	if(id == "Ellipse-1-2"){
		if(document.getElementById("Ellipse-1-3").getAttribute('src') == "./assets/images/Ellipse_1.png")
		{
			document.getElementById("Ellipse-1-3").setAttribute('src', "./assets/images/Ellipse_1_1.png");
			tpArray[2]=1;
			tpArray[3]=0;
		}
	}
	
	//toggle tsfresh
	if(id == "Ellipse-1-3"){
		if(document.getElementById("Ellipse-1-2").getAttribute('src') == "./assets/images/Ellipse_1.png"){
			document.getElementById("Ellipse-1-2").setAttribute('src', "./assets/images/Ellipse_1_1.png");
			tpArray[2]=0;
			tpArray[3]=1;
		}
	}
}

function toggleLine(tp, mode)
{
	if(tp[0]==0)
	{
		changeDotted("1");
		changeDotted("3");
	}
	if(tp[1]==0)
	{
		changeDotted("2");
		changeDotted("15");
	}
	if(tp[0]==1)
	{
		if(tp[2]==1)
			changeSolid("1");
		else
			changeDotted("1");
		if(tp[3]==1)
			changeSolid("3");
		else
			changeDotted("3");
	}
	if(tp[1]==1)
	{
		if(tp[2]==1)
			changeSolid("15");
		else
			changeDotted("15");
		if(tp[3]==1)
			changeSolid("2");
		else
			changeDotted("2");
	}

	if(tp[2]==0)
		resetMode(3);
	if(tp[3]==0)
		resetMode(4);

	if(tp[2]==1)
		changeMode(3,modeArray);
	if(tp[3]==1)
		changeMode(4,modeArray);
}

function changeSolid(num)
{
	document.getElementById("Line-"+num).setAttribute('src',"./solid/images/Line_"+num+".png");
	document.getElementById("Line-"+num).style.opacity = ".9";
}

function changeDotted(num)
{
	document.getElementById("Line-"+num).setAttribute('src',"./dotted/images/Line_"+num+".png");
	document.getElementById("Line-"+num).style.opacity = ".3";
}

function resetMode(node)
{
	if(node == 3)
	{
		changeDotted(12);
		changeDotted(5);
		changeDotted(10);
		changeDotted(7);
		changeDotted(14)
	}
	if(node == 4)
	{
		changeDotted(13);
		changeDotted(8);
		changeDotted(9);
		changeDotted(6);
		changeDotted(11);
	}
}

function changeMode(node,modeArray)
{
	if(node == 3)
	{
		if(modeArray[0]==1)
			changeSolid(12);
		else
			changeDotted(12);
		if(modeArray[1]==1)
			changeSolid(5);
		else
			changeDotted(5);
		if(modeArray[2]==1)
			changeSolid(10);
		else
			changeDotted(10);
		if(modeArray[3]==1)
			changeSolid(7);
		else
			changeDotted(7);
		if(modeArray[4]==1)
			changeSolid(14);
		else
			changeDotted(14);
	}
	
	if(node == 4)
	{
		if(modeArray[0]==1)
			changeSolid(13);
		else
			changeDotted(13);
		if(modeArray[1]==1)
			changeSolid(8);
		else
			changeDotted(8);
		if(modeArray[2]==1)
			changeSolid(9);
		else
			changeDotted(9);
		if(modeArray[3]==1)
			changeSolid(6);
		else
			changeDotted(6);
		if(modeArray[4]==1)
			changeSolid(11);
		else
			changeDotted(11);
	}
}