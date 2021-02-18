auto.waitFor();
device.wakeUpIfNeeded()
const {密码} = hamibot.env;
const {phonelock} = hamibot.env;
const {姓名} = hamibot.env;
var arr = 密码.split("-")
var pwd = []


for (var i = 0; i < arr.length; i++) {
    var temp = arr[i].split(",")
    var x = Number(temp[0])
    var y = Number(temp[1])
    var dot = []
    dot[0] = x
    dot[1] = y
    pwd.push(dot)
}//解析坐标构造解锁坐标数组

sleep(2000)
gesture(100, [300, 1600], [300, 500])//唤醒设备后上滑进入解锁界面
sleep(800)
gesture(1500, pwd)//滑动解锁屏幕
launchApp("校园集结号")
while (true) {
    var ca = currentActivity()
    if (ca != "com.zjelite.antlinkercampus.home.MainActivity") {
        toast("启动...")
        sleep(1000)
    } else {
        break
    }
}
toast("启动成功")

while (true) {
    var widght = className("android.widget.RelativeLayout").depth(14).findOne();

    click(widght.bounds().centerX(), widght.bounds().centerY());
    var pa = textContains("平安").findOne(2000)
    if (pa == null) {
        back()
        sleep(1000)
        var con = id("com.zjelite.antlinkercampus:id/cab_homeTop").findOne()
        gesture(100, [con.bounds().centerX() + 300, con.bounds().centerY()], [con.bounds().centerX() + 20, con.bounds().centerY()])
        sleep(1000)
        //滑动切换banner
    } else {
        break
    }
}
sleep(800)
var us = text("我要报平安").findOne()
var list = className("android.widget.ListView").findOnce(0)
var a = list.child(1)
a.click()
sleep(1000)
var tag = false//判断是否上报平安
text("已上报学生").findOne().parent().parent().children()
    .forEach(function (child) {
        var self = child.findOne(textContains(姓名))
        if (self != null) {
            tag = true//找到本人则上报成功
            text("x").findOne().click()
            return;
        }
    });//重已上报名单里查找本人
if(!tag){
  text("x").findOne().click()
  
}
while (!tag) {//没有上报则继续下边的操作
    us.click()
    var w = text("确定").findOne(600);
    //如果找到控件则点击
    if (w != null) {
        sleep(500)
        toast("定位成功")
        console.hide()
        sleep(500)
        click(500, 1150);
        swipe(90, 1758, 120, 1758, 500)
        w.click();
        break
    } else {
        toast("定位中...")
    }
    sleep(1000)
}
console.show()
console.log(姓名 + "今日已上报平安")