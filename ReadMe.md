The project was deploeyd on Netlify: [https://chic-tiramisu-171449.netlify.app], just copy and paste on your browser to see the final result.
This project was made using bootstrap for a better responsiveness, HTML e CSS for customization.
The project contains only JavaScript since I don't know how to use ReactNative, Angular or others frameworks.
This project was made to apply for an internship vacancy for BASF.
The application consumes the Marvel API to show the character's Name, photo and description. Clicking on the button "Character Page" you can access the character description and see a bigger card.
There is a "Back" button to go back to the home page, clicking on the marvel logo or on the link on the navbar will result in the same.
There is also a "Search" button, where you can type the character name you want to find. It uses the "nameStartsWith" parameter so you cand find the character only typing a part of the name, instead of typing full name.
The "Search" entry can be activated clicking the button or pressing the "Enter" key on your keyboard.
On the homepage, if you scroll down, you will see a button named "Load More". Clicking on the button will result on the load of 3 more rows (12 cards). Since it's scroll infinite, there is a button to go back to the top of the page.
Note: The cards are made of 3 componets: thumbail (image of the character), title (character's name) and description (character description). Not all the characters have the full content, the character may not have an image or a description.