// Path Params:

// Path params kaam tab karte hain jab aap sirf ek specific cheez ko target karna chahti hain, jaise kisi product ki ID.

// Example:
// URL: /product/123
// Is URL ke through backend ko bas yeh pata chalega ke ID 123 ka product dikhana hai. Agar aap URL me name ya price dena chahein, to wo possible nahi, kyunki path params sirf ek fixed pattern ke liye hote hain.

// Limitation of Path Params:
// Agar aap URL me kuch aur dene ki koshish karein (e.g., /product/name), to page empty hoga, kyunki backend sirf ID ko samajhta hai.



// ---

// Query Params:

// Query params ka faida yeh hai ke aap multiple filters ya data de sakti hain ek hi URL me.

// Example:
// URL: /product?name=black-shirt&price=1000
// Yahaan aap backend ko extra data de rahi hain ke:

// Product ka naam kya hai: black-shirt

// Price filter kya hai: 1000


// Why Query Params Help in Search?
// Jab user URL me query likhta hai, jaise:
// /product?name=black-shirt
// Toh backend query params ko parse karta hai aur relevant data filter karke user ko page dikhata hai. Is wajah se page kabhi empty nahi hota.



// ---

// Combined Use:

// Aapka example sahi highlight kar raha hai ke:

// 1. Path Params ko use karein agar sirf ek cheez (jaise product ID) pass karni ho.
// Example: /product/123

// Sirf us ID ka product dikhayega.



// 2. Query Params ko use karein agar multiple cheezen pass karni ho, jaise name, price, ya koi aur filter.
// Example: /product?name=black-shirt&price=1000

// Backend in params ko process karke filtered data dikhayega.





// ---

// Right Approach:

// Agar aap user ko ek dynamic search provide karna chahti hain (e.g., filter by name, price, etc.), to query params best option hain. Path params ka use sirf tab karein jab ek fixed ID ya specific cheez target karni ho.