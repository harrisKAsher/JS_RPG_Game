var elementTable = [ //Attack, Defending
    // n,s,b,n,f,w,i,e,a,e,p,c,t
    [1,0,.5,1,1,1,1,1,1,1,.5,2,1,1], //Normal 		0
    [0,2,0,1,1,1,1,1,1,1,1,2,2,1], //Super Natural 	1
    [2,0,1,1,1,1,2,1,1,1,1,.5,1,1], //Brawl 			2
    [1,1,1,1,.5,2,1,1,.5,2,1,.5,2,1], //Nature 		3
    [1,1,1,2,1,.5,2,1,1,.5,1,1,.5,1], //Fire 			4
    [1,1,1,.5,2,1,0,.5,1,.5,.5,2,1,1], //Water 		5
    [1,1,.5,2,.5,2,1,1,1,.5,1,1,2,1], //Ice			6
    [1,1,1,1,1,2,1,1,2,0,1,2,.5,1], //Electricity		7
    [1,1,1,2,1,1,1,.5,1,2,1,.5,1,1], //Air			8
    [1,1,.5,1,2,.5,2,2,.5,1,1,1,1,1], //Earth			9
    [2,1,1,1,1,2,1,1,1,1,1,0,1,1], //Poison			10
    [1,.5,2,2,1,.5,1,.5,1,1,2,1,1,1], //Cyber			11
    [1,.5,1,1,2,1,.5,2,1,1,1,1,1,1], //Time			12
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] //NONE            13
    //n,s,b,n,f,w,i,e,a,e,p,c,t

];

var type = [];
type["None"] = 0;
type["Mind"] = 1;
type["Dark"] = 2;
type["Light"] = 3;


var element = [];
element["Normal"] = 0; 	    element["Super Natural"] = 1;
element["Brawl"] = 2; 	    element["Nature"] = 3;
element["Fire"] = 4; 		element["Water"] = 5;
element["Ice"] = 6; 		element["Electricity"] = 7;
element["Air"] = 8; 		element["Earth"] = 9;
element["Poison"] = 10; 	element["Cyber"] = 11;
element["Time"] = 12;       element["None"] = 13;
