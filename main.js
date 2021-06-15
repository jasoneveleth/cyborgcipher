const color2hex =  {
    'b': '#20bdfc',
    'g': '#6cd433',
    'r': '#fc0d1b'
}

function yeet() {
    const input = prompt("Input text")
    const list_of_words = input.split(" ")

    const output = document.getElementById('output')
    output.innerHTML = ""
    for (let i = 0; i < list_of_words.length; i++) {
        newhtml = "<p>"
        converted_list = []
        word2cipher(list_of_words[i], "", converted_list)

        for (let j = 0; j < converted_list.length; j++) {
            color_num = converted_list[j]
            color = color2hex[color_num[0]]
            num = color_num[1]
            newhtml += "<span style=\"color: " + color + "\">" + num.toString() + "</span> "
        }

        newhtml += "</p>"
        output.innerHTML += newhtml
    }
}

function word2cipher(prefix, suffix, converted_list) {
    console.log("prefix: " + prefix + ", suffix: " + suffix)
    if (prefix === "") {
        return
    } else if (prefix in cipher) {
        console.log(converted_list)
        converted_list.push(cipher[prefix])
        console.log(converted_list)
        word2cipher(suffix, "", converted_list)
    } else {
        word2cipher(prefix.slice(0,-1), prefix.slice(-1) + suffix, converted_list)
    }
}
