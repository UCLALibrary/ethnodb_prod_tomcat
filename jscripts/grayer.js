/*window.onload = initialize;

function initialize () {if (self.init) self.init();}

function init() 
{
	setGrayer();
}

function setGrayer() 
{
	if (document.searchBasic) 
	{
		if (document.searchBasic.searchCode) {
			document.searchBasic.searchCode.onchange = function () {grayer(this.form);}
			grayer(document.searchBasic);
		}
	}
}
*/

var qlimit=0;	// store the value in the quick limits (frm.SL) list; needs to persist between calls to grayer()
// Enables/disables the Quick Limits list, based on value of the "in" (index) list
function grayer() 
{
        var frm = document.getElementById("searchBasic");

	switch (frm.searchCode.selectedIndex) 
	{
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 14:
			if (frm.limitTo.disabled == true) 
			{
				frm.limitTo.selectedIndex = qlimit;
				frm.limitTo.disabled = false;
			}
			break;
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
		case 13:
			if (frm.limitTo.disabled == false) 
			{
				qlimit = frm.limitTo.selectedIndex;
				frm.limitTo.disabled = true;
			}
			frm.limitTo.selectedIndex = 0; // so it shows limit of None
			break;
	}
}

