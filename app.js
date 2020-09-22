var getMealBtn=document.getElementsByClassName("get-meal");
const mealContainer=document.getElementById("meal");

for(var i=0; i<getMealBtn.length; i++){
getMealBtn[i].addEventListener('click', () =>{
     fetch('https://www.themealdb.com/api/json/v1/1/random.php')
     .then(res => res.json())
     .then(res => {
         createMeal(res.meals[0])
     });
});}



function createMeal(meal){

    let mealIns=`${meal.strInstructions}`;
    mealIns="."+mealIns;
    var lines=mealIns.split(".");
    lines.pop();
    console.log(lines);
    var list= lines.join("<li>");

    mealContainer.innerHTML=`
        <div class="row">
            <div class="col-lg-5">
                 <img class="img-fluid  mealImg mt-4" src="${meal.strMealThumb}" alt="Meal Img"></img> 
                 <h6 class="mt-4 ml-3">Category : ${meal.strCategory}</h3> 
                 <h6 class="mt-2 ml-3 mb-5">Origin : ${meal.strArea}</h3> 
                                
            </div>
            <div class="col-lg-7 "> <h3 class="mt-3" >${meal.strMeal}</h3>
            <p class="text-secondary"><ul>${list}</ul></p></div>
        </div>
    `;
    
}