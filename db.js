
fetch('./data.json').then(
    res => res.json(),
    d = JSON.parse(res),
).then(
    
    console.log(d)
)