(function(exports) {
    
    function greet(name) {
        let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
    
        // Current date and time
        let now = new Date();
    
        // Formatted date
        let formattedDate = now.toLocaleDateString("en-US", options);
    
        return `Hello, ${name}! Today is ${formattedDate}`;
    }

    exports.greet = greet;
    
})(this);
