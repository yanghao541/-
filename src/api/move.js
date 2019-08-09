import http from "utils/http.js"

export const move_api=(cityId=300)=>
http("get","/lvyou/lvyou/market/temaiList?project=dj",{cityId:cityId})


export const move_api2=(cityId=80)=>
http("get","/lvyou/lvyou/market/temaiList?project=dj",{cityId:cityId})


export const move_api3 = ()=>http("get","/api/cityList")

export const home_api = ()=>
http("get","/lvyou/AjaxHelper/GetDestinationList.ashx?startcity=53&categoryid=6&startcityname=%E5%8C%97%E4%BA%AC")

export const move_api4=(ProductNo=376544)=>
http("get","/lvyou/dujia/detail/schedule",{ProductNo:ProductNo},"&Version=A")


export const seach = (cityId,kw)=>http("get","/api/searchList",{cityId:cityId,kw:kw})

// https://m.ly.com/dujia/fetch/comment?productId=1083058&labId=1&page=1&dimension=0&t=1565339629612
// https://m.ly.com/dujia/fetch/comment?productId=376544&labId=1&page=1&dimension=0&t=1565340669074
// https://m.ly.com/dujia/detail/schedule?ProductNo=376544&Version=A