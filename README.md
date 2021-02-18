# 校园集结号自动报平安
Hamibot自动化脚本，支持息屏解锁，定时，自定义夜间上报，你只管碎觉，上报交给脚本

## 配置
  1. 解锁手势
     解锁手势即手机息屏状态，点亮后打开图形锁的手势，例如Redmi k30 utral 需要上滑进入图形解锁界面，有的手机也有可能是右划，左滑。选择相应的选项即可
  2. 图形密码
     九宫格解锁密码，需要打开手机的开发者模式->指针位置，在解锁界面记录解锁点位轨迹坐标
     ![](https://github.com/cnsource/Auto-upinfo/blob/main/readme.pic/%E4%B9%9D%E5%AE%AB%E6%A0%BC%E9%94%81.png)
      
      将坐标按顺序整理成如下格式填入脚本配置中

      200,300-400,600-400,900-600,600

      (x坐标,y坐标)-(x坐标,y坐标)
 ![](https://github.com/cnsource/Auto-upinfo/blob/main/readme.pic/config.png)
  3. 上报人

     用来判断是否已经上报，不搜集个人隐私
  6. 自动上报

     在Hamibot中安装[自动报平安脚本](https://hamibot.com/marketplace/4wuKb)，配置[定时任务](https://hamibot.com/dashboard/tasks)
  8. 邮件反馈

     平安上报后会将上报结果发送给用户邮箱(没做)