brazil = {
    live: 'Salvador',
    love: 'Bahia'
}

const text = 'Moro em ' + brazil.live + 'e amo ' + brazil.love
console.log(text)

// conect text in a easier way
const leanText = `Moro em ${brazil.live} e amo ${brazil.love}`
console.log(leanText)

const cats = 'Banjo'
            + `\n`
            + 'Haroldo'
            + `\n`
            + 'Florence'

console.log(cats)

const leanCats = `Banjo
Haroldo
Florence`

console.log(leanCats)