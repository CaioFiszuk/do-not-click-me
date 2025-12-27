export function urls() {
    const urls = [
        "https://en.wikipedia.org/wiki/Red_House_Painters",
        "https://en.wikipedia.org/wiki/Caruaru",
        "https://en.wikipedia.org/wiki/Prime_number",
        "https://en.wikipedia.org/wiki/A_Tale_of_Two_Cities",
        "https://en.wikipedia.org/wiki/Coptic_language",
        "https://en.wikipedia.org/wiki/Blue_jay",
        "https://en.wikipedia.org/wiki/Bossa_nova",
        "https://en.wikipedia.org/wiki/JavaScript",
        "https://en.wikipedia.org/wiki/Negative_harmony",
        "https://en.wikipedia.org/wiki/Circle_of_fifths",
        "https://en.wikipedia.org/wiki/Metaphone",
        "https://en.wikipedia.org/wiki/Soundex",
        "https://en.wikipedia.org/wiki/Not_to_Touch_the_Earth",
        "https://en.wikipedia.org/wiki/Novosibirsk",
        "https://en.wikipedia.org/wiki/Cyrillic_script",
        "https://en.wikipedia.org/wiki/Assassination_of_Abraham_Lincoln",
        "https://en.wikipedia.org/wiki/Nephites",

    ];

    return urls[Math.floor(Math.random() * urls.length)];
}