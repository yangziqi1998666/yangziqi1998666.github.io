fetch('data.json', {
    method: 'GET',
    mode: 'cors', // 允许发送跨域请求
    credentials: 'include'
 }).then(function (response) {
    //打印返回的json数据
    response.json().then(function (data) {
       console.log(data.section2);
    })
 }).catch(function (e) {
    console.log('error: ' + e.toString());
 })