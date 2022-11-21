import React from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 220.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 160.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 212.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 147.99,
    },
    {
        id: 'm5',
        name: 'Bombaiya',
        description: 'Sweet..and delicious..',
        price: 89.99,
    },
];
const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map(meal =>
        <MealItem
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    );
    return (
        <section className={classes.meals}>
            <Card>
                <ul> {mealsList} </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals