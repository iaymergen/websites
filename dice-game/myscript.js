let images = ["dice-six-faces-one.png",
"dice-six-faces-two.png",
"dice-six-faces-three.png",
"dice-six-faces-four.png",
"dice-six-faces-five.png",
"dice-six-faces-six.png"
];

let dice = document.querySelectorAll("img");

function roll()
{
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random() * 6);
        let dieTwoValue = Math.floor(Math.random() * 6);
        console.log(dieOneValue,dieTwoValue);
        document.querySelector("#dice-left").setAttribute("src", images[dieOneValue]);
        document.querySelector("#dice-right").setAttribute("src", images[dieTwoValue]);
        if(dieOneValue > dieTwoValue)
        {
            document.querySelector("#win").innerHTML = "Dice One Wins";
        }
        if(dieOneValue < dieTwoValue)
        {
            document.querySelector("#win").innerHTML = "Dice Two Wins";
        }
        else{
            document.querySelector("#win").innerHTML = "No One Wins";
        }
    },
    1500
    );
}