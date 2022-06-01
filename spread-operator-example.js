

//Example 4: We will use spread operator for merging objects.
// cars1 is a object which is containing
// the attributes Brand  & Color
const cars1 = {
    Brand : "Toyota",
    Color : "RED"
}
// cars2 is a object which is containing
// the attributes Brand, Color & Year
const cars2 = {
    Brand : "Nissan",
    Color : "BLUE",
    Year : 2004
}
const cars3 = {...cars1,...cars2};
console.log(cars3);