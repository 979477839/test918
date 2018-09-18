// pages/puls/puls.js
Page({
     data: {
        address:'点击选择，要勾选',

  },
        obj:{
           type:"sell"
        },
    
  selAddress(){
    wx.chooseLocation({
      success: (res)=> {
        this.setData({
          address:res.address
        })
        Object.assign(this.obj,{
          address:res.address,
          longitude:res.longitude,
          latitude:res.latitude
        
        })
      }
      
    })
  },
  typeChange(e){
   this.obj.type=e.detail.value;
  },
  desc(e){
    this.obj.desc = e.detail.value;
  },
  lianxi(e){
    this.obj.contant = e.detail.value;
  },
  save(){
    wx.request({
      url: 'http://localhost:3000/list',
      data: this.obj,
      header: {'content-type':'application/json'},
      method: 'POST',
      
      success: (res)=> {
           this.setData({
              suc:true
           })
      }
     
    })
  },
  go(){
    wx.navigateBack({
      delta: 1,
    })
  }
})