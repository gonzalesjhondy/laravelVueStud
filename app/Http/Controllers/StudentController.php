<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    //

    public function index(){

        return view('student.view');
    }

    public function create(){

        $data = [
            'scope' => 'create'
        ];

        return view('student.form')->with($data);
    }
    
    public function store(Request $req){
        $student = new Student;

        $student->name = $req->name;
        $student->class = $req->class;
        $student->section = $req->section;
        $student->email = $req->email;
        $student->status = 1;
        $student->save();

        return response()->json([
            'status' =>200,
            'message' =>'student saved successfully!',
        ]);
    }

    public function fetchStudentData(){
        $student =  Student::all();

        return $student;
    }
}
