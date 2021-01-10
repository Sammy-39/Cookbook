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
setAttributes(mainContainer,{ class:"container-fluid p-0 con" })


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
    href: "../index.html" 
})

//to create nav-brand image element
var navBrandImgElem = createNewElement("img")
setAttributes(navBrandImgElem,{ 
    class: "mr-2",
    src: "../img/recipe-book.png",
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
homeListItem.innerHTML = `<a class="nav-link mr-2" href="../index.html"> Home </a>`

var aboutListItem = createNewElement("li")
setAttributes(aboutListItem,{ class: "navbar-nav" })
aboutListItem.innerHTML = `<a class="nav-link" href="#"> About </a>`

//to create card-deck container
var cardDeckContainer = createNewElement("div")
setAttributes(cardDeckContainer,{ 
    class:"container", style: "padding-top:80px"
})

//to create card-deck element
var cardDeckElem = createNewElement("div")
setAttributes(cardDeckElem,{
    class:"d-flex flex-wrap justify-content-around p-4"
})

//to get recipe data from edamam recipe-search api
async function getRecipeData(){
    try{
        var appId = "cb5b5933"
        var appKey = "73181119cd96106574441da515308723"
        var url = `https://api.edamam.com/search?q=vegan&app_id=${appId}&app_key=${appKey}&from=1&to=25`
        var recipeDataResult = await fetch(url)
        var recipeData = await recipeDataResult.json()
        return recipeData
    }
    catch(err) { return err }
}

//to store all the recipe cards elements
var recipeCards = []

//to store modal container elements
var modalContainerList = []

//using .then to access recipe-search api data
getRecipeData().then((recipeData)=>{

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
            class: "btn btn-light border ml-3", type: "button", onclick: `setModalContent(event,${i})`,
            "data-toggle": "modal", "data-target": "#recipeDetailsModal"
        })
        modalButtonElem.innerHTML = "Recipe Details"

        //to create modal box with recipe details
        modalContainerList.push(createNewElement("div"))
        setAttributes(modalContainerList[i],{
            class: "modal fade", id: "recipeDetailsModal", tabindex: "-1",
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
    
    //to append recipe-cards to card-deck element
    cardDeckElem.append(...recipeCards)
})
.catch((err)=>{
    cardDeckElem.innerText = `Data Unavailable`
})

//function to display dynamic content in modal box
function setModalContent(event,i){
    var parentCard = event.target.parentElement
    parentCard.append(modalContainerList[i])
}

//function to remove the modal on closing the modal
function removeModal(event,i){
    var parentCard = recipeCards[i].querySelector(".card-body")
    parentCard.removeChild(modalContainerList[i])
}


//to append main container to the body
document.body.append(mainContainer)

//to append navbar and card-deck containers to main container
mainContainer.append(navContainer,cardDeckContainer)

//to append nav container and its child the main container
navContainer.append(navElem)
navElem.append(navBrandElem,navHamButton,navCollapseElem)
navBrandElem.append(navBrandImgElem,navBrandParaElem)
navCollapseElem.append(navListContainer)
navListContainer.append(navUListElem)
navUListElem.append(homeListItem,aboutListItem)

//to append card-deck element to card-deck container
cardDeckContainer.append(cardDeckElem)



