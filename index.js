 let arr = [];

        function addExp() {
            let exp = parseFloat(document.getElementById("input-exp").value);

            if (!isNaN(exp)) {
                arr.push(exp);
            }

            document.getElementById("input-exp").value = "";
        }

        function calculate() {
            let tot = parseFloat(document.getElementById("input-tot").value);

            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }

            let balance = tot - sum;
            document.getElementById("ans").value = balance;
        }