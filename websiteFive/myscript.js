

    function lastDigit(s)
    {
        var last = s.substring(0,1);
        var i = parseInt(last);
        return i;
    }
    function firstDigit(s)
    {
        var first = s.substring(s.length - 1);
        var i = parseInt(first);
        return i;
    }
    function translate(name)
    {
        var r = "";
        var ret = "";
        do
        {
            var first = name.charAt(0);
            var c = 1;
            for (let i = 1; i < name.length; i++)
            {
                if (first == name.charAt(i))
                {
                    c++;
                    name = name.substring(0,i) + name.substring(i + 1);
                    i--;
                }
            }
            name = name.substring(1);
            r = c.toString();
            ret = ret + r;
        } while (name.length > 0);
        console.log(ret);
        return ret;
        
    }
    function calculate()
    {
       
        var nameOne = document.querySelector('#name-one').value;
        var nameTwo = document.querySelector('#name-two').value;
        var name = nameOne.concat(nameTwo);
        var numbers = translate(name);
        var newString = "";
        var oldString = numbers;
        var oldStringLenght = numbers;
        do
        {
            for (let i = 0; i < parseInt(oldStringLenght.length / 2); i++)
            {
                var first = firstDigit(oldString);
                var last = lastDigit(oldString);
                var sum = first + last;
                oldString = oldString.substring(1,oldString.length - 1);
                newString = newString + sum.toString();
            }
            if (oldString.length <= 1)
            {
                newString = newString + oldString;
                oldString = newString;
                oldStringLenght = newString;
                newString = "";
            }
        }while (oldString.length >= 3);
        document.querySelector('#p-text').innerHTML = "Your Love Is %" + oldString;
        if(oldString < 30)
        {
            document.querySelector("#heart-img").setAttribute("src", "sadHeart.png");
        }
        else{
            document.querySelector("#heart-img").setAttribute("src", "heart.png");
        }
            
        console.log(oldString);
        return oldString;
        
    }