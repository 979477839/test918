Page({

onLoad: function(options) {
  wx.request({
    url: 'http://localhost:3000/list/'+options.id,
    data: '',
    header: {"content-type":'application/json'},
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: (res)=> {
       this.setData({
         address: res.data.address,
         type:res.data.type,
         desc:res.data.desc,
         contant:res.data.contant

       })

   
    },
   
  })
}
 
})