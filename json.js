// var data = JSON.parse('{"name":"Nouman","gender":"male","age":23,"university_info": ["Chongqing University","graduation"]}');
// var dis_data = document.querySelector("h2");
// dis_data.innerHTML = data.name;
// dis_data.innerHTML += " "+data.university_info;

//data is in js format
// console.log(data);

//let me convert the js into string format. 
// var string_data = JSON.stringify(data);
// console.log(string_data);

//we can convert the array into string format 
// var numbers = [12,32,324,2,32,2,2];
// var s_data = JSON.stringify(numbers);
// // console.log(typeof(s_data));

// var updated_data = '{"data":"value"}';
// console.log(typeof(JSON.parse(updated_data)));


//date is not allowed in json, you can convert into string 
// var updated_data = '{"key":"value","date":"1990 Jan 14"}';
// var date = JSON.parse(updated_data);
// var date1 = new Date(date.date);
// // new Date(JSON.parse(updated_data.date));
// // console.log(typeof(date));
// console.log(date1);

//function is not allowed in json, so you've to type into string but it is not recommended
// var u_data = '{"value":"function(){return 10;}"}';
// var data = JSON.parse(u_data);
// console.log(data.value);


//we can convert the date objecct into string too. 
// var data = {date: new Date()};
// var st_data  = JSON.stringify(data);
// console.log(st_data);

//we can convert some function, into string too but during execution it will be omitted
// var data = {date: function(){console.log("done")}};
// console.log(JSON.stringify(data));

// var data = {
//     "key":"value",
//     "name": "Google"
// };

// for(x in data){
//     // console.log(x); //will display key andn name
//     console.log(data[x]); //would display value
// }

//modify the value in json object and can also do nesting 
// var data = {"key":"value",
//     "info":{"name":"Nouman","age":23}};

//     data.info.name= "Nouman Ahmad";
//     console.log(data.info.name);

//delete the object
// delete data.info.age; 

// //array in json
// var data = [
//     {"key":"value",
//     "key1":{"k1":"v1",
//     "k2":"v2",
//     "k3":[{"k1":[12,322]}]
//     }}];

// // console.log(data[0].key1["k3"][0].k1);

// //or we can use for loop
// for (i in data){
//     console.log(data[i])
// }

// //can modify the value 
// data[0].key = "value12";
// console.log(data[0].key);

// //can delete the value 
// delete data[0].key;
// console.log(data[0].key);

// var h2  = '{"style:background=":"green", "style: color=":"white","content":"updated json"}';
// var js_data = JSON.parse(h2);
// document.querySelector("h2").innerHTML = js_data.content;
// document.querySelector("h2").style.backgroundColor = js_data['style:background='];
// document.querySelector("h2").style.color = js_data['style: color='];


var data = [
    {"key":"value","key1":"value"},
    {"key":"v1","key1":"v2"},
    {"key":"g1","key1":"g2"}
];

for(key in data){
    for (index in data[key]){
        // console.log(data[key][index]); //in for loop we can't access data using object.key we have to use object[key]
    }
}

//in direct access case, its all upto us either we use object.key or object[key]
console.log(data[0]["key"]);
console.log(data[0].key1);