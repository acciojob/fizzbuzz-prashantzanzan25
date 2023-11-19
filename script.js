//your JS code here. If required.
for (let i = 1; i <= 20; i++) {
            let output = "";

            // Check for multiples of three
            if (i % 3 === 0) {
                output += "Fizz";
            }

            // Check for multiples of five
            if (i % 5 === 0) {
                output += "Buzz";
            }

            // If not a multiple of three or five, use the number itself
            if (output === "") {
                output = i.toString();
            }

            // Display the result using alert
            alert(output);
        }
