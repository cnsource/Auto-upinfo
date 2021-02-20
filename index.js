auto.waitFor();
device.wakeUpIfNeeded()
var dwc = device.width/2;
var dhc = device.height/2;
var dw = device.width;
var dh = device.height;
const {gest} = hamibot.env;

sleep(2000)
if(gest=="up"){
   toast("上滑解锁")
   gesture(100, [dwc, dh/10*9], [dwc, dh/10])
}
if(gest=="down"){
   gesture(100, [dwc, dh/10], [dwc, dh/10*9])
}
if(gest=="right"){
   gesture(100, [dw/8, dhc], [dw/8*7, dhc])
}
if(gest=="left"){
   gesture(100, [dw/8*7, dhc], [dw/8, dhc])
}//唤醒设备后上滑进入解锁界面

//滑动解锁屏幕
const {phonelock} = hamibot.env;
if(phonelock=="a"){
  const {密码} = hamibot.env;
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
  sleep(800)
  gesture(1500, pwd)
}
console.show()
console.log("启动校园集结号")
launchApp("校园集结号")

while(true){
  if(id("com.zjelite.antlinkercampus:id/iv_adContent").findOne(200)!=null){
    id("com.zjelite.antlinkercampus:id/iv_closePopup").findOne().click() 
    break
  }else{
    if(text("校园").findOne(800)!=null) {
      break
    } else {
      print(".")
    }
  }
  sleep(500)
}
console.log("启动成功")
sleep(800)
console.hide()
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
var v = text("已上报").findOne();
var peop = v.parent().parent().child(1).child(1)
peop.click()
sleep(1000)
var tag = false//判断是否上报平安
text("已上报学生").findOne().parent().parent().children()
    .forEach(function (child) {
        var self = child.findOne(textContains(姓名))
        if (self != null) {
            tag = true//找到本人则上报成功
            return;
        }
    });//重已上报名单里查找本人
if(!tag){
  console.show()
  text("x").findOne().click()
  sleep(500)
  while(text("确定").findOne(1000)==null){
       console.log("定位...")
       text("我要报平安").findOne().click()
  }
  sleep(1000)
  function tiwen(){
    console.show()
    console.log("选择口号")
    var kh = text("当天实测体温").findOne().parent().child(1)
    kh.click()
    sleep(1000)
    var seekbar = text("slider between 0 and 100").findOne().bounds()
    console.log("滑动体温")
    const end = seekbar.right/10+seekbar.left
    const start = seekbar.left
    const cen = seekbar.centerY()
    console.log(start+"-"+cen+"-"+end)
    swipe(start,cen,end,cen,300) 
    text("确定").findOne().click()
    console.log("上报成功")
    sleep(1000)
    var v = text("已上报").findOne();
    var peop = v.parent().parent().child(1).child(1)
    peop.click()
  }
    console.hide()
    engines.execScript("tiwen", "tiwen();\n" + tiwen.toString());

}

console.show()
console.log(姓名 + "今日已上报平安")