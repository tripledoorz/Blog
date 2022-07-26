
/**
 *  reduce函数
 */

// 计数 重复次数
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var countNames = names.reduce(function (allNames, name) {
	if (name in allNames) {
		allNames[name]++;
	} else {
		allNames[name] = 1;
	}
	return allNames;
}, {});
console.log(countNames);

// table父子数据结构 解析
let res = { "success": true, "errorCode": null, "errorMessage": null, "exception": null, "requestId": null, "elapsedMilliseconds": null, "data": [{ "id": 51, "appName": "阿米游", "appCode": "amyapp", "appType": 1, "appKey": "", "isStop": 0, "isWarning": 1, "warningUp": 300, "warningDown": -90, "notification": "[{\"userId\":null,\"userName\":\"\",\"userRealName\":\"\",\"oaUid\":\"\",\"oaUserName\":\"\",\"oaRealName\":\"\",\"phone\":\"\",\"email\":\"\",\"channels\":[]}]", "sort": 1, "productName": "手机助手项目", "productCode": "PJSJZS", "perAppName": "阿米游", "perPackageName": "com.market.amy", "perAppCode": "AMYAPP", "createTime": "2021-11-15 09:21:49", "updateTime": "2021-11-15 09:21:59" }, { "id": 45, "appName": "天天天气iOS", "appCode": "weatherday_ios", "appType": 2, "appKey": "", "isStop": 0, "isWarning": 1, "warningUp": 300, "warningDown": -90, "notification": "[{\"userId\":809,\"userName\":\"chencx\",\"userRealName\":\"陈昌鑫\",\"oaUid\":\"7906\",\"oaUserName\":\"chencx\",\"oaRealName\":\"\",\"phone\":null,\"email\":\"chencx@2345.com\",\"channels\":[1,2]}]", "sort": 1, "productName": "天气项目", "productCode": "PJTQW", "perAppName": "天天天气(IOS)", "perPackageName": "com.dailyweather.weather", "perAppCode": "WEATHERDAY_IOS", "createTime": "2021-01-19 16:07:13", "updateTime": "2021-03-29 15:41:40" }, { "id": 39, "appName": "吉日天气iOS", "appCode": "weathercyhl_ios", "appType": 2, "appKey": "", "isStop": 0, "isWarning": 1, "warningUp": 300, "warningDown": -90, "notification": "[{\"userId\":809,\"userName\":\"chencx\",\"userRealName\":\"陈昌鑫\",\"oaUid\":\"7906\",\"oaUserName\":\"chencx\",\"oaRealName\":\"\",\"phone\":null,\"email\":\"chencx@2345.com\",\"channels\":[1,2]}]", "sort": 1, "productName": "天气项目", "productCode": "PJTQW", "perAppName": "吉日天气-ios", "perPackageName": "com.huangli.weathercy", "perAppCode": "JRTQIOSAPP", "createTime": "2020-11-30 11:49:38", "updateTime": "2021-03-29 15:38:44" }, { "id": 34, "appName": "天天天气", "appCode": "weatherday", "appType": 1, "appKey": "", "isStop": 0, "isWarning": 0, "warningUp": 300, "warningDown": -90, "notification": "[{\"userId\":809,\"userName\":\"chencx\",\"userRealName\":\"陈昌鑫\",\"oaUid\":\"7906\",\"oaUserName\":\"chencx\",\"oaRealName\":\"\",\"phone\":null,\"email\":\"chencx@2345.com\",\"channels\":[1,2]}]", "sort": 1, "productName": "天气项目", "productCode": "PJTQW", "perAppName": "天天天气", "perPackageName": "com.weatherday", "perAppCode": "TTTQAPP", "createTime": "2020-10-30 10:41:06", "updateTime": "2020-10-30 10:41:06" }, { "id": 33, "appName": "吉日天气", "appCode": "weathercyhl", "appType": 1, "appKey": "", "isStop": 0, "isWarning": 0, "warningUp": 300, "warningDown": -90, "notification": "[{\"userId\":809,\"userName\":\"chencx\",\"userRealName\":\"陈昌鑫\",\"oaUid\":\"7906\",\"oaUserName\":\"chencx\",\"oaRealName\":\"\",\"phone\":null,\"email\":\"chencx@2345.com\",\"channels\":[1,2]}]", "sort": 1, "productName": "天气项目", "productCode": "PJTQW", "perAppName": "吉日天气", "perPackageName": "com.weathercyhl", "perAppCode": "HLTQAPP", "createTime": "2020-10-21 10:14:27", "updateTime": "2020-10-22 13:27:28" }, { "id": 31, "appName": "开心天气", "appCode": "tqyb", "appType": 1, "appKey": "", "isStop": 0, "isWarning": 0, "warningUp": 300, "warningDown": -90, "notification": "[{\"userId\":809,\"userName\":\"chencx\",\"userRealName\":\"陈昌鑫\",\"oaUid\":\"7906\",\"oaUserName\":\"chencx\",\"oaRealName\":\"\",\"phone\":null,\"email\":\"chencx@2345.com\",\"channels\":[1,2]}]", "sort": 1, "productName": "天气项目", "productCode": "PJTQW", "perAppName": "开心天气", "perPackageName": "com.weatherfz2345", "perAppCode": "7tianqi", "createTime": "2020-09-27 16:19:25", "updateTime": "2021-02-03 11:26:59" }, { "id": 28, "appName": "天气王iOS", "appCode": "tianqiwang_ios", "appType": 2, "appKey": "", "isStop": 0, "isWarning": 0, "warningUp": 300, "warningDown": -90, "notification": "[{\"userId\":809,\"userName\":\"chencx\",\"userRealName\":\"陈昌鑫\",\"oaUid\":\"7906\",\"oaUserName\":\"chencx\",\"oaRealName\":\"\",\"phone\":null,\"email\":\"chencx@2345.com\",\"channels\":[1,2]}]", "sort": 1, "productName": "天气项目", "productCode": "PJTQW", "perAppName": "天气王（IOS）", "perPackageName": "com.2345.KingWeather", "perAppCode": "TQIOS", "createTime": "2020-02-24 17:50:45", "updateTime": "2021-03-29 15:42:51" }, { "id": 11, "appName": "天气王", "appCode": "tianqiwang", "appType": 1, "appKey": "fd0101bb6503742185fcf1f3cc2980b7", "isStop": 0, "isWarning": 0, "warningUp": 300, "warningDown": -90, "notification": "[{\"userId\":809,\"userName\":\"chencx\",\"userRealName\":\"陈昌鑫\",\"oaUid\":\"7906\",\"oaUserName\":\"chencx\",\"oaRealName\":\"\",\"phone\":null,\"email\":\"chencx@2345.com\",\"channels\":[1,2]}]", "sort": 8, "productName": "天气项目", "productCode": "PJTQW", "perAppName": "天气安卓主版", "perPackageName": "com.tianqi2345", "perAppCode": "TQZZZB", "createTime": "2014-07-10 10:33:59", "updateTime": "2020-12-15 14:30:45" }] }
var data = res.data;
var inputData = data.reduce((total, {productCode, id, appName,productName,appCode}) => {
	let resItem = total.find((item) => item.value === productCode );
    if (resItem) {
        resItem.children=[...resItem.children,{
            id: id,
            label: appName,
            value: productCode,
        }]
	} else {
        resItem = {
			id: id,
			label: productName,
			value: productCode,
			children: [
				{
					id: id,
					label: appName,
					value: appCode,
				},
			],
        };
        total.push(resItem)
	}
	return total;
}, []);
console.log(inputData);


// 二维数组转一维
var flattened = [[0, 1], [2, 3], [4, 5]]
var flatArr = flattened.reduce((arr, current) => {
    // return [...arr,...current]
    return arr.concat(current)

}, [])
console.log(flatArr); 


//  按照属性分类
let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];
 
var objPeple = function (people,property) { 
    return people.reduce((obj, current) => {
        var key = current[property]
        // if (key in obj) {
        //     obj[key].push(current)
        // } else { 
        //     obj[key] = [current]
        // }
        
        // 优化
        if (!obj[key]) obj[key] = []
        obj[key].push(current)
        return obj
    }, {}) 
}
console.log(objPeple([
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
], 'age'))
  