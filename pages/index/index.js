   var app = getApp();
  Page ({
        data:{
          markers:[],
          controls: [{
            id: 1,
            iconPath: '/resources/pin.png',
            position: {
              left:(app.globalData.windowWidth-30)/2,
              top:(app.globalData.windowHeight-30)/2-35,
              width: 30,
              height:30
            },
            clickable: false
          },
          {
            id: 2,
            iconPath: '/resources/center.png',
            position: {
              left:30,
              top: app.globalData.windowHeight-80,
              width: 30,
              height: 30
            },
            clickable: true
          }]
        },
    controltap(){
      this.mapCtx.moveToLocation()
    },
    onReady: function (e) {
     
      this.mapCtx = wx.createMapContext('map')
    },
   onShow(){
     wx.getLocation({
       type: 'gcj02',
       altitude: true,
       success: (res)=>{
          this.setData({
            longitude: res.longitude,
            latitude: res.latitude
          })
       }
     })
       wx.request({
         url: 'http://localhost:3000/list',
         header: {"content-type":'application/json'},
         method: 'GET',
         success: (res)=>{
           let markers = res.data.map((item) => {
             return {
               iconPath: "/resources/" + item.type + ".png",
               id: item.id,
               latitude: item.latitude,
               longitude: item.longitude,
               width: 30,
               height: 30
             }
           })
           this.setData({
             markers: markers
           })
         },
         
       })
   },
    onShareAppMessage: function (res) {
     
      return {
        title: '杨凡尘',
        path: '/pages/index/index'
      }
    },
    go() {
      wx.navigateTo({
        url: '/pages/puls/puls'

      })
    },
    markertap(e){
      wx.navigateTo({
        url: '/pages/detail/detail?id='+e.markerId

       
      })
    },
    search(){
      wx.navigateTo({
        url: '/pages/search/search',
        
      })
    }

})
