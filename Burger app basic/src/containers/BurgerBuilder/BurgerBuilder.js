
import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

// set up price for ingredients
const  INGREDIENT_PRICES ={
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 1.7
};

class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false
    }

    // below is never called when we updated the state, so we have to call below
    //we create a function to pass ingredients to get the latest state
    updatePurchaseState(ingredients){

        const sum = Object.keys(ingredients)
            .map(igKey=>{
  
                return ingredients[igKey]
            }).reduce((sum, el)=>{
  
                return sum + el;
            },0);

        this.setState({purchasable: sum>0});
    }

    
    addIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;

        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        const priceAddition =  INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients}); 
        // pass the latest state into updatePurchaseState
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const updatedCount = oldCount - 1;

        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        const priceAddition =  INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        // you can update 2 states in one time
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients}); 
        this.updatePurchaseState(updatedIngredients);
    };

    render(){
        const disabledInfo={
          ...this.state.ingredients 
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0
        }
        //{salad: true, meat: false,...}

        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                // pass info on disabledInfo
                disabled={disabledInfo}
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}
                />
            </Aux>
        );
    }
};

export default BurgerBuilder;