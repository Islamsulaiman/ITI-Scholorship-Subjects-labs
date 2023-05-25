@extends('layouts.app')

@section('title')
    Edit student
@endsection

@section('content')
    
{!! Form::model($student, ['route' => ['students.update', $student], 'method' =>'put']) !!}
    

        <div class="form-group">
            <label for="exampleFormControlInput1" class="form-lable">IDno</label>
            {!! Form::text('idno', null, ['class' => 'form-control'])  !!}
        </div>
 
        <div class="form-group"> 
            <label for="exampleFormControlInput1" class="form-lable">Name</label>
            {!! Form::text('name', null, ['class' => 'form-control'])  !!}
        </div>

        <div class="form-group">
            <label for="exampleFormControlInput1" class="form-lable">Age</label>
            {!! Form::number('age', 'value');  !!}
        </div>

        {!! Form::submit('Update', ['class'=>'btn btn-success btn-block']) !!}
        

{!! Form::close() !!}


@endsection