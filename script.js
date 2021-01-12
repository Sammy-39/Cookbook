//function to create a new element
var createNewElement = (elementName) => {
    return document.createElement(elementName)
}

//function to set attributes to the element
var setAttributes = (elementName,attributeNameValuePair) => {
    Object.keys(attributeNameValuePair).forEach((attributeName)=>{
        elementName.setAttribute(attributeName,attributeNameValuePair[attributeName])
    })
}

//function to create select options
function createOptions(optionsList){
    optionElements = []
    var n = optionsList.length
    for(var i=0;i<n;i++){
        optionElements.push(createNewElement("option"))
        optionElements[i].innerText = optionsList[i]
        if(i===0){
            optionElements[i].value = ""
        }
        else{
            optionElements[i].value = optionsList[i]
        }  
    }
    return optionElements
}

//function to create List items
var createListItems = (listItems)=>{
    var resultListItems = []
    listItems.forEach((item,i)=>{
        resultListItems.push(createNewElement("li"))
        resultListItems[i].innerText = listItems[i]
    })
    return resultListItems
}


//to create main container
var mainContainer = createNewElement("div")
setAttributes(mainContainer,{ class:"container-fluid p-0" })


//to create navbar-container
var navContainer = createNewElement("div")
setAttributes(navContainer,{ 
    class:"navbarCustom navbar-container" 
})

//to create nav element
var navElem = createNewElement("nav")
setAttributes(navElem,{ class: "navbar navbar-expand-lg navbar-expand-md navbar-light bg-warning" })

//to create nav-brand element
var navBrandElem = createNewElement("a")
setAttributes(navBrandElem,{ 
    class: "navbar-brand navbar-brand-text",
    href: "index.html" 
})

//to create nav-brand image element
var navBrandImgElem = createNewElement("img")
setAttributes(navBrandImgElem,{ 
    class: "mr-2",
    src: "img/recipe-book.png",
    alt: "",
    style:"width:45px; height:45px" 
})

//to create nav-brand text element
var navBrandParaElem = createNewElement("p")
setAttributes(navBrandParaElem,{ class:"d-inline" })
navBrandParaElem.innerText = "CookBook"

//to create nav-hamburger button
var navHamButton = createNewElement("button")
setAttributes(navHamButton,{
    class : "navbar-toggler align-items-center btn-size",
    type: "button", 
    "data-toggle": "collapse",
    "data-target": "#collapsibleNavbar"
})
navHamButton.innerHTML = `<span class="navbar-toggler-icon"> </span>`

//to create collapse nav Element
var navCollapseElem = createNewElement("div")
setAttributes(navCollapseElem,{ 
    class: "collapse navbar-collapse",
    id: "collapsibleNavbar"
})

//to create nav list container
var navListContainer =  createNewElement("div")
setAttributes(navListContainer,{ class: "list-container" })

//to create unordered list element
var navUListElem = createNewElement("ul")
setAttributes(navUListElem,{ class: "navbar-nav" })

//to create list items
var homeListItem = createNewElement("li")
setAttributes(homeListItem,{ class: "nav-item" })
homeListItem.innerHTML = `<a class="nav-link mr-2" href="index.html"> Home </a>`

var aboutListItem = createNewElement("li")
setAttributes(aboutListItem,{ class: "navbar-nav" })
aboutListItem.innerHTML = `<a class="nav-link" href="about.html"> About </a>`


//to create top-bar conatiner
var topBarContainer = createNewElement("div")
setAttributes(topBarContainer,{ class:"top-bar" })

//to create title element
var titleElem = createNewElement("p")
setAttributes(titleElem,{ class:"title mt-5" })
titleElem.innerText = "Eat Healthy and Light"

//to create subtitle element
var subtitleElem = createNewElement("p")
setAttributes(subtitleElem,{ class:"subtitle" })
subtitleElem.innerText = "Quality Recipes"

//to create body container
var bodyContainer = createNewElement("div")
setAttributes(bodyContainer,{ 
    class:`body col-10 col-sm-10 col-md-10 col-lg-8 col-xl-8 
    offset-1 offset-sm-1 offset-md-1 offset-lg-2 offset-xl-2 p-5`,
})

//to create menu button elements
var meatButtonElem = createNewElement("button")
setAttributes(meatButtonElem,{ 
    class:"btn mb-3",
    onclick: `location.href="components/meat.html"` 
})
meatButtonElem.innerText = "Meat"

var fishButtonElem = createNewElement("button")
setAttributes(fishButtonElem,{ 
    class:"btn mb-3",
    onclick: `location.href="components/Vegan.html"`  
})
fishButtonElem.innerText = "Vegan"

var veganButtonElem = createNewElement("button")
setAttributes(veganButtonElem,{ 
    class:"btn mb-3",
    onclick: `location.href="components/fish.html"`  
})
veganButtonElem.innerText = "Fish"

var fruitsButtonElem = createNewElement("button")
setAttributes(fruitsButtonElem,{ 
    class:"btn mb-3",
    onclick: `location.href="components/fruits.html"`  
})
fruitsButtonElem.innerText = "Fruits"

var indianButtonElem = createNewElement("button")
setAttributes(indianButtonElem,{ 
    class:"btn mb-3",
    onclick: `location.href="components/indian.html"`  
})
indianButtonElem.innerText = "Indian"

var italianButtonElem = createNewElement("button")
setAttributes(italianButtonElem,{ 
    class:"btn mb-3",
    onclick: `location.href="components/italian.html"`  
})
italianButtonElem.innerText = "Italian"

var chineseButtonElem = createNewElement("button")
setAttributes(chineseButtonElem,{ 
    class:"btn mb-3",
    onclick: `location.href="components/chinese.html"`  
})
chineseButtonElem.innerText = "Chinese"

var continentalButtonElem = createNewElement("button")
setAttributes(continentalButtonElem,{ 
    class:"btn mb-3",
    onclick: `location.href="components/continental.html"`  
})
continentalButtonElem.innerText = "Continental"

var dairyButtonElem = createNewElement("button")
setAttributes(dairyButtonElem,{ 
    class:"btn mb-3",
    onclick: `location.href="components/dairy.html"`  
})
dairyButtonElem.innerText = "Dairy"

var icecreamButtonElem = createNewElement("button")
setAttributes(icecreamButtonElem,{ 
    class:"btn mb-3",
    onclick: `location.href="components/icecream.html"`  
})
icecreamButtonElem.innerText = "Ice-Cream"

var chocolateButtonElem = createNewElement("button")
setAttributes(chocolateButtonElem,{ 
    class:"btn mb-3",
    onclick: `location.href="components/chocolate.html"`  
})
chocolateButtonElem.innerText = "Chocolate"


//to create button -> onclick opens modal box with search-recipe form 
var modalButtonElem = createNewElement("button")
setAttributes(modalButtonElem,{
    class: "btn search-btn", type: "button", onclick: `setModalContent(event)`,
    "data-toggle": "modal", "data-target": "#recipeDetailsModal"
})
modalButtonElem.innerHTML = "Search Recipe"

//to create modal box with search-recipe form
var modalContainer = createNewElement("div")
setAttributes(modalContainer,{
    class: "modal fade", id: "recipeDetailsModal", tabindex: "-1", "data-keyboard": "false", "data-backdrop": "static",
    role: "dialog", "aria-labelledby": "recipeDetailsModal", "aria-hidden":"true"
})

var modalDialogElem = createNewElement("div")
setAttributes(modalDialogElem,{ 
    class: "modal-dialog modal-dialog-centered",
    role: "document"
})

var modalContentElem = createNewElement("div")
setAttributes(modalContentElem,{ class:"modal-content" })

var modalHeaderElem = createNewElement("div")
setAttributes(modalHeaderElem,{ class:"modal-header" })
modalHeaderElem.innerHTML = `<p class="modal-title" 
id="modalTitle"> Search Recipe <p>`

var modalCloseButtonElem = createNewElement("buton")
setAttributes(modalCloseButtonElem,{ 
    class:"close", type: "button", onclick: "removeModal(event)",
    "data-dismiss": "modal", "aria-label": "Close"  
})
modalCloseButtonElem.innerHTML = `<span class="float-right" aria-hidden="true">&times;</span>`

var modalBodyElem = createNewElement("div")
setAttributes(modalBodyElem,{ 
    class: "modal-body text-left",
    style: "font-size:15.5px" 
})

//to create recipe serach form
var searchFormElement = createNewElement("form")
setAttributes(searchFormElement,{ 
    class: "search-form",
    onsubmit: "searchRecipe(event); return false" 
})

var row1Elem = createNewElement("div")
setAttributes(row1Elem,{
    class: "form-row"
})

var foodFieldCol = createNewElement("div")
setAttributes(foodFieldCol,{
    class: "form-group col-6"
})

var foodLabel = createNewElement("label")
setAttributes(foodLabel,{ for:"food"})
foodLabel.innerText = "Food"

var foodFieldElem = createNewElement("input")
setAttributes(foodFieldElem,{ 
    class:"form-control", type: "text", id: "food", required: true
})

var noOfRecipeFieldCol = createNewElement("div")
setAttributes(noOfRecipeFieldCol,{
    class: "form-group col-6"
})

var noOfRecipesLabel = createNewElement("label")
setAttributes(noOfRecipesLabel,{ for:"no-of-recipes"})
noOfRecipesLabel.innerText = "No of Recipes"

var noOfRecipesFieldElem = createNewElement("input")
setAttributes(noOfRecipesFieldElem,{ 
    class:"form-control", type: "number", id: "no-of-recipes", required: true
})

var row2Elem = createNewElement("div")
setAttributes(row2Elem,{
    class: "form-row"
})

var healthFieldCol = createNewElement("div")
setAttributes(healthFieldCol,{
    class: "form-group col-12"
})

var healthLabel = createNewElement("label")
setAttributes(healthLabel,{ for:"health"})
healthLabel.innerText = "Health Labels"

var healthFieldElem = createNewElement("select")
setAttributes(healthFieldElem,{ 
    class:"form-control", id: "health"
})

var healthLabelsList = ['--Select--','alcohol-free','dairy-free',
'egg-free','gluten-free','keto-friendly',
'peanut-free','low-sugar','vegetarian']
var healthOptionsElem = createOptions(healthLabelsList)

var row3Elem = createNewElement("div")
setAttributes(row3Elem,{
    class: "form-row"
})

var dietFieldCol = createNewElement("div")
setAttributes(dietFieldCol,{
    class: "form-group col-6"
})

var dietLabel = createNewElement("label")
setAttributes(dietLabel,{ for:"diet"})
dietLabel.innerText = "Diet"

var dietFieldElem = createNewElement("select")
setAttributes(dietFieldElem,{ 
    class:"form-control", id: "diet"
})

var dietList = ['--Select--','balanced','high-protein','high-fiber',
'low-fat','low-carb','low-sodium']
var dietOptionsElem = createOptions(dietList)

var mealTypeFieldCol = createNewElement("div")
setAttributes(mealTypeFieldCol,{
    class: "form-group col-6"
})

var mealTypeLabel = createNewElement("label")
setAttributes(mealTypeLabel,{ for:"meal"})
mealTypeLabel.innerText = "Meal Type"

var mealTypeFieldElem = createNewElement("select")
setAttributes(mealTypeFieldElem,{ 
    class:"form-control", id: "meal"
})

var mealTypeList = ['--Select--','Lunch','Dinner','Breakfast','snack','Teatime']
var mealTypeOptionsElem = createOptions(mealTypeList)

var row4Elem = createNewElement("div")
setAttributes(row4Elem,{
    class: "form-row"
})

var dishTypeFieldCol = createNewElement("div")
setAttributes(dishTypeFieldCol,{
    class: "form-group col-6"
})

var dishTypeLabel =  createNewElement("label")
setAttributes(dishTypeLabel,{ for:"dish"})
dishTypeLabel.innerText = "Dish Type"

var dishTypeFieldElem = createNewElement("select")
setAttributes(dishTypeFieldElem,{ 
    class:"form-control", id: "dish"
})

var dishTypeList = ['--Select--','Soup','Salad','Sandwich','Bread',
'Cereals','Drinks','Desserts','Egg','Main course']
var dishTypeOptionsElem = createOptions(dishTypeList)

var caloriesFieldCol = createNewElement("div")
setAttributes(caloriesFieldCol,{
    class: "form-group col-6"
})

var caloriesLabel = createNewElement("label")
setAttributes(caloriesLabel,{ for:"cal"})
caloriesLabel.innerHTML = `Calories: <span class="cal-val"> <span>`

var caloriesFieldElem = createNewElement("input")
setAttributes(caloriesFieldElem,{
    type: "range", class: "form-control-range", id: "cal",
    min: 0, max: 1000, value: 0
})

var searchBtnFieldRow = createNewElement("div")
setAttributes(searchBtnFieldRow,{
    class: "form-group justify-content-center d-flex"
})

var searchBtnElement = createNewElement("button")
setAttributes(searchBtnElement,{
    class: "btn rSearch-btn",
    type: "submit"
})
searchBtnElement.innerText = "Search"

//to create container that displays search recipe result
var recipeResultContainer = createNewElement("div")
setAttributes(recipeResultContainer,{
    class:`res-body col-10 col-sm-10 col-md-10 col-lg-8 col-xl-8 offset-1 offset-sm-1,
    offset-md-1 offset-lg-2 offset-xl-2 py-5 con`
})


//to create footer containers and its childs link elements
var footerContainer = createNewElement("footer")
setAttributes(footerContainer,{ class: "footer col-6 offset-3 my-5"} )

var twitterLinkElem = createNewElement("a")
setAttributes(twitterLinkElem,{ href: "https://twitter.com/"})
twitterLinkElem.innerHTML = `<i class="fa fa-twitter">`

var facebookLinkElem = createNewElement("a")
setAttributes(facebookLinkElem,{ href: "https://facebook.com/" })
facebookLinkElem.innerHTML = `<i class="fa fa-facebook-f" 
style="padding:10px 14.5px 10px 14.5px;"> </i>`

var instagramLinkElem = createNewElement("a")
setAttributes(instagramLinkElem, { href: "#" })
instagramLinkElem.innerHTML = `<i class="fa fa-instagram">`

//to store all the recipe cards elements
var recipeCards = []

//to store modal container elements
var modalContainerList = []

//function to display search-recipe results
function searchRecipe(event){

    //to display loading spinner
    var resContainer = document.querySelector(".res-body")
    resContainer.style.display = 'flex'
    resContainer.innerHTML = `<div class="spinner-border" style="width: 4rem; height: 4rem; 
    color:chartreuse;" role="status"> <span class="sr-only">Loading...</span> </div>`
    resContainer.scrollIntoView(); 

    //to display the search-recipe results
    //to get recipe data from edamam recipe-search api
    async function getRecipeData(){
    try{
        var appId = "cb5b5933"
        var appKey = "73181119cd96106574441da515308723"

        var foodVal = document.querySelector("#food").value
        var noOfRecipesVal = document.querySelector("#no-of-recipes").value
        var healthVal = Array.from(document.querySelector("#health").options).filter(op=>op.selected).map(op=>op.value)
        var dietVal = Array.from(document.querySelector("#diet").options).filter(op=>op.selected).map(op=>op.value)
        var mealVal = Array.from(document.querySelector("#meal").options).filter(op=>op.selected).map(op=>op.value)
        var dishVal = Array.from(document.querySelector("#dish").options).filter(op=>op.selected).map(op=>op.value)
        var calVal = document.querySelector("#cal").value

        var url = `https://api.edamam.com/search?q=${foodVal}&app_id=${appId}&app_key=${appKey}&from=0&to=${noOfRecipesVal}`
        
        if(healthVal[0]!== "") { url = url + `&health=${healthVal}` }
        if(dietVal[0]!=="") { url = url + `&diet=${dietVal}` }
        if(mealVal[0]!=="") { url = url + `&mealType=${mealVal}` }
        if(dishVal[0]!=="") { url = url + `&dishType=${dishVal}` }
        if(calVal!=='0') { url = url + `&calories=${calVal}` }
        
        var recipeDataResult = await fetch(url)
        var recipeData = await recipeDataResult.json()
        return recipeData
    }
    catch(err) { return new Error("Data Unavailable"); }
    }

    modalContainerList = []
    recipeCards = []

    //using .then to access recipe-search api data
    getRecipeData().then((recipeData)=>{
        
        if(!recipeData.hits) { throw new Error("Data Unavailable. Try other filters"); }
        if(recipeData.hits.length === 0){ throw new Error("Data Unavailable"); }

        //creating recipe cards
        for(var i=0;i<recipeData.hits.length;i++){
            recipeCards.push(createNewElement("div"))
            setAttributes(recipeCards[i],{
                class:"card mb-4 p-2 text-center",
                style:"width:250px; box-shadow: 0px 10px 10px gray; border-radius: 15px 50px;"
            })
        
            //to display recipe name and image at top in each card
            recipeCards[i].innerHTML = `<img class="border card-img-top mb-2" src="${recipeData.hits[i].recipe.image}" 
            alt="${recipeData.hits[i].recipe.label} image" style="border-radius: 15px 50px;"> 
            <p style="color: rgba(0, 0, 0, 0.7);"> <b> ${recipeData.hits[i].recipe.label} </b> </p> `

            //to create card-body element for recipe details
            var cardBodyElem = createNewElement("div")
            setAttributes(cardBodyElem,{class:"card-body"})

            //to create cutlery icon element
            var cutleryIconElem = createNewElement("i")
            setAttributes(cutleryIconElem,{
                class: "fa fa-cutlery",
                style: "font-size:20px; color: rgba(0, 0, 0, 0.7);",
                "aria-hidden": "true" 
            })

            //to create button -> onclick opens modal box with recipe details
            var modalButtonElem = createNewElement("button")
            setAttributes(modalButtonElem,{
                class: "rd-btn btn-light border ml-3", type: "button", onclick: `setModalContent(event,${i})`,
                "data-toggle": "modal", "data-target": "#recipeDetailsModal"
            })
            modalButtonElem.innerHTML = "Recipe Details"

            //to create modal box with recipe details
            modalContainerList.push(createNewElement("div"))
            setAttributes(modalContainerList[i],{
                class: "modal fade", id: "recipeDetailsModal", tabindex: "-1", "data-keyboard": "false", "data-backdrop": "static",
                role: "dialog", "aria-labelledby": "recipeDetailsModal", "aria-hidden":"true"
            })

            var modalDialogElem = createNewElement("div")
            setAttributes(modalDialogElem,{ 
                class: "modal-dialog modal-dialog-centered",
                role: "document"
            })

            var modalContentElem = createNewElement("div")
            setAttributes(modalContentElem,{ class:"modal-content" })

            var modalHeaderElem = createNewElement("div")
            setAttributes(modalHeaderElem,{ class:"modal-header" })
            modalHeaderElem.innerHTML = `<h5 class="modal-title" 
            id="modalTitle"> ${recipeData.hits[i].recipe.label} </h5>`

            var modalCloseButtonElem = createNewElement("buton")
            setAttributes(modalCloseButtonElem,{ 
                class:"close", type: "button", onclick: `removeModal(event,${i})`,
                "data-dismiss": "modal", "aria-label": "Close"  
            })
            modalCloseButtonElem.innerHTML = `<span aria-hidden="true">&times;</span>`

            var modalBodyElem = createNewElement("div")
            setAttributes(modalBodyElem,{ 
                class: "modal-body text-left",
                style: "font-size:15.5px" 
            })

            var recipeUrlParaElem = createNewElement("p")
            recipeUrlParaElem.innerHTML = `<b> Recipe URL: <b> 
            <a href="${recipeData.hits[i].recipe.url}"> /Recipe </a>`

            var caloriesParaElem = createNewElement("p")
            caloriesParaElem.innerHTML = `<b> Calories: </b> ${recipeData.hits[i].recipe.calories}`
            
            var ingredientsTitleElem = createNewElement("p")
            setAttributes(ingredientsTitleElem,{ class:"mb-0" })
            ingredientsTitleElem.innerHTML = `<b> Ingredients </b>`
            var ingredientsUList = createNewElement("ul")
            var ingredientsListItems = createListItems(recipeData.hits[i].recipe.ingredientLines) 

            var healthLabelsTitleElem = createNewElement("p")
            setAttributes(healthLabelsTitleElem,{ class:"mb-0" })
            healthLabelsTitleElem.innerHTML = `<b> Health Labels </b>`
            var healthLabelsUList = createNewElement("ul")
            var healthLabelsListItems = createListItems(recipeData.hits[i].recipe.healthLabels)

            var vitaminTitleElem = createNewElement("p")
            setAttributes(vitaminTitleElem,{ class:"mb-0" })
            vitaminTitleElem.innerHTML = `<b> Vitamin Content </b>`
            var vitaminList = []
            for(var j=11;j<16;j++){
                vitaminList.push(`${recipeData.hits[i].recipe.digest[j].label}: ${recipeData.hits[i].recipe.digest[j].total}`)
            }
            var vitaminUList = createNewElement("ul")
            var vitaminListItems = createListItems(vitaminList)

            //to append each card-body element to corresponding recipe cards 
            recipeCards[i].append(cardBodyElem)

            //to append cutlery icon, modal button elements and modal container to the card-body element
            cardBodyElem.append(cutleryIconElem,modalButtonElem)

            //to append modal and its child elements to modal container
            modalContainerList[i].append(modalDialogElem)
            modalDialogElem.append(modalContentElem)
            modalContentElem.append(modalHeaderElem,modalBodyElem)
            modalHeaderElem.append(modalCloseButtonElem)
            modalBodyElem.append(recipeUrlParaElem,caloriesParaElem,ingredientsTitleElem,ingredientsUList,
                healthLabelsTitleElem,healthLabelsUList,vitaminTitleElem,vitaminUList)
            ingredientsUList.append(...ingredientsListItems)
            healthLabelsUList.append(...healthLabelsListItems)
            vitaminUList.append(...vitaminListItems)
        
        }

        document.querySelector(".spinner-border").style.display = 'none'
        resContainer.append(...recipeCards)
    })
    .catch((err)=>{
        resContainer.innerHTML = `<p class="px-4 py-2 bg-info text-white"> ${err.message} </p>`
        setTimeout(()=>{
            resContainer.style.display = 'none'
        },2000)
    })
    
    //to reset the form
    document.body.querySelector(".search-form").reset()
    //to close the modal box
    document.body.classList.remove("modal-open")
    document.body.style = ""
    removeModal(event)
    document.body.removeChild( document.querySelector(".modal-backdrop"))
}


//function to display dynamic content in modal box
function setModalContent(event,i){
    var parentCard = event.target.parentElement
    if(typeof(i)==="undefined"){
        parentCard.append(modalContainer);

        //to display and change the calories values in search-form
        $('.cal-val').text(`${$('#cal').val()} kcal`)
        $('#cal').change(()=>{
            $('.cal-val').text(`${$('#cal').val()} kcal`)
        })
    }
    else{
        parentCard.append(modalContainerList[i])
    }
}

//function to remove the modal on closing the modal
function removeModal(event,i){
    if(typeof(i)==="undefined"){
        mainContainer.removeChild(modalContainer)
    }
    else{
        var parentCard = recipeCards[i].querySelector(".card-body")
        parentCard.removeChild(modalContainerList[i])
    }
}


//to append main container to the body
document.body.append(mainContainer)

//to append navbar, topbar, body, footer containers to main container
mainContainer.append(navContainer,topBarContainer,modalButtonElem,
    bodyContainer,recipeResultContainer,footerContainer)

//to append nav container and its child the main container
navContainer.append(navElem)
navElem.append(navBrandElem,navHamButton,navCollapseElem)
navBrandElem.append(navBrandImgElem,navBrandParaElem)
navCollapseElem.append(navListContainer)
navListContainer.append(navUListElem)
navUListElem.append(homeListItem,aboutListItem)

//to append title and subtitle elements to topbar container
topBarContainer.append(titleElem,subtitleElem)

//to append modal-dialog element and its child to modal-container
modalContainer.append(modalDialogElem)
modalDialogElem.append(modalContentElem)
modalContentElem.append(modalHeaderElem,modalBodyElem)
modalHeaderElem.append(modalCloseButtonElem)

//to append search form element and its childs to modal body element
modalBodyElem.append(searchFormElement)
searchFormElement.append(row1Elem,row2Elem,row3Elem,row4Elem,searchBtnFieldRow)

row1Elem.append(foodFieldCol,noOfRecipeFieldCol)
foodFieldCol.append(foodLabel,foodFieldElem)
noOfRecipeFieldCol.append(noOfRecipesLabel,noOfRecipesFieldElem)

row2Elem.append(healthFieldCol)
healthFieldCol.append(healthLabel,healthFieldElem)
healthFieldElem.append(...healthOptionsElem)

row3Elem.append(dietFieldCol,mealTypeFieldCol)
dietFieldCol.append(dietLabel,dietFieldElem)
dietFieldElem.append(...dietOptionsElem)
mealTypeFieldCol.append(mealTypeLabel,mealTypeFieldElem)
mealTypeFieldElem.append(...mealTypeOptionsElem)

row4Elem.append(dishTypeFieldCol,caloriesFieldCol)
dishTypeFieldCol.append(dishTypeLabel,dishTypeFieldElem)
dishTypeFieldElem.append(...dishTypeOptionsElem)
caloriesFieldCol.append(caloriesLabel,caloriesFieldElem)

searchBtnFieldRow.append(searchBtnElement)

//to append menu button elements to body container
bodyContainer.append(meatButtonElem,fishButtonElem,veganButtonElem,fruitsButtonElem,
    indianButtonElem,italianButtonElem,chineseButtonElem,continentalButtonElem, 
    dairyButtonElem, icecreamButtonElem, chocolateButtonElem)

//to append link elements to footer container
footerContainer.append(twitterLinkElem,facebookLinkElem,instagramLinkElem)