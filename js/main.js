const unclickedIcon = document.getElementById('unclicked-checkbox');
const clickedIcon = document.getElementById('clicked-checkbox');
const icons = document.querySelectorAll('.toggle-icon');
const displayText = document.getElementById('description-text');

// Toggle the icon back and forth upon click
function toggleIcon(e) {
    this.classList.remove('show');
    this.classList.add('hide');

	// Grab content item from DOM
	const icon = document.querySelector(`#${this.id}`);

	// Add show class to other icon
	addShowToOppisiteOf(icon);

    displayText.innerHTML = 'Congrats, you are now a programmer.';
}

// Add show class to the opposite icon
function addShowToOppisiteOf(clickedIcon) {
    icons.forEach(item => {
        if (item != clickedIcon) {
            item.classList.add('show');
            item.classList.remove('hide');
        }
    });
}

// Listen for tab item click
icons.forEach(item => {
	item.addEventListener('click', toggleIcon);
});