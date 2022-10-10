  const mealNameEl = document.querySelector("#meal-name");
  const mealPriceEl = document.querySelector("#meal-price");
  const mealPhotoEl = document.querySelector("#meal-photo");
  const mealChefEl = document.querySelector("#meal-chef");
  const mealPrepEl = document.querySelector("#meal-prep");
  const mealButtonEL = document.querySelector("#todo--conatainer0");
  const checkInputValue = document.querySelector(".menu__input")


  const innetAppendFirst = document.createElement("div");
  const innetAppendSecond = document.createElement("div");

  const mealFormEl = document.querySelector("#menu--form");

  mealFormEl.addEventListener("submit", (e)=>{
    e.preventDefault();

    const photoEl = document.createElement ('img');

    photoEl.className="image";
    photoEl.src =mealPhotoEl.value;
    photoEl.setAttribute("width","250");
    photoEl.setAttribute("heigth", "160");
    
    innetAppendSecond.className = "wrapperELemen";
    innetAppendSecond.appendChild( photoEl);
    mealPhotoEl.value = '';


    const nameFood = document.createElement ("h3");
    const strong = document.createElement('strong');
    nameFood.appendChild(document.createTextNode(mealNameEl.value));
    strong.textContent = 'Taom nomi: ';
    innetAppendSecond.append(strong, nameFood);
    mealNameEl.value = '';

    const priceFood = document.createElement ("h3");
    const strong2 = document.createElement('strong');
    priceFood.appendChild(document.createTextNode(mealPriceEl.value));
    strong2.textContent = 'Taom narxi: ';
    innetAppendSecond.append(strong2, priceFood);
    mealPriceEl.value = '';
    
    const chefFood = document.createElement ("h3");
    const strong3 = document.createElement('strong');
    chefFood.appendChild(document.createTextNode(mealChefEl.value));
    strong3.textContent = 'Oshpaz: ';
    innetAppendSecond.append(strong3, chefFood);
    mealChefEl.value = '';

    const nameResta = document.createElement ("h3");
    const strong4 = document.createElement('strong');
    nameResta.appendChild(document.createTextNode(mealPrepEl.value));
    strong4.textContent = 'Restaran nomi: ';
    innetAppendSecond.append(strong4, nameResta);
    mealPrepEl.value ='';
    const spanWrap =document.createElement("span");
    spanWrap.appendChild(innetAppendFirst);
    spanWrap.appendChild(innetAppendSecond);
    mealButtonEL.append(spanWrap);
    
    spanWrap.className = 'span__style';

    const todolistWrapper = document.querySelector("#todo--conatainer0")
    todolistWrapper.className = ""

    
    
  });


  