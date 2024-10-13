
let dictionary = JSON.parse(JSON.stringify(dict));
//dictionary = [["sarel", "소녀"], ["adir", "새로운"], ["miym", "어머니"]];
alphabet = ["n", "m", "a", "s", "z", "e", "f", "p", "h", "k", "ë", "t", "v", "d", "i", "g", "ÿ", "y", "o", "r", "l", "w", "x", "c", "j", "u"]
dictionary.sort((a, b) => {
    var i = 0
    while(i < a[0].length || i < b[0].length) {
        if (alphabet.indexOf(a[0].slice(i, i+1)) == alphabet.indexOf(b[0].slice(i, i+1))) {
            i++;
        } else {
            return alphabet.indexOf(a[0].slice(i,i+1)) - alphabet.indexOf(b[0].slice(i,i+1))
        }
    }
    
}); // a, n, m, s... 순서로 정렬


    
const p = document.querySelector(".dictionary");


for (let i = 0; i < Object.keys(dictionary).length; i++) {
    if (i > 0) {
        if (dictionary[i][0].slice(0,1) !== dictionary[i-1][0].slice(0,1)) {
            var marker = document.createElement("h2");
            marker.className = "marker dict";
            marker.innerHTML = dictionary[i][0].slice(0,1) + "</br></br>";
        };
    } else if (i == 0) {
        var marker = document.createElement("h2");
        marker.className = "marker dict";
        marker.innerHTML = "n" + "</br></br>";
    }
    

    var chword = document.createElement("p");
    chword.innerHTML = dictionary[i][0] + " ";
    chword.className = "CH dict";

    meaning = document.createElement("p");
    meaning.innerHTML = dictionary[i][1] + "</br></br>";
    meaning.className = "comment dict";
 
    p.append(chword, meaning, marker);
}
