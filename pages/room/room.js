let user = require('../../data/user-list.js');
let cardList = require('../../data/card-list.js');
// pages/index/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    userList: [],
    cardList: [],
    currentCard: [],
    isShowOpenBtn: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userList: user.UserList,
      cardList: cardList.card
    });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { },
  /**handleUserItemTap
   * 点击用户位置
   */
  handleUserItemTap: function (item) {
    console.log(item, 'item');
  },
  /**handleUserItemTap
   * 点击用户位置
   */
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**handleUserItemTap
   * 点击准备按钮
   */
  handleReadyBtnClick() {
    let animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
      delay: 0
    });
    animation.opacity(0).step()
    this.setData({
      readyAni: animation.export()
    })
    const arr = new Array(3).fill(1);
    const ary = [];
    arr.forEach(t => {
      let card = Math.floor(Math.random() * this.data.cardList.length);
      let currentCard = this.data.cardList[card];
      ary.push(currentCard);
    });
    this.setData({
      currentCard: ary
    });
    let cardAnimation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
      delay: 0
    });
    cardAnimation.opacity(1).translate(-65, -10).step();
    this.setData({
      cardAni: cardAnimation.export(),
      isShowOpenBtn: true
    })
  },
  /**handleUserItemTap
   * 点击开牌
   */
  handleOpenCard() {
    let cardBackAnimation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
      delay: 0
    });
    let cardFaceAnimation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
      delay: 0
    });
    cardBackAnimation.rotateY(180).step();
    cardFaceAnimation.rotateY(0).step();
    this.setData({
      cardBackAni: cardBackAnimation.export(),
      cardFaceAni: cardFaceAnimation.export()
    });
  }
})