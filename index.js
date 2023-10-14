let API_KEY='4625625c309f4023b16f635d126f3e84'
let darkMode=document.getElementById('darkMode');
let navElement=document.getElementById('navElement')
let paraElementSelect=document.getElementById('paraElementSelect')
let iplElement=document.getElementById('ipl')
let businessElement=document.getElementById('business')
let entireDivElement=document.getElementById('entireDiv')
let politicsElement=document.getElementById('politics')
let lightMode=document.getElementById('lightMode')
let ulElement=document.getElementById('ulElement')
let titleElement=document.querySelector('title')
let searchInputElement=document.getElementById('searchInput')
let formElement=document.getElementById('formElement')
let buttonContainerElement=document.getElementById('buttonContainer')
let secondButtonContainerElement=document.getElementById('secondButtonContainer')
let buttonElement=document.getElementById('buttonElement')
var mainArray=[]
var newArray=[]

let limit=6;
let start=0;


function creatingFinalListElements(each,query){
    let date=each.publishedAt
    let sourceName=each.source.name
    let newDate= new Date(date).toLocaleString('en-US',{
        timeZone:'Asia/Jakarta'
    })
    let sourceAndTime=`${sourceName} - ${newDate}`
    let image=each.urlToImage
    if (image){    
    let title=each.title
    let description=each.description
    let newsCard=document.createElement('li');  //createdListElement
    newsCard.classList.add('li-class','col-11','col-sm-5','col-md-3')
    ulElement.appendChild(newsCard)
    newsCard.addEventListener('click',()=>{
        window.open(each.url,'_blank')
    })
    let divContainer=document.createElement('div') //createdContainer
    divContainer.classList.add('div-class')
    let imageElement=document.createElement('img') //createdImageElement
    imageElement.src=image
    imageElement.setAttribute('loading', 'lazy');
    imageElement.classList.add( 'image-class');
    imageElement.alt=title
    divContainer.appendChild(imageElement)
    let textContainer=document.createElement('div')
    textContainer.classList.add('textContainer-class')
    divContainer.appendChild(textContainer)
    
    let titleInCard=document.createElement('h3') //createdH3 element for title
    titleInCard.textContent=title;
    titleInCard.classList.add('cardtitle-class')
    textContainer.appendChild(titleInCard);

    let sourceAndDateElement=document.createElement('p')
    sourceAndDateElement.textContent=sourceAndTime;
    sourceAndDateElement.classList.add('para-element-class-source')
    textContainer.appendChild(sourceAndDateElement)

    let descriptionElement=document.createElement('p') //created p element for description
    descriptionElement.classList.add('para-element-class')
    descriptionElement.textContent=description;
    textContainer.appendChild(descriptionElement)
    newsCard.appendChild(divContainer)
    titleElement.textContent=query
    }
}

function createNewsCard(query,mainArray){
    ulElement.textContent=''
    let res=mainArray.slice(start,limit) 
    newArray=mainArray.slice(limit+1,mainArray.length+1)
    if (res.length===0){
        let noProductsElement=document.createElement('li')
        noProductsElement.classList.add('not-found-list')
        let notFoundImage=document.createElement('img')
        notFoundImage.classList.add('not-found-img')
        notFoundImage.src='https://res.cloudinary.com/du1alk3zd/image/upload/v1691402095/clipart1533013_itnri2.png'
        notFoundImage.alt='not-found'
        noProductsElement.appendChild(notFoundImage)
        titleElement.textContent=query
        buttonContainerElement.classList.add('d-none')
        secondButtonContainerElement.classList.remove('d-none')
        ulElement.appendChild(noProductsElement)
        
    }
    else{res.map(each=>creatingFinalListElements(each,query))
    buttonContainerElement.classList.remove('d-none')
    secondButtonContainerElement.classList.add('d-none')
    buttonContainerElement.classList.add('d-flex')
    }
    
}





async function gettingNews(query){
    buttonContainerElement.classList.remove('d-flex')
    buttonContainerElement.classList.add('d-none')
    let initialUrl=`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
    const res=await fetch(initialUrl)
    const data=await res.json()
    mainArray=data.articles
    createNewsCard(query,mainArray)

}

window.addEventListener('load',(gettingNews('India')))



async function gettingIplNews(category){
    let urlBasedOnCategory=`https://newsapi.org/v2/everything?q=${category}&apiKey=${API_KEY}`
    const res=await fetch(urlBasedOnCategory)
    const data=await res.json()
    mainArray=data.articles
    createNewsCard(category,mainArray)
}

iplElement.addEventListener('click',()=>gettingIplNews('Ipl'))
businessElement.addEventListener('click',()=>gettingIplNews('Business'))
politicsElement.addEventListener('click',()=>gettingIplNews('Politics'))

formElement.addEventListener('submit',async(event)=>{
    event.preventDefault()
    let value=searchInputElement.value;
    let url=`https://newsapi.org/v2/everything?q=${value}&apiKey=${API_KEY}`
    const response= await fetch(url)
    const data=await response.json()
    mainArray=data.articles
    createNewsCard(value,mainArray)
    searchInputElement.value=''

})


darkMode.addEventListener('click',function(){
    iplElement.classList.add('text-black-class')
    businessElement.classList.add('text-black-class')
    politicsElement.classList.add('text-black-class')
    paraElementSelect.classList.remove('text-black-class')
    paraElementSelect.classList.add('text-black-class')
    navElement.classList.remove('header-class')
    navElement.classList.add('dark-header-class')
    entireDivElement.classList.add('black-outer-background','text-white-class')
    
})

lightMode.addEventListener('click',function(){
    iplElement.classList.remove('text-black-class')
    businessElement.classList.remove('text-black-class')
    politicsElement.classList.remove('text-black-class')
    paraElementSelect.classList.add('text-black-class')
    paraElementSelect.classList.remove('text-black-class')
    navElement.classList.add('header-class')
    navElement.classList.remove('dark-header-class')
    entireDivElement.classList.remove('black-outer-background','text-white-class')
    newsCard.classList.remove('li-class-white-border')
})


buttonElement.addEventListener('click',function(){
    let titleOnclick=(titleElement.textContent)
    let newressss=newArray.splice(start,limit)
    if (newressss.length>0){ newressss.map(eachOne=>creatingFinalListElements(eachOne))
    titleElement.textContent=titleOnclick
    }
})

secondButtonContainerElement.addEventListener('click',function(){
    gettingNews('India')
})