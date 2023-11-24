var flag;
var imageBox;
var imagePos;
var puzzleBoard;
var clickEvent;
var checkSteps;


function valueInitialize() {

    clickEvent = true;
    checkSteps = false;
    flag = [];
    imageBox = [];
    imagePos = [];
    puzzleBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    flag[0] = false;
    flag[1] = false;
    flag[2] = false;
    flag[3] = false;
    flag[4] = false;
    flag[5] = false;
    flag[6] = false;
    flag[7] = false;
    flag[8] = false;
    flag[9] = true;

    imagePos[0] = 1;
    imagePos[1] = 2;
    imagePos[2] = 3;
    imagePos[3] = 4;
    imagePos[4] = 5;
    imagePos[5] = 6;
    imagePos[6] = 7;
    imagePos[7] = 8;
    imagePos[8] = 9;


    imageBox[0] = "";
    imageBox[1] = document.getElementById('img1');
    imageBox[2] = document.getElementById('img2');
    imageBox[3] = document.getElementById('img3');
    imageBox[4] = document.getElementById('img4');
    imageBox[5] = document.getElementById('img5');
    imageBox[6] = document.getElementById('img6');
    imageBox[7] = document.getElementById('img7');
    imageBox[8] = document.getElementById('img8');
    imageBox[9] = document.getElementById('img9');
}

function Random() {

    flag[0] = false;
    flag[1] = false;
    flag[2] = false;
    flag[3] = false;
    flag[4] = false;
    flag[5] = false;
    flag[6] = false;
    flag[7] = false;
    flag[8] = false;
    flag[9] = false;

    var i = 0, ranNum = 0;
    var inversions = 1;
    puzzleBoard = [];
    document.getElementById("txtPS").innerHTML = "";

    while (inversions % 2 == 1) {

        i = 0; ranNum = 0;

        imagePos[0] = 0;
        imagePos[1] = 0;
        imagePos[2] = 0;
        imagePos[3] = 0;
        imagePos[4] = 0;
        imagePos[5] = 0;
        imagePos[6] = 0;
        imagePos[7] = 0;
        imagePos[8] = 0;

        do {
            do {

                ranNum = Math.floor((Math.random() * 9) + 1);


            } while (imagePos.indexOf(ranNum) != -1);

            imagePos[i++] = ranNum;
            puzzleBoard[ranNum - 1] = i;

        } while (imagePos.indexOf(0) != -1);


        inversions = 0;

        for (var k = 0; k < puzzleBoard.length; k++) {
            for (var j = k + 1; j < puzzleBoard.length; j++) {
                if (puzzleBoard[k] != 9 && puzzleBoard[j] != 9) {
                    if (puzzleBoard[k] > puzzleBoard[j]) {
                        inversions++;
                    }
                }
            }
        }
    }

    imageBox[1].classList.remove(imageBox[1].classList[1]);
    imageBox[2].classList.remove(imageBox[2].classList[1]);
    imageBox[3].classList.remove(imageBox[3].classList[1]);
    imageBox[4].classList.remove(imageBox[4].classList[1]);
    imageBox[5].classList.remove(imageBox[5].classList[1]);
    imageBox[6].classList.remove(imageBox[6].classList[1]);
    imageBox[7].classList.remove(imageBox[7].classList[1]);
    imageBox[8].classList.remove(imageBox[8].classList[1]);
    imageBox[9].classList.remove(imageBox[9].classList[1]);

    imageBox[1].className += " box" + imagePos[0];
    imageBox[2].className += " box" + imagePos[1];
    imageBox[3].className += " box" + imagePos[2];
    imageBox[4].className += " box" + imagePos[3];
    imageBox[5].className += " box" + imagePos[4];
    imageBox[6].className += " box" + imagePos[5];
    imageBox[7].className += " box" + imagePos[6];
    imageBox[8].className += " box" + imagePos[7];
    imageBox[9].className += " box" + imagePos[8];

    flag[imagePos[imagePos.length - 1]] = true;

}


function slide(Id) {
    //	if (clickEvent) {
    //alert(Id);
    if (document.getElementById(Id).classList[1] == 'box1') {

        if (flag[2] == true) {

            searchClass(Id, 2);

        }
        else if (flag[4] == true) {

            searchClass(Id, 4);

        }


    }
    else if (document.getElementById(Id).classList[1] == 'box2') {

        if (flag[1] == true) {

            searchClass(Id, 1);

        }
        else if (flag[3] == true) {

            searchClass(Id, 3);

        }
        else if (flag[5] == true) {

            searchClass(Id, 5);

        }

    }
    else if (document.getElementById(Id).classList[1] == 'box3') {

        if (flag[2] == true) {

            searchClass(Id, 2);

        }
        else if (flag[6] == true) {

            searchClass(Id, 6);

        }


    }
    else if (document.getElementById(Id).classList[1] == 'box4') {

        if (flag[1] == true) {

            searchClass(Id, 1);

        }
        else if (flag[5] == true) {

            searchClass(Id, 5);

        }
        else if (flag[7] == true) {

            searchClass(Id, 7);

        }


    }
    else if (document.getElementById(Id).classList[1] == 'box5') {

        if (flag[2] == true) {

            searchClass(Id, 2);

        }
        else if (flag[4] == true) {

            searchClass(Id, 4);

        }
        else if (flag[6] == true) {

            searchClass(Id, 6);

        }
        else if (flag[8] == true) {

            searchClass(Id, 8);

        }


    }
    else if (document.getElementById(Id).classList[1] == 'box6') {

        if (flag[3] == true) {

            searchClass(Id, 3);

        }
        else if (flag[5] == true) {

            searchClass(Id, 5);

        }
        else if (flag[9] == true) {

            searchClass(Id, 9);

        }


    }
    else if (document.getElementById(Id).classList[1] == 'box7') {

        if (flag[4] == true) {

            searchClass(Id, 4);

        }
        else if (flag[8] == true) {

            searchClass(Id, 8);

        }

    }
    else if (document.getElementById(Id).classList[1] == 'box8') {

        if (flag[5] == true) {

            searchClass(Id, 5);

        }
        else if (flag[7] == true) {

            searchClass(Id, 7);

        }
        else if (flag[9] == true) {

            searchClass(Id, 9);

        }


    }
    else if (document.getElementById(Id).classList[1] == 'box9') {

        if (flag[6] == true) {

            searchClass(Id, 6);

        }
        else if (flag[8] == true) {

            searchClass(Id, 8);

        }

    }
    //	}
}
function searchClass(Id, boxNo) {

    Id = Id[Id.length - 1];

    imageBox[0] = " " + imageBox[Id].classList[1];
    imageBox[Id].classList.remove(imageBox[Id].classList[1]);

    var idFlag = imageBox[0];
    idFlag = imageBox[0];
    idFlag = idFlag[idFlag.length - 1];

    var temp = 0;
    //alert(Id-1 + "" +boxNo + " " + imagePos[Number(Id)-1] +" "+ imagePos[imagePos.indexOf(Number(boxNo))]);
    var index = imagePos.indexOf(Number(boxNo));
    temp = imagePos[Number(Id) - 1];
    //	alert(imagePos);
    imagePos[Number(Id) - 1] = imagePos[index];
    //	alert(imagePos);
    imagePos[index] = temp;
    //	alert(imagePos);
    imageBox[Id].className += " " + imageBox[9].classList[1];
    imageBox[9].classList.remove(imageBox[Id].classList[1]);
    imageBox[9].className += " " + imageBox[0];

    var index1 = puzzleBoard.indexOf(9);
    var index2 = puzzleBoard.indexOf(Number(Id));
    // console.log(index);
    // console.log(Number(boxNo));
    temp = puzzleBoard[index1];
    //	console.log(temp);
    puzzleBoard[index1] = puzzleBoard[index2];
    //	alert(imagePos);
    puzzleBoard[index2] = temp;

    flag[boxNo] = false;
    flag[idFlag] = true;

}
function btnEnable() {
    for (var i = 0; i < 3; i++) {
        document.getElementsByTagName("button")[i].disabled = false;
    }
}
function btnDisable() {
    for (var i = 0; i < 3; i++) {
        document.getElementsByTagName("button")[i].disabled = true;
    }
}
function ChangeImage() {
    //console.log(document.getElementById("image-file").value);
    //document.getElementsByTagName("img").src = ""
    var fReader = new FileReader();
    fReader.readAsDataURL(document.getElementById("image-file").files[0]);
    fReader.onloadend = function (event) {
        var img = document.getElementsByTagName("img");
        for (var i = 0; i < img.length; i++) {
            img[i].src = event.target.result;
        }
        //console.log(.path);
    }
}