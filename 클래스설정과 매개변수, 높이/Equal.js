/*현실의 사각형 막대를 정의한다.*/
class Equal{
    //생성자(constructor)안에 변수(property)를 넣을것
    constructor(container, x, y, width, bg){
        this.container = container;
        this.div = document.createElement("div");
        this.x = x;
        this.y = y;
        this.width = width;
        this.bg = bg;

        //style 부여
        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px"
        this.div.style.width = this.width + "px";
        this.div.style.height = 0 + "px";
        this.div.style.background = bg;
        
        //부모에 부착
        this.container.appendChild(this.div);
        //rect를 생성하는 순간 move 메서드가 호출되어
        //new Equal()은 상태변화(움직임)를 자기혼자 무한루프를 돌아 실행하게 되는 것임.
        this.move();
    };

    move(){
        console.log("move");

        //그냥 높이만 편집해 보자.
        //랜덤으로 변수 받은 다음에 그냥 height변경하는 설정으로 무진장 돌려버리니까 되긴 되는데..
        //그렇게 치면 과연 초기 값 지정이 의미가 있는 것인가,,의미가 있다 분명히 있음.
        //이유를 찾아보자.. //***연산이 가능한 숫자 할당이 필요했을 뿐이었다. */
        //따라서 매개변수에 height를 넣지않고 그냥 초기 div style height에 0px를 할당해 주는 것만으로
        //계속 새로운 height값을 붙여서 넣는 것이 가능하게 되었다.
        this.div.style.height= Math.random()*500 + "px";
        setTimeout(() => {
            this.move();
        }, 100);
    };
}