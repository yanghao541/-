import http from "utils/http.js"

export const move_api=(cityId=300)=>
http("get","/lvyou/lvyou/market/temaiList?project=dj",{cityId:cityId})


export const move_api2=(cityId=80)=>
http("get","/lvyou/lvyou/market/temaiList?project=dj",{cityId:cityId})


export const move_api3 = ()=>http("get","/api/cityList")

export const home_api = ()=>
http("get","/lvyou/AjaxHelper/GetDestinationList.ashx?startcity=53&categoryid=6&startcityname=%E5%8C%97%E4%BA%AC")
