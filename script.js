
        function WelcomeUser(){
            let name= document.getElementById("userName").value;
            document.getElementById("WelcomeMsg").innerHTML ="Welcome, " + name + "!";
        }
        function changeText() {
            document.getElementById("demo").innerHTML ="This is the new text to show how javascript can change the text of an element";
        }
    
     function UpgradeGoal() {
        document.getElementById("goal").innerHTML ="Not only web developer i also become a CEO of my own company.";
        let goal= document.getElementById("goal");
        goal.style.color="darkgreen";
        goal.style.fontSize="25px";
        goal.style.backgroundColor="powderblue";
        goal.style.padding="10px";
     }

function sayhello() {
    alert("Hello Yonatan i am glad to see you here! 🚀");
}

    alert("welcome to my website!");