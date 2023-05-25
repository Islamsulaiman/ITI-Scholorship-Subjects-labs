@extends('layouts.app')

@section('title')
    create post
@endsection

@section('content')
    
{!! Form::open(['url' => 'students' , 'method' =>'post']) !!}
    

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

        {!! Form::submit('Add', ['class'=>'btn btn-success btn-block']) !!}
        

{!! Form::close() !!}


@endsection