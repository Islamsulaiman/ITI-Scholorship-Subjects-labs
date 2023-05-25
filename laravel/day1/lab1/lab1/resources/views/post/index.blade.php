@extends('layouts.app')

@section('title')
    Students
@endsection

@section('content')
    
  <table class="table table-hover table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">IDno</th>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Author</th>
        <th scope="col">Update</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
      @foreach ($students as $student)
        <tr>
          <th scope="row">{{$student->id}}</th>
          <td>{{$student->IDno}}</td>
          <td>{{$student->name}}</td>
          <td>{{$student->age}}</td>
          <td>{{\App\Models\User::find($student->track_id)->name}}</td>
          <td>
            <a class="btn btn-primary" href="{{ route('students.edit', $student->id) }}">Update</a>
          </td>
          <td>
            <!-- <a class="btn btn-danger" href="">Delete</a> -->
            <form action="{{ route('students.delete', $student->id) }}" method="post">
              @method('delete')
              @csrf
              <button type="submit" class="btn btn-danger">Delete</button>
            </form>


          </td>
        </tr>
        @endforeach

    </tbody>
  </table>


@endsection