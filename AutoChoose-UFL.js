//@COPYRIGHT: Jason Ho
//Created Time: Monday, July 10, 
//Version: Version 1.1

//Usage: 
//Use Google Chrome and enter course select page. The course select page is the page
//in which all course rows are showed and you should not open any of the course rows.
//Then open Chrome devtools and paste the code into the console.

//When the script adds any of the course for you, it will stop and redirect to your course schedule.


//Code:
// The number is the position of the course. The first course is 0. 
// And you need check the 'Sections with no Open seats' in the course 
// filter to make sure the course position will not change.

// 使用指南
// 使用谷歌浏览器在One.ufl.edu进入到选课界面，记得要在filter里勾选'Sections with no Open seats'选项。
// 找到想选的课在第几个，把courseArr数组里的数字改成你想选的课的位置，从0开始数起。
// 进入console,复制修改后的代码然后按回车，便可以自动刷课。
// 测试一天刷近4000次会被踢下,再次登陆即可。


//修改的地方在这里 Modify code here==================
var courseArr = [1, 2, 3];
//================================


//以下代码都不需要修改 Don't modify code below!
var count = 0;
function btnClick() {
    document.getElementsByClassName("modal-confirm-btn")[0].click();
}
function chooseCourse() {
    if (count >= courseArr.length - 1)
        count = 0;
    var location = courseArr[count];
    document.getElementsByClassName("course-code")[location].click();
    if (document.getElementsByClassName("section-add-section")[0] !== undefined) {
        document.getElementsByClassName("section-add-section")[0].click();
        setTimeout(btnClick, 3000);
        setTimeout(btnClick, 4000);
        setTimeout(btnClick, 4500);
    }
    else {
        setTimeout(function () {
                document.getElementsByClassName("md-ink-ripple")[7].click();
            }, 1000
        );

        setTimeout(function () {
                document.getElementsByClassName("filter-sidebar-search-button")[0].click();
            }, 2000
        );

        setTimeout(function () {
                console.log("Don't find any open seat. Refreshing again...");
            }, 3000
        )
    }
    count++;
}

setInterval(chooseCourse, 10000);
	
