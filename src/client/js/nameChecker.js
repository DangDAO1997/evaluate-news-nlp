function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);

    const re = new RegExp("^[a-zA-Z 0-9]+$");

    if (!re.test(inputText)) {
        return "Name Invalid!";
    }

    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ];

    if(names.includes(inputText)) {
        return "Welcome, Captain!";
    }
}

export { checkForName }
