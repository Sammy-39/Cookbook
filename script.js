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
    href: "#" 
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
homeListItem.innerHTML = `<a class="nav-link mr-2" href="#"> Home </a>`

var aboutListItem = createNewElement("li")
setAttributes(aboutListItem,{ class: "navbar-nav" })
aboutListItem.innerHTML = `<a class="nav-link" href="#"> About </a>`


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
    class:"body col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8 offset-1 offset-sm-1 offset-md-2 offset-lg-2 offset-xl-2 p-5"
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

var footerContainer = createNewElement("footer")
setAttributes(footerContainer,{ class: "footer col-6 offset-3"} )

var twitterLinkElem = createNewElement("a")
setAttributes(twitterLinkElem,{ href: "https://twitter.com/"})
twitterLinkElem.innerHTML = `<i class="fab fa-twitter">`

var facebookLinkElem = createNewElement("a")
setAttributes(facebookLinkElem,{ href: "https://facebook.com/" })
facebookLinkElem.innerHTML = `<i class="fab fa-facebook-f" 
style="padding:10px 14.5px 10px 14.5px;"> </i>`

var instagramLinkElem = createNewElement("a")
setAttributes(instagramLinkElem, { href: "#" })
instagramLinkElem.innerHTML = `<i class="fab fa-instagram">`


//to append main container to the body
document.body.append(mainContainer)

//to append navbar, topbar, body, footer containers to main container
mainContainer.append(navContainer,topBarContainer, bodyContainer, footerContainer)

//to append nav container and its child the main container
navContainer.append(navElem)
navElem.append(navBrandElem,navHamButton,navCollapseElem)
navBrandElem.append(navBrandImgElem,navBrandParaElem)
navCollapseElem.append(navListContainer)
navListContainer.append(navUListElem)
navUListElem.append(homeListItem,aboutListItem)

//to append title and subtitle elements to topbar container
topBarContainer.append(titleElem,subtitleElem)

//to append menu button elements to body container
bodyContainer.append(meatButtonElem,fishButtonElem,veganButtonElem,fruitsButtonElem,
    indianButtonElem,italianButtonElem,chineseButtonElem,continentalButtonElem, 
    dairyButtonElem, icecreamButtonElem, chocolateButtonElem)

//to append link elements to footer container
footerContainer.append(twitterLinkElem,facebookLinkElem,instagramLinkElem)