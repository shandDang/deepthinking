//두고두고 써먹으려고, 확장자가 js이기 때문에 script 태그는 필요없음.
function getRandom(max){
    //원하는 정수를 반환받기 위해서는 n의 값을 호출 시 결정하자
    //ex) getRandom(1001)을 넘기면 0~1000반환함
    // 구하려는 값보다 1더 크게 설정하자.
    
    //랜덤을 구하기만 헀음
    //호출 헀을때 어떤 값을 반환할지는 정해져있는게 아니다..
    return parseInt(Math.random()*(max+1));
    // parseInt(Math.random()*5);//4.xxxxxx

    
}