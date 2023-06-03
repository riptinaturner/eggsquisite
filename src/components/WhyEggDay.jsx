import why from "../assets/why.jpg"
import eggStack from "../assets/shirt8.jpg"
import versatility from "../assets/versatility.jpg"
import crucial from "../assets/crucial.jpg"
import eggRace from "../assets/egg-race.jpg"
import standUp from "../assets/standup.jpg"

import Page from "./Page"
import Section from "./Section"

export default function WhyEggDay() {
    return (
        <Page style={{
            padding: "4em 10em",
            display: "flex",
            flexDirection: "column",
            gap: "4em"
        }}>
            <Section
                heading="Why?!"
                text={`Ah, Egg Day, the eggtastic celebration that cracks us up every year! It's a day dedicated to honoring the incredible, and versatile, egg! Now, you might be thinking, "Why on earth would we need a whole day just for eggs?" Well, my yolky friend, let me enlighten you.`}
                src={why}
            />
            <Section
                heading="Variety"
                text={`First and foremost, eggs are like little protein-packed wonders of the culinary universe. They can be scrambled, fried, poached, boiled, or turned into fluffy omelets that make your taste buds dance with joy. They're like the superheroes of the food world, swooping in to save the day with their eggy goodness.`}
                src={eggStack}
            />
            <Section
                heading="Versatility"
                text={`Eggs are incredibly versatile. They can be used as an ingredient in countless recipes, from cakes and cookies to savory dishes like quiches and soufflés. They bring moisture, structure, and that golden touch to so many culinary creations. Without eggs, the world would be a sadder, flatter, and less delicious place.`}
                src={versatility}
            />
            <Section
                heading="Egg Day is actually quite important"
                text={`On a more serious note, Egg Day also helps raise awareness about the importance of eggs in fighting hunger and malnutrition around the globe. Eggs are a fantastic source of high-quality protein, essential vitamins, and minerals. They can provide vital nutrition, especially in areas where food resources are scarce. So, by celebrating Egg Day, we're also highlighting the role eggs play in nourishing communities and promoting food security.`}
                src={crucial}
            />
            <Section
                heading="It's also a bunch of fun"
                text={`Now, let's not forget the humorous side of this eggstravaganza! Just imagine the eggcitement that fills the air on this splendid occasion. People gather, wearing egg-themed costumes, cracking jokes (pun intended), and engaging in eggceptional activities. There could be egg-throwing contests (targeted, of course), egg-and-spoon races (with bonus points for not dropping the egg), and even an egg-themed cooking competition.`}
                src={eggRace}
            />
            <Section
                heading="Laugh your shells off"
                text={`And of course, no Egg Day celebration would be complete without some good ol' stand-up comedy. Participants have to come up with the most eggciting egg puns and eggcentric phrases. It's all about cracking up the crowd and yolking around!`}
                src={standUp}
            />
        </Page>
    )
}