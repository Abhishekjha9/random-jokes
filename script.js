jox =["Why did the math book look sad? Because it had too many problems.", "Why did the student do multiplication problems on the floor? The teacher told them not to use tables.", 
"Why did the scarecrow become a successful student? Because he was outstanding in his field!", "Why did the pencil go to school? To improve its 'point' of view.", 
"Why did the student bring a ladder to school? Because he wanted to go to high school!", "Why did the student eat his homework? The teacher said it was a piece of cake.",
"Why did the science book break up with the math book? There were too many problems in their relationship.", "What did one plate say to another? Lunch is on me!",
"What's a computer’s favorite dance move? The disk-o.", "Why did the history book go to therapy? It had too many issues with the past."]

let rn=Math.floor(Math.random()*10)

let joke=document.getElementById("jox")

joke.innerHTML=jox[rn]