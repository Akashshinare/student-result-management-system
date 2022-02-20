const data = [
    {
        name: "AKASH SHINARE",
        regno: "101",
        DATA_STRUCTURES:"65",
        OBJECT_ORIENTED_PROGRAMMING:"55",
        PYTHON_PROGRAMMING: "75",
        JAVA_PROGRAMMING: "65"
    },
    {
        name: "SIDDHESH KOKATE",
        regno: "102",
        DATA_STRUCTURES:"75",
        OBJECT_ORIENTED_PROGRAMMING:"75",
        PYTHON_PROGRAMMING: "65",
        JAVA_PROGRAMMING: "85"
    },
    {
        name: "NIKHIL POKALE",
        regno: "103",
        DATA_STRUCTURES:"71.66",
        OBJECT_ORIENTED_PROGRAMMING:"55",
        PYTHON_PROGRAMMING: "85",
        JAVA_PROGRAMMING: "75"




    },
    {
        name: "SIDDHARTH SHETE",
        regno: "104",
        DATA_STRUCTURES:"71",
        OBJECT_ORIENTED_PROGRAMMING:"50",
        PYTHON_PROGRAMMING: "75",
        JAVA_PROGRAMMING: "65"




    }
]




const results = document.getElementById('res')




const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function() {
    const name = document.getElementById('name-box').value;
    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase() == name.toLowerCase()){
            console.log(data[i].marks)
            results.innerHTML ="<h3>" + "  DATA_STRUCTURES : " + data[i].  DATA_STRUCTURES +"</h3>" + "<h3>" + "OBJECT_ORIENTED_PROGRAMMING : " 
            + data[i].OBJECT_ORIENTED_PROGRAMMING +"</h3>" +"<h3>" + "PYTHON_PROGRAMMING : " + data[i].PYTHON_PROGRAMMING +"</h3>"+
            "JAVA_PROGRAMMING : " +data[i].JAVA_PROGRAMMING + "</h3>"
            return;
        }
    }
    results.innerHTML = "<h1>" + "Not available" + "</h1>" 




})