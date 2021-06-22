function welcome(firstName, lastName) {
    let fullName = firstName + ' ' + lastName

    function displayFullName() {
        window.alert('Welcome ' + fullName + '!')
    }

    displayFullName()
}
