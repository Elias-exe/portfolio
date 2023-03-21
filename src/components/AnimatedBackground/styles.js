import styled from "styled-components";

export const Container = styled.div`

@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

.background {
    position: fixed;
    z-index: -100;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #000000;
    overflow: hidden;
}

.background span {
    width: 1vmin;
    height: 1vmin;
    border-radius: 1vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 8;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}


.background span:nth-child(0) {
    color: #ffffff;
    top: 57%;
    opacity: 0.8;
    left: 23%;
    animation-duration: 56s;
    animation-delay: -28s;
    transform-origin: 14vw 9vh;
    box-shadow: -2vmin 0 0.4936660905726338vmin currentColor;
}
.background span:nth-child(1) {
    color: #ffffff;
    top: 51%;
    opacity: 0.8;
    left: 44%;
    animation-duration: 15s;
    animation-delay: -33s;
    transform-origin: 9vw -11vh;
    box-shadow: 2vmin 0 0.7605432759328128vmin currentColor;
}
.background span:nth-child(2) {
    color: #ffffff;
    top: 90%;
    opacity: 0.8;
    left: 65%;
    animation-duration: 167s;
    animation-delay: -410s;
    transform-origin: 15vw 10vh;
    box-shadow: 2vmin 0 1.001876193972913vmin currentColor;
}
.background span:nth-child(3) {
    color: #ffffff;
    top: 92%;
    opacity: 0.8;
    left: 79%;
    animation-duration: 324s;
    animation-delay: -32s;
    transform-origin: -1vw -20vh;
    box-shadow: 2vmin 0 1.0934968857922733vmin currentColor;
}
.background span:nth-child(4) {
    color: #ffffff;
    top: 51%;
    opacity: 0.8;
    left: 73%;
    animation-duration: 295s;
    animation-delay: -302s;
    transform-origin: -16vw 20vh;
    box-shadow: -2vmin 0 0.32388518478597406vmin currentColor;
}
.background span:nth-child(5) {
    color: #ffffff;
    top: 99%;
    opacity: 0.8;
    left: 2%;
    animation-duration: 24s;
    animation-delay: -222s;
    transform-origin: 18vw 2vh;
    box-shadow: 2vmin 0 0.7240900006095652vmin currentColor;
}
.background span:nth-child(6) {
    color: #ffffff;
    top: 67%;
    opacity: 0.8;
    left: 80%;
    animation-duration: 288s;
    animation-delay: -380s;
    transform-origin: 21vw 13vh;
    box-shadow: -2vmin 0 0.7502894006324974vmin currentColor;
}
.background span:nth-child(7) {
    color: #ffffff;
    top: 88%;
    opacity: 0.8;
    left: 54%;
    animation-duration: 215s;
    animation-delay: -257s;
    transform-origin: 13vw -12vh;
    box-shadow: -2vmin 0 0.8963512360954244vmin currentColor;
}
.background span:nth-child(8) {
    color: #ffffff;
    top: 78%;
    opacity: 0.8;
    left: 33%;
    animation-duration: 154s;
    animation-delay: -340s;
    transform-origin: 10vw 19vh;
    box-shadow: -2vmin 0 0.9564194502993923vmin currentColor;
}
.background span:nth-child(9) {
    color: #ffffff;
    top: 67%;
    opacity: 0.8;
    left: 78%;
    animation-duration: 277s;
    animation-delay: -49s;
    transform-origin: 14vw 7vh;
    box-shadow: -2vmin 0 0.534230837810953vmin currentColor;
}
.background span:nth-child(10) {
    color: #ffffff;
    top: 50%;
    opacity: 0.8;
    left: 93%;
    animation-duration: 146s;
    animation-delay: -115s;
    transform-origin: -8vw -4vh;
    box-shadow: 2vmin 0 0.3328272303620692vmin currentColor;
}
.background span:nth-child(11) {
    color: #ffffff;
    top: 46%;
    opacity: 0.8;
    left: 87%;
    animation-duration: 91s;
    animation-delay: -348s;
    transform-origin: 22vw 16vh;
    box-shadow: -2vmin 0 1.100550163495236vmin currentColor;
}
.background span:nth-child(12) {
    color: #ffffff;
    top: 29%;
    opacity: 0.8;
    left: 5%;
    animation-duration: 72s;
    animation-delay: -237s;
    transform-origin: 9vw -23vh;
    box-shadow: -2vmin 0 0.5802350040557973vmin currentColor;
}
.background span:nth-child(13) {
    color: #ffffff;
    top: 22%;
    opacity: 0.8;
    left: 57%;
    animation-duration: 423s;
    animation-delay: -51s;
    transform-origin: -24vw 12vh;
    box-shadow: 2vmin 0 0.3733509365960732vmin currentColor;
}
.background span:nth-child(14) {
    color: #ffffff;
    top: 20%;
    opacity: 0.8;
    left: 57%;
    animation-duration: 61s;
    animation-delay: -406s;
    transform-origin: 11vw -16vh;
    box-shadow: -2vmin 0 0.4940533216112528vmin currentColor;
}
.background span:nth-child(15) {
    color: #ffffff;
    top: 26%;
    opacity: 0.8;
    left: 79%;
    animation-duration: 258s;
    animation-delay: -77s;
    transform-origin: -14vw -10vh;
    box-shadow: 2vmin 0 1.139599870902297vmin currentColor;
}
.background span:nth-child(16) {
    color: #ffffff;
    top: 34%;
    opacity: 0.8;
    left: 31%;
    animation-duration: 269s;
    animation-delay: -345s;
    transform-origin: -3vw 13vh;
    box-shadow: -2vmin 0 0.502851835210903vmin currentColor;
}
.background span:nth-child(17) {
    color: #ffffff;
    top: 95%;
    opacity: 0.8;
    left: 55%;
    animation-duration: 418s;
    animation-delay: -284s;
    transform-origin: -1vw 15vh;
    box-shadow: -2vmin 0 0.27719947304373393vmin currentColor;
}
.background span:nth-child(18) {
    color: #ffffff;
    top: 74%;
    opacity: 0.8;
    left: 79%;
    animation-duration: 111s;
    animation-delay: -54s;
    transform-origin: -10vw -3vh;
    box-shadow: 2vmin 0 0.9914873377343545vmin currentColor;
}
.background span:nth-child(19) {
    color: #ffffff;
    top: 64%;
    opacity: 0.8;
    left: 42%;
    animation-duration: 12s;
    animation-delay: -301s;
    transform-origin: -3vw -23vh;
    box-shadow: 2vmin 0 0.7850370264279367vmin currentColor;
}
.background span:nth-child(20) {
    color: #ffffff;
    top: 37%;
    opacity: 0.8;
    left: 7%;
    animation-duration: 313s;
    animation-delay: -160s;
    transform-origin: -16vw -18vh;
    box-shadow: 2vmin 0 0.4219883829281734vmin currentColor;
}
.background span:nth-child(21) {
    color: #ffffff;
    top: 88%;
    opacity: 0.8;
    left: 32%;
    animation-duration: 163s;
    animation-delay: -323s;
    transform-origin: -16vw -10vh;
    box-shadow: -2vmin 0 0.6652815387258759vmin currentColor;
}
.background span:nth-child(22) {
    color: #ffffff;
    top: 74%;
    opacity: 0.8;
    left: 65%;
    animation-duration: 244s;
    animation-delay: -59s;
    transform-origin: 12vw -2vh;
    box-shadow: 2vmin 0 1.110801824322004vmin currentColor;
}
.background span:nth-child(23) {
    color: #ffffff;
    top: 37%;
    opacity: 0.8;
    left: 64%;
    animation-duration: 381s;
    animation-delay: -309s;
    transform-origin: -20vw -13vh;
    box-shadow: -2vmin 0 0.9124016204157661vmin currentColor;
}
.background span:nth-child(24) {
    color: #ffffff;
    top: 12%;
    opacity: 0.8;
    left: 69%;
    animation-duration: 157s;
    animation-delay: -184s;
    transform-origin: 22vw 21vh;
    box-shadow: 2vmin 0 0.49403240820630145vmin currentColor;
}
.background span:nth-child(25) {
    color: #ffffff;
    top: 44%;
    opacity: 0.8;
    left: 88%;
    animation-duration: 86s;
    animation-delay: -147s;
    transform-origin: -13vw -9vh;
    box-shadow: 2vmin 0 0.8742290654487128vmin currentColor;
}
.background span:nth-child(26) {
    color: #ffffff;
    top: 77%;
    opacity: 0.8;
    left: 85%;
    animation-duration: 362s;
    animation-delay: -307s;
    transform-origin: 14vw -21vh;
    box-shadow: -2vmin 0 0.7501520323385353vmin currentColor;
}
.background span:nth-child(27) {
    color: #ffffff;
    top: 43%;
    opacity: 0.8;
    left: 39%;
    animation-duration: 9s;
    animation-delay: -262s;
    transform-origin: -4vw -18vh;
    box-shadow: -2vmin 0 0.6768567804830814vmin currentColor;
}
.background span:nth-child(28) {
    color: #ffffff;
    top: 9%;
    opacity: 0.8;
    left: 89%;
    animation-duration: 334s;
    animation-delay: -117s;
    transform-origin: -16vw 8vh;
    box-shadow: -2vmin 0 0.7320101214056105vmin currentColor;
}
.background span:nth-child(29) {
    color: #ffffff;
    top: 21%;
    opacity: 0.8;
    left: 68%;
    animation-duration: 269s;
    animation-delay: -295s;
    transform-origin: -13vw -1vh;
    box-shadow: -2vmin 0 1.0559158937811215vmin currentColor;
}
.background span:nth-child(30) {
    color: #ffffff;
    top: 92%;
    opacity: 0.8;
    left: 53%;
    animation-duration: 132s;
    animation-delay: -5s;
    transform-origin: 25vw -6vh;
    box-shadow: 2vmin 0 0.6472538673387436vmin currentColor;
}
.background span:nth-child(31) {
    color: #ffffff;
    top: 37%;
    opacity: 0.8;
    left: 13%;
    animation-duration: 301s;
    animation-delay: -385s;
    transform-origin: 8vw 21vh;
    box-shadow: -2vmin 0 0.7454031939069559vmin currentColor;
}
.background span:nth-child(32) {
    color: #ffffff;
    top: 21%;
    opacity: 0.8;
    left: 12%;
    animation-duration: 367s;
    animation-delay: -245s;
    transform-origin: -23vw -7vh;
    box-shadow: -2vmin 0 0.37125447529139vmin currentColor;
}
.background span:nth-child(33) {
    color: #ffffff;
    top: 74%;
    opacity: 0.8;
    left: 56%;
    animation-duration: 405s;
    animation-delay: -283s;
    transform-origin: 7vw -2vh;
    box-shadow: -2vmin 0 0.8634684441862193vmin currentColor;
}
.background span:nth-child(34) {
    color: #ffffff;
    top: 42%;
    opacity: 0.8;
    left: 97%;
    animation-duration: 378s;
    animation-delay: -173s;
    transform-origin: -13vw -11vh;
    box-shadow: 2vmin 0 1.1421258554806342vmin currentColor;
}
.background span:nth-child(35) {
    color: #ffffff;
    top: 29%;
    opacity: 0.8;
    left: 33%;
    animation-duration: 390s;
    animation-delay: -383s;
    transform-origin: -12vw -19vh;
    box-shadow: 2vmin 0 0.6847782501985598vmin currentColor;
}
.background span:nth-child(36) {
    color: #ffffff;
    top: 54%;
    opacity: 0.8;
    left: 49%;
    animation-duration: 287s;
    animation-delay: -117s;
    transform-origin: 16vw 17vh;
    box-shadow: 2vmin 0 0.7441133742115691vmin currentColor;
}
.background span:nth-child(37) {
    color: #ffffff;
    top: 73%;
    opacity: 0.8;
    left: 4%;
    animation-duration: 265s;
    animation-delay: -420s;
    transform-origin: -8vw 13vh;
    box-shadow: 2vmin 0 0.3002282268301866vmin currentColor;
}
.background span:nth-child(38) {
    color: #ffffff;
    top: 50%;
    opacity: 0.8;
    left: 20%;
    animation-duration: 37s;
    animation-delay: -149s;
    transform-origin: -13vw 21vh;
    box-shadow: 2vmin 0 0.398695225922141vmin currentColor;
}
.background span:nth-child(39) {
    color: #ffffff;
    top: 34%;
    opacity: 0.8;
    left: 72%;
    animation-duration: 225s;
    animation-delay: -120s;
    transform-origin: 11vw -22vh;
    box-shadow: 2vmin 0 0.4513062890947863vmin currentColor;
}
.background span:nth-child(40) {
    color: #ffffff;
    top: 32%;
    opacity: 0.8;
    left: 77%;
    animation-duration: 316s;
    animation-delay: -158s;
    transform-origin: -20vw 16vh;
    box-shadow: -2vmin 0 0.5399112176501382vmin currentColor;
}
.background span:nth-child(41) {
    color: #ffffff;
    top: 91%;
    opacity: 0.8;
    left: 84%;
    animation-duration: 229s;
    animation-delay: -347s;
    transform-origin: -10vw 23vh;
    box-shadow: -2vmin 0 0.5266592466487217vmin currentColor;
}
.background span:nth-child(42) {
    color: #ffffff;
    top: 26%;
    opacity: 0.8;
    left: 26%;
    animation-duration: 92s;
    animation-delay: -332s;
    transform-origin: 7vw -12vh;
    box-shadow: 2vmin 0 0.44777619063803686vmin currentColor;
}
.background span:nth-child(43) {
    color: #ffffff;
    top: 31%;
    opacity: 0.8;
    left: 21%;
    animation-duration: 216s;
    animation-delay: -94s;
    transform-origin: -1vw 23vh;
    box-shadow: -2vmin 0 0.8542995562083611vmin currentColor;
}
.background span:nth-child(44) {
    color: #ffffff;
    top: 93%;
    opacity: 0.8;
    left: 86%;
    animation-duration: 345s;
    animation-delay: -96s;
    transform-origin: -16vw -19vh;
    box-shadow: -2vmin 0 0.3061721597260447vmin currentColor;
}
.background span:nth-child(45) {
    color: #ffffff;
    top: 54%;
    opacity: 0.8;
    left: 100%;
    animation-duration: 332s;
    animation-delay: -2s;
    transform-origin: -1vw 7vh;
    box-shadow: -2vmin 0 0.7150123865333329vmin currentColor;
}
.background span:nth-child(46) {
    color: #ffffff;
    top: 50%;
    opacity: 0.8;
    left: 46%;
    animation-duration: 415s;
    animation-delay: -164s;
    transform-origin: -5vw 10vh;
    box-shadow: -2vmin 0 0.9946220411958504vmin currentColor;
}
.background span:nth-child(47) {
    color: #ffffff;
    top: 8%;
    opacity: 0.8;
    left: 84%;
    animation-duration: 151s;
    animation-delay: -96s;
    transform-origin: -2vw 21vh;
    box-shadow: 2vmin 0 0.5386280845110172vmin currentColor;
}
.background span:nth-child(48) {
    color: #ffffff;
    top: 42%;
    opacity: 0.8;
    left: 68%;
    animation-duration: 357s;
    animation-delay: -209s;
    transform-origin: 25vw -13vh;
    box-shadow: -2vmin 0 1.0252310071173798vmin currentColor;
}
.background span:nth-child(49) {
    color: #ffffff;
    top: 53%;
    opacity: 0.8;
    left: 34%;
    animation-duration: 23s;
    animation-delay: -259s;
    transform-origin: 12vw 7vh;
    box-shadow: 2vmin 0 0.7309819907801101vmin currentColor;
}
`;
