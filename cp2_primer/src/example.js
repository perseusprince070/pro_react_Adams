const myData = {
    name: "Bob",
    location: {
        city: "Paris",
        country: "France"
    },
    employment: {
        title: "Manager",
        dept: "Sales"
    }
}

function printDetails({ name, location: { city }, employment: { title }}) {
    console.log(`Name: ${name}, City: ${city}, Role: ${title}`)
}

printDetails(myData)