# Learning Objectives:
### 1. Kunne bruge react komponenter og kommunikation mellem Komponenter:

> Komponenter kan sammenlignes med functions i JavaScript. Det kan bruges ved bla. at sende props med som en slags variable og returnere et react element som bliver renderet og vist på klientsiden. Komponenter er også noget der kan exportes og importes så vi kan gøre brug af dem. Der findes klasse og functionskomponenter.

* Eks: (linje 1-7 & 18-37) https://github.com/cph-pk/3semWeek44/blob/main/02%20Tuesday/day1_ex/src/App.js


### 2. Kunne bruge JSX samt forklare hvilket problem JSX løser for os.

> JSX er en JavaScript extension, der gør det muligt for os at kunne skrive HTML elementer i vores JavaScript uden brug af en masse DOM objekter (eks. document.getElementById() ). 

* Eks: (linje 20-35) https://github.com/cph-pk/3semWeek44/blob/main/02%20Tuesday/day1_ex/src/App.js

### 3. Kunne forklare og demonstrere brug af props i React
> Props står for properties og er stateless. Dvs. det bruges som read-only og ikke til at ændre en value, hvor state bruges i stedet. Props bruges til at sende data fra en component til en anden. Props sendes altid fra parrent til child. For at kunne gå fra child til parrent skal man bruge "lifting state up".

* Eks: (linje 5-7 & 23-25) https://github.com/cph-pk/3semWeek44/blob/main/02%20Tuesday/day1_ex/src/file3.js

### 4. Kunne forklare og demonstrere brug af state i React med Hooks via useState
> En hook er en speciel funktion, som lader os gøre brug af react features. Et eksempel på dette kunne være metoden useState. Ved at gøre brug af useState kan man tilføje en state til en komponent. 
* Eks: https://github.com/Jean-Poul/3sem_flow3_week1/blob/main/02_Wednesday/day2_ex/src/App.js

   På linje 29 i App.js kan man se `const [count, setCount] = useState(0);`. `count` er en getter og `setCount` er en setter, hvis man sammenligner det med java verden. `useState` kan sammenlignes med en constructor. På linje 33 og 36 gør jeg brug af `count` og `setCount`, som setter `useState` på linje 29.

### 5. Kunne bruge useEffect og forklare forskellig anvendelse af dette.
> Ved at bruge useEffect, fortæller man react at der skal gøres noget bestemt efter render(ens DOM er loaded færdig). Dvs. man gør brug af useEffect efter en update af ens DOM. Man kan have flere useEffect metoder i samme fil.
React vil huske den funktion man passer og kan derved gøre brug af den efter ens DOM er blevet opdateret.

* Eks: https://github.com/cph-pk/3semWeek44/blob/main/04%20Thursday/react-crud-rest-exercise/src/components/App.js
   
   I filen App.js linje 12 gøres brug af useEffect og her bruges denne hook til at  indsætte data til vores tabel, efter vores DOM er loaded.

### 6. Kunne bruge list og keys i react, samt bruge controlled komponents til formdata.
> Ved at gøre brug af keys kan man entydigt identificere rækker i en liste. Herved opstår der ikke konflikter, når man skal finde hver enkelte række. Controlled components er når ens form data bliver afviklet af et React komponent.
* Eks: https://github.com/cph-pk/3semWeek44/blob/main/03%20Wednesday/day2_ex/src/ListDemo.js

    Her vælger jeg at henvise til hele ListDemo.jsx filen, da der her gøres brug af to komponenter. MemberTable, som indeholder MemberDemo, og dette returneres til hvor det kaldes fra. På linje 16 indsættes en key til hver table row (`<tr>`).

### 7. Kunne forklare og demonstrere begrebet "Lifting State" i React
> Lifting state vil sige at man løfter data fra en child til en parrent komponent. Hvis man vil have videre ført data fra en child komponent til et andet child komponent skal ens data først forbi parrent komponent. Dvs. man ikke kan gå fra child til child komponent. 

* Eks: https://github.com/cph-pk/3semWeek44/blob/main/04%20Thursday/exercise-thursday-friday/src/liftingUp.js

   Se i LiftingUp.js. Her har vi en parrent komponent `StartDemo` i linje 20 og to child komponenter, `InputComp` i linje 35 og `ShowComp` i linje 41. `InputComp` sætter state på en value, som gemmes i parrent komponent, hvorefter `ShowComp` kan se den nye og opdateret state. State bliver ændret i parrent komponent, hvorefter child komponenterne gør brug af props, da de kun skal gøre brug af read-only.