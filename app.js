// npm --version
// loacal dependency - used in a particula project

//npm i <package>
// gloabal dependency - used in any given project
// npm install -g <packageName>

//package.json - manifest files(storage of important info)
// mannual approach (create package.json in the root)
// npm init 
//npm init -y(everything default)

const _=require('lodash');

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items);
console.log(newItems);
