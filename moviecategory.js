
// (문제 해결 상황 1) 선옥님 코드 본 후 수정 사항 : options 추가  
// (문제 해결 상황 2) 주소값에 id를 붙이고 menus에 class로 지정하면 상위 class 값 menu-line과 충돌 

// HTML 적용 코드 
// <div class = "menus">  
// <button id = "popular">인기영화</button> 
// <button id = "top_rated">추천영화</button> 
// <button id = "now_playing">최신영화</button>
// <script src= "moviecategory.js"></script>

//css 적용코드 
// #menus => .menus 로 변경
// 핸드폰 크기 조정 메뉴 버튼에 방향 세로 조정, flex-direction: column

const menus = document.querySelectorAll(".menus button");
console.log("mmm", menus);

menus.forEach(menu => menu.addEventListener("click",(event) => getMoviesCategory(event)));

const getMoviesCategory = async (event) => {
    const category = event.target.id;
    console.log("category", category);
    let url;
    if (category === 'popular' || category === 'top_rated' || category === 'now_playing') {
        url = new URL(`https://api.themoviedb.org/3/movie/${category}`);
        url.searchParams.append('language', 'ko-KR');
    } else {
        console.error('Invalid category');
        return;
    }

    try {
        const response = await fetch(url,options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("category", data);
        movieList = data.results;
        render();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};
