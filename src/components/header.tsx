//done
//FEATURES
const dayGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
        return "Good Morning";
    } else if (hours < 18) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
}

function Greetings() {
    const greets = ["Boss", "Chairman", "Odogwu", "Regeant", "King", "Chief", "Emperor", "Sultan", "Kingpin", "Overlord"];
    const randomIndex = Math.floor(Math.random() * greets.length);
    return <h2>{dayGreeting()}, {greets[randomIndex]}</h2>;
}

//Component
export function AppHeader() {

    return(
        <header>
        <div className="logo">
            <Greetings />
        </div>
      </header>
    )
}