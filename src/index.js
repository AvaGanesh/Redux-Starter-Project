import pizzaCard from './pizza-card';
import store from './store';
import * as actions from './actions';

const endpoint = `https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68`;


fetch(endpoint).then((res) => {
    res.json().then((pizza) => {
        store.dispatch({
            type: actions.FETCH_PIZZAS,
            payload: {pizza}
        });
        pizzaCard(pizza, 'card-container');
        setInterval(() => {
            addPizza(10);
        }, 5000);
    })
}).catch(err => console.error(err));


store.subscribe(() => {
    // console.log('store value changed', store.getState());
    console.log('Total items in cart', store.getState().cartItems.length);
});


const addPizza = (quantity) => {
    const stateData = store.getState();
    const pizzas = stateData.pizzas[Math.round(Math.random()*10)];

    // Check whether is already present in the cart
    // If not present ADD_PIZZA else UPDATE_ORDER
    let isAlreadyPresent = stateData.cartItems.findIndex(item =>  item.pizza === pizzas);

    let cartItems = {
        quantity,
        pizza: pizzas
    };


    if(isAlreadyPresent < 0) {
        store.dispatch({
            type: actions.ADD_PIZZA,
            payload: {...cartItems}
        });
    } else {
        
        // If order quantity is call DELETE_PIZZA reducer else call UPDATE_PIZZA reducer
        if(stateData.cartItems[isAlreadyPresent].quantity === 20) {
            store.dispatch({
                type: actions.DELETE_PIZZA,
                payload: stateData.cartItems[isAlreadyPresent].pizza
            })
        } else {
            store.dispatch({
                type: actions.UPDATE_PIZZA,
                payload: {...cartItems}
            })
        }
       
    }
   

}


