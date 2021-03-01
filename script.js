const firstName = document.getElementById("firstname"); 
const startingBid = document.getElementById("startingbid"); 
const education = document.getElementById("education"); 
const networth = document.getElementById("networth"); 
const skills = document.getElementsByClassName("skills"); 
const age = document.getElementsByName("radio");
const skills = document.getElementsByClassName("form-check-input"); 
const button = document.getElementById("submit");
const love_letter = document.getElementById("love_letter");

const calculate = () => {
    let name = firstName.value; 
    let first_price = Number(startingBid.value); 
    let letter = love_letter.value;
    if (name != "") { 
        price = getNewPrice(first_price, education);


        let person = {
            fullName: name,
            finalPrice: price,
            loveLetter: letter
        }
        document.getElementById("result").innerHTML = `The price for ${person.fullName} is ${person.finalPrice}. Your love letter is ${person.loveLetter}`;
    }
    else {
        alert("Name and starting bid cannot be empty");
    }
}

const getNewPrice = (price, criteria) => {
    return price * Number(criteria.value);
}


const getCheckboxValuesForLoop = (html_collection, price) => { 
	for (let i=0; i < html_collection.length; i++) {  
		if (html_collection[i].checked && Number.isInteger(Number(html_collection[i].value))) {
			price = price + Number(html_collection[i].value)
		}
		else if (html_collection[i].checked && !Number.isInteger(html_collection[i].value)) {
			price = price * Number(html_collection[i].value)
		}
	}
	return price;
}



const getRadioValue = (node_list, price) => {  
    node_list.forEach(item => {
        if (item.checked) {
            price = price * Number(item.value)
        }
    })
    return price;
}

button.addEventListener("click", calculate)