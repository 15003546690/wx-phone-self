// pages/zx/zx.js
var categoryData=require("../../data/classiFication.js")
Page({
  data:{
    currentIndex:0
  },
  pud:function(e){
    console.log(e)
    var img=e.currentTarget.dataset.img,
        text=e.currentTarget.dataset.text;
        wx.navigateTo({
          url:'../news/news?img='+img+'&text='+text
        })
  },
  onLoad:function(options){
    //console.log(options)
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
        categoryData:categoryData.default.data
    })
  },
  onAside:function(options){
    //console.log(options)
    //下标
    var index=options.currentTarget.dataset.index;
    console.log(index)
    this.setData({
        currentIndex:index
    });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})