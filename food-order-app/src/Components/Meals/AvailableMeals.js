import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Poke Ahi-Avo",
    description:
      "Fresh caught raw salmon, cubed avocado, rice, drizzled with lemon olive oil",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Savory Crepe",
    description:
      "A light pastry filled with mozzarella, caramalized onion, and spinach",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Black Bean Burger",
    description:
      "House-made black bean patty on a toasted brioche bun with all the fixings",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Grains, greens, and a house-made vegan aioli",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      mealName={meal.name}
      mealDescription={meal.description}
      mealPrice={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
