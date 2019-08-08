import http from "utils/http.js"

export const move_api=(cityId=300)=>
http("get","/lvyou/lvyou/market/temaiList?project=dj",{cityId:cityId})


export const move_api2=(cityId=80)=>
http("get","/lvyou/lvyou/market/temaiList?project=dj",{cityId:cityId})


export const move_api3 = ()=>http("get","/api/cityList")

