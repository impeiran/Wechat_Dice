//index.js
//获取应用实例
const app = getApp()

Page({
  global:{
    timer:null,
    Rand: true
  },
  data:{
    dice: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'],
    btnValue:'Go',
    btnType:'primary',
    num0:0,
    num1:1,
    num2:2,
    num3:3,
    num4:4,
  },
  shake:function(){
    var x = 0,
        y = 0,
        z = 0;
    var temp = 0;
    var myAudio = wx.createAudioContext('mA');
    myAudio.setSrc('http://gddx.sc.chinaz.com/files/download/sound1/201207/1683.mp3');
    myAudio.play();
    var me = this;
    if(this.global.Rand){
      this.global.Rand = !this.global.Rand;
      this.setData({
        dice:this.data.dice,
        btnValue:'Shake your phone!',
        btnType:'change'
      });
      wx.onAccelerometerChange(function(res){
        
        var flag = Math.abs(x + y + z - res.x - res.y - res.z) * 100;
            let num0 = Math.floor(Math.random() * 6);
            let num1 = Math.floor(Math.random() * 6);
            let num2 = Math.floor(Math.random() * 6);
            let num3 = Math.floor(Math.random() * 6);
            let num4 = Math.floor(Math.random() * 6);


            me.setData({
              num0: num0,
              num1: num1,
              num2: num2,
              num3: num3,
              num4: num4
            });       
          if(flag>200){
            wx.stopAccelerometer();
            wx.vibrateLong();
            me.global.Rand = true;          
            me.setData({
              btnValue: 'Go',
              btnType: 'primary'
            });
          }
      });
    }
  } 
})
