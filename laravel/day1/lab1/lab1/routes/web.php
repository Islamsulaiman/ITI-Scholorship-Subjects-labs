<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route ::get('/students/create', 'App\Http\Controllers\PostController@create')->name('students.create');
Route ::get('/students', 'App\Http\Controllers\PostController@index')->name('students.index');
Route ::post('/students', 'App\Http\Controllers\PostController@store');
Route ::get('/students/{id}/edit', 'App\Http\Controllers\PostController@edit')->name('students.edit');
Route ::put('/students/{id}', 'App\Http\Controllers\PostController@update')->name('students.update');
Route ::delete('/students/{id}', 'App\Http\Controllers\PostController@destroy')->name('students.delete');


Route :: get('download', function(){
    //how to download file from server upon hitting specific url
    return response()->download(public_path('info.txt'));
});

// Route :: get('about', 'AboutController');



Route::prefix('contacts')->group(function () {

    //change if not the same funtcitnality
    Route::match(['get', 'post'],'/', function(){
        if(request()->isMethod('GET'))
            return '<h1>List of Contacts Page</h1>';
        else if(request()->isMethod('POST'))
            return '<h1>Create a contact</h1>';
    });


    Route::get('/{id}/{name?}', function ($id, $name = null) {
        $details = 'Details page of contact #' . $id;
        if ($name) {
            $details .= ' named ' . $name;
        }
        return $details;
    })->where(['id' => '[0-9]+', 'name' => '[a-zA-Z]+']);


    Route::get('/create', function () {
        return 'This is the create form for a new contact';
    });


    Route::get('/{id}/edit', function ($id) {
        return 'This is the edit form for contact #' . $id;
    });

    Route::match(['put', 'delete'], '/{id}', function ($id) {
        if(request()->isMethod('put'))
            return 'Contact #' . $id . ' updated successfully';
        else
            return 'Contact #' . $id . ' deleted successfully';
    });
});

