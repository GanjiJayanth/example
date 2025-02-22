const express = require('express')
var app = express();

let students = [
    { id: 101, name: 'Alice ' },
    { id: 102, name: 'Bob ' },
    { id: 103, name: 'Jane ' }
]

app.listen(2000, () => {
    console.log('Server started')
})


app.get("/students", (req, res) => {
    if (students.length > 0) {
        res.status(200).json({
            "message": "Students found",
            "students": students
        });
    } else {
        res.status(404).json({ "message": "No students found" })
    }
})


app.get("/students/:id", (req, res) => {
    const id = parseInt(req.params.id)
    let student = students.find(s => s.id === id)

    if (student) {
        res.status(200).json({
            "message": "Student found",
            "student": student
        })
    } else {
        res.status(404).json({ "message": "No student found" });
    }
})


app.delete("/deleteStudent/:id", (req, res) => {
    const id = parseInt(req.params.id)
    students = students.filter(s => s.id !== id)

    res.status(200).json({
        "message": "Student deleted",
        "students": students
    })
})


app.use(express.json())
app.post("/addstudent",(req,res)=>{
    let student=req.body
    students.push(student)
    res.status(200).json({
        "message": "Student added",
        "student": student
    })
})


app.put("/updateStudent/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    index=students.findIndex(s=>s.id==id)

    if(index!=-1){
        students[index].id=req.body.id
        students[index].name=req.body.name
        res.status(200).json({
            "message": "Student updated",
            "student": students
        })
    }
    else{
        res.status(404).json({ "message": "No student found" });
    }
})

