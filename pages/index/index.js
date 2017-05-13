var app = getApp()
Page( {
  onShareAppMessage: function () {
    return {
      title: '快把帅超分享给你的朋友吧',
      path: '/page/user?id=123',
      success: function(res) {
        // 分享成功
      },
      fail: function(res) {
        // 分享失败
      }
    }
  },
  data: {
    imgUrls: [
      'https://m.360buyimg.com/mobilecms/s720x322_jfs/t5047/55/1037153378/224853/6a23df83/58ec53d9N6c21708c.jpg!q70.jpg',
      'https://img1.360buyimg.com/da/jfs/t4783/171/280173974/67361/d821e7d3/58de2d17N2747032e.jpg',
      'https://img1.360buyimg.com/da/jfs/t5005/210/1101202078/96005/511b696b/58eca38eN686c041a.jpg',
      'https://m.360buyimg.com/mobilecms/s720x322_jfs/t5056/28/1233616393/72169/bb1adbf2/58eed7e5Nc4698c8d.jpg!q70.jpg',
      'https://img1.360buyimg.com/da/jfs/t4804/258/977737855/99644/57b86015/58eb4b7fN276ac4a4.jpg',
      'https://m.360buyimg.com/mobilecms/s720x322_jfs/t4927/43/978096918/95454/82b77c8/58eb59b8N686e9eda.jpg!q70.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    windowWidth: 320,
    sortPanelTop: '0',
    sortPanelDist: '290',
    sortPanelPos: 'relative',
    noticeIdx: 0,
   
    "goodsList": [
      {
        "goods": {
          "buyUnit": 10,
          "desc": "唯一的不同，是处处不同",
          "id": 1093,
          "imgUrl": "../../images/1.jpg",
          "name": "【预售】Apple iPhone6s Plus 128G 颜色随机",
          "tag": "ten"
        },
        "period": 211116272,
        "takeRate":0.01,
        "takeChances": 70,
        "totalChances": 8090
      },
      {
        "goods": {
          "buyUnit": 1,
          "desc": "颜色随机",
          "id": 348,
          "imgUrl":  "../../images/2.jpg",
          "name": "Apple Watch Sport 38毫米 铝金属表壳 运动表带",
          "tag": ""
        },
        "period": 211116207,
        "takeRate":0.19,
        "takeChances": 632,
        "totalChances": 3288
      },
      {
        "goods": {
          "buyUnit": 1,
          "desc": "配备 Retina 显示器",
          "id": 510,
          "imgUrl":  "../../images/3.jpg",
          "name": "Apple MacBook Pro 15.4英寸笔记本",
          "tag": ""
        },
        "period": 211116244,
        "takeRate":0.26,
        "takeChances": 3760,
        "totalChances": 14288
      },
      {
        "goods": {
          "buyUnit": 10,
          "desc": "超长续航 智能防盗",
          "id": 1168,
          "imgUrl":  "../../images/4.jpg",
          "name": "【预售】小牛电动N1电动踏板车 动力版 约11月20日发货",
          "tag": "ten"
        },
        "period": 211116256,
        "takeRate":0.05,
        "takeChances": 300,
        "totalChances": 5990
      },
      {
        "goods": {
          "buyUnit": 1,
          "desc": "因工艺原因重量略有浮动",
          "id": 979,
          "imgUrl":  "../../images/1.jpg",
          "name": "周生生 黄金 足金旋转木马吊坠",
          "tag": ""
        },
        "period": 211116138,
        "takeRate":0.17,
        "takeChances": 514,
        "totalChances": 2999
      },
      {
        "goods": {
          "buyUnit": 10,
          "desc": "颜色随机 支持专柜验货",
          "id": 673,
          "imgUrl":  "../../images/2.jpg",
          "name": "Coach 蔻驰 抛光粒面皮革铆钉COACH CENTRAL手提包",
          "tag": "ten"
        },
        "period": 211115685,
        "takeRate":0.13,
        "takeChances": 630,
        "totalChances": 4950
      },
      {
        "goods": {
          "buyUnit": 10,
          "desc": "颜色随机 美式奢侈生活风格的代表",
          "id": 943,
          "imgUrl":  "../../images/3.jpg",
          "name": "MICHAEL KORS 迈克高仕 十字纹皮革钱包",
          "tag": "ten"
        },
        "period": 211114592,
        "takeRate":0.45,
        "takeChances": 680,
        "totalChances": 1500
      },
      {
        "goods": {
          "buyUnit": 1,
          "desc": "吴晓波酿吴酒 一半清醒一半醉",
          "id": 1095,
          "imgUrl":  "../../images/4.jpg",
          "name": "【预售】吴酒 2016年贺年年酒 圣诞节开始派送",
          "tag": ""
        },
        "period": 211116226,
        "takeRate":0.04,
        "takeChances": 7,
        "totalChances": 199
      },
      {
        "goods": {
          "buyUnit": 10,
          "desc": "珍贵绝伦",
          "id": 140,
          "imgUrl":  "../../images/1.jpg",
          "name": "中国黄金 AU9999万足金50g薄片",
          "tag": "ten"
        },
        "period": 211116228,
        "takeRate":0.95,
        "takeChances": 14200,
        "totalChances": 14990
      }, {
      "goods": {
        "buyUnit": 10,
        "desc": "唯一的不同，是处处不同",
        "id": 1093,
        "imgUrl":  "../../images/2.jpg",
        "name": "【预售】Apple iPhone6s Plus 128G 颜色随机",
        "tag": "ten"
      },
      "period": 211116272,
      "takeRate":0.01,
      "takeChances": 70,
      "totalChances": 8090
    }
    ],
    animationNotice: {}
  },
  onReady: function() {

  },
  onLoad: function() {
    var me = this;
    var animation = wx.createAnimation( {
      duration: 400,
      timingFunction: 'ease-out',
    });
    me.animation = animation;
    wx.getSystemInfo( {
      success: function( res ) {
        me.setData( { windowWidth: res.windowWidth })
      }
    });

    console.log( 'onLoad' );
  },
  startNotice: function() {
    var me = this;
    var notices = me.data.notices || [];
    if( notices.length == 0 ) {
      return;
    }

    var animation = me.animation;
    //animation.translateY( -12 ).opacity( 0 ).step();
    animation.translateY( 0 ).opacity( 1 ).step( { duration: 0 });
    me.setData( { animationNotice: animation.export() });

    var noticeIdx = me.data.noticeIdx + 1;
    if( noticeIdx == notices.length ) {
      noticeIdx = 0;
    }

    // 更换数据
    setTimeout( function() {
      me.setData( {
        noticeIdx: noticeIdx
      });
    }, 400 );

    // 启动下一次动画
    setTimeout( function() {
      me.startNotice();
    }, 5000 );
  },
  onShow: function() {
    this.startNotice();

  },
  onToTop: function( e ) {
    if( e.detail.scrollTop >= 290 ) {
      this.setData( { sortPanelPos: 'fixed' });
    } else {
      this.setData( { sortPanelPos: 'relative' });
    }
    console.log( e.detail.scrollTop )
  }
})
