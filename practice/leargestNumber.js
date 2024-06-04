const bigNum = (array) =>
    {
        let bigN = array[0];
        for (let i = 0; i < array.length; i++)
        {
            const element = array[i];
            if (element> bigN)
            {
                bigname = element;  
            }
        }
        return bigname;
    }
    
    var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
    const bignum = bigNum(numbers);
    console.log(bignum);