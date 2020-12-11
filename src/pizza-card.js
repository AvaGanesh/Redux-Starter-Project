
const pizzaCard =  (pizzas, element) => {
    const container = document.getElementById(element);
    pizzas.forEach((result) => {
        // Create card element
        const card = document.createElement('div');
        card.classList = 'card-body';
      
    

        // Construct card content
        const content = `
          <div class="card" id='pizza'>
            <div class="card-header">
                <h5 >
                    ${result.name}
                </h5>
            </div>
        
            <img src=${result.img_url} alt="img" class="card-img">

            <button id=${result.id} class="btn"  id="btn" onclick="cardClicked()"> Click me </button>
        </div>
        `;
        container.innerHTML += content;
    })
}



export default pizzaCard;