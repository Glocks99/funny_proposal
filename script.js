const buttons = document.querySelectorAll("button")
let no_counter = 0
let yes_counter = 0

document.querySelector(".cont").addEventListener("click", e => {
    if(e.target.innerHTML == "NO"){
        no_counter += 1

        //counter equals = 1
        if(no_counter == 1){
            const div = document.createElement("div")
            div.setAttribute("class", "response")
            div.classList.add("quest")
            div.innerHTML = "Are you sure ?"

            document.querySelector(".cont").append(div)
            div.style = "transform: translate(0, 100px)"
            e.target.style = "transform: translate(0, -100px)"
        }

        //counter equals = 2
        if(no_counter == 2){
            const div = document.querySelector(".response")
            div.innerHTML = "oh c'mon!"
            document.querySelector(".cont").prepend(div)
            div.style = "transform: translate(0, 0)"
            e.target.style = "transform: translate(100px, 200px)"
        }

        //counter equals = 3
        if(no_counter == 3){
            const div = document.querySelector(".response")
            div.innerHTML = "Bruhhhhhh !!!"
            document.querySelector(".cont").prepend(div)
            placeRandomly(div)
            e.target.style = "transform: translate(80px, 200px)"


            //multiply the yes button
            for(let i = 0; i < 6; i++){
                const yesButton = document.createElement("button")
                yesButton.classList.add("rando")
                yesButton.innerHTML = "YES"
                document.querySelector(".cont").append(yesButton)
                placeRandomly(yesButton)
            }
        }

        //counter equals = 4
        if(no_counter == 4){
            const div = document.querySelector(".response")
            div.innerHTML = "Are you sure ?"
            document.querySelector(".cont").prepend(div)
            placeRandomly(div)
            placeRandomly(e.target)

            //multiply the yes button
            for(let i = 0; i < 5; i++){
                const yesButton = document.createElement("button")
                yesButton.innerHTML = "YES"
                yesButton.classList.add("rando")
                document.querySelector(".cont").append(yesButton)
                placeRandomly(yesButton)
            }
          
        }

        //counter equals = 5
        if(no_counter == 5){
            const div = document.querySelector(".response")
            div.innerHTML = "Why \"NO\"\?"
            document.querySelector(".cont").prepend(div)
            placeRandomly(div)
            placeRandomly(e.target)

            //multiply the yes button
            for(let i = 0; i < 5; i++){
                const yesButton = document.createElement("button")
                yesButton.innerHTML = "YES"
                yesButton.classList.add("rando")
                document.querySelector(".cont").append(yesButton)
                placeRandomly(yesButton)
            }
          
        }

        //counter equals = 6
        if(no_counter == 6){
            document.querySelector(".response").remove()
            e.target.innerHTML = "YES"
            e.target.style = `transform: translate(0,0)`

            //remove all yes button
            document.querySelectorAll(".rando").forEach(btns => {
                btns.remove()
            })
          
        }

    }
    else if(e.target.innerHTML == "YES"){
        yes_counter += 1
        if(yes_counter == 1){
            const res = document.querySelector(".response")
            if(res){
                res.remove()
            }

            document.querySelector(".quest").innerHTML = "Should we date ?"

            //remove all yes button
            document.querySelectorAll(".rando").forEach(btns => {
                btns.remove()
            })

            document.querySelector("button:nth-of-type(2)").style = "transform: translate(0, 0)"

            document.querySelector("button:nth-of-type(2)").innerHTML = "YES"

        }

        if(yes_counter == 2){
            document.querySelector(".quest").innerHTML = "Nice !"
            buttons.forEach(btn => {
                btn.remove()
            })

            const container = document.createElement("div")
            container.setAttribute("id", "animationContainer")
            container.style.width = "400px"
            container.style.height = "400px"
            document.querySelector(".cont").prepend(container)

            const animation = lottie.loadAnimation({
                container: document.getElementById('animationContainer'), // the container element
                renderer: 'svg', // can be 'canvas', 'html', or 'svg'
                loop: true, // set to false if you want it to play only once
                autoplay: true, // start playing immediately
                path: "./confetti.json" // the path to your animation JSON file
              });

            animation.play();
        }
        
    }
})

function placeRandomly(div){
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const randomX = Math.floor(Math.random() * (viewportWidth - div.offsetWidth));
    const randomY = Math.floor(Math.random() * (viewportHeight - div.offsetHeight));
    div.style.left = `${randomX}px`;
    div.style.top = `${randomY}px`;
    div.style.position = "absolute"
}
