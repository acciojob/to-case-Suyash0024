function toCase(text) {
  // write your code here
	if (text === "") {
    return "-";
  }
	let low = text.toLowerCase();
	let up = text.toUpperCase();

	return low + "-" + up
}

}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
