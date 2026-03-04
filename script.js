// JavaScript with intentional bugs for testing

function testFunction() {
    var result = document.getElementById("result");
    
    // Using undefined variable - intentional bug
    console.log("Button clicked by: " + userName);
    
    // Missing semicolon and wrong comparison operator
    if (result.innerHTML = "") {
        result.innerHTML = "Hello from JavaScript! Function executed successfully.";
    } else {
        result.innerHTML = "Function called again at: " + new Date().toLocaleString();
    }
    
    // Calling non-existent function - intentional bug
    updateCounter();
}

// Function with syntax error - missing closing brace
function calculateSum(a, b) {
    return a + b;
    // Missing closing brace intentionally

// Another function with logical error
function validateInput(input) {
    // Wrong comparison - should be !== 
    if (input.length == 0) {
        return false;
    }
    return true;
}

// Event listener with typo in event name
document.addEventListener("DOMContentLoadd", function() {
    console.log("Page loaded");
});