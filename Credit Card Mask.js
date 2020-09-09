https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

    function maskify(cc) {
        let lastSymbol = '';
        for(let i = 0; i <= cc.length-1; i++)
            if (i <= cc.length - 5) {
                lastSymbol = lastSymbol + '#';
            } else {
                lastSymbol = lastSymbol + cc[i];
            }
        return lastSymbol;
    }