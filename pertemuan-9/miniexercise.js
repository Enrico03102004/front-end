// ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp;Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

//1. Cari index dari negara indonesia

let index = countries.findIndex(function (item) {
    return item === "indonesia"
})
console.log(index);

//2. dengan menggunakan filter tampilkan
//   semua negara yang berakhiran "sia"
const countriesWithMoreThanSevenChars = countries.filter(country => country.length > 7);
console.log(countriesWithMoreThanSevenChars);
// Output: ["Afghanistan", "Antigua &amp;Barbuda", "Argentina", "Azerbaijan", "Bangladesh", "Barbados", "Bosnia &amp; Herzegovina", "British Virgin Islands", "Burkina Faso", "Cambodia", "Cape Verde", "Cayman Islands", "Cote D Ivoire", "Cruise Ship", "Czech Republic", "Dominican Republic", "El Salvador", "Equatorial Guinea", "Falkland Islands", "Faroe Islands", "French Polynesia", "French West Indies", "Guatemala", "Guinea Bissau", "Honduras", "Hong Kong", "Indonesia", "Kazakhstan", "Kyrgyz Republic", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Mauritania", "Mauritius", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Papua New Guinea", "Philippines", "Puerto Rico", "Saint Pierre &amp; Miquelon", "Saudi Arabia", "Sierra Leone", "South Africa", "South Korea", "Sri Lanka", "Switzerland", "Trinidad &amp; Tobago", "Turkmenistan", "United Arab Emirates", "United Kingdom", "Uzbekistan", "Venezuela", "Virgin Islands (US)"]

//3. Tampilkan semua negara yang
//   memiliki jumlah karakter > 7 
const countriesWithMoreThanSevenChars = countries.filter(country => country.length > 7);
console.log(countriesWithMoreThanSevenChars);
// Output: ["Afghanistan", "Antigua &amp;Barbuda", "Argentina", "Azerbaijan", "Bangladesh", "Barbados", "Bosnia &amp; Herzegovina", "British Virgin Islands", "Burkina Faso", "Cambodia", "Cape Verde", "Cayman Islands", "Cote D Ivoire", "Cruise Ship", "Czech Republic", "Dominican Republic", "El Salvador", "Equatorial Guinea", "Falkland Islands", "Faroe Islands", "French Polynesia", "French West Indies", "Guatemala", "Guinea Bissau", "Honduras", "Hong Kong", "Indonesia", "Kazakhstan", "Kyrgyz Republic", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Mauritania", "Mauritius", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Papua New Guinea", "Philippines", "Puerto Rico", "Saint Pierre &amp; Miquelon", "Saudi Arabia", "Sierra Leone", "South Africa", "South Korea", "Sri Lanka", "Switzerland", "Trinidad &amp; Tobago", "Turkmenistan", "United Arab Emirates", "United Kingdom", "Uzbekistan", "Venezuela", "Virgin Islands (US)"]






let filterCountries1 = countries.filter(function (item) {
    return item === "indonesia"