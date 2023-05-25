<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class PostController extends Controller
{
    public function create (){
        return view('post.create');
    }

    public function store (Request $request){

        //validate
        //store DB
        $student = Student::create($request->all());

        //redirect to
        return back();
    }

    public function index (){
        $all_students = Student::all();
        return view('post.index', ['students' => $all_students]);
    }

    //binding
    public function edit (Request $request, $id){

        return view('post.edit', ['student' => Student::find($id)]);

    }

    public function update (Request $request, $id){

        //validation

        //update
        $student = Student::find($id);
        $student->name = $request->name;
        $student->age = $request->age;
        $student->save();
        if($student->save()){
            return redirect()->route('students.index');
        }
    }

    public function destroy (Request $request, $id){

        Student::find($id)->delete();

        // return redirect()->route('students.index');;
        return redirect()->action([self::class, 'index']);;
    }


}
