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


function toCurrency(num) {
    return num.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });
}
console.log(toCurrency(123.45)); // "$123.45"

// Alternative implementation using toFixed (less preferred for currency formatting)

function toCurrency(num) {
    return "$" + num.toFixed(2);
}
console.log(toCurrency(123.45)); // "$123.45"


// Capitalize the first letter of a name
let name = "alice";
function greet(name) {  
 return `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}!`;
}

console.log(greet(name)); // "Hello, Alice!"

// Check if a username is at least 5 characters long
let Username = "leo";
function validUsernameCheck(username) {
    if (username.length >=5) {
        return "Valid username"
    } else {
        return "Username too short"
    }
}

//returns "Valid username"
//returns "Username too short"


