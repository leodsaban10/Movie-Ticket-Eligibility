let condition = 18;

if (age <= 18 || isStudent) {
    console.log("You get a discount!");
} else {
    console.log("Regular Ticket Only.");
}

function getUsername(user) {
    if (!user) {
        throw new Error("No user provided");
    }
    if (user.name) {
        return user.name;
    } else {
        return "Guest";
    }

}

function checkAccess(role) {
    if (role === "admin") {
        return "Full Access";
    } else if (role === "editor") {
        return "You can edit content";
    } else if (role === "viewer") {
        return "View Only Access";
    } else {
        return "No Access, please contact support.";
    }
}

// evaluates the value of a variable and compares it to multiple cases
// if a match is found, the corresponding block of code is executed
// if no match is found, the default block of code is executed
// switch statements are often cleaner and more readable than multiple if-else statements when dealing with a single variable

//return: ends the function execution and specifies a value to be returned to the function caller
//break: exits the current loop, switch, or label statement
function checkAccess(role) {
    let message = "";
    switch(role) {
        case "admin":
            message = "Full Access";
            break; // without break, it will continue to execute the next case
        case "editor":
            message = "You can edit content";
            break;
        case "viewer":
            message = "View Only Access";
            break;
        default:
            message = "No Access, please contact support.";
    }
    return message;
}