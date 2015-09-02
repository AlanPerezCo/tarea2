//Input Example

_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------
Dates1=_INPUT.split("\n");//Quit the value"\n"
Size=parseInt(Dates1.shift(),10);//Get the first value
Dates2=_INPUT.split(" ");//Quit the value " "
Changer=0;
Accumulator=0;
if(1<=Size&&Size<=100){//Contional about size
	console.log("Waston says:\n"+"size: "+Size);
}
else{
	console.log("Waston says:\n"+"size: "+Size);
	console.log("Sherlock answer: Your size aren't accepted");//if the size isn't accepted, end program
	process.exit();
}
for(i=0;i<Size;i++){
	RangeS=parseInt(Dates1[0+i],10);//Obtain the start of range
	RangeF=parseInt(Dates2[1+i],10);//Obtain the finish of range
	if(RangeS>RangeF){//changing the order if the start of range is minor than the finish range
		Changer=RangeS;
		RangeS=RangeF;
		RangeF=Changer;
	}
	console.log((i+1)+".- "+RangeS+" ~ "+RangeF);//printing the start and finish range
	if(1<=RangeS&&RangeF<=Math.pow(10,9)){//Conditional about range
		for(j=RangeS;j<=RangeF;j++){
			if(Math.sqrt(j)%1==0){
				Accumulator++;//Plus the perfect squares
			}
		}
		console.log("Sherlock answer:");
		console.log(Accumulator+" perfect square"+"\n");
		Accumulator=0;//Changing value to 0 for the next case
	}
	else{		
		console.log("Sherlock answer: Your range aren't accepted");//if the range ins't accepted, end program
		process.exit();
	}	
}
