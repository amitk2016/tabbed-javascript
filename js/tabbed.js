//find all the buttons
var buttonOne = document.querySelector('#button-one');
var buttonTwo = document.querySelector('#button-two');
var buttonThree = document.querySelector('#button-three');
var buttonFour = document.querySelector('#button-four');

//find all sections
var	allSections = document.querySelectorAll('.tab');


//attach click event listeners to the buttons

buttonOne.onclick = changeTab;
buttonTwo.onclick = changeTab;
buttonThree.onclick = changeTab;
buttonFour.onclick = changeTab;
//function that changes the visible tab
function changeTab() {
	//hide all tabs 
	for (var i = 0; i < allSections.length; i++) {
		allSections[i].style.display = 'none';
	}

	//switch based on the id of the button clicked
	switch(this.id){
		case 'button-one':
			allSections[0].style.display ='block';

		break;

		case 'button-two':
			allSections[1].style.display ='block';

		break;

		case 'button-three':

			allSections[2].style.display ='block';
		break;

		case 'button-four':

			allSections[3].style.display ='block';
		break;
	}

}