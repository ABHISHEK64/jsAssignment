var operatingSystem=[{id:'1',name:'Linux',version:'18.4',license:'Opensource'},{id:'2',name:'Linux Ubunto',version:'20.04',license:'opensource'},{id:'3',name:'Window Xp',version:'21.4',license:'proprietary'},{id:' 4',name:'Window 10',version:'11.4',license:'proprietary'},{id:' 5',name:'Window Xp',version:'21.4',license:'proprietary'},{id:' 6',name:'Window 7',version:'12.4',license:'proprietary'},{id:' 7',name:'Window 8',version:'13.4',license:'proprietary'}];
var transformedData = { };

operatingSystem.forEach(function(entry){

    if(entry.parent !== undefined && entry.parent in transformedData) {
       transformedData[entry.parent].children.push(entry);
    } else {
        entry["children"] = [];
        transformedData[entry.id] = entry;
    }
});

console.log(transformedData);