data =  [
    {
      "id": 7,
      "name": "Job2",
      "parentId": 6,
      "chainJob": "WUPVMXKCRYRUVNR",
      "index": 1,
      "external": false,
      "children": null
    },
    {
      "id": 8,
      "name": "Job3",
      "parentId": 7,
      "chainJob": "QNGGVKICRDNUFAD",
      "index": 2,
      "external": false,
      "children": null
    },
    {
      "id": 10,
      "name": "Job6",
      "parentId": 8,
      "chainJob": "OCYUAHUJBCADYYD",
      "index": 3,
      "external": false,
      "children": null
    },
    {
      "id": 9,
      "name": "Job4",
      "parentId": 6,
      "chainJob": "WWFLTFYNTEBVHYQ",
      "index": 1,
      "external": false,
      "children": null
    },
    {
        "id": 10,
        "name": "Job6",
        "parentId": 9,
        "chainJob": "OCYUAHUJBCADYYD",
        "index": 2,
        "external": false,
        "children": null
    },
    {
        "id": 6,
        "name": "Job1",
        "parentId": 0,
        "chainJob": "ONDCDVOZHRAVACO",
        "index": 1,
        "external": false,
        "children": null
    }
]

document.getElementById('listItem1').textContent = data[5].name + ' | ' + data[5].chainJob;
document.getElementById('listItem2').textContent = data[0].name + ' | ' + data[0].chainJob;
document.getElementById('listItem3').textContent = data[3].name + ' | ' + data[3].chainJob;
document.getElementById('listItem4').textContent = data[1].name + ' | ' + data[1].chainJob;
document.getElementById('listItem5').textContent = data[4].name + ' | ' + data[4].chainJob;
document.getElementById('listItem6').textContent = data[4].name + ' | ' + data[4].chainJob;


    
    
  