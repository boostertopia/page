let page = 1;
const page_text = {
    1: '<span class="heading">about me</span> 15 yo. who has too much time on her hands! programmer, writer + reader, artist, and drummer once in a blue moon. fun fact, also tybalt capulet\'s strongest soldier. i run @bigmanbonnie on twt + bsky. i\'m quite busy outside of social media so apologies if i randomly go inactive!',
    2: '<span class="heading">interests</span> x-men, watchmen, fnaf, the boys, invincible, hbo\'s oz, the walking dead, justice league international, romeo and juliet, tom hulce films, attack on titan, programming (python, js, java, php), horror media, puzzle games, withnail and i, the sims, enlightenment era philosophy, tower defense games, clicker heroes',
    3: '<span class="heading">literally me</span> adrian alexander veidt (watchmen), egon spengler (ghostbusters), dwight (the walking dead comics), zeke jaeger (attack on titan), randy meeks (scream), green oak (pokemon adventures), and some i can\'t think of rn. i don\'t seriously kin, these are just characters who i think embody part of me in one way or another',
    4: '<span class="heading">byf</span> i can sometimes be incoherent or impulsive when speaking, don\'t softblock me i will genuinely forget and refollow <br><span class="heading">dni</span> if you\'re on any subtwt that glamorizes mental illness and/or gore, or if basically all you post on main are bugs, vents, or drama. otherwise i block when needed'
};
document.getElementById("blogbuttons").addEventListener("click", handleClick);

let pageViews = localStorage.getItem('pageViews');
if (!pageViews) {
    pageViews = 0;
}
pageViews++;
let digits = pageViews.toString().length;
switch (parseInt(digits)) {
    case 1:
        pageViews = String(pageViews).padStart(4, 0)
        break;
    case 2:
        pageViews = String(pageViews).padStart(4, 0)
        break;
    case 3:
        pageViews = String(pageViews).padStart(4, 0)
        break;
    default:
        console.log("woah thats a lot of page views")
}
localStorage.setItem('pageViews', pageViews);
document.getElementById('star').innerHTML = `<br><br><span class="heading">${pageViews}</span> views`;

function toBack() {
    if (page == 1) {
        page = 1;
    } else {
        page -= 1;
    }
    document.getElementById("main-text").innerHTML = page_text[`${page}`];
}

function toNext() {
    if (page == 4) {
        page = 4;
    } else {
        page += 1;
    }
    document.getElementById("main-text").innerHTML = page_text[`${page}`];
}

function handleClick(event) {
    const clicked_element = event.target;
    let date = clicked_element.id;
    const path = `blogposts/${date}.json`;
    fetch(path)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('blog-text').innerHTML = data["text"];
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}