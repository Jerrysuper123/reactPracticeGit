import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) =>{
    // create empty array to house no. of ingredients, then i can use index of this array
    //to create no. of burgerIngredient

    //keys extract the key of the ingredient objects - salad etc into array array [salad, bacon, cheese, meat]
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // combine 4 arrays into 1 arrays - 5 spaces [ , , , , ,]
            return [...Array( props.ingredients[igKey] )].map( (_, i)=>{
                return  <BurgerIngredient key={igKey + i} type={igKey}/>
            });
            // below combine all arrays into 1 string, as we concatenate all [ , ,, , ], concatenate towards the end
        }).reduce((arr, el)=>{
            return arr.concat(el)
        },[]);
    
    if(transformedIngredients.length===0){
        transformedIngredients=<p>please start adding ingredients</p>
    }
    // reduce transform array into sth else
    
    console.log(transformedIngredients);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;