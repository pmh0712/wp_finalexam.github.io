let peg1=document.getElementById('peg1');
let peg2=document.getElementById('peg2');
let peg3=document.getElementById('peg3');
let top1=300;                        //top은 각 기둥에 가장 위에 있는 원반의 top값을 의미합니다.
let top2=450;
let top3=450;
let len1=peg1.children.length;       //각 기둥에 있는 원반의 수를 의미합니다.
let len2=peg2.children.length;
let len3=peg3.children.length;
let text=document.getElementById('clear');
let link=document.getElementById('nextlevel');
let goal=false;    //목표 달성했으면 true로 바뀜

function select1(){
    if (goal){}   //성공하면 클릭해도 반응하지 않도록 한다.
    else if(peg2.classList.contains('selected')){move_2To1();}  //2번째 기둥이 선택되었을 때만 발동 2번 기둥에서 1번 기둥으로 원반을 옮긴다.
    else if(peg3.classList.contains('selected')){move_3To1();} //3번째 기둥이 선택되었을 때만 발동
    else{
        if (len1>1)      //기둥에 원반이 있을 때만 적용된다.
        {
            if (peg1.classList.contains('selected')){        //한번 눌리면 원반이 들리며 selected가 생기고 한번 더 눌리면 원반을 제자리에 내려놓고 selected를 없앤다.
                peg1.children[len1-1].style.cssText=`top: ${top1}px`;
                peg1.classList.remove('selected');
            }

            else{
                peg1.classList.add('selected');
                peg1.children[len1-1].style.cssText='top: 30px';     //클릭하면 원반이 뜬다.
            }
        }
}

    
}
//아래엔 같은 규칙이 적용된다!

function select2(){
    if (goal){}   
    else if(peg1.classList.contains('selected')){move_1To2();}
    else if(peg3.classList.contains('selected')){move_3To2();}
    else{
        if (len2>1)
        {
            if (peg2.classList.contains('selected')){
                peg2.children[len2-1].style.cssText=`top: ${top2}px`;
                peg2.classList.remove('selected');
            }
            else{
                peg2.classList.add('selected');
                peg2.children[len2-1].style.cssText='top: 30px';
            }
        }   
    }
    
}

function select3(){
    if (goal){}
    else if(peg1.classList.contains('selected')){move_1To3();}
    else if(peg2.classList.contains('selected')){move_2To3();}
    else
    {
        if (len3>1)
        {
            if (peg3.classList.contains('selected')){
                peg3.children[len3-1].style.cssText=`top: ${top3}px`;
                peg3.classList.remove('selected');
            }
            else{
                peg3.classList.add('selected');
                peg3.children[len3-1].style.cssText='top: 30px';
            }
        }
    }
}

function move_1To2(){
    if(peg1.children[len1-1].getAttribute('size')<peg2.children[len2-1].getAttribute('size')){
        peg2.appendChild(peg1.children[len1-1]);

        len1=len1-1;    //원반을 하나 뺌으로 1을 빼준다.
        len2=len2+1;    //원반이 하나 추가됨으로 1을 더한다.

        top1=top1+50;   //원반이 빠지므로 원반 높이(50px)만큼 top값 증가
        top2=top2-50;   //원반이 추가되므로 원반 높이(50px)만큼 top값 감소
   
        peg2.children[len2-1].style.cssText=`top: ${top2}px`;
        peg1.classList.remove('selected');    //이동이 끝나면 selected를 없애 충돌을 없앤다.
    }
    if (peg3.children.length>3){              //3번째 기둥에 모두 원반이 모이면 goal이 true로 바뀜
        text.style.cssText='display: block';
        link.style.cssText='display: block';
        goal=true;
    }
}

function move_2To1(){
    if(peg2.children[len2-1].getAttribute('size')<peg1.children[len1-1].getAttribute('size')){
        peg1.appendChild(peg2.children[len2-1]);

        len2=len2-1;
        len1=len1+1;

        top2=top2+50;
        top1=top1-50;
    
        peg1.children[len1-1].style.cssText=`top: ${top1}px`;
        peg2.classList.remove('selected');
    }
    if (peg3.children.length>3){         
        text.style.cssText='display: block';
        link.style.cssText='display: block';
        goal=true;
    }
}

function move_1To3(){
    if(peg1.children[len1-1].getAttribute('size')<peg3.children[len3-1].getAttribute('size')){
        peg3.appendChild(peg1.children[len1-1]);

        len1=len1-1;
        len3=len3+1;

        top1=top1+50;
        top3=top3-50;

        peg3.children[len3-1].style.cssText=`top: ${top3}px`;
        peg1.classList.remove('selected');
    }
    if (peg3.children.length>3){         
        text.style.cssText='display: block';
        link.style.cssText='display: block';
        goal=true;
    }
}

function move_3To1(){
    if(peg3.children[len3-1].getAttribute('size')<peg1.children[len1-1].getAttribute('size')){
        peg1.appendChild(peg3.children[len3-1]);

        len3=len3-1;
        len1=len1+1;

        top3=top3+50;
        top1=top1-50;

        peg1.children[len1-1].style.cssText=`top: ${top1}px`;
        peg3.classList.remove('selected');
    }
    if (peg3.children.length>3){         
        text.style.cssText='display: block';
        link.style.cssText='display: block';
        goal=true;
    }
}

function move_2To3(){
    if(peg2.children[len2-1].getAttribute('size')<peg3.children[len3-1].getAttribute('size')){
        peg3.appendChild(peg2.children[len2-1]);

        len2=len2-1;
        len3=len3+1;

        top2=top2+50;
        top3=top3-50;

        peg3.children[len3-1].style.cssText=`top: ${top3}px`;
        peg2.classList.remove('selected');
    }
    if (peg3.children.length>3){         
        text.style.cssText='display: block';
        link.style.cssText='display: block';
        goal=true;
    }
}

function move_3To2(){
    if(peg3.children[len3-1].getAttribute('size')<peg2.children[len2-1].getAttribute('size')){
        peg2.appendChild(peg3.children[len3-1]);

        len3=len3-1;
        len2=len2+1;

        top3=top3+50;
        top2=top2-50;

        peg2.children[len2-1].style.cssText=`top: ${top2}px`;
        peg3.classList.remove('selected');
    }
    if (peg3.children.length>3){         
        text.style.cssText='display: block';
        link.style.cssText='display: block';
        goal=true;
    }
}